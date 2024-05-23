import React from 'react';
import './ContactUs.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactForm = () => (
  <div className="contactBody">
    <section className="contact-form">
      <h1 className="gradient__text">Get In Touch with us. Explore Airbus Worldwide Facilities</h1>
      <div className="contactForm">
        <form action="#">
          <h1 className="sub-heading">Join us in our journey</h1>
          <p className="para">Contact us and we will be happy to answer your questions.</p>
          <input type="text" className="inputform" placeholder="Name" />
          <input type="text" className="inputform" placeholder="Email" />
          <input type="number" className="inputform" placeholder="Phone number" />
          <textarea className="inputform" cols="30" rows="5" placeholder="Your message" />
          <input type="submit" className="inputSubmit" value="Send Message" />
        </form>

        <div className="map-container">
          <div className="mapBg" />
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914410252845!2d2.291906375932066!3d48.85837360070842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2set!4v1695627657575!5m2!1sen!2set" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map" />
          </div>
        </div>
      </div>

      <div className="contactMethod">
        <div className="method">
          <article className="text">
            <h1 className="sub-heading">Location</h1>
            <i className="fa-solid fa-location-dot contactIcon" />

            <p className="para">Airbus Group India Private Limited,5th Floor, West Wing, Worldmark – 1 Aerocity New Delhi – 110037 - India</p>
          </article>
        </div>

        <div className="method">
          <article className="text">
            <h1 className="sub-heading">Email</h1>
            <i className="fa-solid fa-envelope contactIcon" />
            <p className="para">info@airbus.com.</p>
          </article>
        </div>

        <div className="method">
          <article className="text">
            <h1 className="sub-heading">Phone</h1>
            <i className="fa-solid fa-phone contactIcon" />
            <p className="para">+91 11 45 801 100</p>
          </article>
        </div>
      </div>
    </section>
  </div>
);

export default ContactForm;
