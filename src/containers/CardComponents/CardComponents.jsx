/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import './CardComponents.css';
import planeModel1 from '../../assets/planeModel1.jpeg';
import planeModel2 from '../../assets/planeModel2.jpeg';
import planeModel3 from '../../assets/planeModel3.jpeg';
import planeModel4 from '../../assets/planeModel4.jpeg';
import planeModel5 from '../../assets/planeModel5.jpeg';
import planeModel6 from '../../assets/planeModel6.jpeg';

function CardComponents() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="container">
      <div>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="card">
              <div className="images-container">
                <img src={d.img} alt="" className="avatar" />
              </div>
              <div className="content">
                <button
                  type="button"
                  className="read-more-btn"
                  rel="noopener noreferrer"
                >
                  <a href={d.url} target="_blank" rel="noreferrer">Explore</a>
                </button>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  );
}

const data = [
  {
    img: planeModel1,
    url: 'https://airplane-model-1.netlify.app/',
  },
  {
    img: planeModel2,
    url: 'https://airplane-model-2.netlify.app/',
  },
  {
    img: planeModel3,
    url: 'https://airplane-model-3.netlify.app/',
  },
  {
    img: planeModel4,
    url: 'https://airplane-model-4.netlify.app/',
  },
  {
    img: planeModel5,
    url: 'https://airplane-model-5.netlify.app/',
  },
  {
    img: planeModel6,
    url: 'https://airplane-model-6.netlify.app/',
  },
];

export default CardComponents;
