// import profilePic from "../assets/profile_pic.jpg";
import ImgSlider from "../components/imgSlider";
import "../css/about.css";
function About() {
  return (
    <>
      <div className="container">
        <div className="left">
          <ImgSlider />
        </div>
        <div className="right">
          <h1>About Me</h1>
          <p>
            Hello my name <strong>is Edgar Alcover Jr.</strong>, a passioanate
            Software Developer based in <strong>Cebu, Philippines</strong>.
            <br /> I mainly work on{" "}
            <strong> web and software development</strong> and has experience in
            working on both Frontend and
            <br /> Backend Developments of a system using{" "}
            <strong>PHP, React, .NET, SQL, Mongodb, etc. </strong>
          </p>
          <h2>My Journey</h2>
          <p>
            I began my career in <strong>2022</strong> as a{" "}
            <strong>Software Developer Intern</strong> at{" "}
            <strong>Talleco JobTarget Philippines</strong> and was
            <br /> later on absorbed as a{" "}
            <strong>Junior Software Developer.</strong>
          </p>
          <h3> Responsibilities in my current job: </h3>
          <ul>
            <li>
              Maintaining multiple legacy applications using PHP, running on a
              linux server
            </li>
            <li>
              Creating documentation of the legacy applications to avoid
              knowledge gaps that can lead to operational <br />
              inefficiencies and increased dependency on a few key individuals.{" "}
            </li>
            <li>
              Scrape client job sites and integrate them into our system using
              Python and ETL.
            </li>
            <li>Integrate client's api into our system.</li>
            <li>
              In-charge of managing the interns and making sure they get the
              proper knowledge and experience <br />
              in working with us
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
