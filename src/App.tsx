import { useState } from "react";
import { Github, Linkedin, Mail, Download, ArrowUp } from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import SkillBadge from "./components/SkillBadge";
import TypeWriter from "./components/TypeWriter";
import React from "react";
import ContactForm from "./components/ContactForm";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projects = [
    {
      title: "Multi-Theme-Switcher",
      description:
        "A multi-theme switcher allows users to toggle between different visual themes (like light, dark, or custom colors) on a website, enhancing user experience and accessibility by adapting the interface to user preferences.",
      tags: ["React", "TypeScript", "TailwindCSS", "API Integration"],
      image:
        "https://images.unsplash.com/photo-1673479590411-853c4c035091?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubLink: "https://github.com/aratiekatpure/Multi-Theme-Switcher",
      liveLink: "https://aratiekatpure.github.io/Multi-Theme-Switcher/",
    },
    {
      title: "Sliders_Task_Demo",
      description:
        "Implemented a responsive image/content slider with smooth animations, navigation arrows, autoplay, and mobile-friendly design using HTML, CSS, and JavaScript.",
      tags: ["HTML5", "CSS", "JS", "Bootstrap"],
      image:
        "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-4d78-61f7-9a10-0dde53528f7c/raw?se=2025-08-22T08%3A55%3A54Z&sp=r&sv=2024-08-04&sr=b&scid=ad389469-8f14-5229-b599-3a424e98413f&skoid=71e8fa5c-90a9-4c17-827b-14c3005164d6&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-21T21%3A28%3A19Z&ske=2025-08-22T21%3A28%3A19Z&sks=b&skv=2024-08-04&sig=kqEWjC9tYyFPDM/mCck3vDOKQuTDBP29MaiadPE0pf4%3D",
      githubLink: "https://github.com/aratiekatpure/Multi-Theme-Switcher",
      liveLink: "https://aratiekatpure.github.io/Multi-Theme-Switcher/",
    },
    {
      title: "Sadad Landing Page",
      description: "A Landing Page for demo",
      tags: ["HTML", "CSS", "JS"],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000",
      githubLink: "https://github.com/aratiekatpure/SADAD.git",
      liveLink: "http://127.0.0.1:5500/project/abc/index.html",
    },
    {
      title: "E-commerce Landing Page",
      description:
        "A responsive Landing listing page with filtering and cart functionality.",
      tags: ["React", "TypeScript", "TailwindCSS"],
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1000",
      target: "_blank",
      githubLink: "https://github.com/aratiekatpure/Ecommerce_landing_page.git",
      liveLink: "http://localhost:3000/",
    },
  ];

  const skills = [
    { name: "React.js", level: "Intermediate" },
    { name: "Next.js", level: "Beginner" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "TailwindCSS", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "HTML/CSS", level: "Intermediate" },
    { name: "Git", level: "Beginner" },
    { name: "REST APIs", level: "Beginner" },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold text-[#0f172a]">
              Portfo<span className="text-blue-600">lio</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              <li>
                <a
                  href="#home"
                  onClick={scrollToSection}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={scrollToSection}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={scrollToSection}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={scrollToSection}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={scrollToSection}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
            {/* Mobile Menu Items */}
            {isMenuOpen && (
              <ul className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md">
                <li>
                  <a
                    href="#home"
                    onClick={scrollToSection}
                    className="block px-4 py-2 text-gray-600 hover:text-blue-600"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={scrollToSection}
                    className="block px-4 py-2 text-gray-600 hover:text-blue-600"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    onClick={scrollToSection}
                    className="block px-4 py-2 text-gray-600 hover:text-blue-600"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={scrollToSection}
                    className="block px-4 py-2 text-gray-600 hover:text-blue-600"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={scrollToSection}
                    className="block px-4 py-2 text-gray-600 hover:text-blue-600"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#172554] text-white min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <h4 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              Portfolio
            </h4>
            <div className="text-xl text-blue-200">Hello, My Name is</div>
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              Arati Ekatpure
            </h1>
            <div className="text-3xl">
              And I'm a{" "}
              <TypeWriter words={["Frontend Developer", "React Developer"]} />
            </div>
            <div className="flex space-x-4 mt-8">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Hire me
              </a>
              <a
                href="https://drive.google.com/drive/folders/1Wv07URbYTgs_gjT8hL-NrR18mftNORzf"
                download="Arati-Ekatpure-CV.pdf"
                className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors"
              >
                <Download className="inline-block mr-2" size={20} />
                Download CV
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/aratiekatpure"
                className="p-2 text-blue-300 hover:text-blue-100 transition-colors"
                target="_blank"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/arati-ekatpure-531910235"
                target="_blank"
                className="p-2 text-blue-300 hover:text-blue-100 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://mail.google.com/mail"
                target="_blank"
                className="p-2 text-blue-300 hover:text-blue-100 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#0f172a]">About Me</h2>
          <div className="max-w-2xl">
            <p className="text-gray-700 mb-6">
              I'm a passionate frontend developer with a growing expertise in
              modern web technologies. With hands-on experience in React.js,
              Next.js, and TypeScript, I focus on creating responsive and
              user-friendly web applications.
            </p>
            <p className="text-gray-700">
              Currently expanding my knowledge in web development through
              hands-on projects and continuous learning. I'm particularly
              interested in frontend development and creating intuitive user
              interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#0f172a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#0f172a]">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <ContactForm />
      </section>
      {/* Footer */}
      <footer className="bg-[#0f172a] text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            Design & Built By Arati Ekatpure | © {new Date().getFullYear()} All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
