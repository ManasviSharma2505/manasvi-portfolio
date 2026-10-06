import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const data = {
  name: "Manasvi Sharma",
  role: "Computer Science & Engineering Student",
  university: "Lovely Professional University",
  email: "manasvi058@gmail.com",
  phone: "+91-7652873238",
  github: "https://github.com/ManasviSharma2505",
  linkedin: "https://www.linkedin.com/in/manasvisharma25/",
};

const projects = [
  {
    number: "01",
    title: "Verilancer",
    date: "Sep 2026",
    stack: "HTML · CSS · JavaScript · React.js",
    github: "https://github.com/ManasviSharma2505/Verilancer",
    description:
      "A freelancing platform designed to connect students with businesses, supporting service discovery, project engagement, and digital collaboration.",
    points: [
      "Implemented responsive user interfaces and structured platform workflows using modern web technologies.",
      "Contributed to platform planning and product development across categories, pricing, and milestone-based work.",
      "Focused on usability and a streamlined experience for users.",
    ],
  },
  {
    number: "02",
    title: "Date & Time Event Scheduler",
    date: "Jul 2026",
    stack: "C++",
    github: "https://github.com/ManasviSharma2505/Date-and-Time---Event-Schedular",
    description:
      "A command-line event scheduling application for creating, managing, and organizing date- and time-based events.",
    points: [
      "Applied object-oriented programming through modular classes for date/time handling and event management.",
      "Implemented event operations and scheduling logic.",
      "Improved code organization and maintainability through structured design.",
    ],
  },
];

const certificates = [
  [
    "Soft Skills — Professional Development Training",
    "GeeksforGeeks",
    "Sep 2026",
    "https://onedrive.live.com/?id=%2Fpersonal%2F4faf8fac3a3c1d18%2FDocuments%2FDesktop%2Fsoftskillgfg%2Epdf&listurl=%2Fpersonal%2F4faf8fac3a3c1d18%2FDocuments&ithint=file%2Cpdf&e=6whHTg&migratedtospo=true&parent=%2Fpersonal%2F4faf8fac3a3c1d18%2FDocuments%2FDesktop&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy80ZmFmOGZhYzNhM2MxZDE4L0lRREJsN1pMMTJxLVRadFlNaE5hcEw0Q0FhdnA2R0tYYkVwaWI0OUN4NEZFQnVvP2U9NndoSFRn&ga=1"
  ],
  ["CPP Programming", "Cipher Schools", "Aug 2026","https://onedrive.live.com/?qt=allmyphotos&photosData=%2fshare%2f4FAF8FAC3A3C1D18!sa2ece3d5c0a14746923e27405acfca2f%3fithint%3dphoto%26e%3dAi9spD%26migratedtospo%3dtrue&cid=4FAF8FAC3A3C1D18&id=4FAF8FAC3A3C1D18!sa2ece3d5c0a14746923e27405acfca2f&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2kvYy80ZmFmOGZhYzNhM2MxZDE4L0lRRFY0LXlpb2NCR1I1SS1KMEJhejhvdkFacXBiVE1Ja1MtVjNiWXgtaXEyQVo4P2U9QWk5c3BE"],
  ["C Programming", "GeeksforGeeks", "Aug 2025","https://1drv.ms/b/c/4faf8fac3a3c1d18/IQC0Yb9Pm5M1S57NFj4BmCiDAdNOT7y1kahrOA_-SXPlmWY?e=6w6c04"],
  [
    "Data Management (Excel & Tableau)",
    "TechVeda",
    "2026",
    "https://1drv.ms/i/c/4faf8fac3a3c1d18/IQCSfluHzyo9QYD-3-2jSoeWAdeidDwRbv9Zn8vcz7LMgwA?e=LxIfCC",
  ],
];

