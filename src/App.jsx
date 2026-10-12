
import { useState, useEffect } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ExternalLink,
  Cpu,
  Sparkles,
  Terminal,
  Download,
  Award,
} from "lucide-react";

const GITHUB = "https://github.com/Pratiksha-777";

const LINKEDIN =
  "https://www.linkedin.com/in/pratiksha-fandade-533a77388?utm_source=share_via&utm_content=profile&utm_medium=member_android";

const EMAIL = "fandadepratiksha@gmail.com";

const projects = [
  {
    number: "01",
    category: "SOFTWARE",
    title: "MediQueue",
    description:
      "Hospital queue management platform for appointments, patient queues, emergency handling, doctors and hospital resources.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    accent: "blue",
    github:
      "https://github.com/Pratiksha-777/hospital-queue-management-system",
    demo: "#contact",
    image: "/project-images/mediqueue/dashboard.png",
    gallery: [
      "/project-images/mediqueue/dashboard.png",
      "/project-images/mediqueue/queue-management.png",
      "/project-images/mediqueue/emergency-handling.png",
    ],
  },
  {
    number: "02",
    category: "IOT + FULL-STACK",
    title: "Smart Shopping Cart",
    description:
      "Smart cart concept combining smartphone product scanning, weight verification and automated billing with ESP32-based hardware.",
    tags: ["React", "PostgreSQL", "ESP32", "HX711", "TOF"],
    accent: "violet",
    github: "https://github.com/Pratiksha-777/Smart-Shopping-Cart",
    demo: "#contact",
    image: "/project-images/smart-shopping-cart/dashboard.png",
    gallery: [
      "/project-images/smart-shopping-cart/dashboard.png",
      "/project-images/smart-shopping-cart/product-details.png",
      "/project-images/smart-shopping-cart/weight-verification.png",
    ],
  },
  {
    number: "03",
    category: "FINTECH + AI",
    title: "Portfolio Analyzer",
    description:
      "A FinTech solution designed to simplify financial management and investment tracking by bringing different investments into one platform. Developed as part of Team Neuronauts during Nirmaan 4.0 – Nexus of Evolution Hackathon 2026 at MIT Academy of Engineering.",
    tags: [
      "FinTech",
      "AI",
      "Portfolio Analysis",
      "Investment Tracking",
    ],
    accent: "blue",
    github: GITHUB,
    demo: "#contact",
  },
];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["C++", "C", "Python", "JavaScript"],
  },
  {
    title: "Frontend",
    icon: Terminal,
    items: ["React", "HTML", "CSS", "Vite"],
  },
  {
    title: "Backend",
    icon: BriefcaseBusiness,
    items: ["Node.js", "Express", "FastAPI", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["PostgreSQL", "SQL"],
  },
  {
    title: "AI & Tools",
    icon: Sparkles,
    items: ["Gemini API", "Git", "GitHub", "Postman"],
  },
  {
    title: "IoT",
    icon: Cpu,
    items: ["ESP32", "HX711", "TOF Sensor"],
  },
];


