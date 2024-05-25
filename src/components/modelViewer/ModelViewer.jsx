import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Line2 } from 'three/examples/jsm/lines/Line2';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';

const parseGltf = (gltf) => {
  const graph = { nodes: [], edges: [] };
  const proximityThreshold = 0.25;

  gltf.scene.traverse((node) => {
    if (node.isMesh) {
      const position = new THREE.Vector3();
      node.getWorldPosition(position);

      let isClose = false;
      for (const existingNode of graph.nodes) {
        if (position.distanceTo(existingNode.position) < proximityThreshold) {
          isClose = true;
          break;
        }
      }

      if (!isClose) {
        graph.nodes.push({
          id: node.uuid,
          position: position.clone(),
        });
      }
    }
  });
  console.log(graph.nodes.length);

  for (let i = 0; i < graph.nodes.length - 1; i+1) {
    for (let j = 0; j < 2; j+1) {
      const k = Math.floor(((Math.random()) * 10000) % (graph.nodes.length));
      graph.edges.push({
        i,
        j: k,
        start: graph.nodes[i].position,
        end: graph.nodes[k].position,
      });
    }
  }

  return graph;
};

const pathfinder = (graph) => {
  const { nodes } = graph;
  const { edges } = graph;
  const nodeCount = nodes.length;
  console.log(nodeCount);
  const adjacencyMatrix = Array(nodeCount).fill().map(() => Array(nodeCount).fill(Infinity));
  for (const edge of edges) {
    const { i } = edge;
    const { j } = edge;
    const distance = nodes[i].position.distanceTo(nodes[j].position);
    adjacencyMatrix[i][j] = distance;
    adjacencyMatrix[j][i] = distance;
  }

  const dijkstra = (start, end) => {
    const distances = Array(nodeCount).fill(Infinity);
    const previous = Array(nodeCount).fill(null);
    const visited = Array(nodeCount).fill(false);
    console.log(distances);
    console.log(previous);
    console.log(visited);
    distances[start] = 0;

    for (let i = 0; i < nodeCount; i+1) {
      let u = -1;
      for (let j = 0; j < nodeCount; j++) {
        if (!visited[j] && (u === -1 || distances[j] < distances[u])) {
          u = j;
        }
      }
      if (distances[u] === Infinity) break;
      visited[u] = true;
      for (let v = 0; v < nodeCount; v++) {
        if (!visited[v] && adjacencyMatrix[u][v] !== Infinity) {
          const alt = distances[u] + adjacencyMatrix[u][v];
          if (alt < distances[v]) {
            distances[v] = alt;
            previous[v] = u;
          }
        }
      }
    }
    console.log(distances);
    console.log(previous);
    console.log(visited);
    let end_ = start;
    for (let k = nodeCount - 1; k > 0; k--) {
      if (visited[k] === true) {
        end_ = k;
        break;
      }
    }
    const path = [];
    for (let at = end_; at !== null; at = previous[at]) {
      path.push(at);
    }
    path.reverse();
    return path;
  };

  const startNode = 5;
  const endNode = nodeCount - 1;
  const shortestPath = dijkstra(startNode, endNode);
  return shortestPath;
};

const ModelViewer = () => {
  const [graph, setGraph] = useState(null);
  const [model, setModel] = useState(null);
  const [path, setPath] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      '/airplane/scene.gltf',
      (gltf) => {
        const graph_ = parseGltf(gltf);
        setGraph(graph_);
        const path_ = pathfinder(graph_);
        setPath(path_);

        gltf.scene.traverse((node) => {
          if (node.isMesh) {
            node.material = new THREE.MeshLambertMaterial({
              color: 0xffffff,
              transparent: true,
              opacity: 0.5,
            });
          }
        });

        setModel(gltf.scene);
      },
    );
  }, []);

  useEffect(() => {
    if (graph && model) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5).normalize();
      scene.add(directionalLight);

      scene.add(model);

      for (const node of graph.nodes) {
        const geometry = new THREE.SphereGeometry(0.02, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.copy(node.position);
        scene.add(sphere);
      }

      for (const edge of graph.edges) {
        const geometry = new THREE.BufferGeometry().setFromPoints([edge.start, edge.end]);
        const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
        const line = new THREE.Line(geometry, material);
        scene.add(line);
      }

      for (let i = 0; i < path.length - 1; i++) {
        const start = graph.nodes[path[i]].position;
        const end = graph.nodes[path[i + 1]].position;

        const positions = [];
        positions.push(start.x, start.y, start.z);
        positions.push(end.x, end.y, end.z);

        const lineGeometry = new LineGeometry();
        lineGeometry.setPositions(positions);

        const lineMaterial = new LineMaterial({
          color: 0xff0000,
          linewidth: 0.005,
        });

        const line = new Line2(lineGeometry, lineMaterial);
        scene.add(line);
      }

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };

      animate();
    }
  }, [graph, model]);

  return null;
};

export default ModelViewer;
