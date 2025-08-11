// Portfolio.jsx — Bhanu Prakash Portfolio with Animations and GitHub-style dark theme
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React and Tailwind CSS to showcase my skills and projects.',
    link: '#',
  },
  {
    title: 'Task Manager App',
    description: 'MERN stack CRUD application for managing daily tasks efficiently.',
    link: '#',
  },
  {
    title: 'E-commerce Store',
    description: 'Full-stack online store with Stripe integration for payments.',
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/profile.jpg" alt="avatar" className="w-10 h-10 rounded-full ring-1 ring-[#30363d]" />
          <h1 className="text-lg font-semibold font-mono">BhanuPrk</h1>
        </div>
        <nav className="space-x-4 text-sm text-[#8b949e]">
          <a href="#about" className="hover:underline text-[#c9d1d9]">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-10">
        {/* Left column - profile */}
        <aside className="md:col-span-1">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="p-5 bg-[#010409] border border-[#21262d] rounded-lg">
            <div className="flex items-center gap-4">
              <img src="/profile.jpg" alt="Bhanu" className="w-20 h-20 rounded-full ring-1 ring-[#30363d] object-cover" />
              <div>
                <h2 className="font-mono text-xl font-semibold">Bhanu Prakash</h2>
                <p className="text-sm text-[#8b949e]">MERN Stack Developer</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-[#9da7b0]">
              I’m Bhanu, a MERN stack developer (BCA) based in Hyderabad. I build scalable and user-friendly web apps. Always ready to work.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-[#8b949e]">
              <div>
                <div className="text-[#8b949e]">Email</div>
                <a className="text-[#58a6ff] break-words" href="mailto:patnambhanuprakash@gmail.com">patnambhanuprakash@gmail.com</a>
              </div>
              <div>
                <div className="text-[#8b949e]">Location</div>
                <div>Hyderabad, India</div>
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              <a href="https://github.com/Bhanu280801" className="text-sm text-[#8b949e] hover:text-[#58a6ff]">GitHub</a>
              <a href="https://www.linkedin.com/in/bhanu-prakash-50a468143" className="text-sm text-[#8b949e] hover:text-[#58a6ff]">LinkedIn</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-6 p-5 bg-[#010409] border border-[#21262d] rounded-lg">
            <h3 className="text-sm font-semibold text-[#c9d1d9] font-mono mb-3">Stats</h3>
            <div className="flex gap-4 text-xs text-[#8b949e]">
              <div>
                <div className="text-[#8b949e]">Repos</div>
                <div className="font-semibold">12</div>
              </div>
              <div>
                <div className="text-[#8b949e]">Followers</div>
                <div className="font-semibold">34</div>
              </div>
            </div>
          </motion.div>
        </aside>

        {/* Right column - content */}
        <section className="md:col-span-2 space-y-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="p-5 bg-[#010409] border border-[#21262d] rounded-lg">
            <h3 className="text-lg font-semibold font-mono">Pinned</h3>

            <div className="mt-4 grid md:grid-cols-3 gap-4">
              {projects.map((p, i) => (
                <motion.a key={p.title} href={p.link} initial={{ opacity: 0, y: 8 }} whileHover={{ scale: 1.02 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="block p-4 bg-[#0d1117] border border-[#21262d] rounded-md hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-mono text-[#58a6ff]">📦 {p.title}</div>
                    <div className="text-xs text-[#8b949e]">JavaScript</div>
                  </div>
                  <p className="mt-2 text-sm text-[#9da7b0]">{p.description}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div id="projects" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-5 bg-[#010409] border border-[#21262d] rounded-lg">
            <h3 className="text-lg font-semibold font-mono">Projects</h3>
            <div className="mt-4 space-y-3">
              {projects.map((p, i) => (
                <motion.div key={p.title} className="p-3 border border-[#21262d] rounded-md bg-[#0d1117]" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-[#c9d1d9]">{p.title}</h4>
                    <a href={p.link} className="text-sm text-[#58a6ff]">View →</a>
                  </div>
                  <p className="mt-1 text-sm text-[#9da7b0]">{p.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div id="contact" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-5 bg-[#010409] border border-[#21262d] rounded-lg">
            <h3 className="text-lg font-semibold font-mono">Contact</h3>
            <p className="mt-2 text-sm text-[#9da7b0]">Prefer email? <a href="mailto:patnambhanuprakash@gmail.com" className="text-[#58a6ff]">patnambhanuprakash@gmail.com</a></p>
            <form action="https://formspree.io/f/your-form-id" method="POST" className="mt-4 grid gap-3">
              <input name="name" placeholder="Your name" required className="p-2 rounded bg-[#010409] border border-[#21262d] text-sm" />
              <input name="email" type="email" placeholder="Your email" required className="p-2 rounded bg-[#010409] border border-[#21262d] text-sm" />
              <textarea name="message" rows="4" placeholder="Message" required className="p-2 rounded bg-[#010409] border border-[#21262d] text-sm"></textarea>
              <button type="submit" className="px-3 py-2 bg-[#161b22] rounded text-sm text-[#c9d1d9] hover:bg-[#21262d]">Send message</button>
            </form>
          </motion.div>
        </section>
      </main>
      <footer className="max-w-6xl mx-auto p-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Bhanu Prakash — <a href="https://github.com/Bhanu280801" className="text-[#58a6ff]">GitHub</a>
      </footer>
    </div>
  );
}
