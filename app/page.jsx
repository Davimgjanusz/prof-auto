"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft, ArrowRight, BookOpen, Check, ChevronDown, Globe2,
  AtSign, Languages, Menu, MessageCircle, Moon, Quote, Sparkles,
  Sun, Target, Users, Video, X,
} from "lucide-react";
import { content } from "./content";

const instagramUrl = "https://www.instagram.com/bbbisaduera/";
const navIds = ["aulas", "metodologia", "sobre", "depoimentos"];
const formatIcons = [Users, MessageCircle, Languages, Target];

function PhotoPlaceholder({ label, note, variant = "hero" }) {
  return <div className={`photo-placeholder photo-${variant}`} role="img" aria-label={label}>
    <div><div className="photo-mark"><Sparkles size={20} aria-hidden="true" /></div><span>{label}</span><small>{note}</small></div>
  </div>;
}

export default function Home() {
  const [locale, setLocale] = useState("pt");
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [activeFormat, setActiveFormat] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const t = content[locale];

  /* Browser preferences are restored after hydration. */
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const savedTheme = localStorage.getItem("bbb-theme");
    const savedLocale = localStorage.getItem("bbb-locale");
    const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(savedTheme || (preferredDark ? "dark" : "light"));
    if (content[savedLocale]) setLocale(savedLocale);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = locale === "pt" ? "pt-BR" : locale;
    localStorage.setItem("bbb-theme", theme);
  }, [theme, locale]);

  function changeLocale(nextLocale) {
    setLocale(nextLocale);
    localStorage.setItem("bbb-locale", nextLocale);
    setMenuOpen(false);
  }

  function cycleTestimonial(direction) {
    const total = t.testimonials.length;
    setActiveTestimonial((current) => (current + direction + total) % total);
  }

  return <div className="site-shell">
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Blá Blá Blando - início">
        <span className="brand-mark">BBB</span>
        <span className="brand-copy"><strong>Blá Blá Blando</strong><small>by Isaduera</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {t.nav.map((label, index) => <a key={navIds[index]} href={`#${navIds[index]}`}>{label}</a>)}
      </nav>
      <div className="header-tools">
        <div className="locale-control" aria-label={t.languageControl}>
          <Globe2 size={16} aria-hidden="true" />
          {Object.keys(content).map(code => <button className={locale === code ? "active" : ""} onClick={() => changeLocale(code)} key={code}>{code.toUpperCase()}</button>)}
        </div>
        <button className="icon-button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={theme === "dark" ? t.themeLight : t.themeDark} title={theme === "dark" ? t.themeLight : t.themeDark}>
          {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
        </button>
        <a className="button button-small header-cta" href={instagramUrl} target="_blank" rel="noreferrer">{t.cta} <AtSign size={16} /></a>
        <button className="icon-button mobile-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={t.menu}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      {menuOpen && <nav className="mobile-panel" aria-label="Navegação móvel">
        {t.nav.map((label, index) => <a onClick={() => setMenuOpen(false)} key={navIds[index]} href={`#${navIds[index]}`}>{label}</a>)}
        <a className="mobile-instagram" href={instagramUrl} target="_blank" rel="noreferrer"><AtSign size={17} /> {t.cta}</a>
      </nav>}
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy entrance">
          <div className="eyebrow"><span /> {t.eyebrow}</div>
          <h1>{t.heroTitle[0]} <em>{t.heroTitle[1]}</em></h1>
          <p className="hero-lead">{t.heroLead}</p>
          <div className="hero-actions">
            <a className="button" href="#aulas">{t.heroPrimary} <ArrowRight size={18} /></a>
            <a className="text-link" href="#aulas">{t.heroSecondary} <ChevronDown size={18} /></a>
          </div>
          <div className="hero-notes"><span><Video size={18} /> {t.online}</span><span><Users size={18} /> {t.personal}</span></div>
        </div>
        <div className="hero-visual entrance entrance-late">
          <PhotoPlaceholder label={t.photoMain} note={t.photoNote} />
          <div className="floating-note"><BookOpen size={19} /><span>{t.floating[0]}<br /><strong>{t.floating[1]}</strong></span></div>
          <span className="language-chip chip-one">Hello!</span><span className="language-chip chip-two">¡Hola!</span><span className="language-chip chip-three">Olá!</span>
        </div>
      </section>

      <section className="language-section section" id="aulas">
        <div className="section-heading"><div><span className="kicker">{t.coursesKicker}</span><h2>{t.coursesTitle}</h2></div><p>{t.coursesIntro}</p></div>
        <div className="language-grid">
          {t.courses.map((course, index) => <button className={`language-card tone-${index} ${activeCourse === index ? "selected" : ""}`} onClick={() => setActiveCourse(index)} aria-pressed={activeCourse === index} key={course.code}>
            <span className="language-code">{course.code}</span><h3>{course.title}</h3><p>{course.text}</p><div className="card-meta"><Check size={16} /> {activeCourse === index ? t.levels : t.coursesKicker}</div>
          </button>)}
        </div>
        <div className="course-detail" key={`${locale}-${activeCourse}`}><span>{t.courses[activeCourse].code}</span><div><small>{t.levels}</small><p>{t.courses[activeCourse].detail}</p></div><ArrowRight size={22} /></div>
      </section>

      <section className="benefit-band">
        <div className="benefit-intro"><span className="kicker kicker-light">{t.benefitsKicker}</span><h2>{t.benefitsTitle}</h2></div>
        <div className="benefit-list">{t.benefits.map(benefit => <div key={benefit}><span><Check size={15} /></span>{benefit}</div>)}</div>
      </section>

      <section className="method-section section" id="metodologia">
        <div className="method-copy"><span className="kicker">{t.methodKicker}</span><h2>{t.methodTitle}</h2><p>{t.methodIntro}</p></div>
        <div className="steps">{t.steps.map(([number, title, text], index) => <button className={`step ${activeStep === index ? "open" : ""}`} onClick={() => setActiveStep(index)} aria-expanded={activeStep === index} key={number}><span>{number}</span><div><h3>{title}</h3>{activeStep === index && <p>{text}</p>}</div><ChevronDown size={20} /></button>)}</div>
      </section>

      <section className="about-section section" id="sobre">
        <div className="about-visual"><PhotoPlaceholder label={t.photoAbout} note={t.photoNote} variant="about" /><div className="about-accent">{t.aboutAccent[0]}<br /><strong>{t.aboutAccent[1]}</strong></div></div>
        <div className="about-copy"><span className="kicker">{t.aboutKicker}</span><h2>{t.aboutTitle}</h2>{t.aboutText.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="signature">Isadora <small>{t.provisional}</small></div><a className="instagram-link" href={instagramUrl} target="_blank" rel="noreferrer"><AtSign size={18} /> bbbisaduera <ArrowRight size={17} /></a></div>
      </section>

      <section className="formats-section section" id="formatos">
        <div className="center-heading"><span className="kicker">{t.formatsKicker}</span><h2>{t.formatsTitle}</h2><p>{t.formatsIntro}</p></div>
        <div className="format-grid">{t.formats.map(([title, text], index) => { const FormatIcon = formatIcons[index]; return <button className={`format-card ${activeFormat === index ? "selected" : ""}`} onClick={() => setActiveFormat(index)} aria-pressed={activeFormat === index} key={title}><span className="format-icon"><FormatIcon size={22} /></span><h3>{title}</h3><p>{text}</p><span className="select-indicator"><Check size={15} /></span></button>; })}</div>
      </section>

      <section className="testimonials section" id="depoimentos">
        <div className="center-heading"><span className="kicker">{t.testimonialsKicker}</span><h2>{t.testimonialsTitle}</h2></div>
        <div className="testimonial-stage">
          <button className="carousel-button" onClick={() => cycleTestimonial(-1)} aria-label="Anterior"><ArrowLeft size={20} /></button>
          <article className="testimonial active-testimonial" key={`${locale}-${activeTestimonial}`}><Quote size={31} /><p>“{t.testimonials[activeTestimonial][2]}”</p><div><span>{t.testimonials[activeTestimonial][0]}</span><small>{t.testimonials[activeTestimonial][1]}</small></div></article>
          <button className="carousel-button" onClick={() => cycleTestimonial(1)} aria-label="Próximo"><ArrowRight size={20} /></button>
        </div>
        <div className="carousel-dots">{t.testimonials.map((item, index) => <button aria-label={`${index + 1}`} className={activeTestimonial === index ? "active" : ""} onClick={() => setActiveTestimonial(index)} key={item[0]} />)}</div>
      </section>

      <section className="contact-section" id="contato">
        <div><span className="kicker kicker-light">{t.contactKicker}</span><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div>
        <a className="button button-lime" href={instagramUrl} target="_blank" rel="noreferrer">{t.instagram} <AtSign size={19} /></a>
      </section>
    </main>

    <footer>
      <div className="footer-brand"><a className="brand" href="#inicio"><span className="brand-mark">BBB</span><span className="brand-copy"><strong>Blá Blá Blando</strong><small>by Isaduera</small></span></a><p>{t.footerTagline}</p></div>
      <div><h3>{t.navigate}</h3>{t.nav.slice(0, 3).map((label, index) => <a key={label} href={`#${navIds[index]}`}>{label}</a>)}</div>
      <div><h3>{t.languages}</h3>{t.courses.map(course => <span key={course.code}>{course.title}</span>)}</div>
      <div><h3>{t.contact}</h3><a href={instagramUrl} target="_blank" rel="noreferrer"><AtSign size={15} /> bbbisaduera</a><span>{t.online}</span></div>
      <div className="footer-bottom"><span>© 2026 Blá Blá Blando by Isaduera</span><span>{t.rights}</span></div>
    </footer>
  </div>;
}
