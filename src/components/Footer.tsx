import { Mail, MessageCircle } from 'lucide-react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'À propos', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050A14] border-t border-[#00D4FF]/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <img
              src="/Gemini_Generated_Image_673to9673to9673t.png"
              alt="AutoDev Studio"
              className="h-12 mb-4"
            />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Développement web, mobile, bots Telegram et robots de trading. Solutions digitales sur-mesure pour votre croissance.
            </p>
          </div>

          <div>
            <h4 className="font-orbitron text-sm font-bold text-white mb-4 tracking-wider">Navigation</h4>
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-500 hover:text-[#00D4FF] text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron text-sm font-bold text-white mb-4 tracking-wider">Contact direct</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:johansedogo1@gmail.com"
                className="flex items-center gap-2 text-gray-500 hover:text-[#00D4FF] text-sm transition-colors"
              >
                <Mail size={14} />
                johansedogo1@gmail.com
              </a>
              <a
                href="https://wa.me/212619381044"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-[#00D4FF] text-sm transition-colors"
              >
                <MessageCircle size={14} />
                +212 619 381 044
              </a>
            </div>

            <div className="mt-6">
              <a
                href="#contact"
                className="btn-primary relative z-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-orbitron text-xs tracking-wider"
              >
                <span className="relative z-10">Démarrer un projet</span>
              </a>
            </div>
          </div>
        </div>

        <div className="gradient-line mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} AutoDev Studio — Johan SEDOGO. Tous droits réservés.</span>
          <span className="flex items-center gap-1">
            Fait avec <span className="text-[#00D4FF]">♦</span> par AutoDev Studio
          </span>
        </div>
      </div>
    </footer>
  );
}
