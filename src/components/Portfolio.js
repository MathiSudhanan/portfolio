import React from "react";
import budmonreact from "../Budget-monitor-react.png";
import budmonAPI from "../Budget-monitor-API.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxContainer, PopupboxManager } from "react-popupbox";
import "../../node_modules/react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  const openPopupBudMonAPI = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={budmonAPI}
          alt='Budget monitor API'
        />
        <p>
          Budget Monitor API: Tech Stack (C#, .Net Core 3.2, PostGress, Swagger)
        </p>
        <b />
        GitHub:{" "}
        <a
          className='hyper-link'
          onClick={() =>
            window.open(
              "https://github.com/MathiSudhanan/modern-reac-app.git",
              "_blank"
            )
          }
        >
          https://github.com/MathiSudhanan/modern-reac-app.git
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Budget Monitor API",
        },
      },
    });
  };
  const PopupboxConfigBudMonAPI = {
    titleBar: {
      enable: true,
      text: "Budget Monitor API",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupBudMonReact = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={budmonreact}
          alt='Budget monitor React and Bootstrap'
        />
        <p>
          Budget Monitor UI: Tech Stack (React, Redux and Axios for connecting
          to Rest API created with .net core and Bootstrap)
        </p>
        {/* <p>
          This project is created to maintain a simple budget monitor for house
          hold purpose. This has a login screen to authenticate the user. It has
          module to add user, modify the user details, change the password. This
          also has module to add the transaction which may be an income or
          expense, show the list of all transactions from the begining, show
          list of transactions base on the month selected, show list of
          transactions between a date range which will be selected in the
          calender control. It will show the opening balance, Total Income,
          Total Expence and current balance in a bar.
        </p> */}
        <b />
        GitHub:{" "}
        <a
          className='hyper-link'
          onClick={() =>
            window.open(
              "https://github.com/MathiSudhanan/modern-reac-app.git",
              "_blank"
            )
          }
        >
          https://github.com/MathiSudhanan/modern-reac-app.git
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Budget Monitor React and Bootstrap",
        },
      },
    });
  };

  const PopupboxConfigBudMonReact = {
    titleBar: {
      enable: true,
      text: "Budget Monitor React",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
        <div className='image-box-wrapper row justify-content-center'>
          <div className='portfolio-image-box' onClick={openPopupBudMonReact}>
            <img
              src={budmonreact}
              alt='Portfolio project...'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>

          <div className='portfolio-image-box' onClick={openPopupBudMonAPI}>
            <img
              src={budmonAPI}
              alt='Portfolio project...'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>

          {/* <div className='portfolio-image-box'>
            <img
              src={budmonAPI}
              alt='Portfolio project...'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>

          <div className='portfolio-image-box'>
            <img
              src={budmonAPI}
              alt='Portfolio project...'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div> */}
        </div>
      </div>

      <PopupboxContainer {...PopupboxConfigBudMonReact} />
    </div>
  );
};

export default Portfolio;
