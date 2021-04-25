import React from "react";

const Experience = () => {
  return (
    <div id='experience' className='experience'>
      <div className='d-flex justify-content-center my-5'>
        <h1>experience</h1>
      </div>
      <div className='container experience-wrapper'>
        <div className='timeline-block timeline-block-right'>
          <div className='marker'> </div>
          <div className='timeline-content'>
            <h3>May 2015 - Present</h3>
            <p>Senior Application Architect at Payoda Technologies.</p>
            <h5>Role : </h5>{" "}
            <p>
              Creating application from scratch to end, architecting the
              application writing core frameworks for different layers.
            </p>
            <h5>Projects: </h5>{" "}
            <p>
              Worked on web api such as Permission API And Asynchronous API to
              handle long running endpoints. Created Async Service with
              topshelf, Rabbit MQ, Redis Cache, SQL Server etc. Worked on UI
              projects such as Chevron which uses knockout.js and Permission UI
              in Angular.js.
            </p>
          </div>
        </div>
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>Jan 2014 - May 2015</h3>
            <p>Development Specialist at SunGard.</p>
            <h5>Role : </h5>{" "}
            <p>
              Creating modules from scratch to end, architecting the application
              writing core frameworks for different layers.
            </p>
            <h5>Projects: </h5>{" "}
            <p>
              Worked on projects Ambit asset Finance. Created Web Application
              with MVC 4, JQuery, Knockout.js, Bootstrap, Ado.Net, SQL Server,
              Oracle etc.
            </p>
          </div>
        </div>
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>May 2013 - Dec 2013</h3>
            <p>Principal Consultant at Cibersites India.</p>
            <h5>Role : </h5>{" "}
            <p>
              Creating modules from scratch to end, architecting the application
              writing core frameworks for different layers.
            </p>
            <h5>Projects: </h5>{" "}
            <p>
              Worked on project Retail Transaction Processing. Created Web
              Application with MVC 4, JQuery, Ado.Net, Oracle etc.
            </p>
          </div>
        </div>
        <div className='timeline-block timeline-block-left'>
          <div className='marker'> </div>
          <div className='timeline-content'>
            <h3>Feb 2007 - May 2013</h3>
            <p>Module Lead at Odessa Solutions Pvt Ltd.</p>
            <h5>Role : </h5>{" "}
            <p>
              Creating modules from scratch to end, architecting the application
              writing core frameworks for different layers.
            </p>
            <h5>Projects: </h5>{" "}
            <p>
              Worked on project LeaseWave with different versions. Created Web
              Application with MVC 4, JQuery, Entity Framework, SQL Server etc.
            </p>
          </div>
        </div>
        <div className='timeline-block timeline-block-right'>
          <div className='marker'> </div>
          <div className='timeline-content'>
            <h3>April 2005 - Jan 2007</h3>
            <p>Software Engineer at FabGreen Tchnologies.</p>
            <h5>Role : </h5>{" "}
            <p>
              Creating modules from scratch to end, architecting the application
              writing core frameworks for different layers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
