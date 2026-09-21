"use client";

import React, { useState } from "react";

const services = [
  {
    id: "residential",
    title: "Residential Construction",
    description: "Custom home builds, full-house renovations, structural additions, and modern interior remodels tailored to your lifestyle.",
    icon: "🏠",
  },
  {
    id: "commercial",
    title: "Commercial Development",
    description: "Retail buildouts, office space renovations, structural repairs, and commercial interior fit-outs executed on schedule.",
    icon: "🏢",
  },
  {
    id: "remodeling",
    title: "Kitchen & Bath Remodeling",
    description: "High-end tile installation, custom cabinetry, plumbing updates, and complete design transformations.",
    icon: "🔨",
  },
  {
    id: "exterior",
    title: "Roofing & Exterior Services",
    description: "Durable roofing replacements, custom siding, deck construction, and weather-resistant exterior finishes.",
    icon: "🏗️",
  },
];

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Residence",
    category: "Residential Construction",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    stats: "4,200 sq ft • Grand Blanc, MI",
  },
  {
    id: 2,
    title: "Corporate Office Transformation",
    category: "Commercial Fit-Out",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    stats: "12,000 sq ft • Flint, MI",
  },
  {
    id: 3,
    title: "Luxury Chef's Kitchen Renovation",
    category: "Interior Remodel",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    stats: "Custom Cabinets & Marble • Fenton, MI",
  },
];

