import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, Building2, ChevronRight, Hammer, HardHat, Mail, 
  MapPin, MoveUpRight, Phone, Ruler, Truck, ShieldCheck, 
  Wrench, CheckCircle2, ChevronDown
} from 'lucide-react';

export function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-body overflow-x-hidden selection:bg-[#ff5a00] selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;500;600;700;800&display=swap');
        
        .font-heading { 
          font-family: 'Bebas Neue', sans-serif; 
          letter-spacing: 0.02em; 
        }
        .font-body { 
          font-family: 'Manrope', sans-serif; 
        }
        
        .text-stroke {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.15);
          color: transparent;
        }

        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
        }
        
        .clip-diagonal-bottom {
          clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 100%);
        }

        .reveal-hover .reveal-content {
          max-height: 0;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .reveal-hover:hover .reveal-content {
          max-height: 200px;
          opacity: 1;
          margin-top: 1rem;
        }
      `}} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#ff5a00] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading text-2xl md:text-3xl tracking-wider pt-1">TANGER AJ</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase text-zinc-300">
            <a href="#about" className="hover:text-[#ff5a00] transition-colors">About</a>
            <a href="#services" className="hover:text-[#ff5a00] transition-colors">Services</a>
            <a href="#projects" className="hover:text-[#ff5a00] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#ff5a00] transition-colors">Contact</a>
          </div>

          <a href="#contact" className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-2.5 font-bold uppercase text-sm hover:bg-[#ff5a00] hover:text-white transition-colors duration-300">
            Get a Quote <MoveUpRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center justify-center clip-diagonal bg-[#0a0a0a] pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
          <img 
            src="/__mockup/images/tanger-aj-hero.jpg" 
            alt="Construction site at golden hour" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20 pt-20 pb-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-[#ff5a00]" />
              <p className="uppercase tracking-[0.2em] text-[#ff5a00] font-bold text-sm">Industrial & Commercial Construction</p>
            </div>
            <h1 className="font-heading text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tight mb-8">
              WE BUILD THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">FUTURE.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 font-medium leading-relaxed">
              Strength in every structure. We engineer and build uncompromising projects for those who demand precision, scale, and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="bg-[#ff5a00] text-white px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-orange-600 transition-colors group">
                View Our Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="border border-zinc-700 bg-black/50 backdrop-blur-sm text-white px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-6 md:left-12 z-20 flex flex-col items-center gap-4 animate-bounce">
          <span className="writing-vertical text-xs tracking-widest text-zinc-500 font-bold uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <ChevronDown className="w-5 h-5 text-zinc-500" />
        </div>
      </section>

      {/* STATS & INTRO SECTION */}
      <section id="about" className="py-24 bg-[#0a0a0a] relative z-10 -mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-b border-zinc-800 pb-20">
            <div>
              <h3 className="font-heading text-5xl md:text-7xl text-[#ff5a00]">25+</h3>
              <p className="text-zinc-500 uppercase tracking-widest text-sm font-bold mt-2">Years Active</p>
            </div>
            <div>
              <h3 className="font-heading text-5xl md:text-7xl">150+</h3>
              <p className="text-zinc-500 uppercase tracking-widest text-sm font-bold mt-2">Projects Done</p>
            </div>
            <div>
              <h3 className="font-heading text-5xl md:text-7xl">10K</h3>
              <p className="text-zinc-500 uppercase tracking-widest text-sm font-bold mt-2">Tons of Steel</p>
            </div>
            <div>
              <h3 className="font-heading text-5xl md:text-7xl">100%</h3>
              <p className="text-zinc-500 uppercase tracking-widest text-sm font-bold mt-2">Safety Record</p>
            </div>
          </div>

          <div className="pt-24 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl mb-6">NOT JUST CONTRACTORS.<br/>WE ARE BUILDERS OF LEGACIES.</h2>
              <div className="w-24 h-2 bg-[#ff5a00] mb-8" />
            </div>
            <div>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                At Tanger AJ, we don't just pour concrete and weld steel. We forge the foundations of modern industry. Our approach combines raw industrial power with meticulous engineering precision.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                From towering commercial complexes to heavy industrial facilities, our teams execute with ruthless efficiency and an unwavering commitment to structural integrity. When deadlines are non-negotiable, clients call us.
              </p>
              <a href="#about" className="inline-flex items-center gap-2 text-[#ff5a00] font-bold uppercase tracking-wider hover:text-white transition-colors group">
                Read our full story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 bg-[#121212] relative clip-diagonal-bottom">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-1 bg-[#ff5a00]" />
                <p className="uppercase tracking-[0.2em] text-[#ff5a00] font-bold text-sm">Our Capabilities</p>
              </div>
              <h2 className="font-heading text-6xl md:text-8xl">IRONCLAD EXPERTISE</h2>
            </div>
            <p className="text-zinc-400 max-w-sm mb-4">
              Comprehensive construction solutions scaled for ambition. We self-perform critical path scopes to control schedule and quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "General Contracting", icon: Building2, desc: "End-to-end project execution with strict timeline adherence and budget control. We manage every phase from ground-breaking to handover." },
              { title: "Structural Engineering", icon: Ruler, desc: "Complex structural solutions utilizing advanced steel framing and reinforced concrete for maximum durability and load capacity." },
              { title: "Commercial Build", icon: Truck, desc: "Large-scale commercial developments including high-rises, retail complexes, and corporate headquarters built for the future." },
              { title: "Heavy Industrial", icon: HardHat, desc: "Specialized construction for manufacturing plants, warehouses, and industrial facilities requiring rigorous safety and technical standards." },
              { title: "Renovation", icon: Hammer, desc: "Structural modifications and complete overhauls of existing infrastructure, transforming outdated spaces into modern assets." },
              { title: "Project Management", icon: ShieldCheck, desc: "Comprehensive oversight, risk mitigation, and proactive problem-solving to keep massive undertakings on track." }
            ].map((service, i) => (
              <div key={i} className="group bg-[#0a0a0a] border border-zinc-800 p-10 hover:border-[#ff5a00] transition-colors reveal-hover cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:-translate-y-0 duration-500">
                  <service.icon className="w-32 h-32 text-white" />
                </div>
                
                <service.icon className="w-12 h-12 text-[#ff5a00] mb-8 relative z-10" />
                <h3 className="font-heading text-3xl mb-4 relative z-10 group-hover:text-[#ff5a00] transition-colors">{service.title}</h3>
                <div className="w-12 h-0.5 bg-zinc-800 group-hover:bg-[#ff5a00] transition-colors mb-4 relative z-10" />
                
                <div className="reveal-content relative z-10">
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-24 flex items-center justify-between">
             <h2 className="font-heading text-6xl md:text-9xl text-stroke opacity-30 select-none hidden md:block absolute right-0 translate-x-1/4">PROVEN RESULTS</h2>
             <div>
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-1 bg-[#ff5a00]" />
                  <p className="uppercase tracking-[0.2em] text-[#ff5a00] font-bold text-sm">Showcase</p>
                </div>
                <h2 className="font-heading text-6xl md:text-8xl relative z-10">BUILT TO LAST</h2>
             </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-center mb-32">
            <div className="md:col-span-7 relative group">
              <div className="absolute inset-0 bg-[#ff5a00] translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
              <img 
                src="/__mockup/images/tanger-aj-project1.jpg" 
                alt="Concrete and steel structural framework" 
                className="relative z-10 w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pl-8">
              <p className="text-[#ff5a00] font-bold tracking-widest text-sm mb-2">01 — INDUSTRIAL</p>
              <h3 className="font-heading text-4xl md:text-5xl mb-6">NEXUS HEAVY FOUNDRY</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                A massive 200,000 sq ft industrial facility requiring deep foundation work and specialized heavy steel framework to support massive overhead cranes. Completed 3 weeks ahead of schedule.
              </p>
              <ul className="space-y-4 mb-8 text-sm font-bold text-zinc-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#ff5a00]" /> 4,500 Tons of Steel</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#ff5a00]" /> 18 Month Timeline</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#ff5a00]" /> Zero Safety Incidents</li>
              </ul>
              <a href="#" className="uppercase tracking-widest text-sm font-bold border-b border-[#ff5a00] pb-1 hover:text-[#ff5a00] transition-colors">View Project Details</a>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-center">
            <div className="md:col-span-4 md:pl-8 order-2 md:order-1 text-right md:text-left">
              <p className="text-[#ff5a00] font-bold tracking-widest text-sm mb-2">02 — COMMERCIAL</p>
              <h3 className="font-heading text-4xl md:text-5xl mb-6">ECLIPSE TOWER</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                A 42-story commercial skyscraper featuring an innovative geometric glass facade and a central concrete core. This project redefined the city skyline and set new standards for energy efficiency.
              </p>
              <ul className="space-y-4 mb-8 text-sm font-bold text-zinc-300 flex flex-col md:items-start items-end">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#ff5a00]" /> 42 Stories</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#ff5a00]" /> LEED Platinum Certified</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#ff5a00]" /> Phased Delivery</li>
              </ul>
              <a href="#" className="uppercase tracking-widest text-sm font-bold border-b border-[#ff5a00] pb-1 hover:text-[#ff5a00] transition-colors">View Project Details</a>
            </div>
            <div className="md:col-span-7 md:col-start-6 relative group order-1 md:order-2">
              <div className="absolute inset-0 bg-zinc-800 -translate-x-4 translate-y-4 transition-transform group-hover:-translate-x-6 group-hover:translate-y-6" />
              <img 
                src="/__mockup/images/tanger-aj-project2.jpg" 
                alt="Completed commercial skyscraper" 
                className="relative z-10 w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / EDGE */}
      <section className="py-32 bg-[#ff5a00] text-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-6xl md:text-8xl leading-none mb-8">THE TANGER AJ<br/>ADVANTAGE</h2>
              <p className="text-black/80 text-xl font-medium max-w-md">
                We don't make excuses. We make progress. Our relentless focus on execution separates us from the competition.
              </p>
            </div>
            
            <div className="grid gap-8">
              {[
                { title: "UNCOMPROMISING SAFETY", desc: "Our sites are disciplined. We enforce the strictest safety protocols in the industry because protecting our team is paramount." },
                { title: "DEADLINE OBSESSION", desc: "Time is money. We employ advanced scheduling algorithms and proactive supply chain management to never miss a handover date." },
                { title: "ENGINEERING EXCELLENCE", desc: "We anticipate structural challenges before they happen. Our in-house engineering team works side-by-side with execution." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 border-b border-black/20 pb-8">
                  <div className="font-heading text-4xl opacity-50">0{i+1}</div>
                  <div>
                    <h4 className="font-heading text-2xl mb-2">{item.title}</h4>
                    <p className="text-black/70 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT SECTION */}
      <section id="contact" className="py-32 bg-[#121212] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0a0a0a] clip-diagonal hidden lg:block z-0" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="pr-0 lg:pr-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-1 bg-[#ff5a00]" />
                <p className="uppercase tracking-[0.2em] text-[#ff5a00] font-bold text-sm">Ready to Build?</p>
              </div>
              <h2 className="font-heading text-6xl md:text-8xl mb-8">LET'S BREAK<br/>GROUND.</h2>
              <p className="text-zinc-400 text-lg mb-12">
                Have a project that requires serious capability? Reach out to our project estimation team. We're ready to review your blueprints and provide a comprehensive proposal.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#ff5a00]" />
                  </div>
                  <div>
                    <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-1">Direct Line</p>
                    <p className="text-2xl font-heading tracking-wider">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#ff5a00]" />
                  </div>
                  <div>
                    <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-1">Email Estimation</p>
                    <p className="text-lg font-medium">info@tangeraj.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#ff5a00]" />
                  </div>
                  <div>
                    <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-1">Headquarters</p>
                    <p className="text-lg font-medium text-zinc-300">
                      700 Industrial Blvd, Suite 400<br/>
                      Metro Steel District, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#0a0a0a] border border-zinc-800 p-8 md:p-12 lg:-mr-12 relative z-10 shadow-2xl">
              <h3 className="font-heading text-3xl mb-8">REQUEST A CONSULTATION</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-zinc-500">First Name</label>
                    <input type="text" className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:outline-none focus:border-[#ff5a00] transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-zinc-500">Last Name</label>
                    <input type="text" className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:outline-none focus:border-[#ff5a00] transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-zinc-500">Email Address</label>
                    <input type="email" className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:outline-none focus:border-[#ff5a00] transition-colors" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-zinc-500">Phone Number</label>
                    <input type="tel" className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:outline-none focus:border-[#ff5a00] transition-colors" placeholder="(555) 000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-zinc-500">Project Type</label>
                  <select className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:outline-none focus:border-[#ff5a00] transition-colors appearance-none">
                    <option>Commercial Development</option>
                    <option>Industrial Facility</option>
                    <option>Structural Renovation</option>
                    <option>General Contracting</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-zinc-500">Project Details</label>
                  <textarea rows={4} className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:outline-none focus:border-[#ff5a00] transition-colors resize-none" placeholder="Tell us about scale, timeline, and location..."></textarea>
                </div>

                <button type="submit" className="w-full bg-[#ff5a00] text-white p-4 font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors flex justify-center items-center gap-2">
                  Submit Request <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-16 border-t border-zinc-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#ff5a00] flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="font-heading text-3xl tracking-wider pt-1">TANGER AJ</span>
              </div>
              <p className="text-zinc-500 max-w-sm mb-8">
                Uncompromising construction and structural engineering for those who build the future. 
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-[#ff5a00] hover:border-[#ff5a00] transition-colors cursor-pointer">
                  <span className="font-bold text-sm">IN</span>
                </div>
                <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-[#ff5a00] hover:border-[#ff5a00] transition-colors cursor-pointer">
                  <span className="font-bold text-sm">X</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading text-xl mb-6">SERVICES</h4>
              <ul className="space-y-4 text-zinc-400 font-medium text-sm">
                <li><a href="#" className="hover:text-[#ff5a00] transition-colors">General Contracting</a></li>
                <li><a href="#" className="hover:text-[#ff5a00] transition-colors">Structural Engineering</a></li>
                <li><a href="#" className="hover:text-[#ff5a00] transition-colors">Commercial Build</a></li>
                <li><a href="#" className="hover:text-[#ff5a00] transition-colors">Heavy Industrial</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-xl mb-6">COMPANY</h4>
              <ul className="space-y-4 text-zinc-400 font-medium text-sm">
                <li><a href="#about" className="hover:text-[#ff5a00] transition-colors">About Us</a></li>
                <li><a href="#projects" className="hover:text-[#ff5a00] transition-colors">Our Projects</a></li>
                <li><a href="#" className="hover:text-[#ff5a00] transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-[#ff5a00] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600 font-bold">
            <p>&copy; {new Date().getFullYear()} TANGER AJ CONSTRUCTION. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;