const certificates = [
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    type: "Certificate of Completion",
    year: "",
    image: `${import.meta.env.BASE_URL}certificates/generative-ai-mastermind.png`,
  },
  {
    title: "VELORA-1.0 Hackathon",
    issuer: "MIT Academy of Engineering · CIPHER × IEEE",
    type: "Certificate of Participation",
    year: "2026",
    image: `${import.meta.env.BASE_URL}certificates/velora-2026.png`,
  },
  {
    title: "GirlScript Summer of Code",
    issuer: "GirlScript Foundation",
    type: "Certificate of Participation",
    year: "2026",
    image: `${import.meta.env.BASE_URL}certificates/gssoc-2026.png`,
  },
  {
    title: "Think Fest — Arduino Workshop",
    issuer: "AI & Robotics Club, KITCoEK",
    type: "Certificate of Participation",
    year: "2025",
    image: `${import.meta.env.BASE_URL}certificates/think-fest-2025.png`,
  },
  {
    title: "STRANGER CODE",
    issuer: "PIONEER 2026 · KITCoEK",
    type: "Certificate of Participation",
    year: "2026",
    image: `${import.meta.env.BASE_URL}certificates/stranger-code-2026.png`,
  },
  {
    title: "Idea Forged",
    issuer: "ASSETS, KITCoEK",
    type: "Certificate of Participation",
    year: "2026",
    image: `${import.meta.env.BASE_URL}certificates/idea-forged-2026.png`,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Software Developer",
    "Full-Stack Developer",
    "Problem Solver",
  ];

  const role = roles[roleIndex];

  useEffect(() => {
    const roleTimer = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 2500);

    return () => window.clearInterval(roleTimer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navigationItems = [
    "About",
    "Projects",
    "Skills",
    "Journey",
    "Certificates",
    "Contact",
  ];

  return (
    <div className="app">
      <div className="noise" />

      {/* NAVIGATION */}
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">PF</span>
          <span>Pratiksha Fandade</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navigationItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}

          <a
            className="nav-resume"
            href="/resume.pdf"
            download
            onClick={closeMenu}
          >
            <Download size={15} />
            Resume
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="hero section-shell section-tone tone-cream"
        >
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse" />
              Open to software development opportunities
            </div>

            
<h1 className="hero-title">
  I’m a <span className="typing-role">{role}</span>
  <br />
  <span className="hero-title-second">
    who builds real-world products.
  </span>
</h1>

            <p className="hero-description">
              I’m Pratiksha Fandade, a software developer focused on building
              practical applications across{" "}
              <strong>full-stack development, AI and IoT</strong>.
            </p>

            
<div className="hero-actions">
  <a href="#projects" className="btn btn-primary">
    Explore my work <ArrowUpRight size={17} />
  </a>

  <a
    href={LINKEDIN}
    target="_blank"
    rel="noreferrer"
    className="btn btn-ghost"
  >
    Let's connect <ArrowUpRight size={17} />
  </a>
</div>
            <div className="social-row">
              <a href={GITHUB} target="_blank" rel="noreferrer">
                <Github size={17} />
                GitHub
              </a>

              <a href={LINKEDIN} target="_blank" rel="noreferrer">
                <Linkedin size={17} />
                LinkedIn
              </a>

              <a href={`mailto:${EMAIL}`}>
                <Mail size={17} />
                Email
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="hero-card">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>

              <div className="code-line muted">const developer = {"{"}</div>
              <div className="code-line">
                <span>name:</span> "Pratiksha Fandade",
              </div>
              <div className="code-line">
                <span>focus:</span> ["C++", "React"],
              </div>
              <div className="code-line">
                <span>build:</span> ["AI", "IoT"],
              </div>
              <div className="code-line">
                <span>mindset:</span> "problem solver"
              </div>
              <div className="code-line muted">{"}"}</div>
              <div className="terminal-cursor" />
            </div>

            <div className="floating-chip chip-one">
              <Code2 size={15} />
              Full-Stack
            </div>

            <div className="floating-chip chip-two">
              <Sparkles size={15} />
              AI
            </div>

            <div className="floating-chip chip-three">
              <Cpu size={15} />
              IoT
            </div>
          </div>
        </section>

        
{/* 01 — ABOUT */}
<section
  id="about"
  className="section-shell section section-tone tone-blue"
>
  <div className="section-heading">
    <p className="eyebrow">01 — ABOUT ME</p>

    <h2>
      Curious mind.
      <br />
      <span>Builder at heart.</span>
    </h2>

    <p className="about-intro">
      I turn ideas into practical digital experiences through code,
      creativity, and continuous learning.
    </p>
  </div>

  <div className="about-enhanced-grid">
    <div className="about-main-card">
      <div className="about-card-top">
        <div className="about-avatar">PF</div>
        <div>
          <span className="about-mini-label">HELLO, I'M</span>
          <h3>Pratiksha Fandade</h3>
          <p>Computer Science Engineering Student</p>
        </div>
      </div>

      <p className="about-lead">
        I enjoy building technology that solves real-world problems.
      </p>

      <p>
        My journey revolves around software development, problem-solving,
        and transforming what I learn into working applications. I enjoy
        exploring both the logic behind software and the experience people
        have while using it.
      </p>

      <p>
        From hospital queue management and smart retail systems to
        investment tracking, my projects help me explore new technologies
        and develop a stronger engineering mindset.
      </p>

      <div className="about-interests">
        <span><Code2 size={15} /> Software Development</span>
        <span><Database size={15} /> Backend & Databases</span>
        <span><Sparkles size={15} /> AI & IoT</span>
      </div>

      <a className="about-connect" href="#contact">
        Let's connect <ArrowUpRight size={17} />
      </a>
    </div>

    <div className="about-side">
      <div className="about-focus-card">
        <span className="about-mini-label">CURRENT FOCUS</span>
        <div className="about-focus-icon">
          <Terminal size={22} />
        </div>
        <h3>Learning by building</h3>
        <p>
          Strengthening C++, DSA, full-stack development, and
          database fundamentals through hands-on projects.
        </p>
      </div>

      <div className="about-stats">
        <div className="stat-card">
          <strong>03</strong>
          <span>Featured projects</span>
        </div>

        <div className="stat-card">
          <strong>03</strong>
          <span>Core domains</span>
        </div>

        <div className="stat-card">
          <strong>9.35</strong>
          <span>CGPA / 10</span>
        </div>

        <div className="stat-card">
          <strong>∞</strong>
          <span>Things to learn</span>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* 02 — PROJECTS */}
        <section
          id="projects"
          className="section-shell section section-tone tone-cream"
        >
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">02 — SELECTED WORK</p>

              <h2>
                Projects that show
                <br />
                <span>how I build.</span>
              </h2>
            </div>

            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              View GitHub <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.accent}`}
                key={project.title}
              >
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                {project.image ? (
                  <div className="project-image-wrap">
                    <img
                      className="project-image"
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="project-icon">
                    <Code2 size={22} />
                  </div>
                )}

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {project.gallery && (
                  <div
                    className="project-gallery"
                    aria-label={`${project.title} screenshots`}
                  >
                    {project.gallery.slice(1).map((image) => (
                      <img key={image} src={image} alt="" loading="lazy" />
                    ))}
                  </div>
                )}

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub <ArrowUpRight size={15} />
                  </a>

                  <a href={project.demo}>
                    Demo <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        
{/* 03 — SKILLS */}
<section
  id="skills"
  className="section-shell section section-tone tone-blue"
>
  <div className="section-heading">
    <p className="eyebrow">03 — MY TOOLKIT</p>

    <h2>
      Technologies I use
      <br />
      <span>to bring ideas to life.</span>
    </h2>

    <p className="skills-intro">
      Tools and technologies I explore to build practical
      applications, solve problems, and keep learning.
    </p>
  </div>

  <div className="skills-grid skills-grid-enhanced">
    {skillGroups.map(({ title, icon: Icon, items }, index) => (
      <article
        className="skill-card skill-card-enhanced"
        key={title}
        style={{ "--skill-index": index }}
      >
        <div className="skill-card-top">
          <div className="skill-title-icon">
            <Icon size={22} />
          </div>

          <span className="skill-count">
            {String(items.length).padStart(2, "0")}
          </span>
        </div>

        <h3>{title}</h3>

        <div className="skill-items skill-items-enhanced">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </article>
    ))}
  </div>
</section>

        {/* 04 — JOURNEY */}
        <section
          id="journey"
          className="section-shell section section-tone tone-cream"
        >
          <div className="section-heading">
            <p className="eyebrow">04 — JOURNEY</p>

            <h2>
              Learning by <span>building.</span>
            </h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-year">NOW</span>

              <div>
                <h3>Software Development Focus</h3>
                <p>
                  Deepening C++, DSA, backend development and database skills
                  for software engineering roles.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-year">2026</span>

              <div>
                <h3>Hackathons & Product Building</h3>
                <p>
                  Participated in multiple hackathons, gaining experience in
                  teamwork, problem-solving, rapid prototyping and building
                  solutions for real-world challenges.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-year">2025+</span>

              <div>
                <h3>From Learning to Building</h3>
                <p>
                  Started turning programming and computer science concepts
                  into practical projects and deployable applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        

{/* 05 — CERTIFICATES */}
<section
  id="certificates"
  className="section-shell section section-tone tone-blue"
>
  <div className="certificates-intro">
    <div className="certificate-eyebrow">
      <Award size={18} />
      <span>MY ACHIEVEMENTS</span>
    </div>

    <h2>Certificates &amp; Recognition</h2>

    <p>
      Every certificate represents a new skill, experience,
      or milestone in my learning journey.
    </p>
  </div>

  <div className="certificates-grid">
    {certificates.map((certificate) => (
      <article
        className="certificate-card"
        key={certificate.title}
      >
        <a
          className="certificate-preview"
          href={certificate.image}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${certificate.title} certificate`}
        >
          <img
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            loading="eager"
            onError={() =>
              console.error(
                "Failed to load certificate:",
                certificate.image
              )
            }
          />

          <span className="certificate-view">
            <ExternalLink size={16} />
            View certificate
          </span>
        </a>

        <div className="certificate-details">
          <div className="certificate-icon">
            <Award size={20} />
          </div>

          <div className="certificate-title-row">
            <h3>{certificate.title}</h3>

            {certificate.year && (
              <span className="certificate-year">
                {certificate.year}
              </span>
            )}
          </div>

          <p className="certificate-issuer">
            {certificate.issuer}
          </p>

          <p className="certificate-type">
            {certificate.type}
          </p>

          <a
            className="certificate-link"
            href={certificate.image}
            target="_blank"
            rel="noreferrer"
          >
            Open full certificate
            <ArrowUpRight size={15} />
          </a>
        </div>
      </article>
    ))}
  </div>