const faqs = [
  {
    id: 1,
    question: "How do I get an estimate for my construction project?",
    answer: "You can call us directly at 03702440409 or fill out the online estimate form at the bottom of this page. We'll set up an initial consultation to review your blueprints or inspect the job site.",
  },
  {
    id: 2,
    question: "Are you fully licensed and insured?",
    answer: "Yes, APEXBUILD is fully licensed, bonded, and insured. We comply strictly with all local Michigan state building codes and safety standards.",
  },
  {
    id: 3,
    question: "What geographical areas do you serve?",
    answer: "We primarily serve Flint, Grand Blanc, Fenton, and surrounding areas in Genesee County and Mid-Michigan.",
  },
  {
    id: 4,
    question: "How long does a typical remodeling or build project take?",
    answer: "Timelines depend on project size and permitting requirements. During our initial consultation, we provide a structured timeline and project schedule.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    projectType: "Residential Construction / Remodel",
    details: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#080b11] text-neutral-100 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* ------------------ 1. NAVIGATION BAR ------------------ */}
      <nav className="sticky top-0 z-50 bg-[#080b11]/90 backdrop-blur-md border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-widest text-white">
              APEX<span className="text-blue-500">BUILD</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#process" className="hover:text-blue-400 transition-colors">Process</a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          <a
            href="tel:03702440409"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/20"
          >
            Call 03702440409
          </a>
        </div>
      </nav>

      {/* ------------------ 2. HERO SECTION ------------------ */}
      <section className="relative pt-20 pb-24 px-4 sm:px-6 max-w-7xl mx-auto text-center border-b border-neutral-800/80">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          General Contracting & Construction Services
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-5xl mx-auto">
          Building Premier Structures with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Precision Craftsmanship</span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-neutral-400 max-w-3xl mx-auto font-normal leading-relaxed">
          From full ground-up residential builds to large-scale commercial renovations, APEXBUILD delivers uncompromising quality, structural integrity, and transparent timelines.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all shadow-lg shadow-blue-600/30"
          >
            Request Free Estimate
          </a>
          <a
            href="tel:03702440409"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white font-bold text-base transition-all"
          >
            Direct Call: 03702440409
          </a>
        </div>

        {/* Highlight Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-10 border-t border-neutral-800/60">
          <div>
            <div className="text-3xl font-bold text-white">15+</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">250+</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Licensed & Insured</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">4.9★</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* ------------------ 3. SERVICES SECTION ------------------ */}
      <section id="services" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto border-b border-neutral-800/80">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">Comprehensive Construction Services</h2>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Professional contracting tailored to residential homeowner goals and commercial development specs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-[#0d1117] border border-neutral-800 rounded-2xl hover:border-blue-500/50 transition-all group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ 4. RECENT PROJECTS SECTION ------------------ */}
      <section id="projects" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto border-b border-neutral-800/80">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">Featured Construction Projects</h2>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Explore a selection of our recently completed residential and commercial works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0d1117] border border-neutral-800 rounded-2xl overflow-hidden group hover:border-neutral-700 transition-all"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-xs text-neutral-400 font-medium">{project.stats}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ 5. PROCESS SECTION ------------------ */}
      <section id="process" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full border-b border-neutral-800/80">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
            Workflow
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">Our 4-Step Construction Process</h2>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            A structured, hassle-free roadmap designed to bring your vision from blueprint to flawless completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#0d1117] border border-neutral-800 rounded-2xl relative">
            <span className="text-4xl font-black text-blue-500/20 mb-4 block">01</span>
            <h3 className="text-lg font-bold text-white mb-2">Consultation & Site Assessment</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We discuss your project scope, evaluate structural needs, and provide an initial honest budget estimate.
            </p>
          </div>

          <div className="p-6 bg-[#0d1117] border border-neutral-800 rounded-2xl relative">
            <span className="text-4xl font-black text-blue-500/20 mb-4 block">02</span>
            <h3 className="text-lg font-bold text-white mb-2">Design & Permitting</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Finalizing material selections, blueprints, and securing all necessary local municipal building permits.
            </p>
          </div>

          <div className="p-6 bg-[#0d1117] border border-neutral-800 rounded-2xl relative">
            <span className="text-4xl font-black text-blue-500/20 mb-4 block">03</span>
            <h3 className="text-lg font-bold text-white mb-2">Precision Execution</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Skilled trade craftsmanship managed with strict daily quality control and weekly progress updates.
            </p>
          </div>

          <div className="p-6 bg-[#0d1117] border border-neutral-800 rounded-2xl relative">
            <span className="text-4xl font-black text-blue-500/20 mb-4 block">04</span>
            <h3 className="text-lg font-bold text-white mb-2">Final Inspection & Handover</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Detailed walkthrough, final building code sign-offs, and full warranty documentation delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------ 6. FAQ SECTION ------------------ */}
      <section id="faq" className="py-24 px-4 sm:px-6 max-w-4xl mx-auto w-full border-b border-neutral-800/80">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
            Questions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">Frequently Asked Questions</h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base">
            Answers to common questions regarding our general contracting services and workflow.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-[#0d1117] border border-neutral-800 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
              >
                <span className="text-base font-bold text-white">{faq.question}</span>
                <span className="text-blue-400 font-bold text-xl">
                  {openFaq === faq.id ? "−" : "+"}
                </span>
              </button>
              {openFaq === faq.id && (
                <div className="px-6 pb-6 text-sm text-neutral-400 border-t border-neutral-800/60 pt-4 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ 7. CONTACT & ESTIMATE FORM SECTION ------------------ */}
      <section id="contact" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full border-b border-neutral-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Contact Details */}
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 leading-tight">
              Let’s Discuss Your Next Construction Project
            </h2>
            <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
              Ready to get started or need a detailed project quote? Reach out to our team today for a free estimate consultation.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                  📞
                </div>
                <div>
                  <span className="text-xs text-neutral-400 uppercase tracking-wider block font-semibold">Phone Support</span>
                  <a href="tel:03702440409" className="text-lg font-bold text-white hover:text-blue-400 transition-colors">
                    03702440409
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                  📍
                </div>
                <div>
                  <span className="text-xs text-neutral-400 uppercase tracking-wider block font-semibold">Service Area</span>
                  <span className="text-base font-bold text-white">
                    Flint, Grand Blanc, Fenton & Surrounding Michigan Areas
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Estimate Form */}
          <div className="bg-[#0d1117] border border-neutral-800 p-8 rounded-2xl relative">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-blue-500/20 border border-blue-500 text-blue-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">Estimate Request Received!</h3>
                <p className="text-sm text-neutral-400 max-w-sm mx-auto">
                  Thank you for contacting APEXBUILD. Our project management team will review your specifications and contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">Request a Free Project Quote</h3>

                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-400 mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#080b11] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-neutral-400 mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#080b11] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="03702440409"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-neutral-400 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#080b11] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-400 mb-1">Project Type</label>
                  <select 
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#080b11] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option>Residential Construction / Remodel</option>
                    <option>Commercial Buildout / Renovation</option>
                    <option>Custom Structural Ground-Up</option>
                    <option>Kitchen or Bath Transformation</option>
                    <option>Roofing or Exterior Upgrades</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-400 mb-1">Project Details</label>
                  <textarea 
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-[#080b11] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Describe your project scope, estimated square footage, or target completion date..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/30"
                >
                  Submit Estimate Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ------------------ 8. FOOTER SECTION ------------------ */}
      <footer className="bg-[#05070b] py-12 px-4 sm:px-6 text-xs text-neutral-500 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-white font-bold text-sm block mb-1">APEXBUILD Contracting & Services</span>
            <p>© {new Date().getFullYear()} APEXBUILD. All rights reserved. Licensed & Insured Contractor.</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            <a href="tel:03702440409" className="hover:text-neutral-300 transition-colors">03702440409</a>
          </div>
        </div>
      </footer>

    </div>
  );
}