import './styles/Style.css';

// import { BsFillEnvelopeOpenFill, BsPhone} from "react-icons/bs"
// import {FaLinkedin, FaGithub} from 'react-icons/fa'

function Footer() {
    return (
      <footer id="footer">
      <div class="container">
      {/* <div class="social-links">
          <a target='_blank' rel="noreferrer" href="tel:919-223-8501" class="phoneNumber"><BsPhone /></a>
          <a target='_blank' rel="noreferrer" href="mailto:n.valdovinos74@gmail.com" class="email"><BsFillEnvelopeOpenFill /></a>
          <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/naomi-valdovinos-0185bb191/"class="linkedin"><FaLinkedin /></a>
          <a target='_blank' rel="noreferrer" href="https://github.com/Nvaldovinos" class="gitHub"><FaGithub/></a>
        </div> */}
        <div class="copyright">
          &copy; Copyright <strong><span>Naomi Valdovinos</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
    );
  }

  export default Footer;