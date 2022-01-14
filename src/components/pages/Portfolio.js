import '../styles/Style.css';
import zeal from '../../img/portfolio/ZEAL.jpg'
import ECU from '../../img/portfolio/ECUWIT.PNG'
import gastronomy from '../../img/portfolio/gastronomy.png'
import book from '../../img/portfolio/book.jpg'
import generator from '../../img/portfolio/generator.png'
import schedule from '../../img/portfolio/schedule.jpg'
import { FaGithub, FaLink } from 'react-icons/fa';



function Portfolio() {
  return (
    <section id="portfolio" class="portfolio section-bg">
      <div class="container">
        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Click on the images below to see a sample of some of my most recent projects. You will find an option to
            explore and read more about each project and a link to navigate to the live website. </p>
        </div>

        <div class="row portfolio-container">

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={zeal} class="img-fluid" alt="Photographer: John Schnobrich"></img>
              <div class="portfolio-info">
                <h4>ZEAL</h4>
                <p>React / Node.js / MongoDB / GraphQL</p>
                <a target='_blank' rel="noreferrer" href="https://zeal3.herokuapp.com/"><FaLink /></a><a target='_blank' rel="noreferrer" href="https://github.com/snk923/ZEAL"><FaGithub /></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={ECU} class="img-fluid" alt="Photographer: Boxed Water"></img>
              <div class="portfolio-info">
                <h4>ECU WIT</h4>
                <p>HTML / CSS / JavaScript / BoootStrap</p>
                <a target='_blank' rel="noreferrer" href="https://nvaldovinos.github.io/ECU-WIT/"><FaLink /></a><a target='_blank' rel="noreferrer" href="https://github.com/Nvaldovinos/ECU-WIT"><FaGithub /></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={gastronomy} class="img-fluid" alt="Photographer: Cooker King"></img>
              <div class="portfolio-info">
                <h4>Globalstranomy</h4>
                <p>JavaScript / REST APIs</p>
                <a target='_blank' rel="noreferrer" href="https://tmaxey201.github.io/Recipe-with-translator/index.html"><FaLink /></a><a target='_blank' rel="noreferrer" href="https://github.com/Tmaxey201/Recipe-with-translator"><FaGithub /></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={book} class="img-fluid" alt="Photographer: Henruk Donnestad"></img>
              <div class="portfolio-info">
                <h4>Follow the Reader</h4>
                <p>BoootStrap /JavaScript / APIs / MySQL</p>
                <a target='_blank' rel="noreferrer" href="https://follow-the-reader.herokuapp.com/"><FaLink /></a><a target='_blank' rel="noreferrer" href="https://github.com/AnneliseRowan/project-2"><FaGithub /></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={generator} class="img-fluid"
                alt="Photographer: Charles Deluvio"></img>
              <div class="portfolio-info">
                <h4>ReadMe generator</h4>
                <p>JavaScript</p>
                <a target='_blank' rel="noreferrer" href="https://github.com/Nvaldovinos/README-Genetrator-"><FaLink /></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={schedule} class="img-fluid"
                alt="Photographer: Emma Matthews Digital Content"></img>
              <div class="portfolio-info">
                <h4>Workday Scheduler</h4>
                <p>JavaScript</p>
                <a target='_blank' rel="noreferrer" href="https://nvaldovinos.github.io/Work-Day-Scheduler/"><FaLink /></a><a target='_blank' rel="noreferrer" href="https://github.com/Nvaldovinos/Work-Day-Scheduler/"><FaGithub /></a>
              </div>
            </div>
          </div>

          {/* <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={trivia} class="img-fluid" alt="Trivia Game Photographer Emma Matthews Digital Content"></img>
              <div class="portfolio-info">
                <h4>Trivia Challenge</h4>
                <p>JavaScript</p>
                <a target='_blank' rel="noreferrer" href="https://snk923.github.io/homework4_code_quiz/"><FaLink /></a><a target='_blank' rel="noreferrer" href="https://github.com/snk923/homework4_code_quiz"><FaGithub /></a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
