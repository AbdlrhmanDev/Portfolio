"use client";

import Image from "next/image";
import { Mail, Github, Linkedin, Twitter, MapPin, Send, ChevronRight, Code2, Database, Brain, Server, Cloud, Wrench, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const imgImageWorkspace = "https://www.figma.com/api/mcp/asset/f52b2998-b75f-4d70-a0b8-4ec6a34a4da2";
const imgVector1 = "https://www.figma.com/api/mcp/asset/34b8ce98-aae5-453a-bff6-88c4fde08676";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/ff17016b-c5b1-42fe-b4f7-585a8eae3573";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/1ea46d9d-e817-4ef3-8347-4067cfcc315e";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/f4cb0cae-b7f9-4225-b414-bb3c844d5997";
const imgVector3 = "https://www.figma.com/api/mcp/asset/07efcc6b-fc92-457e-945e-d8d730474136";
const imgVector5 = "https://www.figma.com/api/mcp/asset/451a7a05-8ef9-429e-b16f-b9f339e06400";
const imgVector7 = "https://www.figma.com/api/mcp/asset/f932f805-ebf2-4b86-a07e-147d32d9440e";
const imgVector10 = "https://www.figma.com/api/mcp/asset/7c3fcaa9-a490-47e1-97d2-e25211b123fd";
// Local images
const imgJobPortal = '/images/imgJobPortal.png';
const Nike = '/images/Nike.png';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

const lineAnimation = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "100%", opacity: 1 },
  transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#0a0a0f] min-h-screen w-full overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,15,0.8)] backdrop-blur-md border-b border-[rgba(0,255,255,0.3)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-1 sm:gap-2 text-base sm:text-xl font-normal">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded flex items-center justify-center border border-[cyan] bg-[rgba(0,255,255,0.1)]">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[cyan]" />
              </div>
              <span className="text-[cyan] text-sm sm:text-base">Abdlrhman</span>
              <span className="text-[magenta] text-sm sm:text-base"> // </span>
              <span className="text-[cyan] text-sm sm:text-base">DEV</span>
            </a>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#home" className="text-[#e0e0ff] hover:text-[cyan] transition-colors text-sm lg:text-base">Home</a>
              <a href="#about" className="text-[#e0e0ff] hover:text-[cyan] transition-colors text-sm lg:text-base">About</a>
              <a href="#projects" className="text-[#e0e0ff] hover:text-[cyan] transition-colors text-sm lg:text-base">Projects</a>
              <a href="#contact" className="text-[#e0e0ff] hover:text-[cyan] transition-colors text-sm lg:text-base">Contact</a>
              <a href="#contact" className="bg-[magenta] border border-[rgba(0,255,255,0.3)] px-3 lg:px-4 py-1.5 lg:py-2 rounded text-black hover:bg-[rgba(255,0,255,0.9)] transition-colors text-sm lg:text-base">
                Hire Me
              </a>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#e0e0ff] hover:text-[cyan] transition-colors p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-[rgba(0,255,255,0.3)]"
            >
              <div className="flex flex-col gap-4 pt-4">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-[#e0e0ff] hover:text-[cyan] transition-colors">Home</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-[#e0e0ff] hover:text-[cyan] transition-colors">About</a>
                <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-[#e0e0ff] hover:text-[cyan] transition-colors">Projects</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-[#e0e0ff] hover:text-[cyan] transition-colors">Contact</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-[magenta] border border-[rgba(0,255,255,0.3)] px-4 py-2 rounded text-black hover:bg-[rgba(255,0,255,0.9)] transition-colors text-center">
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24">
        {/* Background Effects */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 opacity-30" 
          style={{ backgroundImage: "linear-gradient(180deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 0%)" }} 
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="hidden sm:block absolute w-48 h-48 sm:w-64 sm:h-64 bg-[rgba(0,255,255,0.1)] rounded-full blur-3xl opacity-20 left-[5%] top-[5%]" 
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="hidden sm:block absolute w-60 h-60 sm:w-80 sm:h-80 bg-[rgba(255,0,255,0.1)] rounded-full blur-3xl opacity-20 right-[15%] top-[60%]" 
        />
        
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          {/* Available for work badge */}
          <motion.div 
            variants={fadeInUp}
            className="mb-6 sm:mb-8 flex justify-center"
          >
            <div className="bg-[rgba(1,255,255,0.05)] border-2 border-[rgba(1,255,255,0.5)] rounded-full px-4 sm:px-6 py-1.5 sm:py-2 flex items-center gap-2">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[cyan] animate-pulse" />
              <p className="text-[cyan] text-xs sm:text-sm">Available for work</p>
            </div>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-normal mb-6 sm:mb-8 tracking-tight leading-tight"
          >
            <span className="text-[cyan]">FULL</span>
            <span className="text-[magenta]"> // </span>
            <span className="text-[#e0e0ff]">STACK</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.div 
            variants={fadeInUp}
            className="mb-6 sm:mb-8 space-y-2 px-2"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-[#e0e0ff] opacity-80">
              Computer Scientist & Data-AI Engineer
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#e0e0ff] opacity-60 max-w-2xl mx-auto px-2">
              Building data-driven web apps end-to-end—from APIs to polished UIs. Shipping features that exceed expectations, powered by ML & clean code.
            </p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-[cyan] border-2 border-[cyan] px-6 sm:px-8 py-2.5 sm:py-3 rounded text-black hover:bg-[rgba(0,255,255,0.9)] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span>View Projects</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-[#0a0a0f] border-2 border-[magenta] px-6 sm:px-8 py-2.5 sm:py-3 rounded text-[#e0e0ff] hover:bg-[rgba(255,0,255,0.1)] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span>Contact Me</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(180deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 0%)" }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[cyan] to-transparent" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[cyan] whitespace-nowrap px-2">{`<ABOUT />`}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[cyan] to-transparent" />
          </motion.div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto px-2"
          >
            <p className="text-base sm:text-lg md:text-xl text-[#e0e0ff] opacity-80">
              I'm a <span className="text-[magenta]">computer scientist</span> and <span className="text-[cyan]">full-stack/data-AI engineer</span> who builds data-driven web applications end-to-end. From APIs to polished UIs, I care about clean, efficient code and clear UX—shipping features that exceed expectations, often powered by ML.
            </p>
          </motion.div>

          {/* Skill Cards Grid */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16"
          >
            {/* Frontend */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[rgba(26,26,46,0.3)] border-2 border-[cyan] rounded p-4 sm:p-6 lg:p-8 relative group"
            >
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "calc(100% - 0.5rem)", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                whileHover={{ boxShadow: "0 0 10px rgba(0,255,255,0.5)" }}
                className="absolute top-2 left-2 h-1 bg-[cyan] rounded-t"
              />
              <div className="w-14 h-14 rounded mb-4 bg-[rgba(0,255,255,0.1)] flex items-center justify-center">
                <Code2 className="w-8 h-8 text-[cyan]" />
              </div>
              <h3 className="text-[cyan] text-lg mb-2">Frontend</h3>
              <p className="text-[#e0e0ff] opacity-70 text-sm">
                React, Next.js, TypeScript, Tailwind CSS, JavaScript
              </p>
            </motion.div>

            {/* Backend */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[rgba(26,26,46,0.3)] border-2 border-[magenta] rounded p-4 sm:p-6 lg:p-8 relative group"
            >
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "calc(100% - 0.5rem)", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                whileHover={{ boxShadow: "0 0 10px rgba(255,0,255,0.5)" }}
                className="absolute top-2 left-2 h-1 bg-[magenta] rounded-t"
              />
              <div className="w-14 h-14 rounded mb-4 bg-[rgba(255,0,255,0.1)] flex items-center justify-center">
                <Server className="w-8 h-8 text-[magenta]" />
              </div>
              <h3 className="text-[magenta] text-lg mb-2">Backend</h3>
              <p className="text-[#e0e0ff] opacity-70 text-sm">
                Laravel (PHP), Node.js/Express, ASP.NET Core (C#)
              </p>
            </motion.div>

            {/* Data & AI */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[rgba(26,26,46,0.3)] border-2 border-[#00ff88] rounded p-4 sm:p-6 lg:p-8 relative group"
            >
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "calc(100% - 0.5rem)", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                whileHover={{ boxShadow: "0 0 10px rgba(0,255,136,0.5)" }}
                className="absolute top-2 left-2 h-1 bg-[#00ff88] rounded-t"
              />
              <div className="w-14 h-14 rounded mb-4 bg-[rgba(0,255,136,0.1)] flex items-center justify-center">
                <Brain className="w-8 h-8 text-[#00ff88]" />
              </div>
              <h3 className="text-[#00ff88] text-lg mb-2">Data & AI</h3>
              <p className="text-[#e0e0ff] opacity-70 text-sm">
                Python, pandas, scikit-learn, LLM/RAG, Vector Search
              </p>
            </motion.div>

            {/* Data Engineering */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[rgba(26,26,46,0.3)] border-2 border-[#ff0088] rounded p-4 sm:p-6 lg:p-8 relative group"
            >
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "calc(100% - 0.5rem)", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                whileHover={{ boxShadow: "0 0 10px rgba(255,0,136,0.5)" }}
                className="absolute top-2 left-2 h-1 bg-[#ff0088] rounded-t"
              />
              <div className="w-14 h-14 rounded mb-4 bg-[rgba(255,0,136,0.1)] flex items-center justify-center">
                <Database className="w-8 h-8 text-[#ff0088]" />
              </div>
              <h3 className="text-[#ff0088] text-lg mb-2">Data Engineering</h3>
              <p className="text-[#e0e0ff] opacity-70 text-sm">
                ETL/ELT, PostgreSQL, SQL, Snowflake, Data Pipelines
              </p>
            </motion.div>

            {/* DevOps & Cloud */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[rgba(26,26,46,0.3)] border-2 border-[cyan] rounded p-4 sm:p-6 lg:p-8 relative group"
            >
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "calc(100% - 0.5rem)", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                whileHover={{ boxShadow: "0 0 10px rgba(0,255,255,0.5)" }}
                className="absolute top-2 left-2 h-1 bg-[cyan] rounded-t"
              />
              <div className="w-14 h-14 rounded mb-4 bg-[rgba(0,255,255,0.1)] flex items-center justify-center">
                <Cloud className="w-8 h-8 text-[cyan]" />
              </div>
              <h3 className="text-[cyan] text-lg mb-2">DevOps & Cloud</h3>
              <p className="text-[#e0e0ff] opacity-70 text-sm">
                Docker, Kubernetes, AWS, Vercel, CI/CD
              </p>
            </motion.div>

            {/* Tools & Platforms */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[rgba(26,26,46,0.3)] border-2 border-[magenta] rounded p-4 sm:p-6 lg:p-8 relative group"
            >
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "calc(100% - 0.5rem)", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                whileHover={{ boxShadow: "0 0 10px rgba(255,0,255,0.5)" }}
                className="absolute top-2 left-2 h-1 bg-[magenta] rounded-t"
              />
              <div className="w-14 h-14 rounded mb-4 bg-[rgba(255,0,255,0.1)] flex items-center justify-center">
                <Wrench className="w-8 h-8 text-[magenta]" />
              </div>
              <h3 className="text-[magenta] text-lg mb-2">Tools & Platforms</h3>
              <p className="text-[#e0e0ff] opacity-70 text-sm">
                Git, VS Code, Postman, Swagger, Jupyter, Figma
              </p>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
          >
            <motion.div 
              variants={staggerItem}
              whileHover={{ scale: 1.1 }}
              className="bg-[rgba(26,26,46,0.2)] border-2 border-[#e0e0ff] rounded p-4 sm:p-6 lg:p-8 text-center"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl text-[cyan] mb-1 sm:mb-2">3</p>
              <p className="text-[#e0e0ff] opacity-60 text-xs sm:text-sm">Associate Tracks</p>
            </motion.div>
            <motion.div 
              variants={staggerItem}
              whileHover={{ scale: 1.1 }}
              className="bg-[rgba(26,26,46,0.2)] border-2 border-[#e0e0ff] rounded p-4 sm:p-6 lg:p-8 text-center"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl text-[magenta] mb-1 sm:mb-2">15+</p>
              <p className="text-[#e0e0ff] opacity-60 text-xs sm:text-sm">Tech Stack</p>
            </motion.div>
            <motion.div 
              variants={staggerItem}
              whileHover={{ scale: 1.1 }}
              className="bg-[rgba(26,26,46,0.2)] border-2 border-[#e0e0ff] rounded p-4 sm:p-6 lg:p-8 text-center"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl text-[#00ff88] mb-1 sm:mb-2">5+</p>
              <p className="text-[#e0e0ff] opacity-60 text-xs sm:text-sm">Languages</p>
            </motion.div>
            <motion.div 
              variants={staggerItem}
              whileHover={{ scale: 1.1 }}
              className="bg-[rgba(26,26,46,0.2)] border-2 border-[#e0e0ff] rounded p-4 sm:p-6 lg:p-8 text-center"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl text-[#ff0088] mb-1 sm:mb-2">∞</p>
              <p className="text-[#e0e0ff] opacity-60 text-xs sm:text-sm">Coffee Consumed</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(180deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 0%)" }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[magenta] to-transparent" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[magenta] whitespace-nowrap px-2">{`<PROJECTS />`}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[magenta] to-transparent" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-base sm:text-lg md:text-xl text-[#e0e0ff] opacity-80 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto px-2"
          >
            A showcase of my recent work across full-stack development, data engineering, and AI/ML integration.
          </motion.p>

          {/* Projects Grid */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12"
          >
            {/* Project 1 - Job Portal */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-[rgba(26,26,46,0.2)] border-2 border-[#e0e0ff] rounded overflow-hidden"
            >
              <div className="relative h-48">
                <Image 
                  src={imgJobPortal} 
                  alt="Job Portal"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[rgba(10,10,15,0.5)] to-transparent" />
                <div className="absolute top-3 right-3 border border-[cyan] rounded px-2 py-1 bg-[rgba(0,255,255,0.1)]">
                  <span className="text-[cyan] text-xs">FEATURED</span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-[cyan] text-base sm:text-lg mb-3 sm:mb-4">Job Portal</h3>
                <p className="text-[#e0e0ff] opacity-80 text-xs sm:text-sm mb-3 sm:mb-4">
                  A Laravel-based job board focused on employer workflows. Employers can manage company-associated job postings (create, edit, delete, list) with authorization checks to ensure only owners can modify jobs.
                </p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {["Laravel", "Blade", "Tailwind CSS", "MySQL"].map(tech => (
                    <span key={tech} className="border border-[cyan] rounded px-2 py-1 text-xs text-[cyan]">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a href="https://github.com/AbdlrhmanDev/firstproject" target="_blank" className="flex-1 bg-[#0a0a0f] border-2 border-[cyan] rounded px-3 sm:px-4 py-2 text-[#e0e0ff] hover:bg-[rgba(0,255,255,0.1)] transition-colors text-center text-xs sm:text-sm">
                    Source
                  </a>
                  <a href="https://jobbortal.laravel.cloud/" target="_blank" className="flex-1 bg-[#0a0a0f] border-2 border-[cyan] rounded px-3 sm:px-4 py-2 text-[#e0e0ff] hover:bg-[rgba(0,255,255,0.1)] transition-colors text-center text-xs sm:text-sm">
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 2 - Nike Clone */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-[rgba(26,26,46,0.2)] border-2 border-[#e0e0ff] rounded overflow-hidden"
            >
              <div className="relative h-48">
                <Image 
                  src={Nike}
                  alt="Nike Clone"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[rgba(10,10,15,0.5)] to-transparent" />
                <div className="absolute top-3 right-3 border border-[magenta] rounded px-2 py-1 bg-[rgba(255,0,255,0.1)]">
                  <span className="text-[magenta] text-xs">FEATURED</span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-[magenta] text-base sm:text-lg mb-3 sm:mb-4">Nike Clone</h3>
                <p className="text-[#e0e0ff] opacity-80 text-xs sm:text-sm mb-3 sm:mb-4">
                  A Nike clone built with React, Tailwind CSS, and TypeScript. It features a responsive design, product listings, and a shopping cart functionality.
                </p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {["React", "Tailwind CSS", "Vite", "Redux Toolkit"].map(tech => (
                    <span key={tech} className="border border-[magenta] rounded px-2 py-1 text-xs text-[magenta]">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a href="https://github.com/AbdlrhmanDev/Nike" target="_blank" className="flex-1 bg-[#0a0a0f] border-2 border-[magenta] rounded px-3 sm:px-4 py-2 text-[#e0e0ff] hover:bg-[rgba(255,0,255,0.1)] transition-colors text-center text-xs sm:text-sm">
                    Source
                  </a>
                  <a href="https://abdlrhmandev.github.io/Nike/" target="_blank" className="flex-1 bg-[#0a0a0f] border-2 border-[magenta] rounded px-3 sm:px-4 py-2 text-[#e0e0ff] hover:bg-[rgba(255,0,255,0.1)] transition-colors text-center text-xs sm:text-sm">
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="bg-[magenta] border-2 border-[magenta] px-6 sm:px-8 py-2.5 sm:py-3 rounded text-black hover:bg-[rgba(255,0,255,0.9)] transition-colors inline-block text-sm sm:text-base"
            >
              View All Projects
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(180deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 0%)" }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#00ff88] whitespace-nowrap px-2">{`<CONTACT />`}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-base sm:text-lg md:text-xl text-[#e0e0ff] opacity-80 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto px-2"
          >
            Let's build something amazing together. Whether it's a data-driven app, ML integration, or full-stack solution—I'm here to help.
          </motion.p>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
          >
            {/* Contact Form */}
            <motion.div 
              variants={staggerItem}
              className="bg-[rgba(26,26,46,0.2)] border-2 border-[rgba(0,255,255,0.5)] rounded p-4 sm:p-6 lg:p-8"
            >
              <h3 className="text-[cyan] text-base sm:text-lg mb-4 sm:mb-6">Send Message</h3>
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-[#e0e0ff] opacity-80 text-xs sm:text-sm mb-1 sm:mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-[rgba(26,26,46,0.3)] border-2 border-[rgba(1,255,255,0.5)] rounded px-3 sm:px-4 py-2 text-sm sm:text-base text-[#e0e0ff] placeholder-[#8888aa] focus:outline-none focus:border-[cyan]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[#e0e0ff] opacity-80 text-xs sm:text-sm mb-1 sm:mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-[rgba(26,26,46,0.3)] border-2 border-[rgba(1,255,255,0.5)] rounded px-3 sm:px-4 py-2 text-sm sm:text-base text-[#e0e0ff] placeholder-[#8888aa] focus:outline-none focus:border-[cyan]"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[#e0e0ff] opacity-80 text-xs sm:text-sm mb-1 sm:mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-[rgba(26,26,46,0.3)] border-2 border-[rgba(1,255,255,0.5)] rounded px-3 sm:px-4 py-2 text-sm sm:text-base text-[#e0e0ff] placeholder-[#8888aa] focus:outline-none focus:border-[cyan] resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[cyan] border-2 border-[cyan] rounded px-4 py-2.5 sm:py-3 text-black hover:bg-[rgba(0,255,255,0.9)] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              variants={staggerItem}
              className="space-y-6 sm:space-y-8"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-[rgba(26,26,46,0.2)] border-2 border-[rgba(255,0,255,0.5)] rounded p-4 sm:p-6 lg:p-8"
              >
                <h3 className="text-[magenta] text-base sm:text-lg mb-4 sm:mb-6">Get In Touch</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded bg-[rgba(0,255,255,0.1)] border border-[rgba(0,255,255,0.3)] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[cyan]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#e0e0ff] opacity-60 text-xs sm:text-sm">Email</p>
                      <p className="text-[#e0e0ff] text-sm sm:text-base break-words">abdlrhmandevs@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded bg-[rgba(0,255,255,0.1)] border border-[rgba(0,255,255,0.3)] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[cyan]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#e0e0ff] opacity-60 text-xs sm:text-sm">Location</p>
                      <p className="text-[#e0e0ff] text-sm sm:text-base">Saudi Arabia, Qassim-Buraidah</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="flex gap-3 sm:gap-4"
              >
                <motion.a 
                  variants={staggerItem}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/AbdlrhmanDev" 
                  target="_blank" 
                  className="bg-[rgba(26,26,46,0.3)] border border-[rgba(0,255,255,0.2)] rounded-lg p-4 hover:bg-[rgba(26,26,46,0.5)] transition-colors flex items-center justify-center"
                >
                  <Github className="w-6 h-6 text-[#e0e0ff]" />
                </motion.a>
                <motion.a 
                  variants={staggerItem}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/abdlrhman-60b505297/" 
                  target="_blank" 
                  className="bg-[rgba(26,26,46,0.3)] border border-[rgba(0,255,255,0.2)] rounded-lg p-4 hover:bg-[rgba(26,26,46,0.5)] transition-colors flex items-center justify-center"
                >
                  <Linkedin className="w-6 h-6 text-[#e0e0ff]" />
                </motion.a>
                <motion.a 
                  variants={staggerItem}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://x.com/AbdlrhmanDev" 
                  target="_blank" 
                  className="bg-[rgba(26,26,46,0.3)] border border-[rgba(0,255,255,0.2)] rounded-lg p-4 hover:bg-[rgba(26,26,46,0.5)] transition-colors flex items-center justify-center"
                >
                  <Twitter className="w-6 h-6 text-[#e0e0ff]" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-[rgba(0,255,255,0.2)] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xl sm:text-2xl font-normal tracking-[1.2px] mb-4 sm:mb-6">
            <span className="text-[cyan]">CYBER</span>
            <span className="text-[magenta]"> // </span>
            <span className="text-[cyan]">DEV</span>
          </div>
          <p className="text-[#6a7282] text-xs sm:text-sm mb-4 sm:mb-6">
            © 2025 AbdlrhmanDev. All rights reserved.
          </p>
          <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[rgba(0,255,255,0.5)] to-transparent" />
        </div>
      </motion.footer>
    </div>
  );
}

