import { Smartphone, Globe, Bot, TrendingUp, Zap, Shield } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Développement Web',
    description:
      'Applications web modernes, performantes et scalables. React, Next.js, Node.js — du MVP à la plateforme enterprise.',
    features: ['SPA & PWA', 'API REST / GraphQL', 'Dashboard & Admin', 'E-commerce'],
    accent: '#00D4FF',
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description:
      'Apps iOS & Android natives ou cross-platform avec React Native. UX soignée, performance native, déploiement rapide.',
    features: ['iOS & Android', 'React Native', 'UI/UX premium', 'Push & notifications'],
    accent: '#00D4FF',
  },
  {
    icon: Bot,
    title: 'Bots Telegram',
    description:
      'Automatisez votre business avec des bots Telegram intelligents : support client, gestion de communauté, e-commerce, alertes.',
    features: ['Bots de gestion', 'Paiements intégrés', 'Alertes temps réel', 'Multi-canal'],
    accent: '#00D4FF',
  },
  {
    icon: TrendingUp,
    title: 'Bots de Trading',
    description:
      'Robots de trading algorithmique pour crypto et forex. Stratégies custom, backtesting rigoureux, exécution ultra-rapide.',
    features: ['Scalping & swing', 'Backtesting', 'Gestion du risque', 'Crypto & Forex'],
    accent: '#00FFAA',
  },
  {
    icon: Zap,
    title: 'Automatisation',
    description:
      'Workflows automatisés pour éliminer les tâches répétitives, intégrer vos outils et gagner un temps précieux.',
    features: ['Intégrations API', 'Scraping de données', 'Workflows no-code/code', 'Reporting auto'],
    accent: '#00D4FF',
  },
  {
    icon: Shield,
    title: 'Conseil & Stratégie',
    description:
      'Audit technique, choix d\'architecture et stratégie digitale pour maximiser votre ROI et accélérer votre croissance.',
    features: ['Audit technique', 'Architecture système', 'Choix technologique', 'Roadmap digitale'],
    accent: '#00D4FF',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="tag-cyan inline-block mb-4">Ce que je fais</div>
          <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
            Mes <span className="neon-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des solutions complètes pour digitaliser, automatiser et propulser votre activité.
          </p>
          <div className="gradient-line max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="glow-card rounded-xl p-6 group cursor-default">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `rgba(0, 212, 255, 0.1)`,
                    border: `1px solid rgba(0, 212, 255, 0.2)`,
                  }}
                >
                  <Icon size={22} style={{ color: s.accent }} />
                </div>
                <h3 className="font-orbitron text-lg font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.description}</p>
                <ul className="flex flex-col gap-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: s.accent }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
