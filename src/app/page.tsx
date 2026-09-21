'use client';

import React, { useState } from 'react';

// Define types for state management
interface FormData {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  budget: string;
  details: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  duration: string;
  image: string;
  description: string;
  stats: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export default function ApexBuildLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [activeProjectFilter, setActiveProjectFilter] = useState<string>('All');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Residential Construction / Remodel',
    budget: '$10k - $25k',
    details: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        projectType: 'Residential Construction / Remodel',
        budget: '$10k - $25k',
        details: '',
      });
    }, 5000);
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Suburban Estate Renovation',
      category: 'Residential',
      location: 'Flint, MI',
      duration: '12 Weeks',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      description: 'Complete full-home luxury structural overhaul including custom kitchen island, open floorplan conversion, and high-efficiency exterior insulation.',
      stats: '3,800 Sq Ft'
    },
    {
      id: 2,
      title: 'Corporate Headquarters Buildout',
      category: 'Commercial',
      location: 'Grand Blanc, MI',
      duration: '16 Weeks',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      description: 'Turnkey interior commercial fit-out featuring glass partition executive suites, collaborative open work bays, and soundproof acoustics.',
      stats: '8,500 Sq Ft'
    },
    {
      id: 3,
      title: 'Contemporary Custom Waterfront Home',
      category: 'Custom Construction',
      location: 'Fenton, MI',
      duration: '24 Weeks',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      description: 'Ground-up custom luxury residential construction featuring floor-to-ceiling glass, custom steel framing, and sustainable energy infrastructure.',
      stats: '5,200 Sq Ft'
    }
  ];

  const filteredProjects = activeProjectFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeProjectFilter);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'Are you licensed and fully insured in the State of Michigan?',
      answer: 'Yes, APEXBUILD is fully licensed, bonded, and insured for both residential and commercial general contracting throughout Flint and surrounding Michigan areas. We carry comprehensive liability and worker’s compensation coverage.'
    },
    {
      id: 2,
      question: 'How do you structure project estimates and quotes?',
      answer: 'We provide detailed, itemized estimates after an initial consultation and thorough site assessment. Our estimates cover materials, labor, permitting, and timelines so there are zero surprise costs down the road.'
    },
    {
      id: 3,
      question: 'Do you handle local permits and municipal inspections?',
      answer: 'Absolutely. We manage the entire permitting process from submittal to final inspection, ensuring all work strictly adheres to local building codes and safety regulations.'
    },
    {
      id: 4,
      question: 'Can I stay in my home during a residential remodeling project?',
      answer: 'In most cases, yes! We set up containment barriers, maintain clean work environments, and schedule dusty or noisy tasks around your family’s routine to minimize daily disruption.'
    },
    {
      id: 5,
      question: 'What warranties or guarantees do you offer on completed work?',
      answer: 'We back all our craftsmanship with a multi-year workmanship warranty in addition to honoring manufacturer warranties on all installed materials and fixtures.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#080b11] text-[#c9d1d9] font-sans selection:bg-blue-600 selection:text-white scroll-smooth">
      
      {/* Dynamic CSS for smooth scroll & glow effects */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        .animate-pulse-glow {
          animation: pulseGlow 8s infinite ease-in-out;
        }
      `}</style>

      {/* ------------------ 1. NAVBAR SECTION ------------------ */}
      {}
      <header className="border-b border-neutral-800/80 bg-[#080b11]/85 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center font-extrabold text-white text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H9m4 0V5" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white block leading-none">
                APEX<span className="text-blue-500">BUILD</span>
              </span>
              <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-semibold">Contracting & Services</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#why-us" className="hover:text-blue-400 transition-colors">Why Choose Us</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Our Work</a>
            <a href="#process" className="hover:text-blue-400 transition-colors">Process</a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>

          {/* Action Callouts */}
          <div className="hidden sm:flex items-center gap-5">
            <a href="tel:8108189444" className="text-sm font-semibold text-neutral-300 hover:text-blue-400 transition-colors flex items-center gap-2">
              <span className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-blue-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h32a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              +92 370 2440409
            </a>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Estimate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0d1117] border-b border-neutral-800 px-6 py-6 space-y-4 text-center">
            <a onClick={() => setMobileMenuOpen(false)} href="#" className="block text-base font-medium text-neutral-200 hover:text-blue-400">Home</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#services" className="block text-base font-medium text-neutral-200 hover:text-blue-400">Services</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#why-us" className="block text-base font-medium text-neutral-200 hover:text-blue-400">Why Choose Us</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#projects" className="block text-base font-medium text-neutral-200 hover:text-blue-400">Our Work</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#process" className="block text-base font-medium text-neutral-200 hover:text-blue-400">Process</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#faq" className="block text-base font-medium text-neutral-200 hover:text-blue-400">FAQ</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="block text-base font-medium text-neutral-200 hover:text-blue-400">Contact</a>
            
            <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
              <a href="tel:8108189444" className="text-sm font-bold text-blue-400">(810) 818-9444</a>
              <a 
                onClick={() => setMobileMenuOpen(false)} 
                href="#contact" 
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm block"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ------------------ 2. HERO SECTION ------------------ */}
      {}
      <section className="relative border-b border-neutral-800/80 py-24 sm:py-32 px-4 sm:px-6 text-center overflow-hidden">
        {/* Glowing Background Mesh & Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-blue-600/25 via-indigo-600/20 to-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
        <div className="absolute top-1/2 left-10 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            Licensed & Insured | Flint & Surrounding Michigan Areas
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tight">
            Building solutions <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              that stand the test of time.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg mb-10 leading-relaxed font-normal">
            Premier residential and commercial contracting services tailored to your exact specifications. From structural ground-up builds to custom luxury renovations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95"
            >
              Get a Free Estimate
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80 px-8 py-4 rounded-xl font-bold text-sm transition-all backdrop-blur hover:border-neutral-600"
            >
              Explore Our Services
            </a>
          </div>

          {/* Key Metrics / Highlights Bar */}
          <div className="pt-10 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-medium text-neutral-400">
            <div className="flex items-center justify-center gap-3 bg-neutral-900/40 border border-neutral-800/80 px-4 py-3 rounded-xl">
              <span className="text-blue-400 font-bold text-base">📍</span>
              <span>Serving Flint & Surrounding Areas</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-neutral-900/40 border border-neutral-800/80 px-4 py-3 rounded-xl">
              <span className="text-blue-400 font-bold text-base">🏆</span>
              <span>10+ Years Dedicated Experience</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-neutral-900/40 border border-neutral-800/80 px-4 py-3 rounded-xl">
              <span className="text-blue-400 font-bold text-base">🛡️</span>
              <span>Fully Licensed & Insured Contractor</span>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------ 3. SERVICES SECTION ------------------ */}
      {}
      <section id="services" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full border-b border-neutral-800/80">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
            Our Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">Comprehensive Contracting Services</h2>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Delivering precision engineering, skilled craftsmanship, and transparent project management across every discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Residential Contracting Card */}
          <div className="bg-gradient-to-b from-[#111622] to-[#0d1117] border border-neutral-800/90 p-8 sm:p-10 rounded-2xl hover:border-blue-500/40 transition-all duration-300 group shadow-lg">
            <div className="flex items-center gap-4 mb-6 border-b border-neutral-800/80 pb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-2xl group-hover:scale-110 transition-transform">
                🏠
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Residential Contracting</h3>
                <p className="text-xs text-neutral-400">Custom home transformations & structural upgrades</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-300">
              <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/60 flex items-start gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-white block">Custom Home Construction</span>
                  <span className="text-xs text-neutral-400">From foundation to final finish</span>
                </div>
              </div>
              <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/60 flex items-start gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-white block">Home Renovations</span>
                  <span className="text-xs text-neutral-400">Complete interior remodels</span>
                </div>
              </div>
              <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/60 flex items-start gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-white block">Kitchen & Bath Remodeling</span>
                  <span className="text-xs text-neutral-400">Modern layout overhauls</span>
                </div>
              </div>
              <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/60 flex items-start gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-white block">Additions & Extensions</span>
                  <span className="text-xs text-neutral-400">Expanding square footage</span>
                </div>
              </div>
              <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/60 flex items-start gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-white block">Roofing Solutions</span>
                  <span className="text-xs text-neutral-400">Repairs & total replacements</span>
                </div>
              </div>
              <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/60 flex items-start gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-white block">Flooring & Finishing</span>
                  <span className="text-xs text-neutral-400">Hardwood, tile & composite</span>
                </div>
              </div>
            </div>
          </div>

          {/* Commercial Contracting Card */}
          <div className="bg-gradient-to-b from-[#111622] to-[#0d1117] border border-neutral-800/90 p-8 sm:p-10 rounded-2xl hover:border-blue-500/40 transition-all duration-300 group shadow-lg">
            <div className="flex items-center gap-4 mb-6 border-b border-neutral-800/80 pb-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-2xl group-hover:scale-110 transition-transform">
                🏢
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">Commercial Contracting</h3>
                <p className="text-xs text-neutral-400">Scalable infrastructure & business facilities</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-300">
              <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/60 flex items-start gap-3">
                <span className="text-indigo-400 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-white block">Commercial Construction</span>
                  <span className="text-xs text-neutral-400">Ground-up facility builds</span>
                </div>
              </div>
              <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/60 flex items-start gap-3">
                <span className="text-indigo-400 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-white block">Office Renovations</span>
                  <span className="text-xs text-neutral-400">Modern workplace designs</span>
                </div>
              </div>
              <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/60 flex items-start gap-3">
                <span className="text-indigo-400 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-white block">Retail Buildouts</span>
                  <span className="text-xs text-neutral-400">Storefront & showroom spaces</span>
                </div>
              </div>
              <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/60 flex items-start gap-3">
                <span className="text-indigo-400 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-white block">Industrial Projects</span>
                  <span className="text-xs text-neutral-400">Warehouse & plant retrofits</span>
                </div>
              </div>
              <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/60 flex items-start gap-3">
                <span className="text-indigo-400 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-white block">Interior Fit-Outs</span>
                  <span className="text-xs text-neutral-400">Acoustic, lighting & HVAC</span>
                </div>
              </div>
              <div className="p-3 bg-neutral-900/60 rounded-xl border border-neutral-800/60 flex items-start gap-3">
                <span className="text-indigo-400 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-white block">Property Improvements</span>
                  <span className="text-xs text-neutral-400">Exterior repair & ADA upgrades</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ 4. WHY CHOOSE US SECTION ------------------ */}
      {}
      <section id="why-us" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full border-b border-neutral-800/80 relative">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
            The Apex Standard
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">Why Choose APEXBUILD</h2>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            We combine standard-setting craftsmanship with honest communication and rigorous project timeline execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="p-8 bg-[#0d1117] border border-neutral-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600/10 rounded-xl border border-blue-500/20 flex items-center justify-center text-blue-400 text-xl font-black mb-6">
              01
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quality Workmanship</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              We never cut corners. Every nail, structural beam, and finishing detail is installed by certified craftspeople following code-exceeding standards.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 bg-[#0d1117] border border-neutral-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600/10 rounded-xl border border-blue-500/20 flex items-center justify-center text-blue-400 text-xl font-black mb-6">
              02
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Reliable Management</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Projects are completed on schedule through organized milestone tracking, strict material procurement, and proactive site supervision.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 bg-[#0d1117] border border-neutral-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600/10 rounded-xl border border-blue-500/20 flex items-center justify-center text-blue-400 text-xl font-black mb-6">
              03
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Clear Communication</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              No guesswork or unexpected surprises. You receive transparent weekly progress reports, budget updates, and single-point-of-contact support.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-8 bg-[#0d1117] border border-neutral-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600/10 rounded-xl border border-blue-500/20 flex items-center justify-center text-blue-400 text-xl font-black mb-6">
              04
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Attention to Detail</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              From architectural alignment to clean site maintenance, our meticulous eye for perfection sets our projects apart.
            </p>
          </div>

          {/* Pillar 5 */}
          <div className="p-8 bg-[#0d1117] border border-neutral-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600/10 rounded-xl border border-blue-500/20 flex items-center justify-center text-blue-400 text-xl font-black mb-6">
              05
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Dual Expertise</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Equally skilled in custom residential homes and heavy commercial buildouts, offering versatile solutions for any client size.
            </p>
          </div>

          {/* Pillar 6 */}
          <div className="p-8 bg-[#0d1117] border border-neutral-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600/10 rounded-xl border border-blue-500/20 flex items-center justify-center text-blue-400 text-xl font-black mb-6">
              06
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Client-Centered Focus</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Your vision and satisfaction drive everything we do. We tailor every aspect of our work around your goals, schedule, and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------ 5. FEATURED PROJECTS / PORTFOLIO SECTION ------------------ */}
      {}
      <section id="projects" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full border-b border-neutral-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
              Our Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">Featured Construction Projects</h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-neutral-900/80 p-1.5 rounded-xl border border-neutral-800">
            {['All', 'Residential', 'Commercial', 'Custom Construction'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveProjectFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeProjectFilter === filter
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-[#0d1117] border border-neutral-800 rounded-2xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300 flex flex-col">
              <div className="relative h-60 overflow-hidden bg-neutral-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#080b11]/80 backdrop-blur-md text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30">
                  {project.category}
                </span>
                <span className="absolute bottom-4 right-4 bg-[#080b11]/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-md">
                  {project.stats}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                  <span>📍 {project.location}</span>
                  <span>⏱️ {project.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Start Similar Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ 6. OUR 5-STEP PROCESS SECTION ------------------ */}
      {}
      <section id="process" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full border-b border-neutral-800/80">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">Our 5-Step Construction Process</h2>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            A structured, stress-free workflow designed to keep your project on schedule and on budget.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { step: '01', title: 'Consultation', desc: 'Initial discussion to understand your vision, requirements, timeline, and preliminary budget.' },
            { step: '02', title: 'Site Assessment', desc: 'On-site evaluation, structural analysis, measurements, and architectural feasibility checks.' },
            { step: '03', title: 'Detailed Estimate', desc: 'Itemized transparent breakdown of materials, permitting, labor costs, and work schedule.' },
            { step: '04', title: 'Construction', desc: 'Skilled execution with regular progress updates, quality control, and safety adherence.' },
            { step: '05', title: 'Final Walkthrough', desc: 'Comprehensive final inspection to ensure every detail meets your complete satisfaction.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0d1117] border border-neutral-800 p-6 rounded-2xl relative hover:border-blue-500/40 transition-all group">
              <span className="text-4xl font-black text-neutral-800 group-hover:text-blue-500/20 transition-colors block mb-4">
                {item.step}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ 7. STATS & HIGHLIGHTS BAR ------------------ */}
      {}
      <section className="py-16 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-blue-900/20 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="text-3xl sm:text-4xl font-black text-white block mb-1">150+</span>
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Projects Completed</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-blue-400 block mb-1">100%</span>
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Licensed & Insured</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-white block mb-1">10+</span>
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Years Experience</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-cyan-400 block mb-1">5-Star</span>
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Client Reviews</span>
          </div>
        </div>
      </section>

      {/* ------------------ 8. FAQ SECTION ------------------ */}
      {}
      <section id="faq" className="py-24 px-4 sm:px-6 max-w-4xl mx-auto w-full border-b border-neutral-800/80">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-[#0d1117] border border-neutral-800 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                className="w-full text-left p-6 font-bold text-base text-white flex items-center justify-between gap-4 hover:text-blue-400 transition-colors"
              >
                <span>{faq.question}</span>
                <span className="text-blue-400 font-bold text-xl">
                  {openFaq === faq.id ? '−' : '+'}
                </span>
              </button>
              {openFaq === faq.id && (
                <div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-neutral-800/60 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ 9. CONTACT / ESTIMATE FORM ------------------ */}
      {}
      <section id="contact" className="py-24 px-4 sm:px-6 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
            Start Your Project Today
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">Request a Free Estimate</h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">
            Fill out the form below or call us directly at <a href="tel:8108189444" className="text-blue-400 underline font-bold">(810) 818-9444</a>.
          </p>
        </div>

        {formSubmitted ? (
          <div className="bg-blue-600/10 border border-blue-500 p-8 rounded-2xl text-center space-y-3">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-white">Thank You for Reaching Out!</h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto">
              We have received your estimate request. A representative from APEXBUILD will review your details and contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="bg-gradient-to-b from-[#111622] to-[#0d1117] border border-neutral-800/90 p-8 sm:p-10 rounded-2xl space-y-6 shadow-2xl relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">Full Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="John Doe"
                  className="w-full bg-[#080b11] border border-neutral-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="(810) 000-0000"
                  className="w-full bg-[#080b11] border border-neutral-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">Email Address *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="john@example.com"
                  className="w-full bg-[#080b11] border border-neutral-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">Project Category *</label>
                <select 
                  className="w-full bg-[#080b11] border border-neutral-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                >
                  <option value="Residential Construction / Remodel">Residential Construction / Remodel</option>
                  <option value="Commercial Buildout / Fit-out">Commercial Buildout / Fit-out</option>
                  <option value="Kitchen & Bath Overhaul">Kitchen & Bath Overhaul</option>
                  <option value="Roofing or Structural Work">Roofing or Structural Work</option>
                  <option value="Other Contracting Services">Other Contracting Services</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">Project Scope & Details *</label>
              <textarea 
                rows={4}
                required
                placeholder="Describe your project goals, location, desired timeline, and key requirements..."
                className="w-full bg-[#080b11] border border-neutral-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50"
            >
              Submit Free Estimate Request
            </button>
          </form>
        )}
      </section>

      {/* ------------------ 10. MULTI-COLUMN ENRICHED FOOTER ------------------ */}
      {}
      <footer className="relative border-t border-neutral-800 bg-gradient-to-b from-[#0c1017] via-[#080b11] to-[#040609] pt-20 pb-12 overflow-hidden mt-auto">
        {/* Glow Element */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-neutral-800/80">
            
            {/* Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <a href="#" className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-extrabold text-white text-lg shadow-md shadow-blue-500/20">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H9m4 0V5" />
                  </svg>
                </div>
                <span className="text-xl font-black tracking-tight text-white">
                  APEX<span className="text-blue-500">BUILD</span>
                </span>
              </a>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                Providing premier residential and commercial construction, remodeling, and structural contracting services built on trust, quality, and engineering precision.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Accepting New Projects
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2.5 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#why-us" className="hover:text-blue-400 transition-colors">Why Choose Us</a></li>
                <li><a href="#projects" className="hover:text-blue-400 transition-colors">Our Portfolio</a></li>
                <li><a href="#process" className="hover:text-blue-400 transition-colors">Our Process</a></li>
                <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Core Services</h4>
              <ul className="space-y-2.5 text-sm text-neutral-400">
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Custom Homes</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Home Renovations</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Kitchen & Bath</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Commercial Buildouts</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Interior Fit-Outs</a></li>
              </ul>
            </div>

            {/* Direct Contact */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Direct Contact</h4>
              <div className="space-y-4 text-sm text-neutral-400">
                <div>
                  <span className="block text-xs text-neutral-500 font-semibold uppercase">Phone Support</span>
                  <a href="tel:8108189444" className="text-white font-bold hover:text-blue-400 transition-colors">(810) 818-9444</a>
                </div>
                <div>
                  <span className="block text-xs text-neutral-500 font-semibold uppercase">Service Region</span>
                  <span className="text-neutral-300">Flint, MI & Surrounding Areas</span>
                </div>
                <div>
                  <span className="block text-xs text-neutral-500 font-semibold uppercase">Hours</span>
                  <span className="text-neutral-300">Mon - Sat: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

          </div>

          {/* Sub Footer / Copyright */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© {new Date().getFullYear()} APEXBUILD Contracting & Services. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
              <a href="#contact" className="hover:text-neutral-400 transition-colors">Get Estimate</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}