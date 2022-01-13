import '../styles/Style.css';


function About() {
  return (
    <section class="about">
      <div class="container">
        <div class="row ">
          <div id="me-img" class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          <div class="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div class="content d-flex flex-column justify-content-center">
              <div class="section-title">
                <h2>About Me</h2>
                <p>
                Full stack web developer and U.S Airforce Veteran, pursuing a computer science degree with a concentration in business through University of Mount Olive.
                  <br></br><br></br>
                  Recently earned a certificate in full stack development from UNC Chapel Hill coding bootcamp, with newly developed skills in JavaScript, CSS, React.js and responsive web design. Known as an innovative problem solver, with a focus in developing web apps.
                  <br></br><br></br>
                  Adept in working independently as well as collaborating with teams across multiple functions. Fluent in English and Spanish.
                </p>
              </div>
              <div class="section-title" id="skills">
                <div class="resume-section-content">
                  <h2>Technical Skills</h2>
                  <div class="subheading mb-3">Programming Languages:</div>
                      <ul>
                        <li>Java</li>
                        <li>Java Script</li>
                        <li>CSS</li>
                        <li>HTML5</li>
                        <li>React.js</li>
                      </ul>
                  <div class="subheading mb-3">Databases:</div>
                  <ul>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                  </ul>
                  <div class="subheading mb-3">Other:</div>
                  <ul>
                    <li>GitHub</li>
                    <li>Heroku</li>
                    <li>Power Apps</li>
                    <li>Power Automate</li>
                    <li>SharePoint</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
