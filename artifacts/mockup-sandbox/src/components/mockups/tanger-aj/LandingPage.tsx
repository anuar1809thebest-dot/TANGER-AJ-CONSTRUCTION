import React, { useEffect, useState } from 'react';
import {
  ArrowRight, Building2, ChevronRight, Hammer, HardHat, Mail,
  MapPin, MoveUpRight, Phone, Ruler, Truck, ShieldCheck,
  Wrench, CheckCircle2, ChevronDown, Home, RefreshCw, Paintbrush, Globe
} from 'lucide-react';

// ─── Translations ────────────────────────────────────────────────────────────

const translations = {
  fr: {
    nav: {
      about: 'À propos',
      services: 'Services',
      projects: 'Réalisations',
      contact: 'Contact',
      quote: 'Demander un devis',
      edit: 'Modifier le contenu',
      editing: 'Mode édition actif',
    },
    hero: {
      tagline: 'Construction · Rénovation · Finitions · Patrimoine',
      headline1: 'NOUS BÂTISSONS',
      headline2: 'VOTRE AVENIR.',
      sub: 'Du gros œuvre aux finitions, notre équipe réalise vos projets de construction, rénovation, restauration et aménagement partout en France.',
      cta1: 'Voir nos réalisations',
      cta2: 'Nous contacter',
      scroll: 'Défiler',
    },
    stats: [
      { value: '20+', label: "Années d'expérience" },
      { value: '31+', label: 'Projets livrés' },
      { value: '100%', label: 'Satisfaction client' },
      { value: '12', label: 'Régions couvertes' },
    ],
    about: {
      title: 'PLUS QUE DES BÂTISSEURS.\nNOUS CRÉONS DES LIEUX DE VIE.',
      p1: "Chez Tanger AJ Construction, nous mettons notre savoir-faire au service de vos ambitions. Chaque chantier est une promesse tenue — dans les délais, dans le budget, avec le soin du détail qui fait la différence.",
      p2: "Maçonnerie, plaques de plâtre, enduits, peinture, carrelage, isolation ou restauration du patrimoine : nous réunissons tous les savoir-faire nécessaires pour donner vie à des projets durables et soignés.",
    },
    services: {
      eyebrow: 'Nos expertises',
      title: 'UN SAVOIR-FAIRE COMPLET',
      sub: 'Des solutions globales pour chaque étape de votre projet, du premier coup de crayon à la remise des clés.',
      items: [
        { title: 'Construction neuve', icon: Building2, desc: "Maisons individuelles, immeubles résidentiels, locaux commerciaux — nous accompagnons la construction de A à Z avec une maîtrise d'œuvre rigoureuse et transparente." },
        { title: 'Rénovation complète', icon: Wrench, desc: "Transformation complète d'appartements, maisons et locaux professionnels : isolation, plaques de plâtre, cloisons, enduits, peinture et finitions — tout sous un même toit." },
        { title: 'Restauration du patrimoine', icon: RefreshCw, desc: "Restauration de bâtiments anciens, façades et éléments patrimoniaux. Nous respectons les matériaux d'origine et les techniques traditionnelles." },
        { title: 'Construction de logements', icon: Home, desc: "Programmes de logements collectifs et résidences privées. Nous gérons chaque lot avec la précision d'un chef d'orchestre, du gros œuvre aux finitions." },
        { title: 'Finitions & aménagement', icon: Paintbrush, desc: "Enduit, peinture, carrelage, faïence, parquet, cuisine et salle de bain : nos artisans soignent chaque détail avec des matériaux sélectionnés." },
        { title: 'Gestion de projet', icon: ShieldCheck, desc: "Pilotage complet du chantier : coordination des corps de métier, gestion administrative, suivi budgétaire et reporting régulier. Vous restez serein." },
      ],
    },
    projects: {
      eyebrow: 'Réalisations',
      title: 'NOS TRAVAUX PARLENT POUR NOUS',
      proj1: {
        tag: '01 — RÉNOVATION INTÉRIEURE',
        title: 'APPARTEMENT HAUSSMANNIEN',
        desc: "Rénovation complète d'un appartement à Lyon : préparation des supports, plaques de plâtre, enduits, pose de carrelage et finitions peinture pour un intérieur lumineux et durable.",
        items: ['180 m² rénovés', 'Carrelage & faïence', 'Finitions sur mesure'],
      },
      proj2: {
        tag: '02 — RESTAURATION DU PATRIMOINE',
        title: 'FAÇADE DU VIEUX VILLAGE',
        desc: "Restauration d'une façade ancienne dans un village français : reprise de maçonnerie, enduit à la chaux, peinture des menuiseries et conservation des détails d'origine.",
        items: ['Façade restaurée', 'Enduit traditionnel à la chaux', 'Détails patrimoniaux préservés'],
      },
      cta: 'Voir le détail du projet',
    },
    advantage: {
      title: "L'AVANTAGE\nTANGER AJ",
      sub: "Nous ne faisons pas de promesses en l'air. Nous livrons. Notre engagement envers la qualité et la transparence nous distingue depuis 20 ans.",
      items: [
        { title: 'SÉCURITÉ SANS COMPROMIS', desc: "La sécurité de nos équipes et de nos clients est non négociable. Protocoles stricts, formations continues, zéro accident." },
        { title: 'RESPECT DES DÉLAIS', desc: "Un planning tenu est un gage de confiance. Nous planifions avec précision et anticipons chaque aléa pour livrer à la date promise." },
        { title: 'QUALITÉ CERTIFIÉE', desc: "Artisans RGE, assurance décennale, matériaux sélectionnés — chaque étape est validée pour vous offrir un ouvrage pérenne." },
      ],
    },
    contact: {
      eyebrow: 'Prêt à démarrer ?',
      title: "PARLONS DE\nVOTRE PROJET.",
      sub: "Que ce soit une rénovation, une construction ou une restauration, notre équipe est disponible pour étudier votre projet et vous proposer un devis gratuit et détaillé.",
      phone: 'Ligne directe',
      email: 'Email',
      address: 'Siège social',
      addressValue: 'Rue Jacques Ressegaire\n13200 Arles, France',
      form: {
        title: 'DEMANDER UN DEVIS GRATUIT',
        firstName: 'Prénom',
        lastName: 'Nom',
        emailLabel: 'Adresse e-mail',
        phoneLabel: 'Téléphone',
        projectType: 'Type de projet',
        projectTypes: ['Construction neuve', 'Rénovation complète', 'Restauration', 'Aménagement intérieur', 'Gestion de projet', 'Autre'],
        details: 'Décrivez votre projet',
        detailsPlaceholder: 'Surface, localisation, délai souhaité, budget approximatif...',
        submit: 'Envoyer ma demande',
      },
    },
    footer: {
      tagline: "Votre partenaire de confiance pour construire, rénover et restaurer partout en France.",
      services: 'SERVICES',
      company: 'ENTREPRISE',
      serviceLinks: ['Construction neuve', 'Rénovation complète', 'Restauration', 'Aménagement intérieur'],
      companyLinks: [
        { label: 'À propos', href: '#about' },
        { label: 'Réalisations', href: '#projects' },
        { label: 'Carrières', href: '#' },
        { label: 'Contact', href: '#contact' },
      ],
      legal: 'TOUS DROITS RÉSERVÉS.',
      privacy: 'POLITIQUE DE CONFIDENTIALITÉ',
      terms: "CONDITIONS D'UTILISATION",
    },
  },
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
      quote: 'Get a Quote',
      edit: 'Edit content',
      editing: 'Edit mode active',
    },
    hero: {
      tagline: 'Construction · Renovation · Finishes · Heritage',
      headline1: 'WE BUILD',
      headline2: 'YOUR FUTURE.',
      sub: 'From structural work to final finishes, our team delivers construction, renovation, restoration and fit-out projects across France.',
      cta1: 'View Our Work',
      cta2: 'Contact Us',
      scroll: 'Scroll',
    },
    stats: [
      { value: '20+', label: 'Years of Experience' },
      { value: '31+', label: 'Projects Delivered' },
      { value: '100%', label: 'Client Satisfaction' },
      { value: '12', label: 'Regions Covered' },
    ],
    about: {
      title: 'MORE THAN BUILDERS.\nWE CREATE PLACES TO LIVE.',
      p1: "At Tanger AJ Construction, we put our expertise at the service of your ambitions. Every project is a promise kept — on time, on budget, with the attention to detail that makes the difference.",
      p2: "Masonry, plasterboard, render, painting, tiling, insulation or heritage restoration: we bring together every skill needed to create lasting, beautifully finished spaces.",
    },
    services: {
      eyebrow: 'Our Expertise',
      title: 'COMPLETE KNOW-HOW',
      sub: 'Comprehensive solutions for every stage of your project, from first sketch to key handover.',
      items: [
        { title: 'New Construction', icon: Building2, desc: "Individual homes, residential buildings, commercial premises — we manage construction from A to Z with rigorous and transparent project management." },
        { title: 'Full Renovation', icon: Wrench, desc: "Complete transformation of apartments, houses and professional premises: insulation, plasterboard, partitions, render, painting and finishes — all under one roof." },
        { title: 'Heritage Restoration', icon: RefreshCw, desc: "Restoration of old buildings, facades and heritage details. We respect original materials and traditional techniques." },
        { title: 'Residential Housing', icon: Home, desc: "Collective housing programmes and private residences. We manage every lot with precision, from structural work to finishes." },
        { title: 'Finishes & Fit-out', icon: Paintbrush, desc: "Render, painting, tiling, wall tiles, flooring, kitchens and bathrooms — our craftsmen care for every detail with selected materials." },
        { title: 'Project Management', icon: ShieldCheck, desc: "Complete site management: coordination of trades, administrative management, budget tracking and regular reporting. You stay stress-free." },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      title: 'OUR WORK SPEAKS FOR ITSELF',
      proj1: {
        tag: '01 — INTERIOR RENOVATION',
        title: 'HAUSSMANNIAN APARTMENT',
        desc: "Complete renovation of an apartment in Lyon: surface preparation, plasterboard, skim coating, tiling and paint finishes for a bright, lasting interior.",
        items: ['180 m² renovated', 'Tiling & wall tiles', 'Custom finishes'],
      },
      proj2: {
        tag: '02 — HERITAGE RESTORATION',
        title: 'OLD VILLAGE FACADE',
        desc: "Restoration of an old facade in a French village: masonry repairs, traditional lime render, painted joinery and preservation of original details.",
        items: ['Facade restored', 'Traditional lime render', 'Heritage details preserved'],
      },
      cta: 'View Project Details',
    },
    advantage: {
      title: "THE TANGER AJ\nADVANTAGE",
      sub: "We don't make empty promises. We deliver. Our commitment to quality and transparency has set us apart for 20 years.",
      items: [
        { title: 'SAFETY WITHOUT COMPROMISE', desc: "The safety of our teams and clients is non-negotiable. Strict protocols, continuous training, zero accidents." },
        { title: 'ON-TIME DELIVERY', desc: "Meeting deadlines is a matter of trust. We plan with precision and anticipate every challenge to deliver on the promised date." },
        { title: 'CERTIFIED QUALITY', desc: "RGE-certified craftsmen, ten-year warranty, selected materials — every stage is validated to offer you a lasting, quality build." },
      ],
    },
    contact: {
      eyebrow: 'Ready to Start?',
      title: "LET'S TALK ABOUT\nYOUR PROJECT.",
      sub: "Whether it's a renovation, construction or restoration, our team is available to assess your project and provide a free, detailed quote.",
      phone: 'Direct Line',
      email: 'Email',
      address: 'Head Office',
      addressValue: 'Rue Jacques Ressegaire\n13200 Arles, France',
      form: {
        title: 'REQUEST A FREE QUOTE',
        firstName: 'First Name',
        lastName: 'Last Name',
        emailLabel: 'Email Address',
        phoneLabel: 'Phone Number',
        projectType: 'Project Type',
        projectTypes: ['New Construction', 'Full Renovation', 'Restoration', 'Interior Design', 'Project Management', 'Other'],
        details: 'Describe your project',
        detailsPlaceholder: 'Surface area, location, desired timeline, approximate budget...',
        submit: 'Send My Request',
      },
    },
    footer: {
      tagline: "Your trusted partner for building, renovating and restoring across France.",
      services: 'SERVICES',
      company: 'COMPANY',
      serviceLinks: ['New Construction', 'Full Renovation', 'Restoration', 'Interior Design'],
      companyLinks: [
        { label: 'About Us', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#contact' },
      ],
      legal: 'ALL RIGHTS RESERVED.',
      privacy: 'PRIVACY POLICY',
      terms: 'TERMS OF USE',
    },
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export function LandingPage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [scrolled, setScrolled] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-[#f8f7f4] text-[#292725] overflow-x-hidden selection:bg-[#8f2f36] selection:text-white ${editMode ? 'editing' : ''}`} contentEditable={editMode} suppressContentEditableWarning style={{ fontFamily: "'Manrope', sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;500;600;700;800&display=swap');
        .font-heading { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .clip-diagonal { clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%); }
        .clip-diagonal-bottom { clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 100%); }
        .reveal-hover .reveal-content { max-height: 0; opacity: 0; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal-hover:hover .reveal-content { max-height: 200px; opacity: 1; margin-top: 1rem; }
        .text-stroke { -webkit-text-stroke: 1px rgba(255,255,255,0.12); color: transparent; }
        .lang-btn { transition: all 0.2s ease; }
        .lang-btn.active { background: #8f2f36; color: white; }
        .lang-btn:not(.active) { background: transparent; color: #71717a; }
        .lang-btn:not(.active):hover { color: #292725; }
        .editing h1, .editing h2, .editing h3, .editing h4, .editing p, .editing li, .editing a, .editing button, .editing label, .editing option {
          outline: 1px dashed rgba(143, 47, 54, 0.55);
          outline-offset: 3px;
          cursor: text;
        }
        .editing input, .editing textarea, .editing select { cursor: text; }
      `}} />
      {/* ── NAV ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#f8f7f4]/95 backdrop-blur-md border-[#dedad3] py-3' : 'bg-[#f8f7f4]/80 backdrop-blur-sm border-transparent py-5'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#8f2f36] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading text-2xl md:text-3xl tracking-wider pt-1">TANGER AJ</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase text-[#68635e]">
            <a href="#about" className="hover:text-[#8f2f36] transition-colors">{t.nav.about}</a>
            <a href="#services" className="hover:text-[#8f2f36] transition-colors">{t.nav.services}</a>
            <a href="#projects" className="hover:text-[#8f2f36] transition-colors">{t.nav.projects}</a>
            <a href="#contact" className="hover:text-[#8f2f36] transition-colors">{t.nav.contact}</a>
          </div>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div contentEditable={false} suppressContentEditableWarning className="flex items-center border border-zinc-700 overflow-hidden rounded-sm">
              <button
                onClick={() => setLang('fr')}
                className={`lang-btn px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${lang === 'fr' ? 'active' : ''}`}
              >FR</button>
              <div className="w-px h-5 bg-zinc-700" />
              <button
                onClick={() => setLang('en')}
                className={`lang-btn px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${lang === 'en' ? 'active' : ''}`}
              >EN</button>
            </div>

            <a href="#contact" contentEditable={false} suppressContentEditableWarning className="hidden md:flex items-center gap-2 bg-[#292725] text-white px-5 py-2.5 font-bold uppercase text-xs tracking-wider hover:bg-[#8f2f36] transition-colors duration-300">
              {t.nav.quote} <MoveUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {editMode && (
        <div contentEditable={false} suppressContentEditableWarning className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[60] bg-[#8f2f36] text-white px-5 py-3 text-xs font-bold uppercase tracking-wider shadow-[0_18px_50px_rgba(55,45,35,0.12)]">
          {t.nav.editing} — cliquez sur un texte ou un chiffre pour le remplacer
        </div>
      )}
      {/* ── HERO ── */}
      <section className="relative min-h-[100dvh] flex items-center justify-center clip-diagonal bg-[#f8f7f4] pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f7f4]/95 via-[#f8f7f4]/72 to-[#f8f7f4]/15 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8f7f4]/85 via-transparent to-transparent z-10" />
          <img
            src="/__mockup/images/tanger-aj-hero_2.jpg"
            alt="Chantier de construction d'une maison"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20 pt-20 pb-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-[#8f2f36]" />
              <p className="uppercase tracking-[0.2em] text-[#8f2f36] font-bold text-sm">{t.hero.tagline}</p>
            </div>
            <h1 className="font-heading text-7xl md:text-8xl lg:text-[9rem] leading-[0.88] tracking-tight mb-8">
              {t.hero.headline1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#292725] to-[#68635e]">{t.hero.headline2}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#5f5a55] max-w-2xl mb-12 font-medium leading-relaxed">
              {t.hero.sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="bg-[#8f2f36] text-white px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-[#70252c] transition-colors group">
                {t.hero.cta1} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="border border-[#bdb5ab] bg-white/70 backdrop-blur-sm text-[#292725] px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-[#292725] hover:text-white transition-colors">
                {t.hero.cta2}
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-6 md:left-12 z-20 flex flex-col items-center gap-4">
          <span className="text-xs tracking-widest text-[#68635e] font-bold uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{t.hero.scroll}</span>
          <ChevronDown className="w-5 h-5 text-[#68635e] animate-bounce" />
        </div>
      </section>
      {/* ── STATS & ABOUT ── */}
      <section id="about" className="py-24 bg-[#f8f7f4] relative z-10 -mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-b border-[#d8d2ca] pb-20">
            {t.stats.map((s, i) => (
              <div key={i}>
                <h3 className={`font-heading text-5xl md:text-7xl ${i === 0 ? 'text-[#8f2f36]' : ''}`}>{s.value}</h3>
                <p className="text-[#68635e] uppercase tracking-widest text-sm font-bold mt-2">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="pt-24 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-5xl md:text-6xl mb-6 leading-tight" style={{ whiteSpace: 'pre-line' }}>{t.about.title}</h2>
              <div className="w-24 h-2 bg-[#8f2f36] mb-8" />
            </div>
            <div>
              <p className="text-[#5f5a55] text-lg leading-relaxed mb-6">{t.about.p1}</p>
              <p className="text-[#5f5a55] text-lg leading-relaxed mb-8">{t.about.p2}</p>
            </div>
          </div>
        </div>
      </section>
      {/* ── SERVICES ── */}
      <section id="services" className="py-32 bg-[#eeece8] relative clip-diagonal-bottom">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-1 bg-[#8f2f36]" />
                <p className="uppercase tracking-[0.2em] text-[#8f2f36] font-bold text-sm">{t.services.eyebrow}</p>
              </div>
              <h2 className="font-heading text-6xl md:text-8xl">{t.services.title}</h2>
            </div>
            <p className="text-[#5f5a55] max-w-sm mb-4">{t.services.sub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((service, i) => (
              <div key={i} className="group bg-[#f8f7f4] border border-[#d8d2ca] p-10 hover:border-[#8f2f36] transition-colors reveal-hover cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <service.icon className="w-32 h-32 text-white" />
                </div>
                <service.icon className="w-12 h-12 text-[#8f2f36] mb-8 relative z-10" />
                <h3 className="font-heading text-3xl mb-4 relative z-10 group-hover:text-[#8f2f36] transition-colors">{service.title}</h3>
                <div className="w-12 h-0.5 bg-[#d8d2ca] group-hover:bg-[#8f2f36] transition-colors mb-4 relative z-10" />
                <div className="reveal-content relative z-10">
                  <p className="text-[#5f5a55] leading-relaxed text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── PROJECTS ── */}
      <section id="projects" className="py-32 bg-[#f8f7f4]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-24 relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-1 bg-[#8f2f36]" />
              <p className="uppercase tracking-[0.2em] text-[#8f2f36] font-bold text-sm">{t.projects.eyebrow}</p>
            </div>
            <h2 className="font-heading text-5xl md:text-7xl relative z-10">{t.projects.title}</h2>
          </div>

          {/* Project 1 */}
          <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-center mb-32">
            <div className="md:col-span-7 relative group">
              <div className="absolute inset-0 bg-[#8f2f36] translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
              <img
            src="/__mockup/images/tanger-aj-project1_color.jpg"
                alt="Rénovation intérieure avec pose de carrelage"
                className="relative z-10 w-full aspect-[4/3] object-cover transition-all duration-700"
              />
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pl-8">
              <p className="text-[#8f2f36] font-bold tracking-widest text-sm mb-2">{t.projects.proj1.tag}</p>
              <h3 className="font-heading text-4xl md:text-5xl mb-6">{t.projects.proj1.title}</h3>
              <p className="text-[#5f5a55] mb-8 leading-relaxed">{t.projects.proj1.desc}</p>
              <ul className="space-y-4 mb-8 text-sm font-bold text-[#4c4844]">
                {t.projects.proj1.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#8f2f36]" />{item}</li>
                ))}
              </ul>
              <a href="#" className="uppercase tracking-widest text-sm font-bold border-b border-[#8f2f36] pb-1 hover:text-[#8f2f36] transition-colors">{t.projects.cta}</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-center">
            <div className="md:col-span-4 order-2 md:order-1">
              <p className="text-[#8f2f36] font-bold tracking-widest text-sm mb-2">{t.projects.proj2.tag}</p>
              <h3 className="font-heading text-4xl md:text-5xl mb-6">{t.projects.proj2.title}</h3>
              <p className="text-[#5f5a55] mb-8 leading-relaxed">{t.projects.proj2.desc}</p>
              <ul className="space-y-4 mb-8 text-sm font-bold text-[#4c4844]">
                {t.projects.proj2.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#8f2f36]" />{item}</li>
                ))}
              </ul>
              <a href="#" className="uppercase tracking-widest text-sm font-bold border-b border-[#8f2f36] pb-1 hover:text-[#8f2f36] transition-colors">{t.projects.cta}</a>
            </div>
            <div className="md:col-span-7 md:col-start-6 relative group order-1 md:order-2">
              <div className="absolute inset-0 bg-[#d8d2ca] -translate-x-4 translate-y-4 transition-transform group-hover:-translate-x-6 group-hover:translate-y-6" />
              <img
            src="/__mockup/images/tanger-aj-project2_color.jpg"
                alt="Restauration d'une façade de patrimoine"
                className="relative z-10 w-full aspect-[4/3] object-cover transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ── ADVANTAGE ── */}
      <section className="py-32 bg-[#8f2f36] text-[#292725]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-6xl md:text-8xl leading-none mb-8" style={{ whiteSpace: 'pre-line' }}>{t.advantage.title}</h2>
              <p className="text-[#292725]/80 text-xl font-medium max-w-md">{t.advantage.sub}</p>
            </div>
            <div className="grid gap-8">
              {t.advantage.items.map((item, i) => (
                <div key={i} className="flex gap-6 border-b border-white/25 pb-8">
                  <div className="font-heading text-4xl opacity-50 shrink-0">0{i + 1}</div>
                  <div>
                    <h4 className="font-heading text-2xl mb-2">{item.title}</h4>
                    <p className="text-[#292725]/70 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ── CONTACT ── */}
      <section id="contact" className="py-32 bg-[#eeece8] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f8f7f4] clip-diagonal hidden lg:block z-0" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="pr-0 lg:pr-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-1 bg-[#8f2f36]" />
                <p className="uppercase tracking-[0.2em] text-[#8f2f36] font-bold text-sm">{t.contact.eyebrow}</p>
              </div>
              <h2 className="font-heading text-5xl md:text-7xl mb-8 leading-tight" style={{ whiteSpace: 'pre-line' }}>{t.contact.title}</h2>
              <p className="text-[#5f5a55] text-lg mb-12">{t.contact.sub}</p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8e4de] border border-[#d8d2ca] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#8f2f36]" />
                  </div>
                  <div>
                    <p className="text-[#68635e] uppercase tracking-widest text-xs font-bold mb-1">{t.contact.phone}</p>
                    <p className="text-2xl font-heading tracking-wider">+33 7 58 15 11 47</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8e4de] border border-[#d8d2ca] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#8f2f36]" />
                  </div>
                  <div>
                    <p className="text-[#68635e] uppercase tracking-widest text-xs font-bold mb-1">{t.contact.email}</p>
                    <p className="text-lg font-medium">construction.ajenoui@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8e4de] border border-[#d8d2ca] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#8f2f36]" />
                  </div>
                  <div>
                    <p className="text-[#68635e] uppercase tracking-widest text-xs font-bold mb-1">{t.contact.address}</p>
                    <p className="text-lg font-medium text-[#4c4844]" style={{ whiteSpace: 'pre-line' }}>Rue Jacques Ressegaire{'\n'}13200 Arles, France</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f8f7f4] border border-[#d8d2ca] p-8 md:p-12 relative z-10 shadow-[0_18px_50px_rgba(55,45,35,0.12)]">
              <h3 className="font-heading text-3xl mb-8">{t.contact.form.title}</h3>

              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();

                  const form = e.currentTarget;
                  const formData = new FormData(form);

                  const data = {
                    firstName: formData.get("firstName"),
                    lastName: formData.get("lastName"),
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    projectType: formData.get("projectType"),
                    details: formData.get("details"),
                  };

                  try {
                    await fetch(
                      "https://script.google.com/macros/s/AKfycbyaIpZID8_cbY8VaeVVRM0P9FQ41VKeu5SuOb0TX7BtczXZa9T1kcVQ5C4Dsagse3_i/exec",
                      {
                        method: "POST",
                        mode: "no-cors",
                        headers: {
                          "Content-Type": "text/plain",
                        },
                        body: JSON.stringify(data),
                      }
                    );

                    alert("Thank you! We will contact you soon.");
                    form.reset();

                  } catch (error) {
                    console.error("Error sending form:", error);
                    alert("There was an error. Please try again.");
                  }
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-[#68635e]">
                      {t.contact.form.firstName}
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full bg-[#e8e4de] border border-[#d8d2ca] p-4 text-white focus:outline-none focus:border-[#8f2f36] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-[#68635e]">
                      {t.contact.form.lastName}
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full bg-[#e8e4de] border border-[#d8d2ca] p-4 text-white focus:outline-none focus:border-[#8f2f36] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-[#68635e]">
                      {t.contact.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-[#e8e4de] border border-[#d8d2ca] p-4 text-white focus:outline-none focus:border-[#8f2f36] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-[#68635e]">
                      {t.contact.form.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full bg-[#e8e4de] border border-[#d8d2ca] p-4 text-white focus:outline-none focus:border-[#8f2f36] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-[#68635e]">
                    {t.contact.form.projectType}
                  </label>

                  <select
                    name="projectType"
                    className="w-full bg-[#e8e4de] border border-[#d8d2ca] p-4 text-white focus:outline-none focus:border-[#8f2f36] transition-colors appearance-none"
                  >
                    {t.contact.form.projectTypes.map((pt, i) => (
                      <option key={i}>{pt}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-[#68635e]">
                    {t.contact.form.details}
                  </label>

                  <textarea
                    name="details"
                    rows={4}
                    required
                    className="w-full bg-[#e8e4de] border border-[#d8d2ca] p-4 text-white focus:outline-none focus:border-[#8f2f36] transition-colors resize-none"
                    placeholder={t.contact.form.detailsPlaceholder}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8f2f36] text-white p-4 font-bold uppercase tracking-wider hover:bg-[#70252c] transition-colors flex justify-center items-center gap-2"
                >
                  {t.contact.form.submit}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            </div>
            

          </div>
        </div>
      </section>
      {/* ── FOOTER ── */}
      <footer className="bg-[#292725] py-16 border-t border-[#d8d2ca]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#8f2f36] flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="font-heading text-3xl tracking-wider pt-1">TANGER AJ CONSTRUCTION</span>
              </div>
              <p className="text-[#68635e] max-w-sm mb-8">{t.footer.tagline}</p>
              <div className="flex gap-4">
                {['IN', 'FB', 'X'].map((s) => (
                  <div key={s} className="w-10 h-10 bg-[#e8e4de] border border-[#d8d2ca] flex items-center justify-center hover:bg-[#8f2f36] hover:border-[#8f2f36] transition-colors cursor-pointer">
                    <span className="font-bold text-xs">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-heading text-xl mb-6">{t.footer.services}</h4>
              <ul className="space-y-4 text-[#5f5a55] font-medium text-sm">
                {t.footer.serviceLinks.map((s, i) => (
                  <li key={i}><a href="#services" className="hover:text-[#8f2f36] transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-xl mb-6">{t.footer.company}</h4>
              <ul className="space-y-4 text-[#5f5a55] font-medium text-sm">
                {t.footer.companyLinks.map((l, i) => (
                  <li key={i}><a href={l.href} className="hover:text-[#8f2f36] transition-colors">{l.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-[#d8d2ca] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#817a72] font-bold">
            <p>&copy; {new Date().getFullYear()} TANGER AJ CONSTRUCTION. {t.footer.legal}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
