import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden pt-20"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#0099BB]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Scanning line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="animate-scan w-full h-1 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-8 relative z-10">
        {/* Badge */}
        <div className="tag-cyan fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Automation · Web · Mobile · Trading
        </div>

        {/* Logo */}
        <div className="animate-float">
          <img
            src="/Gemini_Generated_Image_673to9673to9673t.png"
            alt="AutoDev Studio Logo"
            className="w-56 md:w-72 mx-auto drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 0 30px rgba(0,212,255,0.4))' }}
          />
        </div>

        {/* Headline */}
        <div className="fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <h1 className="section-title text-4xl md:text-6xl lg:text-7xl leading-tight">
            <span className="text-white">Construisez </span>
            <span className="neon-text">l'avenir</span>
            <br />
            <span className="text-white">avec </span>
            <span className="neon-text">AutoDev Studio</span>
          </h1>
        </div>

        <p
          className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed fade-in-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          Développement web & mobile premium, bots Telegram sur-mesure et robots
          de trading algorithmique — pour automatiser, scaler et dominer votre marché.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 mt-2 fade-in-up"
          style={{ animationDelay: '0.7s', opacity: 0 }}
        >
          <a
            href="#contact"
            className="btn-primary relative z-10 flex items-center gap-2 px-8 py-3.5 rounded-md font-orbitron text-sm tracking-wider"
          >
            <span className="relative z-10">Démarrer un projet</span>
            <ArrowRight size={16} className="relative z-10" />
          </a>
          <a
            href="#services"
            className="btn-outline flex items-center gap-2 px-8 py-3.5 rounded-md font-orbitron text-sm tracking-wider"
          >
            Voir les services
          </a>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-[#00D4FF]/10 w-full max-w-lg fade-in-up"
          style={{ animationDelay: '0.9s', opacity: 0 }}
        >
          {[
            { value: '50+', label: 'Projets livrés' },
            { value: '100%', label: 'Satisfaction client' },
            { value: '24/7', label: 'Support actif' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-orbitron text-2xl font-bold neon-text">{s.value}</div>
              <div className="text-gray-500 text-xs mt-1 tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#00D4FF]/50 hover:text-[#00D4FF] transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
