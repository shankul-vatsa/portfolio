import { useState } from "react";
import { Sun, Moon, Github, Linkedin } from "lucide-react";

const Card = ({ children, className }) => (
  <div className={`rounded-lg border p-4 shadow-md mb-4 ${className || ""}`}>{children}</div>
);
const CardContent = ({ children }) => <div>{children}</div>;

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen font-sans">
        {/* Navbar */}
        <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-sm flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">Shankul Vatsa</h1>
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
          <h2 className="text-4xl font-bold mb-2">Hi, I'm Shankul Vatsa 👋</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Staff Software Engineer | Backend Systems | GenAI & RAG | Distributed Systems
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/resume.pdf" download className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Download CV
            </a>
            <a href="#contact" className="border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white">
              Contact Me
            </a>
          </div>
        </section>

        {/* About */}
        <section className="max-w-3xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">About</h2>
          <p>
            I’m a Staff Software Engineer with a passion for building scalable backend systems. I specialize in GenAI-driven architectures, real-time processing, and distributed systems using Java, Kafka, LangChain, and PostgreSQL. My experience spans fintech, AI, and cloud-native platforms.
          </p>
        </section>

        {/* Skills */}
        <section className="max-w-3xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <li>Java</li>
            <li>React</li>
            <li>LangChain</li>
            <li>Kafka</li>
            <li>Redis</li>
            <li>PostgreSQL</li>
            <li>Spring</li>
            <li>Kubernetes</li>
            <li>Docker</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="max-w-3xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Experience</h2>
          <Card>
            <CardContent>
              <p className="font-semibold">Royal Bank of Canada — Staff Software Engineer (Apr 2025 – Present)</p>
              <ul className="list-disc ml-5">
                <li>Led GenAI chatbot backend using LangChain, PGVector, and RAG.</li>
                <li>Built real-time ingestion service for vector store updates.</li>
                <li>Integrated feedback mechanisms for iterative learning.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="font-semibold">Goldman Sachs — Vice President (SDE-3) (Jul 2020 – Apr 2025)</p>
              <ul className="list-disc ml-5">
                <li>Designed low-latency trading platform & alert throttling system.</li>
                <li>Streamlined alerts using Apache Flink and Kafka.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-3xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Contact</h2>
          <form action="https://formspree.io/f/xqkgyzdj" method="POST" className="grid gap-4">
            <input type="text" name="name" placeholder="Your Name" required className="p-2 border rounded bg-white dark:bg-gray-800" />
            <input type="email" name="email" placeholder="Your Email" required className="p-2 border rounded bg-white dark:bg-gray-800" />
            <textarea name="message" placeholder="Your Message" required className="p-2 border rounded bg-white dark:bg-gray-800" />
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Send Message</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Shankul Vatsa. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
