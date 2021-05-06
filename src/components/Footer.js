import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { scroller } from "react-scroll";

const Footer = () => {
  const scrollTo = (elementId) => {
    scroller.scrollTo(elementId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div id='footer' className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='d-flex'>
              <p>N.G.Ramasamy Nagar, Vellalore(po), Coimbatore - 641111</p>
            </div>
            <div className='d-flex'>
              <a href='tel:9629581508'>+91 9629581508</a>
            </div>
            <div className='d-flex'>
              <p>mathi_mca@hotmail.com</p>
            </div>
          </div>

          <div className='col-lg-3 col-md-2 col-sm-6'>
            <div className='row'>
              <div className='col'>
                <a
                  href='#'
                  className='footer-nav'
                  onClick={() => scrollTo("home")}
                >
                  Home
                </a>
                <br />
                <a
                  href='#'
                  className='footer-nav'
                  onClick={() => scrollTo("about")}
                >
                  About me
                </a>
                <br />

                <a
                  href='#'
                  className='footer-nav'
                  onClick={() => scrollTo("services")}
                >
                  Services
                </a>
              </div>
              <div className='col'>
                <a
                  href='#'
                  className='footer-nav'
                  onClick={() => scrollTo("experience")}
                >
                  Experience
                </a>
                <br />

                <a
                  href='#'
                  className='footer-nav'
                  onClick={() => scrollTo("portfolio")}
                >
                  Portfolio
                </a>
                <br />

                <a
                  href='#'
                  className='footer-nav'
                  onClick={() => scrollTo("contacts")}
                >
                  Contacts
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
            <div className='d-flex justify-content-center'>
              <FacebookShareButton
                url={"https://www.youtube.com/channel/UC8YIiXAu7EqP6ylpYJnni3w"}
                quote={"FullStack Developer"}
                hashtag='#Javascript'
              >
                <FacebookIcon className='mx-3' size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.youtube.com/channel/UC8YIiXAu7EqP6ylpYJnni3w"}
                quote={"FullStack Developer"}
                hashtag='#Javascript'
              >
                <TwitterIcon className='mx-3' size={36} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={"https://www.youtube.com/channel/UC8YIiXAu7EqP6ylpYJnni3w"}
                quote={"FullStack Developer"}
                hashtag='#Javascript'
              >
                <LinkedinIcon className='mx-3' size={36} />
              </LinkedinShareButton>
              <WhatsappShareButton
                url={"https://www.youtube.com/channel/UC8YIiXAu7EqP6ylpYJnni3w"}
                quote={"FullStack Developer"}
                hashtag='#Javascript'
              >
                <WhatsappIcon className='mx-3' size={36} />
              </WhatsappShareButton>
            </div>
            <p className='pt-3 text-center'>
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Mathi | AllrightsReserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
