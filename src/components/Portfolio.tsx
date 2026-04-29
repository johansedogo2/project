import { ExternalLink, Bot, Globe, Smartphone, TrendingUp } from 'lucide-react';

const projects = [
  {
    icon: TrendingUp,
    category: 'Bot de Trading',
    title: 'AlgoTrader Pro',
    description:
      'Robot de trading crypto multi-stratégie avec gestion dynamique du risque, backtesting intégré et dashboard de performance temps réel.',
    tags: ['Python', 'ccxt', 'React', 'PostgreSQL'],
    metrics: ['+147% ROI', '98.7% uptime', 'BTC/ETH/SOL'],
    color: '#00FFAA',
  },
  {
    icon: Bot,
    category: 'Bot Telegram',
    title: 'CommunityManager Bot',
    description:
      'Bot Telegram complet pour la gestion de communauté : modération auto, système d\'abonnement, paiements crypto et alertes personnalisées.',
    tags: ['Python', 'Telegram API', 'Stripe', 'MongoDB'],
    metrics: ['5k+ users', 'Auto-modération', 'Paiements intégrés'],
    color: '#00D4FF',
  },
  {
    icon: Globe,
    category: 'Application Web',
    title: 'TradingSignals Platform',
    description:
      'Plateforme SaaS de signaux de trading avec abonnements, backtesting en ligne, alertes SMS/email et interface analytique avancée.',
    tags: ['React', 'Node.js', 'Supabase', 'TailwindCSS'],
    metrics: ['200+ abonnés', 'Real-time data', 'SaaS modèle'],
    color: '#00D4FF',
  },
  {
    icon: Smartphone,
    category: 'Application Mobile',
    title: 'FinanceTracker App',
    description:
      'Application mobile de suivi financier personnel avec synchronisation bancaire, catégorisation IA et rapports mensuels automatisés.',
    tags: ['React Native', 'Expo', 'Node.js', 'AI/ML'],
    metrics: ['iOS & Android', 'Sync bancaire', 'Rapports IA'],
    color: '#00D4FF',
  },
  {
    icon: Bot,
    category: 'Automatisation',
    title: 'Lead Generation Bot',
    description:
      'Système d\'automatisation pour la génération de leads : scraping qualifié, enrichissement de données, envoi automatique et CRM integration.',
    tags: ['Python', 'Selenium', 'OpenAI', 'HubSpot'],
    metrics: ['10x plus rapide', '3k leads/mois', 'Taux conversion +40%'],
    color: '#00D4FF',
  },
  {
    icon: Globe,
    category: 'E-commerce',
    title: 'Crypto Merch Store',
    description:
      'Boutique e-commerce crypto avec paiements en USDT/BTC, gestion de stock automatisée, dashboard admin et notifications Telegram.',
    tags: ['Next.js', 'Moralis', 'Prisma', 'Vercel'],
    metrics: ['Paiements crypto', 'Stock auto', 'Notifs Telegram'],
    color: '#00D4FF',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] via-transparent to-[#050A14] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="tag-cyan inline-block mb-4">Réalisations</div>
          <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
            Mon <span className="neon-text">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Projets concrets livrés — de l'idée à la production.
          </p>
          <div className="gradient-line max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="glow-card rounded-xl overflow-hidden group">
                <div
                  className="h-1"
                  style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="flex items-center gap-2 text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{
                        background: `rgba(0, 212, 255, 0.08)`,
                        border: `1px solid rgba(0, 212, 255, 0.2)`,
                        color: p.color,
                      }}
                    >
                      <Icon size={12} />
                      {p.category}
                    </div>
                    <ExternalLink
                      size={14}
                      className="text-gray-600 group-hover:text-[#00D4FF] transition-colors cursor-pointer"
                    />
                  </div>

                  <h3 className="font-orbitron text-base font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          background: 'rgba(0, 255, 170, 0.05)',
                          border: '1px solid rgba(0, 255, 170, 0.15)',
                          color: '#00FFAA',
                        }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded bg-[#0D1A30] text-gray-500 border border-[#00D4FF]/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="btn-outline inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-orbitron text-sm tracking-wider"
          >
            Discuter de votre projet
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
