import { useReveal } from "./hooks/useReveal";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Code2,
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  TestTube2,
  X,
  Wrench,
} from "lucide-react";
import { profile, projects } from "./config";
import "./styles.css";

const skills = [
  {
    title: "Automation Testing",
    icon: TestTube2,
    accent: "green",
    items: ["Playwright", "TypeScript", "Page Object Model", "E2E Testing", "Regression Automation", "Cross-Browser Testing"],
  },
  {
    title: "Manual Testing",
    icon: ShieldCheck,
    accent: "purple",
    items: ["Functional Testing", "Regression Testing", "Smoke Testing", "Exploratory Testing", "Negative Testing", "Test Case Design", "Bug Reporting"],
  },
  {
    title: "Programming",
    icon: Code2,
    accent: "blue",
    items: ["TypeScript", "Java"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    accent: "green",
    items: ["Git", "GitHub", "VS Code", "npm", "Test Reporting"],
  },
  {
    title: "QA Concepts",
    icon: ShieldCheck,
    accent: "blue",
    items: ["SDLC", "STLC", "Test Scenarios", "Test Cases", "Defect Life Cycle", "Agile Testing"],
  },
  {
    title: "Currently Learning",
    icon: Sparkles,
    accent: "gold",
    items: ["API Testing", "Postman", "Advanced Playwright", "AI-assisted QA"],
  },
];

const journey = [
  {
    date: "CURRENT",
    type: "BUILDING",
    title: "AI-Assisted Test Case Generator",
    text: "Planned for October 2026 as a course project. The goal is to turn requirements into structured test cases and evaluate their quality, coverage and automation suitability.",
  },
  {
    date: "2026",
    type: "PROJECT",
    title: "OrangeHRM QA & Playwright Automation",
    text: "Hands-on manual testing plus Playwright + TypeScript automation of key HR application workflows.",
  },
  {
    date: "2026",
    type: "PROJECT",
    title: "E-Commerce Playwright Automation",
    text: "Built and practiced reusable end-to-end browser automation with TypeScript, page objects, assertions and reporting.",
  },
  {
    date: "2025–2026",
    type: "LEARNING",
    title: "QA Testing Foundation",
    text: "Developed practical skills in test-case design, functional testing, regression, exploratory testing, defect reporting and browser automation.",
  },
  {
    date: "EDUCATION",
    type: "MCA",
    title: "Master of Computer Applications",
    text: "Currently pursuing MCA while building a practical software testing portfolio.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = ["about", "skills", "projects", "journey", "contact"];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="grid-bg" aria-hidden="true" />
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-icon"><TestTube2 size={19} /></span>
          <span>Muskan<span className="brand-dot">.</span>qa</span>
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {nav.map((item) => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>{item.toUpperCase()}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>WORK WITH ME</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero section">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> OPEN TO WORK · QA / SOFTWARE TESTING</div>
            <div className="eyebrow">&lt; HELLO, I'M &gt;</div>
            <h1>Muskan</h1>
            <h2>I Test Software <span>Before Users Break It.</span></h2>
            <p className="hero-text">
              QA-focused software tester building hands-on experience in manual testing
              and Playwright automation with TypeScript. I turn requirements into test
              scenarios, explore edge cases, document defects, and build repeatable tests.
            </p>
            <div className="hero-location">◉ <span>{profile.location}</span></div>
            <div className="button-row">
              <a className="button primary" href="#projects">VIEW MY WORK <ArrowRight size={17} /></a>
              <a className="button ghost" href="#contact"><Mail size={17} /> CONTACT ME</a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
              <span className="social-line" />
              <span className="mono small">{profile.email}</span>
            </div>
          </div>

          <div className="hero-terminal">
            <div className="terminal-window">
              <div className="terminal-top">
                <span className="terminal-dots"><i /><i /><i /></span>
                <span>qa-test-runner.ts</span>
                <span>●</span>
              </div>
              <div className="terminal-body">
                <div className="code-line"><span className="dim">$</span> npm run test:qa</div>
                <div className="code-line muted">Starting test execution...</div>
                <div className="test-row pass"><Check size={14} /> Login flow <span>PASSED</span></div>
                <div className="test-row pass"><Check size={14} /> Navigation <span>PASSED</span></div>
                <div className="test-row pass"><Check size={14} /> Product flow <span>PASSED</span></div>
                <div className="test-row pass"><Check size={14} /> Regression check <span>PASSED</span></div>
                <div className="code-divider" />
                <div className="summary">
                  <div><strong>4</strong><small>TESTS</small></div>
                  <div><strong>100%</strong><small>PASS RATE</small></div>
                  <div><strong>0</strong><small>BLOCKERS</small></div>
                </div>
                <div className="terminal-cursor">▌</div>
              </div>
            </div>
            <div className="floating-chip chip-one">✓ BUG REPRODUCED</div>
            <div className="floating-chip chip-two">PLAYWRIGHT + TS</div>
          </div>
        </section>

        <section className="quick-stats section-narrow">
          <div><strong>03+</strong><span>QA Projects</span></div>
          <div><strong>02</strong><span>Core Skills</span></div>
          <div><strong>01</strong><span>AI QA Project Upcoming</span></div>
          <div><strong>∞</strong><span>Curiosity for Bugs</span></div>
        </section>

        <section id="about" className="section content-section reveal">
          <SectionHeading number="01" title={<>About <span>Me.</span></>} subtitle="A practical QA journey built through projects, experimentation and continuous learning." />
          <div className="about-grid">
            <div className="about-copy">
              <p>
                I’m a QA-focused software tester who enjoys understanding how applications work —
                and then figuring out how they can fail.
              </p>
              <p>
                My hands-on work covers manual functional testing, regression and exploratory
                testing, defect reporting, and end-to-end browser automation using Playwright with TypeScript.
              </p>
              <p>
                I’m currently deepening my automation skills and learning API testing. In October 2026,
                I’m also planning to build an AI-assisted test-case generation project as part of my course.
              </p>
              <div className="json-card">
                <div className="json-title">~ muskan.json</div>
                <pre>{`{
  "role": "QA Engineer",
  "focus": "Manual + Automation",
  "automation": "Playwright + TypeScript",
  "learning": "API Testing",
  "nextProject": "AI + QA",
  "openToWork": true
}`}</pre>
              </div>
            </div>

            <div className="thinking-card">
              <div className="card-label">HOW I APPROACH TESTING</div>
              {["Understand the requirement", "Identify critical user flows", "Design positive + negative scenarios", "Explore edge cases", "Report reproducible defects", "Automate stable regression flows"].map((item, i) => (
                <div className="approach-row" key={item}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section content-section reveal">
          <SectionHeading number="02" title={<>Skills & <span>Capabilities.</span></>} subtitle="The tools and testing practices I actually use or am actively learning." />
          <div className="skill-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <article className={`skill-card ${skill.accent}`} key={skill.title}>
                  <div className="skill-icon"><Icon size={20} /></div>
                  <h3>{skill.title}</h3>
                  <div className="tag-list">
                    {skill.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="learning-panel">
            <div className="learning-heading"><Sparkles size={18} /> CURRENTLY LEARNING</div>
            <div className="learning-grid">
              <div>
                <div className="learning-title">API Testing <b>IN PROGRESS</b></div>
                <p>Learning REST API testing fundamentals and Postman workflows.</p>
              </div>
              <div>
                <div className="learning-title">Playwright <b>ACTIVE</b></div>
                <p>Improving framework structure, stability, reporting and reusable automation.</p>
              </div>
              <div>
                <div className="learning-title">AI-Assisted QA <b>OCT 2026</b></div>
                <p>Building a course project for AI-assisted test-case generation and quality evaluation.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section content-section reveal">
          <SectionHeading number="03" title={<>Projects. <span>Proof of Work.</span></>} subtitle="Hands-on QA projects that show how I think, test, automate and document software." />
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <div>
                    <div className="project-meta"><span>{project.category}</span><small>{project.number}</small></div>
                    <h3>{project.title}</h3>
                  </div>
                  <div className="project-stats">
                    {project.stats.map((stat) => <span key={stat}>{stat}</span>)}
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="tag-list project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-actions">
                  <button className="text-button" onClick={() => setActiveProject(project)}>MORE DETAILS <ArrowDown size={15} /></button>
                  {project.github !== "#" && <a className="text-button" href={project.github} target="_blank" rel="noreferrer">GITHUB <ExternalLink size={14} /></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="section content-section reveal">
          <SectionHeading number="04" title={<>My QA <span>Journey.</span></>} subtitle="Projects and learning milestones that are building the tester I am becoming." />
          <div className="timeline">
            {journey.map((item) => (
              <div className="timeline-item" key={`${item.date}-${item.title}`}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-head"><span>{item.type}</span><small>{item.date}</small></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section content-section work-section">
          <SectionHeading number="05" title={<>What I Can <span>Help With.</span></>} subtitle="Useful QA support for teams, startups and founders." />
          <div className="service-grid">
            {[
              ["Manual QA", "Functional, regression, exploratory and negative testing for web applications."],
              ["Playwright Automation", "Repeatable end-to-end regression flows using Playwright + TypeScript."],
              ["Bug Reporting", "Clear reproduction steps, expected vs actual behaviour and evidence."],
              ["QA Documentation", "Test scenarios, test cases, regression checklists and execution summaries."],
            ].map(([title, text]) => (
              <div className="service-card" key={title}>
                <Check size={18} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section content-section contact-section reveal">
          <div className="contact-heading">
            <div className="section-number">06 / CONTACT</div>
            <h2>Let's Build <span>Better Software</span> Together.</h2>
            <p>
              Open to QA internships, junior QA opportunities and freelance testing work.
              If your product needs someone to explore workflows, find bugs or automate regression tests, let’s talk.
            </p>
            <div className="contact-status"><span className="pulse" /> AVAILABLE FOR INTERNSHIP · JUNIOR · FREELANCE</div>
          </div>

          <div className="contact-grid">
            <div className="contact-links">
              <ContactLink icon={Mail} label="EMAIL" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactLink icon={Phone} label="PHONE" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
              <ContactLink icon={Linkedin} label="LINKEDIN" value="Professional Profile" href={profile.linkedin} />
              <ContactLink icon={Github} label="GITHUB" value="QA Projects & Automation" href={profile.github} />
              <ContactLink icon={Instagram} label="INSTAGRAM" value="@muskan.builds23 · QA Content" href={profile.instagram} />
              <ContactLink icon={ExternalLink} label="FIVERR" value="Freelance QA Services" href={profile.fiverr} />
            </div>

            <div className="message-card">
              <h3>Send a message</h3>
              <p className="muted">Use the button below to open your email client with a pre-filled subject.</p>
              <a className="button primary full" href={`mailto:${profile.email}?subject=QA%20Opportunity%20for%20Muskan&body=Hi%20Muskan%2C%0A%0AI'd%20like%20to%20discuss%20a%20QA%20opportunity%2Fproject.%0A%0A`}>
                <Send size={17} /> EMAIL ME
              </a>
              <a className="resume-link" href={profile.resume} target="_blank" rel="noreferrer">
                DOWNLOAD RESUME <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span className="brand-icon"><TestTube2 size={17} /></span>
          <div><strong>Muskan</strong><small>QA Engineer</small></div>
        </div>
        <div className="footer-copy">© 2026 Muskan · Built for QA, testing & automation.</div>
        <div className="footer-socials">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /></a>
          <a href={profile.instagram} target="_blank" rel="noreferrer"><Instagram /></a>
        </div>
      </footer>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close"><X /></button>
            <div className="project-meta"><span>{activeProject.category}</span><small>{activeProject.number}</small></div>
            <h2>{activeProject.title}</h2>
            <p className="modal-description">{activeProject.details.objective}</p>
            <div className="modal-columns">
              <div>
                <h4>TESTING SCOPE</h4>
                <ul>{activeProject.details.scope.map((x) => <li key={x}><Check size={14} /> {x}</li>)}</ul>
              </div>
              <div>
                <h4>DELIVERABLES</h4>
                <ul>{activeProject.details.deliverables.map((x) => <li key={x}><Check size={14} /> {x}</li>)}</ul>
              </div>
            </div>
            <div className="modal-actions">
              {activeProject.github !== "#" && <a className="button primary" href={activeProject.github} target="_blank" rel="noreferrer"><Github size={16} /> VIEW GITHUB</a>}
              <button className="button ghost" onClick={() => setActiveProject(null)}>CLOSE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionHeading({ number, title, subtitle }) {
  return (
    <div className="section-heading">
      <div className="section-number">{number} /</div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

function ContactLink({ icon: Icon, label, value, href }) {
  return (
    <a className="contact-link" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      <span className="contact-icon"><Icon size={19} /></span>
      <span><small>{label}</small><strong>{value}</strong></span>
      <ArrowRight size={16} className="contact-arrow" />
    </a>
  );
}

createRoot(document.getElementById("root")).render(<App />);
