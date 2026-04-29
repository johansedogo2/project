import { useState } from 'react';
import { Mail, MessageCircle, Send, MapPin, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'johansedogo1@gmail.com',
    href: 'mailto:johansedogo1@gmail.com',
    desc: 'Réponse sous 24h',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp / Telegram',
    value: '+212 619 381 044',
    href: 'https://wa.me/212619381044',
    desc: 'Réponse rapide',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Disponible partout',
    href: null,
    desc: 'Remote worldwide',
  },
  {
    icon: Clock,
    label: 'Disponibilité',
    value: 'Lun – Sam, 9h – 22h',
    href: null,
    desc: 'GMT+1',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const { error } = await supabase.from('contact_messages').insert([form]);
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#080F1E] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#00D4FF]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="tag-cyan inline-block mb-4">Travaillons ensemble</div>
          <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
            Me <span className="neon-text">Contacter</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un projet en tête ? Discutons-en. Je réponds rapidement et propose toujours une première consultation gratuite.
          </p>
          <div className="gradient-line max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contactMethods.map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="glow-card rounded-xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0D1A30] border border-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#00D4FF]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{c.label}</div>
                    <div className="text-white font-medium text-sm">{c.value}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{c.desc}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}

            <div className="glow-card rounded-xl p-6 mt-2">
              <p className="text-[#00D4FF] font-orbitron text-sm font-bold mb-2">Consultation Gratuite</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Première session de 30 min offerte pour analyser votre besoin et proposer la meilleure approche technique.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={submit} className="glow-card rounded-2xl p-8 flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Nom complet</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handle}
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#0D1A30] border border-[#00D4FF]/20 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00D4FF]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handle}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#0D1A30] border border-[#00D4FF]/20 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00D4FF]/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Service souhaité</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handle}
                  required
                  className="w-full bg-[#0D1A30] border border-[#00D4FF]/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D4FF]/60 transition-colors appearance-none"
                >
                  <option value="" disabled>Choisir un service...</option>
                  <option value="web">Développement Web</option>
                  <option value="mobile">Application Mobile</option>
                  <option value="telegram">Bot Telegram</option>
                  <option value="trading">Bot de Trading</option>
                  <option value="automation">Automatisation</option>
                  <option value="conseil">Conseil & Stratégie</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handle}
                  required
                  rows={5}
                  placeholder="Décrivez votre projet, vos objectifs, votre budget estimé..."
                  className="w-full bg-[#0D1A30] border border-[#00D4FF]/20 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00D4FF]/60 transition-colors resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="bg-[#00FFAA]/10 border border-[#00FFAA]/30 rounded-lg px-4 py-3 text-[#00FFAA] text-sm text-center">
                  Message envoyé avec succes ! Je vous recontacte sous 24h.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-sm text-center">
                  Erreur lors de l'envoi. Veuillez me contacter directement par WhatsApp.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary relative z-10 flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-orbitron text-sm tracking-wider disabled:opacity-60"
              >
                <span className="relative z-10">
                  {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                </span>
                <Send size={15} className="relative z-10" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