</section>

{/* 06 — CONTACT */}
<section
  id="contact"
  className="section-shell section section-tone tone-blue"
>
  <div className="contact-enhanced">
    <div className="contact-heading">
      <p className="eyebrow">06 — GET IN TOUCH</p>

      <h2>
        Let's build something
        <br />
        <span>meaningful together.</span>
      </h2>

      <p className="contact-description">
        Have an opportunity, project idea, or just want to connect?
        I'd love to hear from you.
      </p>

      <div className="contact-availability">
        <span className="pulse" />
        Open to software development opportunities
      </div>
    </div>

    <div className="contact-cards">
      <a
        className="contact-card"
        href={`mailto:${EMAIL}`}
      >
        <span className="contact-card-icon">
          <Mail size={22} />
        </span>

        <span className="contact-card-text">
          <strong>Email me</strong>
          <span>{EMAIL}</span>
        </span>

        <ArrowUpRight size={20} className="contact-arrow" />
      </a>

      <a
        className="contact-card"
        href={GITHUB}
        target="_blank"
        rel="noreferrer"
      >
        <span className="contact-card-icon">
          <Github size={22} />
        </span>

        <span className="contact-card-text">
          <strong>GitHub</strong>
          <span>Explore my projects</span>
        </span>

        <ArrowUpRight size={20} className="contact-arrow" />
      </a>

      <a
        className="contact-card"
        href={LINKEDIN}
        target="_blank"
        rel="noreferrer"
      >
        <span className="contact-card-icon">
          <Linkedin size={22} />
        </span>

        <span className="contact-card-text">
          <strong>LinkedIn</strong>
          <span>Let's connect professionally</span>
        </span>

        <ArrowUpRight size={20} className="contact-arrow" />
      </a>
    </div>
  </div>
</section>
      </main>
      {/* FOOTER */}
      <footer className="footer section-shell">
        <span>© {new Date().getFullYear()} Pratiksha Fandade</span>
        <span>Built with React · Vite</span>

        <a href="#home">
          <ArrowUp size={16} />
          Back to top
        </a>
      </footer>
    </div>
  );
}

export default App;
