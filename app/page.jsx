import {
  ArrowRight, BookOpen, Check, ChevronDown, Languages, Menu,
  MessageCircle, Quote, Sparkles, Target, Users, Video,
} from "lucide-react";

const languages = [
  { code: "PT", title: "Português", text: "Conversação, escrita e compreensão em aulas ajustadas ao seu momento e aos seus objetivos.", level: "Do nível inicial ao avançado", tone: "lime" },
  { code: "ES", title: "Espanhol", text: "Prática útil para ganhar repertório e se comunicar com mais naturalidade em diferentes contextos.", level: "Objetivos pessoais e profissionais", tone: "sky" },
  { code: "EN", title: "Inglês", text: "Um percurso de aprendizagem conectado à sua rotina, com espaço para praticar sem receio.", level: "Aulas adaptadas ao seu ritmo", tone: "navy" },
];

const benefits = ["Aulas personalizadas", "Material adaptado", "Conversação na prática", "Ritmo flexível", "Acompanhamento próximo", "Situações do cotidiano"];

const steps = [
  ["01", "Primeira conversa", "Um encontro para entender seu momento, interesses e o que você deseja desenvolver."],
  ["02", "Plano de estudos", "A proposta das aulas é organizada de acordo com sua rotina e suas prioridades."],
  ["03", "Aulas práticas", "Atividades variadas para aprender o idioma em contextos claros e relevantes."],
  ["04", "Revisão contínua", "O percurso é acompanhado e ajustado conforme suas necessidades mudam."],
];

const formats = [
  [Users, "Individual", "Um percurso pensado inteiramente para seu ritmo e objetivo."],
  [MessageCircle, "Em dupla", "Aprendizado compartilhado com atenção e espaço para praticar."],
  [Languages, "Grupo reduzido", "Trocas em grupo sem abrir mão de um acompanhamento próximo."],
  [Target, "Foco específico", "Uma proposta personalizada para uma necessidade ou projeto."],
];

const testimonials = [
  ["Aluna A", "Português", "Texto provisório sobre uma experiência acolhedora, aulas bem organizadas e mais segurança para se comunicar."],
  ["Aluno B", "Inglês", "Texto provisório sobre uma metodologia leve, materiais relevantes e evolução percebida ao longo das aulas."],
  ["Estudante C", "Espanhol", "Texto provisório sobre aprender no próprio ritmo e usar o idioma em situações reais do dia a dia."],
];

function PhotoPlaceholder({ label, variant = "hero" }) {
  return <div className={`photo-placeholder photo-${variant}`} role="img" aria-label={label}>
    <div><div className="photo-mark"><Sparkles size={20} aria-hidden="true" /></div><span>{label}</span><small>imagem a definir</small></div>
  </div>;
}

