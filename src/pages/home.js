import "../css/home.css";
import instaLogo from "../assets/insta.png";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";

function Home() {
  return (
    <>
      <div className="intro">
        <h1>Hi, I'm Edgar!</h1>
        <h3>A Software Developer</h3>
        <div className="socials">
          <a
            href="https://www.instagram.com/ed.jiar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instaLogo} alt="instagram logo" />
          </a>

          <a
            href="https://github.com/Aigooooo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="github logo" />
          </a>

          <a
            href="https://www.linkedin.com/in/jiaralc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="linkedin logo" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
