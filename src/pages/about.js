import ImgSlider from "../components/imgSlider";
import skills from "../data/skills";
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
            Hey there! I'm <strong>Edgar Alcover Jr.</strong> — a <strong>Mid-Level 
            Software Developer</strong> from <strong>Cebu, Philippines</strong> who 
            specializes in backend development and web development.
          </p>
          <p>
            With <strong>3+ years of PHP expertise</strong>, I specialize in maintaining and optimizing 
            business-critical applications. I also have hands-on experience with 
            <strong>Node.js, TypeScript, and AWS</strong> for rebuilding legacy applications into modern, 
            scalable solutions.
            I recently developed an innovative concept for transforming <strong>1,000+ 
              legacy classes</strong> into a configurable platform — an idea that 
              earned recognition at <strong>JobTarget's 2025 Hackathon</strong>.
          </p>
          <h2>My Journey</h2>
          <p>
            My story started in <strong>2022</strong> when I joined <strong>Talleco JobTarget Philippines</strong> 
            as an intern and was hired full-time before graduation. 
            In just <strong>3 years</strong>, I've evolved from curious intern to 
            <strong>Mid-Level Software Developer</strong>, earning multiple <strong>"Ace of Initiative" awards</strong>
            and becoming a trusted mentor, which gave me the opportunity to speak at the <strong>University of Cebu Lapu-lapu and Mandaue</strong> 
            about PHP and Laravel to students.
          </p>
          <h3>What I Bring to the Table:</h3>
          <ul>
            <li>
              <strong>🏆 Problem Solver:</strong> Recognized for innovative solutions in legacy system modernization and hackathon achievements
            </li>
            <li>
              <strong>🎯 Business Impact:</strong> Track record of optimizing business-critical applications and understanding stakeholder needs
            </li>
            <li>
              <strong>👨‍🏫 Knowledge Sharing:</strong> Enjoy sharing insights and learning from industry professionals at all levels
            </li>
            <li>
              <strong>🔧 Technical Evolution:</strong> Backend specialist expanding into cloud architectures, Docker, and modern development practices
            </li>
            <li>
              <strong>📈 Continuous Learning:</strong> Committed to professional development and staying current with technology
            </li>
          </ul>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="skills-section">
        <div className="skills-container">
          <h2>Skills</h2>
          <p>Here are the skills I have and offer</p>
          
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <div className="skills-list">
                  {skillList.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-years">{skill.years}+ years</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