function App() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div>
      {/* =====================================================
          NAVIGATION
      ===================================================== */}
      <header className="nav">
        <a href="#home" className="brand">
          MS<span>.</span>
        </a>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>

        <nav className={open ? "links show" : "links"}>
          {[
            "Home",
            "About",
            "Skills",
            "Experience",
            "Projects",
            "Education",
            "Contact",
          ].map((x) => (
            <a
              key={x}
              href={"#" + x.toLowerCase()}
              onClick={() => setOpen(false)}
            >
              {x}
            </a>
          ))}

          <button
            className="mode"
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
          >
            {dark ? "☀" : "☾"}
          </button>
        </nav>
      </header>

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}
        <section id="home" className="hero">
          <div className="hero-text">
            <div className="status">
              <span></span> OPEN TO OPPORTUNITIES
            </div>

            <p className="kicker">
              FULL STACK SOFTWARE DEVELOPMENT · CSE
            </p>

            <h1>
              Building ideas
              <br />
              <em>into reality.</em>
            </h1>

            <p className="intro">
              I'm <strong>Manasvi Sharma</strong>, a Computer Science &
              Engineering student at Lovely Professional University. I enjoy
              solving problems, learning technology, and building useful
              digital experiences.
            </p>

            <div className="actions">
              <a className="btn primary" href="#projects">
                Explore my work ↗
              </a>

              <a className="btn" href="#contact">
                Contact me
              </a>
            </div>

            <div className="quick-links">
              <a href={data.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>

              <a href={data.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-halo"></div>

            <div className="portrait-frame">
              <img src="/manasvi-photo.jpg" alt="Manasvi Sharma" />
            </div>

            <div className="portrait-caption">
              <span>MANASVI SHARMA</span>
              <small>FULL STACK SOFTWARE DEVELOPMENT</small>
            </div>

            <div className="stat-card">
              <strong>500+</strong>
              <span>GFG problem-solving milestones</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}
        <section id="about" className="section about">
          <div className="section-label">01 / ABOUT</div>

          <div>
            <h2>
              A student who
              <br />
              <span>likes to build.</span>
            </h2>

            <div className="about-grid">
              <p className="lead">
                I'm pursuing a Bachelor of Technology in Computer Science and
                Engineering at Lovely Professional University, with a current
                CGPA of <b>8.4</b>.
              </p>

              <div className="facts">
                <div>
                  <small>UNIVERSITY</small>
                  <b>Lovely Professional University</b>
                </div>

                <div>
                  <small>PROGRAM</small>
                  <b>Bachelor of Technology</b>
                </div>

                <div>
                  <small>LOCATION</small>
                  <b>Phagwara, Punjab</b>
                </div>

                <div>
                  <small>INTEREST</small>
                  <b>Full Stack Software Development</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TOOLKIT
        ===================================================== */}
        <section id="skills" className="section skills">
  <div className="section-label">02 / SKILLS</div>

  <div className="skills-content">
    <h2>My <span>toolkit.</span></h2>

    <div className="toolkit">

      {/* CENTER */}
      <div className="toolkit-center">
        <span>MY</span>
        <strong>TOOLKIT</strong>
      </div>

      {/* LANGUAGES */}
      <div className="toolkit-card toolkit-languages">
        <div className="toolkit-number">01</div>
        <h3>Languages</h3>

        <div className="toolkit-skills">
          <span>C++</span>
          <span>Python</span>
          <span>C</span>
          <span>Java</span>
        </div>
      </div>

      {/* TOOLS & PLATFORMS */}
      <div className="toolkit-card toolkit-tools">
        <div className="toolkit-number">02</div>
        <h3>Tools & Platforms</h3>

        <div className="toolkit-skills">
          <span>GitHub</span>
          <span>VS Code</span>
          <span>WordPress</span>
          <span>XAMPP</span>
          <span>Figma</span>
          <span>Canva</span>
        </div>
      </div>

      {/* DATABASES */}
      <div className="toolkit-card toolkit-databases">
        <div className="toolkit-number">03</div>
        <h3>Databases</h3>

        <div className="toolkit-skills">
          <span>MySQL</span>
          <span>PostgreSQL</span>
        </div>
      </div>

      {/* SOFT SKILLS */}
      <div className="toolkit-card toolkit-soft">
        <div className="toolkit-number">04</div>
        <h3>Soft Skills</h3>

        <div className="toolkit-skills">
          <span>Problem-Solving</span>
          <span>Communication</span>
          <span>Teamwork</span>
          <span>Adaptability</span>
        </div>
      </div>

    </div>
  </div>
