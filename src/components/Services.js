import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft, faAws } from "@fortawesome/free-brands-svg-icons";

import {
  faDesktop,
  faCode,
  faCoins,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id='services' className='services'>
      <h1 className='py-5'>my services</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3  col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faDesktop} size='2x' />
              </div>
              <h3>Web Design</h3>
              <p>
                I approach each project individually and always focus on the
                result.
              </p>
            </div>
          </div>
          <div className='col-lg-3  col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faCode} size='2x' />
              </div>

              <h3>Web Development</h3>
              <p>Your website will be built with proven technologies.</p>
            </div>
          </div>
          <div className='col-lg-3  col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faCogs} size='2x' />
              </div>
              <h3>Rest API Development</h3>
              <p>
                Your API will be built with proven technologies with high
                security.
              </p>
            </div>
          </div>
          <div className='col-lg-3  col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faCoins} size='2x' />
              </div>
              <h3>Database Design</h3>
              <p>
                Your data will be stored with proven technologies with high
                security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
