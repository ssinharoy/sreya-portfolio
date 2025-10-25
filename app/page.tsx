"use client";

import { Linkedin, Mail, Github, Twitter, Award, Users, Target, Zap, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

// ============================================================================
// WORK HISTORY DATA - Edit this section to add or update your work experience
// ============================================================================
// To add a new job:
// 1. Copy an existing entry
// 2. Update the id to be unique (increment the number)
// 3. Fill in all fields with your job details
// 4. Add as many positions and technologies as needed
// ============================================================================
const workHistory = [
  {
    id: 1, // Unique identifier for this job
    dateRange: "2024 — PRESENT", // Date range (use em dash: —)
    jobTitle: "Senior Frontend Engineer, Accessibility", // Your job title
    company: "Klaviyo", // Company name
    companyUrl: "https://www.klaviyo.com", // Company website URL
    positions: ["Senior Engineer", "Engineer"], // Sub-positions (optional, can be empty array [])
    description: "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "TypeScript", "React", "Storybook"] // Tech stack used
  },
  {
    id: 2,
    dateRange: "2018 — 2024",
    jobTitle: "Lead Engineer",
    company: "Upstatement",
    companyUrl: "https://www.upstatement.com",
    positions: ["Senior Engineer", "Engineer"],
    description: "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    technologies: ["JavaScript", "TypeScript", "HTML & SCSS", "React", "Next.js", "React Native", "WordPress", "Contentful", "Node.js", "PHP"]
  }
  // Add more jobs here by copying the structure above
];

export default function Home() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Gaming-style background effects */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(156,146,172,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="fixed top-20 -left-40 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      {/* Header */}
      <header className="relative z-10 border-b-2 border-cyan-400/30 bg-slate-900/80 backdrop-blur-md shadow-lg shadow-cyan-500/10">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              Sreya Sinha Roy
            </h1>
            <nav className="hidden md:flex space-x-6">
              {["Home", "About", "Blog", "Social", "Contact"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="relative px-4 py-2 text-sm font-semibold text-cyan-300 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-8 lg:gap-12 items-start">
          {/* Left Column - Profile Card */}
          <div className="space-y-6 lg:sticky lg:top-6">
            {/* Profile Card */}
            <div className="bg-slate-800/60 backdrop-blur-xl border-2 border-cyan-400/30 rounded-2xl p-8 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300">
              {/* Profile Picture */}
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto relative">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-spin-slow blur-md"></div>
                  
                  {/* Main avatar container - Save your photo as profile.jpg in the public folder */}
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                      {!imageError ? (
                        <img 
                          src="/profile.jpg"
                          alt="Sreya Sinha Roy"
                          className="w-full h-full object-cover"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 text-white">
                          SR
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Experience badge */}
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 text-slate-900 px-4 py-2 rounded-full font-bold text-sm shadow-xl animate-pulse">
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      16+ Years
                    </span>
                  </div>
                </div>
              </div>

              {/* Name and Title */}
              <div className="text-center space-y-3 mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Sreya Sinha Roy
                </h2>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 rounded-lg">
                  <p className="text-lg font-semibold text-cyan-300">Sr. QA Engineer & Team Leader</p>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  16+ years building QA teams & delivering high-quality products worldwide
                </p>
              </div>

              {/* Core Expertise */}
              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Core Expertise
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: "QA Engineering", icon: "🎯" },
                    { name: "Team Leadership", icon: "👥" }, 
                    { name: "Process Automation", icon: "⚙️" },
                    { name: "Strategic Planning", icon: "📊" },
                    { name: "Cross-team Collab", icon: "🤝" },
                    { name: "Quality Assurance", icon: "✅" }
                  ].map((skill) => (
                    <div 
                      key={skill.name} 
                      className="relative bg-slate-900/50 border border-cyan-400/30 rounded-lg p-3 text-center hover:bg-gradient-to-br hover:from-cyan-600/20 hover:to-purple-600/20 hover:border-cyan-400/60 hover:scale-105 transition-all duration-300 cursor-pointer group"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <span className="text-lg mb-1 block group-hover:scale-125 transition-transform">{skill.icon}</span>
                      <span className="text-xs font-medium text-slate-300 group-hover:text-cyan-200">{skill.name}</span>
                      {hoveredSkill === skill.name && (
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Gaming-style separator */}
              <div className="flex items-center gap-2 my-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                <Zap className="w-4 h-4 text-cyan-400" />
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
              </div>

              {/* Contact Button */}
              <div className="space-y-4 mb-6">
                <button className="w-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 flex items-center justify-center gap-2 border-2 border-cyan-400/50">
                  <Mail className="w-5 h-5" />
                  <span>Contact for Opportunities</span>
                </button>
                <p className="text-center text-slate-400 text-sm">sreya.sinharoy@example.com</p>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-xs text-center text-slate-400 mb-3 font-semibold">Connect With Me</p>
                <div className="flex justify-center gap-3">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/sreya-sinha-roy", color: "hover:bg-blue-600" },
                    { icon: Github, href: "#", color: "hover:bg-slate-600" },
                    { icon: Twitter, href: "#", color: "hover:bg-sky-500" }
                  ].map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`bg-slate-900/70 ${social.color} p-3 rounded-lg transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-cyan-400/50`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Courses & Education Card */}
            <div className="bg-gradient-to-br from-slate-800/60 to-purple-900/40 backdrop-blur-xl border-2 border-purple-400/30 rounded-2xl p-6 shadow-2xl shadow-purple-500/20">
              <h3 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Courses & Education
              </h3>
              <p className="text-slate-300 text-sm">
                Passionate about continuous learning and knowledge sharing in QA engineering and software quality practices.
              </p>
            </div>
          </div>

          {/* Right Column - About & Achievements */}
          <div className="space-y-8">
            {/* About Section */}
            <div className="bg-slate-800/40 backdrop-blur-xl border-2 border-cyan-400/30 rounded-2xl p-8 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full"></div>
                <h3 className="text-4xl font-bold text-cyan-400">About</h3>
              </div>
              <div className="space-y-4 text-slate-200 leading-relaxed text-base">
                <p className="text-lg">
                  Sreya is a <span className="text-cyan-300 font-semibold">Sr. QA Engineer</span> with <span className="text-purple-300 font-semibold">16+ years</span> of diverse industry experience, from complex, 
                  large scale public sector IT projects to E-Commerce startups. A natural leader and driver 
                  for change, I have a proven track record of establishing and building QA teams from the 
                  ground up and identifying value-add opportunities for QA/Business Process automation.
                </p>
                <p>
                  I bring <span className="text-cyan-300 font-semibold">high energy, passion, and a keen strategic mind</span> to the work environment. I specialize 
                  in delivering high quality work products by taking a holistic end-user centric approach and 
                  ensuring cross-team collaboration towards a common vision.
                </p>
                <p>
                  My expertise spans across various domains including <span className="text-purple-300 font-semibold">public sector IT, e-commerce, and startup 
                  environments</span>, where I have successfully led QA initiatives and built robust quality assurance 
                  frameworks that drive business value.
                </p>
              </div>
            </div>

            {/* Products/Projects Section */}
            <div className="bg-slate-800/40 backdrop-blur-xl border-2 border-purple-400/30 rounded-2xl p-8 shadow-2xl shadow-purple-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-600 rounded-full"></div>
                <h3 className="text-4xl font-bold text-purple-400">Key Achievements</h3>
              </div>
              
              <div className="space-y-5">
                {[
                  {
                    title: "Team Building & Leadership",
                    description: "Established and built QA teams from the ground up across multiple organizations, creating frameworks for sustainable growth and excellence.",
                    icon: Users,
                    gradient: "from-cyan-500 to-blue-500",
                    stats: "Multiple Teams Built"
                  },
                  {
                    title: "Process Automation",
                    description: "Identified and implemented value-add opportunities for QA/Business Process automation, significantly improving efficiency and quality outcomes.",
                    icon: Zap,
                    gradient: "from-purple-500 to-pink-500",
                    stats: "Improved Efficiency"
                  },
                  {
                    title: "Cross-team Collaboration",
                    description: "Fostered high-energy, passionate work environments with strategic thinking and end-user centric approaches to quality assurance.",
                    icon: Target,
                    gradient: "from-green-500 to-cyan-500",
                    stats: "Enhanced Collaboration"
                  }
                ].map((achievement, idx) => (
                  <div 
                    key={idx}
                    className="group bg-slate-900/60 border-2 border-cyan-400/20 rounded-xl p-6 hover:bg-slate-800/70 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-lg hover:shadow-cyan-400/30"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${achievement.gradient} shadow-lg flex-shrink-0`}>
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                            {achievement.title}
                          </h4>
                          <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/30 whitespace-nowrap">
                            {achievement.stats}
                          </span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work History Section */}
            <div className="bg-slate-800/40 backdrop-blur-xl border-2 border-cyan-400/30 rounded-2xl p-8 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full"></div>
                <h3 className="text-4xl font-bold text-cyan-400">Work History</h3>
              </div>
              
              <div className="space-y-12">
                {workHistory.map((job) => (
                  <div key={job.id} className="group">
                    <div className="grid grid-cols-[180px_1fr] gap-6">
                      {/* Left Column - Date Range */}
                      <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider pt-1">
                        {job.dateRange}
                      </div>
                      
                      {/* Right Column - Job Details */}
                      <div className="space-y-4">
                        {/* Job Title & Company */}
                        <div>
                          <a 
                            href={job.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 group/link"
                          >
                            <h4 className="text-xl font-bold text-slate-100 group-hover/link:text-cyan-300 transition-colors">
                              {job.jobTitle} · {job.company}
                            </h4>
                            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/link:text-cyan-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                          </a>
                          
                          {/* Position Subtitles */}
                          {job.positions && job.positions.length > 0 && (
                            <div className="mt-2 space-y-1">
                              {job.positions.map((position, idx) => (
                                <p key={idx} className="text-sm text-slate-400">
                                  {position}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        {/* Description */}
                        <p className="text-slate-300 leading-relaxed text-sm">
                          {job.description}
                        </p>
                        
                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-cyan-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur-xl border-2 border-cyan-400/20 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-cyan-300 mb-2">Looking for QA Leadership?</h4>
                  <p className="text-slate-300 text-sm">
                    Open to opportunities in QA leadership, team building, and process optimization.
                  </p>
                </div>
                <div className="text-6xl">🎮</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Gaming-style footer */}
      <footer className="relative z-10 border-t-2 border-cyan-400/20 bg-slate-900/80 backdrop-blur-md shadow-lg shadow-cyan-500/5 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center space-y-2">
            <p className="text-slate-300 font-medium">© 2025 Sreya Sinha Roy</p>
            <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
              Built with <span className="text-cyan-400">Next.js</span> & <span className="text-purple-400">Gaming Vibes</span> 🎮✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