</section>

        {/* =====================================================
            EXPERIENCE
        ===================================================== */}
       <section id="experience" className="section experience-section">
  <div className="section-label">03 / EXPERIENCE</div>

  <div className="experience-layout">

    {/* COMPANY VISUAL */}
    <div className="experience-visual">
      <div className="experience-image-wrap">
        <img
          src="/ravtar.png"
          alt="Ravtar Technologies"
        />
      </div>

      <span className="experience-caption">
        RAVTAR TECHNOLOGIES
      </span>
    </div>

    {/* EXPERIENCE CONTENT */}
    <div className="timeline">
      <div className="timeline-date">MAR 2026</div>

      <div className="timeline-main">
        <p className="company">RAVTAR TECHNOLOGIES</p>

        <h2>SOC Executive</h2>

        <ul>
          <li>
            Strengthened verbal communication and professional speaking
            skills through regular interaction with clients and team
            members.
          </li>

          <li>
            Developed confidence, active listening, and interpersonal
            skills in a professional work environment.
          </li>

          <li>
            Improved teamwork and coordination through effective
            communication and collaboration with colleagues.
          </li>
        </ul>
      </div>
    </div>

  </div>
</section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}
        <section id="projects" className="section projects">
          <div className="section-label">04 / PROJECTS</div>

          <div>
            <h2>
              Selected <span>work.</span>
            </h2>

            <div className="project-list">
              {projects.map((p) => (
                <article className="project" key={p.title}>
                  <div className="project-number">{p.number}</div>

                  <div className="project-body">
                    <div className="project-meta">
                      <span>{p.stack}</span>
                      <span>{p.date}</span>
                    </div>

                    <h3>{p.title}</h3>

                    <p>{p.description}</p>

                    <ul>
                      {p.points.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>

                  {p.github && (
  <a
    className="arrow"
    href={p.github}
    target="_blank"
    rel="noreferrer"
    aria-label={`View ${p.title} on GitHub`}
  >
    ↗
  </a>
)}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            EDUCATION
        ===================================================== */}
        <section id="education" className="section education">
          <div className="section-label">05 / EDUCATION</div>

          <div>
            <h2>
              Academic <span>journey.</span>
            </h2>

            <div className="edu-list">
              <div className="edu-item">
                <span>2024 — PRESENT</span>

                <div>
                  <h3>Bachelor of Technology</h3>

                  <p>
                    Computer Science and Engineering · Lovely Professional
                    University, Phagwara, Punjab
                  </p>

                  <b>CGPA: 8.4</b>
                </div>
              </div>

              <div className="edu-item">
                <span>2023 — 2024</span>

                <div>
                  <h3>Intermediate</h3>

                  <p>
                    PM Shri Kendriya Vidyalaya, Adampur, Punjab · PCM
                  </p>

                  <b>Percentage: 88.4%</b>
                </div>
              </div>

              <div className="edu-item">
                <span>2021 — 2022</span>

                <div>
                  <h3>Matriculation</h3>

                  <p>
                    Dhilwan International Public School, Jalandhar, Punjab
                  </p>

                  <b>Percentage: 92.2%</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CERTIFICATES
        ===================================================== */}
        <section className="section credentials">
          <div className="section-label">06 / MORE</div>

          <div className="cred-grid">
            <div>
              <h2>
                Training &
                <br />
                <span>certificates.</span>
              </h2>

              <div className="certificate-list">
                {certificates.map(([title, org, date, link]) => (
  <div className="certificate" key={title}>
    <span>{date}</span>

    <div>
      <b>{title}</b>

      {link ? (
        <small>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {org} ↗
          </a>
        </small>
      ) : (
        <small>{org}</small>
      )}
    </div>
  </div>
))}
              </div>
            </div>

            <div className="achievement">
              <div className="big-number">
                500<span>+</span>
              </div>

              <p>
                Problem-solving milestones completed on GeeksforGeeks across
                different coding challenges, strengthening my understanding of
                data structures, algorithms and logical problem-solving.
              </p>

              <a
                href="https://www.geeksforgeeks.org/"
                target="_blank"
                rel="noreferrer"
              >
                Keep solving ↗
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}
        <section id="contact" className="contact">
          <div className="contact-inner">
            <p className="kicker">07 / CONTACT</p>

            <h2>
              Have an idea?
              <br />
              <span>Let's talk.</span>
            </h2>

            <p>
              I'm always interested in learning, collaborating and taking on
              opportunities that help me grow as a developer.
            </p>

            <a className="mail" href={`mailto:${data.email}`}>
              {data.email} ↗
            </a>

            <div className="contact-row">
              <a href={data.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>

              <a href={data.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              <span>{data.phone}</span>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer>
        <span>© {new Date().getFullYear()} Manasvi Sharma</span>
        <span>Built with React · HTML · CSS · JavaScript</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);