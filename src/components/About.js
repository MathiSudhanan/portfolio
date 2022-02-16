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
          <p className='about-content'>
            Hello! I am MathiSudhanan. I have been developing web applications
            for over 15 years. I create prototypes, responsive websites that are
            displayed on all devices desktops and smartphones. I design and
            implement product from scratch.
          </p>
        </div>
      </div>
      <div className='row tech-stack-row'>
        <div className='col-12 text-center tech-stack'>
          <h1>Technology Stack</h1>
        </div>
      </div>
      <div className='row tech-stack-row'>
        <div className='col-6 text-right tech-stack-item-header'>
          <h3>Web Technologies:</h3>
        </div>
        <div className='col-6 tech-stack-content'>
          <div className='row'>
            <div className='col-12'>HTML</div>
            <div className='col-12'>CSS (Flexbox and Grid)</div>
            <div className='col-12'>Javascript</div>
            <div className='col-12'>TypeScript</div>
            <div className='col-12'>
              React V 17 (With Bootstrap Or Material UI)
            </div>
            <div className='col-12'>Redux for State Management</div>
            <div className='col-12'>D3.js for Graphical Representation</div>
            <div className='col-12'>Asp.Net Web Forms</div>
            <div className='col-12'>Asp.Net MVC</div>
            <div className='col-12'>
              Web API with .Net Framework and .Net Core
            </div>
            <div className='col-12'>Swagger documentation for Web API</div>
          </div>
        </div>
      </div>
      <div className='row tech-stack-row'>
        <div className='col-6 text-right tech-stack-item-header'>
          <h3>Windows Service:</h3>
        </div>
        <div className='col-6 tech-stack-content'>
          <div className='row'>
            <div className='col-12'>Topshelf</div>
            <div className='col-12'>Multi-threading</div>
            <div className='col-12'>Parallel Programming</div>
          </div>
        </div>
      </div>
      <div className='row tech-stack-row'>
        <div className='col-6 text-right tech-stack-item-header'>
          <h3>Database:</h3>
        </div>
        <div className='col-6 tech-stack-content'>
          <div className='row'>
            <div className='col-12'>SQL Server</div>
            <div className='col-12'>Oracle</div>
            <div className='col-12'>PostGreSQL</div>
            <div className='col-12'>Redis</div>
          </div>
        </div>
      </div>
      <div className='row tech-stack-row'>
        <div className='col-6 text-right tech-stack-item-header'>
          <h3>ORM:</h3>
        </div>
        <div className='col-6 tech-stack-content'>
          <div className='row'>
            <div className='col-12'>Entity Framework</div>
            <div className='col-12'>Dapper</div>
          </div>
        </div>
      </div>
      <div className='row tech-stack-row'>
        <div className='col-6 text-right tech-stack-item-header'>
          <h3>Message Queue:</h3>
        </div>
        <div className='col-6 tech-stack-content'>
          <div className='row'>
            <div className='col-12'>Rabbit MQ</div>
            <div className='col-12'>Dapper</div>
          </div>
        </div>
      </div>
      <div className='row tech-stack-row'>
        <div className='col-6 text-right tech-stack-item-header'>
          <h3>Testing:</h3>
        </div>
        <div className='col-6 tech-stack-content'>
          <div className='row'>
            <div className='col-12'>Microsoft Testing Framework</div>
            <div className='col-12'>NUnit</div>
            <div className='col-12'>MOQ</div>
          </div>
        </div>
      </div>
      <div className='row tech-stack-row'>
        <div className='col-6 text-right tech-stack-item-header'>
          <h3>Design Patterns:</h3>
        </div>
        <div className='col-6 tech-stack-content'>
          <div className='row'>
            <div className='col-12'>Factory</div>
            <div className='col-12'>Abstract Factory</div>
            <div className='col-12'>Singleton</div>
            <div className='col-12'>Visitor</div>
            <div className='col-12'>Facade</div>
            <div className='col-12'>Strategy</div>
            <div className='col-12'>Repository</div>
            <div className='col-12'>Unit Of Work</div>
            <div className='col-12'>
              Aspect Oriented Pragramming (using interceptors in Dependency
              injection Library)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