export default function Home() {
  return <div className="site-shell">
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Nome da professora - início"><span className="brand-mark">NP</span><span>Nome da Professora</span></a>
      <nav className="desktop-nav" aria-label="Navegação principal"><a href="#aulas">Aulas</a><a href="#metodologia">Metodologia</a><a href="#sobre">Sobre</a><a href="#depoimentos">Depoimentos</a></nav>
      <a className="button button-small header-cta" href="#contato">Agendar conversa <ArrowRight size={16} /></a>
      <details className="mobile-menu"><summary aria-label="Abrir menu"><Menu size={22} /></summary><nav aria-label="Navegação móvel"><a href="#aulas">Aulas</a><a href="#metodologia">Metodologia</a><a href="#sobre">Sobre</a><a href="#depoimentos">Depoimentos</a><a href="#contato">Contato</a></nav></details>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Português, espanhol e inglês</div>
          <h1>Seu novo idioma pode caber na sua <em>vida real.</em></h1>
          <p className="hero-lead">Aulas leves, práticas e personalizadas para aprender com confiança, no seu ritmo e com acompanhamento próximo.</p>
          <div className="hero-actions"><a className="button" href="#contato">Quero conhecer as aulas <ArrowRight size={18} /></a><a className="text-link" href="#formatos">Ver modalidades <ChevronDown size={18} /></a></div>
          <div className="hero-notes"><span><Video size={18} /> Aulas online e presenciais*</span><span><Users size={18} /> Individual ou em grupo*</span></div>
        </div>
        <div className="hero-visual">
          <PhotoPlaceholder label="Foto principal da professora" />
          <div className="floating-note"><BookOpen size={19} /><span>Aprender com<br /><strong>leveza e intenção</strong></span></div>
          <span className="language-chip chip-one">Hello!</span><span className="language-chip chip-two">¡Hola!</span><span className="language-chip chip-three">Olá!</span>
        </div>
      </section>

      <section className="language-section section" id="aulas">
        <div className="section-heading"><div><span className="kicker">Escolha seu idioma</span><h2>Um caminho para cada objetivo</h2></div><p>O conteúdo final de cada modalidade será definido com a professora. Por enquanto, esta é uma amostra da estrutura.</p></div>
        <div className="language-grid">{languages.map(item => <article className={`language-card ${item.tone}`} key={item.code}><span className="language-code">{item.code}</span><h3>{item.title}</h3><p>{item.text}</p><div className="card-meta"><Check size={16} /> {item.level}</div></article>)}</div>
      </section>

      <section className="benefit-band">
        <div className="benefit-intro"><span className="kicker kicker-light">Do seu jeito</span><h2>Uma experiência de aprendizagem feita para você</h2></div>
        <div className="benefit-list">{benefits.map(benefit => <div key={benefit}><span><Check size={15} /></span>{benefit}</div>)}</div>
      </section>

      <section className="method-section section" id="metodologia">
        <div className="method-copy"><span className="kicker">Como funciona</span><h2>Clareza para começar.<br />Flexibilidade para continuar.</h2><p>Uma proposta simples e ajustável, pensada para transformar seus objetivos em um percurso possível.</p><div className="placeholder-label">Conteúdo provisório e editável</div></div>
        <div className="steps">{steps.map(([number, title, text]) => <article className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="about-section section" id="sobre">
        <div className="about-visual"><PhotoPlaceholder label="Foto da professora" variant="about" /><div className="about-accent">3 idiomas<br /><strong>muitas possibilidades</strong></div></div>
        <div className="about-copy"><span className="kicker">Sobre a professora</span><h2>Ensinar uma língua é abrir espaço para novas conversas.</h2><p>Este texto será substituído pela história real da professora. Aqui entra uma apresentação breve sobre sua relação com idiomas, educação e comunicação.</p><p>Também podemos contar como ela conduz as aulas e o que torna sua forma de ensinar especial, sem incluir formações ou experiências até que sejam confirmadas.</p><div className="signature">Nome da Professora <small>texto e assinatura provisórios</small></div></div>
      </section>

      <section className="formats-section section" id="formatos">
        <div className="center-heading"><span className="kicker">Formatos de aula</span><h2>Aprenda do jeito que faz sentido para você</h2><p>Modalidades ilustrativas para apresentar as possibilidades da página.</p></div>
        <div className="format-grid">{formats.map(([FormatIcon, title, text]) => <article className="format-card" key={title}><span className="format-icon"><FormatIcon size={22} /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="testimonials section" id="depoimentos">
        <div className="center-heading"><span className="kicker">Depoimentos ilustrativos</span><h2>Quem aprende, também conta a história</h2></div>
        <div className="testimonial-grid">{testimonials.map(([name, language, text]) => <article className="testimonial" key={name}><Quote size={28} /><p>“{text}”</p><div><span>{name}</span><small>{language} · nome provisório</small></div></article>)}</div>
      </section>

      <section className="contact-section" id="contato">
        <div><span className="kicker kicker-light">Próximo passo</span><h2>Vamos montar um plano de estudos para o seu objetivo?</h2><p>Converse sobre sua rotina, seu nível atual e o idioma que você quer desenvolver.</p></div>
        <a className="button button-lime" href="https://wa.me/5500000000000" aria-label="Chamar no WhatsApp - número provisório">Chamar no WhatsApp <MessageCircle size={19} /></a>
      </section>
    </main>

    <footer>
      <div className="footer-brand"><a className="brand" href="#inicio"><span className="brand-mark">NP</span><span>Nome da Professora</span></a><p>Aulas de idiomas com proximidade, prática e propósito.</p></div>
      <div><h3>Navegue</h3><a href="#aulas">Aulas</a><a href="#metodologia">Metodologia</a><a href="#sobre">Sobre</a></div>
      <div><h3>Idiomas</h3><span>Português</span><span>Espanhol</span><span>Inglês</span></div>
      <div><h3>Contato</h3><span>contato@exemplo.com</span><span>@perfilprovisorio</span><span>(00) 00000-0000</span></div>
      <div className="footer-bottom"><span>© 2026 Nome da Professora</span><span>* Informações e conteúdos provisórios para aprovação visual.</span></div>
    </footer>
  </div>;
}
