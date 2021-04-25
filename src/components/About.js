import React from "react";
import author from "../me.jpg";

const About = () => {
  return (
    <div id='about' className='container py-5'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap mb-5'>
            <img className='profile-img' src={author} alt='author...' />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <h1 className='about-heading'>about me</h1>
          <p>
            Hello! I am MathiSudhanan. I have been developing web applications
            for over 14 years. I'm Full-Stack Web Developer. Technologies I use
            is .net, React, Sql Server, Postgress, NodeJs, Web API. I create
            responsive websites, prototypes that are displayed on all devices
            desktops and smartphones. I design and implement product from
            scratch. My tech stack include Rabbit MQ, Redis, Akka.net,
            Multi-threading and parallel programming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
