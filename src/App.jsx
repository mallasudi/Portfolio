// src/App.jsx
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      {/* Navbar */}
      <nav className="fixed w-full bg-black/50 backdrop-blur-md p-4 flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold text-pink-400">Suniti</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-pink-400 transition">About</a>
          <a href="#skills" className="hover:text-pink-400 transition">Skills</a>
          <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
          <a href="#certifications" className="hover:text-pink-400 transition">Certifications</a>
          <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I’m <span className="text-pink-400">Suniti Malla</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl max-w-2xl"
        >
          Full Stack Developer & BSc Hons Computing Student
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-4 text-lg max-w-2xl text-white/80"
        >
          Passionate about building scalable full-stack applications with a focus on modern web
          technologies and user experience.
        </motion.p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800 text-center">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-6"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          I’m a student at Islington College with strong skills in Java, Python, JavaScript, React,
          and Tailwind. I love crafting user-friendly applications and solving complex problems with
          full-stack technologies.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {["Java", "Python", "React", "JavaScript", "SQL", "Tailwind", "Node.js"].map(
            (skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: 3 }}
                className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-pink-500/50 transition"
              >
                {skill}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Furniture Management System",
              link: "https://github.com/mallasudi/Furniture-Management.git",
            },
            {
              name: "Full-Stack E-commerce Website",
              link: "https://github.com/tsuhana/STyle_KAtha.git",
            },
            {
              name: "GUI-Based OOP Project",
              link: "https://github.com/mallasudi/GUI.git",
            },
            {
              name: "Customer Service Request Analysis",
              link: "https://github.com/mallasudi/Data-Analysis.git",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-700 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <a
                href={project.link}
                target="_blank"
                className="text-pink-400 underline mt-2 inline-block"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { title: "AWS Academy Cloud Foundations", url: "https://www.credly.com/go/C4C6Z54J" },
            { title: "AWS Academy Machine Learning Foundations", url: "https://www.credly.com/go/49rJNqO6" },
            { title: "AWS Academy ML for NLP", url: "https://www.credly.com/go/49rJNqO6" },
            { title: "AWS Academy Data Engineering", url: "https://www.credly.com/go/1weSjqNt" },
          ].map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="p-6 bg-gray-700 rounded-lg shadow hover:shadow-pink-500/50 transition"
            >
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <a
                href={cert.url}
                target="_blank"
                className="text-pink-400 underline mt-2 inline-block"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Contact Me
        </motion.h2>
        <p>📍 Baneshwor, Kathmandu</p>
        <p>📞 9814620458</p>
        <p>📧 suniti.malla08@gmail.com</p>
        <p className="mt-4">
          <a
            href="https://github.com/mallasudi"
            target="_blank"
            className="text-pink-400 underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            className="text-pink-400 underline"
          >
            LinkedIn
          </a>
        </p>
      </section>
    </div>
  );
}