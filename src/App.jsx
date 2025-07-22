/*
  React + TailwindCSS portfolio site for Shankul Vatsa
  Features: Resume, Skills, Experience, Dark/Light Toggle, Contact Form
  Stack: React, Vite, TailwindCSS, EmailJS (for form)
*/

import { useState } from "react";
import { Sun, Moon } from "lucide-react";

const Card = ({ children, className }) => (
  <div className={`rounded-lg border p-4 shadow-md mb-4 ${className || ""}`}>
    {children}
  </div>
);

const CardContent = ({ children }) => <div>{children}</div>;

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen p-6">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Shankul Vatsa</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </header>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p>
            Staff Software Engineer with experience leading backend development of GenAI-powered systems,
            high-frequency trading infrastructure, and distributed platforms.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
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

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          <Card className="mb-4">
            <CardContent>
              <p className="font-semibold">Royal Bank of Canada — Staff Software Engineer (Apr 2025 – Present)</p>
              <ul className="list-disc ml-5">
                <li>Led backend development of GenAI-powered chatbot using LangChain, PGVector, and RAG.</li>
                <li>Built ingestion service for real-time vector store updates.</li>
                <li>Implemented feedback mechanism for chatbot improvements.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardContent>
              <p className="font-semibold">Goldman Sachs — Vice President (SDE-3) (Jul 2020 – Apr 2025)</p>
              <ul className="list-disc ml-5">
                <li>Developed a throttling system to reduce system alert overload.</li>
                <li>Built scalable low-latency trading systems and alert processing via Apache Flink.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Resume</h2>
          <a
              href="/resume.pdf"
              download="Shankul_Vatsa_Resume.pdf"
              className="text-blue-500 underline"
          >
            Download Resume (PDF)
          </a>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <form action="https://formspree.io/f/xqkgyzdj" method="POST" className="grid gap-4 max-w-md">
            <input type="text" name="name" placeholder="Your Name" required className="p-2 border rounded" />
            <input type="email" name="email" placeholder="Your Email" required className="p-2 border rounded" />
            <textarea name="message" placeholder="Your Message" required className="p-2 border rounded" />
            <button type="submit" className="bg-blue-600 text-white py-2 rounded">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  );
}
