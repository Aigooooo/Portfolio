import "../css/home.css";
import instaLogo from "../assets/insta.png";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";

function Home() {
  const handleDownloadCV = () => {
    // Direct download using window.location - bypasses React Router
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/Edgar_Alcover_Jr_Resume.pdf';
    link.download = 'Edgar_Alcover_Jr_Resume.pdf';
    link.target = '_blank'; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        
        <div className="cv-download">
          <button onClick={handleDownloadCV} className="download-cv-btn">
            <span className="download-icon">📄</span>
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
