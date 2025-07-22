import { useState, useEffect } from "react";
import { Sun, Moon, Github, Linkedin, ExternalLink } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import "./index.css";

const Card = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className={`rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 shadow-lg mb-6 ${className || ""}`}
  >
    {children}
  </motion.div>
);
const CardContent = ({ children }) => <div>{children}</div>;

const ProjectCard = ({ title, description, tech, link }) => (
  <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border rounded-xl p-5 shadow-md hover:shadow-lg transition"
  >
    <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
      {title}
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800">
          <ExternalLink className="w-4 h-4 inline" />
        </a>
      )}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{description}</p>
    <div className="text-xs text-gray-500">{tech}</div>
  </motion.div>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
      const root = window.document.documentElement;
      if (darkMode) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
  }, [darkMode]);

  return (
    <div className="font-sans scroll-smooth">
      <main className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white min-h-screen">
        {/* Navbar */}
        <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">Shankul Vatsa</h1>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">About</ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Skills</ScrollLink>
            <ScrollLink to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Experience</ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Projects</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Contact</ScrollLink>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/shankulvatsa" target="_blank" rel="noreferrer">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/shankul-vatsa" target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
            <button onClick={() => setDarkMode(!darkMode)} className="p-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 py-16 text-center">
          <motion.img
            src="/photo_shankul.jpg"
            alt="Shankul Vatsa"
            className="w-36 h-36 mx-auto rounded-full mb-6 border-4 border-blue-500 shadow-xl transition-all duration-300 ring ring-offset-2 ring-blue-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.h2
            className="text-4xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm Shankul Vatsa 👋
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Staff Software Engineer | Backend Systems | GenAI & RAG | Distributed Systems
          </motion.p>
          <motion.div
            className="mt-6 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="/resume.pdf" download="Shankul_Vatsa_Resume.pdf" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Download CV
            </a>
            <ScrollLink to="contact" smooth={true} duration={500} className="border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white cursor-pointer">
              Contact Me
            </ScrollLink>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="bg-gray-50 dark:bg-gray-900 py-16">
            <div className="max-w-3xl mx-auto px-4">
              <motion.h2
                className="text-3xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About
              </motion.h2>
              <motion.p
                className="text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                I’m a Staff Software Engineer with a passion for building scalable backend systems. I specialize in GenAI-driven architectures, real-time processing, and distributed systems using Java, Kafka, LangChain, and PostgreSQL. My experience spans fintech, AI, and cloud-native platforms.
              </motion.p>
            </div>
        </section>

        {/* Skills */}
        <section id="skills" className="bg-white dark:bg-gray-800 py-16">
            <div className="max-w-3xl mx-auto px-4">
              <motion.h2
                className="text-3xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Skills
              </motion.h2>
              <motion.ul
                className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-800 dark:text-gray-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <li>Java</li>
                <li>React</li>
                <li>LangChain</li>
                <li>Kafka</li>
                <li>Redis</li>
                <li>PostgreSQL</li>
                <li>Spring</li>
                <li>Kubernetes</li>
                <li>Docker</li>
              </motion.ul>
            </div>
        </section>

        {/* Experience */}
        <section id="experience" className="bg-gray-50 dark:bg-gray-900 py-16">
            <div className="max-w-3xl mx-auto px-4">
              <motion.h2
                className="text-3xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Experience
              </motion.h2>
              <Card>
                <CardContent>
                  <p className="font-semibold">Royal Bank of Canada — Staff Software Engineer (Apr 2025 – Present)</p>
                  <ul className="list-disc ml-5 mt-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>Led GenAI chatbot backend using LangChain, PGVector, and RAG.</li>
                    <li>Built real-time ingestion service for vector store updates.</li>
                    <li>Integrated feedback mechanisms for iterative learning.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <p className="font-semibold">Goldman Sachs — Vice President (SDE-3) (Jul 2020 – Apr 2025)</p>
                  <ul className="list-disc ml-5 mt-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>Designed low-latency trading platform & alert throttling system.</li>
                    <li>Streamlined alerts using Apache Flink and Kafka.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
        </section>

        {/* Projects */}
        <section id="projects" className="bg-white dark:bg-gray-800 py-16">
            <div className="max-w-4xl mx-auto px-4">
              <motion.h2
                className="text-3xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Project
              </motion.h2>
              <div className="grid gap-6 md:grid-cols-2">
                <ProjectCard
                  title="GenAI Chatbot"
                  description="Built a LangChain-based chatbot using RAG and PGVector to provide accurate contextual responses."
                  tech="LangChain, PostgreSQL, PGVector, React"
                  link="https://github.com/shankulvatsa/genai-chatbot"
                />
                <ProjectCard
                  title="Low Latency Trading Alerts"
                  description="Streamlined real-time alerting pipeline using Apache Flink and Kafka, throttled high-volume trading system notifications."
                  tech="Apache Flink, Kafka, Java"
                  link=""
                />
              </div>
            </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-gray-50 dark:bg-gray-900 py-16">
            <div className="max-w-xl mx-auto px-4 text-center">
              <motion.h2
                className="text-3xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Contact
              </motion.h2>
              <form
                action="https://formspree.io/f/xdkdekgr"
                method="POST"
                className="space-y-4"
              >
                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>
              </form>
            </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Shankul Vatsa. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
