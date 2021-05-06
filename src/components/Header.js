import React from "react";
import Typed from "react-typed";

import { scroller } from "react-scroll";

const Header = () => {
  const scrollTo = () => {
    scroller.scrollTo("contacts", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50,
    });
  };
  return (
    <div id='home' className='header-wraper'>
      <div className='main-info'>
        <h1>Web and Rest API development</h1>
        <Typed
          className='typed-text'
          strings={[
            "Web Design",
            "Web Development",
            "API Development",
            "Architecture Design",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />

        <a href='#' className='btn-main-offer' onClick={() => scrollTo()}>
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
