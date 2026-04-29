import { Code2, TrendingUp, Cpu, Award } from 'lucide-react';

const skills = [
  { label: 'React / React Native', pct: 95 },
  { label: 'Node.js / Python', pct: 90 },
  { label: 'Trading Algorithmique', pct: 92 },
  { label: 'Bots & Automatisation', pct: 97 },
  { label: 'Architecture Cloud', pct: 85 },
];

const badges = [
  { icon: Code2, text: 'Ingénieur Informatique' },
  { icon: TrendingUp, text: 'Trader Algorithmique' },
  { icon: Cpu, text: 'Expert Automatisation' },
  { icon: Award, text: 'CEO AutoDev Studio' },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#080F1E] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00D4FF]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="tag-cyan inline-block mb-4">Qui suis-je</div>
            <h2 className="section-title text-4xl md:text-5xl text-white mb-6">
              Johan <span className="neon-text">SEDOGO</span>
            </h2>

            <div className="flex flex-wrap gap-3 mb-8">
              {badges.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.text}
                    className="flex items-center gap-2 bg-[#0A1628] border border-[#00D4FF]/20 rounded-lg px-3 py-2"
                  >
                    <Icon size={14} className="text-[#00D4FF]" />
                    <span className="text-xs text-gray-300 font-medium">{b.text}</span>
                  </div>
                );
              })}
            </div>

            <p className="text-gray-400 leading-relaxed mb-4">
              Ingénieur en informatique passionné et trader algorithmique expérimenté, je combine
              expertise technique et vision business pour créer des solutions digitales qui génèrent
              de la valeur réelle.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Fondateur d'<span className="text-[#00D4FF] font-semibold">AutoDev Studio</span>, j'accompagne
              entrepreneurs et entreprises dans leur transformation digitale — du bot de trading haute
              fréquence à l'application mobile grand public.
            </p>

            <div className="gradient-line max-w-full mb-8" />

            {/* Skills */}
            <div className="flex flex-col gap-4">
              {skills.map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-300 font-medium">{s.label}</span>
                    <span className="text-[#00D4FF] font-orbitron text-xs">{s.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-[#0D1A30] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${s.pct}%`,
                        background: 'linear-gradient(90deg, #0099BB, #00D4FF)',
                        boxShadow: '0 0 8px rgba(0,212,255,0.5)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — portrait card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ boxShadow: '0 0 60px rgba(0,212,255,0.15)' }}
              />
              <div className="glow-card rounded-2xl p-8 max-w-sm text-center">
                <div
                  className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center font-orbitron text-3xl font-bold text-[#00D4FF] border-2 border-[#00D4FF]/40"
                  style={{
                    background: 'linear-gradient(135deg, #0A1628, #0D1A30)',
                    boxShadow: '0 0 30px rgba(0,212,255,0.2)',
                  }}
                >
                  JS
                </div>
                <h3 className="font-orbitron text-xl font-bold text-white mb-1">Johan SEDOGO</h3>
                <p className="text-[#00D4FF] text-sm mb-2">CEO · AutoDev Studio</p>
                <p className="text-gray-500 text-xs mb-6">Ingénieur en Informatique & Trader Algorithmique</p>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="mailto:johansedogo1@gmail.com"
                    className="bg-[#0D1A30] border border-[#00D4FF]/20 rounded-lg py-2.5 px-3 text-xs text-gray-300 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 transition-all text-center"
                  >
                    Gmail
                  </a>
                  <a
                    href="https://wa.me/212619381044"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0D1A30] border border-[#00D4FF]/20 rounded-lg py-2.5 px-3 text-xs text-gray-300 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 transition-all text-center"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
