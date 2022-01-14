import '../styles/Style.css';
import resume from '../../img/docs/Naomi-Resume.pdf';

function Resume() {
  return (
    <section id="resume" class="resume section-bg">
      <div class="container">

        <div class="section-title">

          <h2>Resume <a target='_blank' rel="noreferrer" href={resume} download="Naomi-Resume.pdf"><i class="fa fa-download"></i>
          </a></h2>
        </div>
        <div class="col-lg-6">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>Computer Technology Assistant</h4>
            <h5>April 2021 - December 2021</h5>
            <p><em>East Carolina University, Greenville NC</em></p>
            <ul>
            <li>Assist CET technical services personnel by working on custom designs | Developed applications for CET personnel through Power Apps, and Power Automate to reduce workload and increase organization. </li>
            <li>Website creation, designing custom reports, SQL reports, SharePoint design, workflows, big data modeling. | Developed CET SharePoint site to assist file sharing among faculty in order to increase efficiency.</li>
            <li>Provide mentoring and schedule coordination to students enrolled as interns to the technical services group | Hosted workshops with ECU WIT club and ECU ACM club to inform students about Microsoft applications. </li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>Supply Technician GS07</h4>
            <h5>2017 - Present</h5>
            <p><em>Seymour Johnson AF, Goldsboro NC </em></p>
              <ul>
                <li>Evaluate and Inspect supply management documents and supplies in the 916-supply squadron.</li>
                <li>Inspects and evaluates Due in From Maintenance (DIFM) from other squadrons. </li>
                <li>Position as a subject matter expert to the commander on the operation of material management systems and operations such as the Logistics, Installations and Mission Support (LIMS-EV). </li>
                <li>Managed the repair cycle listing using the Enterprise Supply Solution (ESS), ensuring return of damaged items returned to supply for repair and distribution into United States Air Force global supply. </li>
                <li>Track and maintain the shelf-life serviceability and status of Chemical Defense Equipment items, notified users when items had expired or were unserviceable through the Mobility Inventory Accountability System (MICAS).</li>
              </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>Coding: Full Stack Web Development Certificate</h4>
            <h5>2021</h5>
            <p><em>University of North Carolina at Chapel Hill</em></p>
            <p> A rigorous curriculum that ensured proficiency in: HTML5, CSS3, JavaScript, jQuery, Express.js, React.js,
              Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, Git,
              and more.</p>
          </div>
          <div class="resume-item">
            <h4>Bachelor of Arts in Computer Science: Buisness Concentration</h4>
            <h5>Persuing</h5>
            <p><em>University of Mount Olive, Mount Olive, NC</em></p>
            <p>The Bachelor of Art  in Computer Science: Business Concentration, provides a degree path for students who want to combine Computer Science with an in-depth focus on a Business Administration. 
              The Computer Science program offers students an interdisciplinary degree which forms a solid foundation for a secure career path. 
              This program serves our students in developing industry skills while building a foundation of business content and knowledge.  
              Graduates are prepared to design software to solve real-world problems, learn to analyze data, develop software applications, and work on small or large complex systems.</p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Resume;