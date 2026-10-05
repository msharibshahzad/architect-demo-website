"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Menu, X, MoveUpRight, Plus, Instagram, Linkedin, CheckCircle2 } from "lucide-react";

const projects = [
  { n: "01", title: "The Stillwater Residence", type: "Private residence · Lahore", year: "2025", image: "photo-1600607687939-ce8a6c25118c", size: "wide" },
  { n: "02", title: "House of Light", type: "Residential · Islamabad", year: "2024", image: "photo-1600210492486-724fe5c67fb0", size: "tall" },
  { n: "03", title: "Form & Function", type: "Commercial · Karachi", year: "2024", image: "photo-1487958449943-2429e8be8625", size: "normal" },
  { n: "04", title: "The Courtyard House", type: "Private residence · Multan", year: "2023", image: "photo-1600607687920-4e2a09cf159d", size: "normal" },
];

const services = [
  ["01", "Architecture", "From first sketch to final structure, we create spaces shaped around the way people live, work and connect."],
  ["02", "Interior environments", "Material, light and proportion come together in interiors that feel considered, calm and enduring."],
  ["03", "3D visualization", "Immersive imagery and spatial previews that make the future tangible before construction begins."],
  ["04", "Planning & consultation", "Clear thinking at every stage—from feasibility and concept development to detailed design."],
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function ArchitecturalModel() {
  return <div className="model-stage" aria-label="Abstract 3D architectural pavilion">
    <div className="model-glow" />
    <div className="model-grid" />
    <div className="model">
      <div className="model-base" />
      <div className="model-plinth" />
      <div className="model-wall wall-back" />
      <div className="model-wall wall-left" />
      <div className="model-wall wall-right" />
      <div className="model-roof" />
      <div className="model-roof roof-inner" />
      <div className="model-column c1" /><div className="model-column c2" /><div className="model-column c3" />
      <div className="model-shadow" />
    </div>
    <div className="model-caption"><span>FIG. 01 / SPATIAL STUDY</span><span>24° 51' N — 67° 00' E</span></div>
  </div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const closeMenu = () => setMenuOpen(false);

  return <main>
    <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
    <header className="site-header">
      <a href="#home" className="brand" onClick={closeMenu}><span className="brand-logo">Your Logo</span><span className="brand-name">YOUR NAME<small>ARCHITECTURE & DESIGN</small></span></a>
      <nav className={menuOpen ? "nav open" : "nav"}>
        <a href="#studio" onClick={closeMenu}>Studio</a><a href="#work" onClick={closeMenu}>Selected work</a><a href="#expertise" onClick={closeMenu}>Expertise</a><a href="#contact" onClick={closeMenu} className="nav-contact">Start a project <ArrowUpRight size={14}/></a>
      </nav>
      <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <section className="hero" id="home">
      <div className="hero-copy">
        <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>INDEPENDENT ARCHITECTURE PRACTICE <span>— EST. 2012</span></motion.p>
        <h1><motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: .15, ease: [.22,1,.36,1] }}>Spaces that</motion.span><motion.span className="indent" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: .28, ease: [.22,1,.36,1] }}> <em>move</em> us.</motion.span></h1>
        <motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .9 }}>
          <p>We shape thoughtful environments where material, light and human experience meet. Architecture for a more meaningful everyday.</p>
          <a href="#work" className="primary-cta">Explore selected work <ArrowDownRight size={19}/></a>
        </motion.div>
      </div>
      <div className="hero-visual">
        <div className="hero-image" />
        <div className="hero-image-overlay" />
        <div className="hero-side-label">BUILT WITH INTENTION · 001—024</div>
        <div className="hero-image-note"><span>01 / 04</span><span>THE ART OF ARRIVAL</span></div>
        <div className="hero-orbit"><span>DESIGNING</span><b>FOR</b><span>WHAT'S NEXT</span></div>
      </div>
      <div className="hero-footer"><span>SCROLL TO DISCOVER</span><span>LAHORE · PAKISTAN</span><span>↓</span></div>
    </section>

    <section className="intro section-pad" id="studio">
      <Reveal><p className="eyebrow dark">01 — OUR POINT OF VIEW</p></Reveal>
      <div className="intro-grid">
        <Reveal><h2>Good spaces don't just occupy land.<br/><em>They leave a feeling.</em></h2></Reveal>
        <Reveal delay={.15}><div className="intro-text"><p>At Your Name, we believe architecture is an act of listening. To the landscape, to the light, to the lives that will unfold within a space.</p><p>Our practice brings clarity to complexity—creating enduring architecture with a quiet confidence and a deep respect for its context.</p><a className="text-link" href="#contact">Meet the studio <ArrowUpRight size={16}/></a></div></Reveal>
      </div>
      <div className="intro-stats"><div><strong>12<span>+</span></strong><small>YEARS OF PRACTICE</small></div><div><strong>48</strong><small>PROJECTS REALIZED</small></div><div><strong>06</strong><small>DESIGN AWARDS</small></div><div className="stat-note">Small by design.<br/>Ambitious by nature.</div></div>
    </section>

    <section className="work-section section-pad" id="work">
      <div className="section-heading"><Reveal><p className="eyebrow">02 — SELECTED WORK / 2023—25</p><h2>Made to <em>matter.</em></h2></Reveal><Reveal delay={.1}><a href="#contact" className="section-cta">Discuss your project <ArrowUpRight size={16}/></a></Reveal></div>
      <div className="project-grid">
        {projects.map((p,i)=><Reveal key={p.n} delay={i*.08} className={"project-card "+p.size}><a href="#contact" className="project-image-wrap"><img src={i===1 ? "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85" : `https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=1400&q=85`} alt={p.title}/><span className="project-arrow"><ArrowUpRight/></span><span className="project-index">{p.n} / 04</span></a><div className="project-meta"><div><h3>{p.title}</h3><p>{p.type}</p></div><span>{p.year}</span></div></Reveal>)}
      </div>
      <div className="work-end"><span>AN ONGOING EXPLORATION OF PLACE, PURPOSE & POSSIBILITY.</span><span>04 / 04</span></div>
    </section>

    <section className="model-section section-pad">
      <div className="model-copy"><Reveal><p className="eyebrow dark">03 — BEYOND THE DRAWING</p><h2>See the idea<br/>before it <em>exists.</em></h2><p className="model-description">Our immersive 3D studies invite you inside a space that has yet to be built. Explore proportion, light and atmosphere with a sense of presence that a flat drawing can't offer.</p><a href="#contact" className="text-link">Explore visualization <ArrowUpRight size={16}/></a></Reveal></div>
      <Reveal delay={.15}><ArchitecturalModel/></Reveal>
    </section>

    <section className="expertise section-pad" id="expertise">
      <div className="expertise-top"><Reveal><p className="eyebrow">04 — WHAT WE DO</p><h2>One vision.<br/><em>Every detail.</em></h2></Reveal><Reveal><p className="expertise-lead">A considered process and a connected team, bringing each project from its earliest possibility to its fullest expression.</p></Reveal></div>
      <div className="service-list">{services.map(([n,title,desc],i)=><Reveal key={n} delay={i*.04}><div className="service-row"><span className="service-number">{n}</span><h3>{title}</h3><p>{desc}</p><span className="service-plus"><Plus size={20}/></span></div></Reveal>)}</div>
    </section>

    <section className="manifesto">
      <div className="manifesto-image"/>
      <div className="manifesto-content"><Reveal><p className="eyebrow">A NOTE ON OUR APPROACH</p><h2>Less, but<br/><em>with intention.</em></h2><p>We don't believe in architecture that shouts. We believe in spaces that reveal themselves slowly—through a shifting shadow, a tactile surface, a view that makes you pause.</p><span className="signature">Your Name <i>✳</i></span></Reveal></div>
    </section>

    <section className="contact-section section-pad" id="contact">
      <div className="contact-top"><Reveal><p className="eyebrow">05 — THE NEXT CHAPTER</p><h2>Have a place<br/>in <em>mind?</em></h2></Reveal><Reveal delay={.1}><p className="contact-aside">Every meaningful project begins with a conversation. Tell us what you're imagining—we'd love to hear about it.</p></Reveal></div>
      <div className="contact-grid">
        <div className="contact-details">
          <span className="contact-kicker">LET'S TALK ABOUT YOUR NEXT SPACE</span>
          <a href="https://wa.me/923177099746?text=Hello%20Your%20Name%2C%20I%27d%20like%20to%20discuss%20a%20project." className="contact-whatsapp-link">WhatsApp <ArrowUpRight/></a>
          <p>+92 317 7097746<br/>LAHORE, PAKISTAN · AVAILABLE WORLDWIDE</p>
          <div className="contact-points"><span><CheckCircle2 size={15}/> Initial consultation</span><span><CheckCircle2 size={15}/> Residential & commercial</span><span><CheckCircle2 size={15}/> Design-led approach</span></div>
          <div className="socials"><a href="#contact" aria-label="Instagram"><Instagram/></a><a href="#contact" aria-label="LinkedIn"><Linkedin/></a></div>
        </div>
        <form className="contact-form" onSubmit={e=>{e.preventDefault();setSent(true)}}>
          <div className="form-heading"><span>PROJECT INQUIRY</span><p>Share a few details and we'll know how to start the conversation.</p></div>
          <div className="form-row"><label>Your name<input required placeholder="Full name"/></label><label>Email address<input required type="email" placeholder="you@example.com"/></label></div>
          <div className="form-row"><label>Phone / WhatsApp<input placeholder="+92 3XX XXXXXXX"/></label><label>Project type<select defaultValue=""><option value="" disabled>Select project type</option><option>Residential</option><option>Commercial</option><option>Interior design</option><option>Renovation</option><option>3D visualization</option><option>Consultation</option></select></label></div>
          <label>Tell us about the project<textarea required rows={4} placeholder="Location, approximate size, timeline, or anything you'd like us to know..."/></label>
          <button type="submit" className="submit-btn">{sent ? "Inquiry received — thank you" : "Start the conversation"} <ArrowUpRight size={18}/></button>
          <small className="form-note">This demo form is ready to connect to email or a CRM before launch.</small>
        </form>
      </div>
    </section>
    <footer className="footer"><a href="#home" className="brand footer-brand"><span className="brand-logo">Your Logo</span><span className="brand-name">YOUR NAME<small>ARCHITECTURE & DESIGN</small></span></a><span>© 2025 YOUR NAME. CONCEPT WEBSITE.</span><a href="#home">BACK TO TOP ↑</a></footer>
    <a className="floating-contact" href="https://wa.me/923177099746?text=Hello%20Your%20Name%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp at +92 317 7097746">
      <span className="wa-icon" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M16 3.5a12.45 12.45 0 0 0-10.7 19L3.5 28.5l6.2-1.6A12.5 12.5 0 1 0 16 3.5Z" stroke="currentColor" stroke-width="2.2"/><path d="M11.8 10.2c.4-.4 1-.4 1.3.1l1.1 1.7c.3.4.2 1-.1 1.3l-.7.7c.7 1.4 1.8 2.5 3.2 3.2l.7-.7c.3-.3.9-.4 1.3-.1l1.7 1.1c.5.3.5.9.1 1.3l-.7.8c-.6.7-1.5 1-2.4.8-4.2-1-7.5-4.3-8.5-8.5-.2-.9.1-1.8.8-2.4l.8-.7Z" fill="currentColor"/></svg></span>
      <span className="floating-copy"><strong>WhatsApp</strong><small>+92 317 7097746</small></span><MoveUpRight size={15}/>
    </a>
  </main>;
}
