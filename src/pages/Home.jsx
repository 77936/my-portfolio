// Home.jsx
import ProjectCard from '../components/ProjectCard';

const projectData = [
  {
    title: "Ticket Price Monitoring",
    desc: "Serverless Python script utilizing SerpApi to track concert ticket prices across vendors. Implements CI/CD pipelines and Discord webhook alerts.",
    repo: "https://github.com/77936/ticket-tracker",
  },
  {
    title: "Secure P2P Chat App",
    desc: "Java-based secure messaging app with end-to-end encryption (AES-256-GCM, RSA-OAEP). Features a multi-threaded server for concurrent client handling.",
    repo: "https://github.com/ethan-t-lee/CS370_Semester_Project_Team_7",
  },
  {
    title: "Employee Schedule Automation",
    desc: "PowerShell tool that converts complex Excel schedules to CSV. Reduced manual data entry time by 90% and is currently adopted by the Ned Baumer Aquatic Center.",
    repo: "https://github.com/77936/WhenToWork-Script",
  },

];

function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <h1>Hi, I'm Colin Phung</h1>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a senior Computer Science student focused on backend development, 
          web programming, and security. I enjoy building scalable applications using 
          JavaScript, Java, and Python. I am passionate about automation, cloud computing, 
          and artificial intelligence.
        </p>
        <br></br>
        <p>
          I am currently working on a Bachelor of Science degree at California State University San Marcos.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Selected Projects</h2>
        <div className="projects-grid">
          {projectData.map((proj, idx) => (
            <ProjectCard 
              key={idx}
              title={proj.title} 
              desc={proj.desc} 
              links={[{ url: proj.repo, label: "View on GitHub" }]}
            />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="contact-buttons">
          <a className="contact-button" href="mailto:colin.phung@hotmail.com">
            Email
          </a>
          <a
            className="contact-button"
            href="https://www.linkedin.com/in/colin-phung-418b5b212/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="contact-button"
            href="https://github.com/77936"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
export default Home;
