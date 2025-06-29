import "../css/home.css";
import instaLogo from "../assets/insta.png";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";
import SEO from "../components/SEO";
import { trackEvent } from "../components/GoogleAnalytics";

function Home() {
  const handleDownloadCV = () => {
    try {
      // Track the download event in Google Analytics
      trackEvent('download', 'engagement', 'CV_Download', 1);
      
      // Create a more robust download function
      const link = document.createElement('a');
      
      // Use different approaches for different environments
      const baseUrl = process.env.NODE_ENV === 'production' 
        ? 'https://aigooooo.github.io/Portfolio' 
        : process.env.PUBLIC_URL || '';
      
      link.href = `${baseUrl}/Edgar_Alcover_Jr_Resume.pdf`;
      link.download = 'Edgar_Alcover_Jr_Resume.pdf';
      
      // Add timestamp to prevent caching issues
      link.href += `?t=${Date.now()}`;
      
      // Set additional attributes for better compatibility
      link.rel = 'noopener noreferrer';
      link.target = '_blank';
      
      // Style the link to be invisible
      link.style.display = 'none';
      
      // Add to DOM, click, then remove after a delay
      document.body.appendChild(link);
      
      // Small delay to ensure the link is properly added
      setTimeout(() => {
        link.click();
        
        // Remove the link after a longer delay to ensure download starts
        setTimeout(() => {
          if (document.body.contains(link)) {
            document.body.removeChild(link);
          }
        }, 1000);
      }, 100);
      
      console.log('CV download initiated and tracked in Analytics');
      
    } catch (error) {
      console.error('Download failed:', error);
      // Track the error
      trackEvent('error', 'engagement', 'CV_Download_Failed', 1);
      // Fallback: open in new tab
      window.open('/Edgar_Alcover_Jr_Resume.pdf', '_blank');
    }
  };

  return (
    <>
      <SEO 
        title="Edgar Alcover Jr. - Software Developer Portfolio | Web Developer Philippines"
        description="Professional Software Developer from Cebu, Philippines. Specializing in PHP, React, Python web development. Available for freelance projects. View my portfolio and download my CV."
        keywords="Edgar Alcover Jr, Software Developer, Web Developer, Portfolio, PHP Developer, React Developer, Python Developer, Cebu Philippines, Freelance Developer, Full Stack Developer, Hire Developer, Freelance Developer Philippines"
        url="https://aigooooo.github.io/Portfolio/"
      />
      <div className="intro">
        <h1>Hi, I'm Edgar!</h1>
        <h3>A Software Developer</h3>
        <div className="socials">
          <a
            href="https://www.instagram.com/ed.jiar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Edgar's Instagram profile"
          >
            <img src={instaLogo} alt="instagram logo" />
          </a>

          <a
            href="https://github.com/Aigooooo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Edgar's GitHub profile"
          >
            <img src={githubLogo} alt="github logo" />
          </a>

          <a
            href="https://www.linkedin.com/in/jiaralc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Edgar's LinkedIn profile"
          >
            <img src={linkedinLogo} alt="linkedin logo" />
          </a>
        </div>
        
        <div className="cv-download">
          <button onClick={handleDownloadCV} className="download-cv-btn" aria-label="Download Edgar Alcover Jr's CV">
            <span className="download-icon">📄</span>
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
