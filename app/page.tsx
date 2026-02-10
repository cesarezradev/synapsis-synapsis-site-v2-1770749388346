'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, 
  Zap, 
  Shield, 
  MessageSquare, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Memória Permanente',
    description: 'O Synapsis lembra de todas as suas conversas, preferências e contexto. Nunca mais repita informações.',
  },
  {
    icon: Zap,
    title: 'Respostas Instantâneas',
    description: 'Integração com os melhores modelos de IA do mundo para respostas rápidas e precisas.',
  },
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'Seus dados são criptografados e armazenados com segurança. Privacidade em primeiro lugar.',
  },
  {
    icon: MessageSquare,
    title: 'Multi-Plataforma',
    description: 'Converse pelo WhatsApp, app mobile ou web. Sua experiência sincronizada em todos os dispositivos.',
  },
];

const stats = [
  { value: '10K+', label: 'Usuários Ativos' },
  { value: '1M+', label: 'Mensagens Processadas' },
  { value: '99.9%', label: 'Uptime' },
  { value: '<500ms', label: 'Tempo de Resposta' },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-synapsis-500/30 rounded-full blur-3xl" />
          <div className="absolute top-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-synapsis-500/10 border border-synapsis-500/20 mb-8">
              <Sparkles className="w-4 h-4 text-synapsis-400" />
              <span className="text-sm font-medium text-synapsis-300">Nova versão 2.0 disponível</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Sua <span className="gradient-text">Memória</span>,
              <br />
              Ampliada
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Synapsis é o assistente pessoal inteligente que lembra tudo para você. 
              Conecte suas conversas, arquivos e conhecimento em uma única experiência fluida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-synapsis-600 to-synapsis-500 hover:from-synapsis-500 hover:to-synapsis-400 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-synapsis-500/25 flex items-center justify-center gap-2">
                Experimentar Grátis
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link 
                href="/sobre"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all border border-white/10 flex items-center justify-center"
              >
                Conhecer Mais
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher o <span className="gradient-text">Synapsis</span>?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Uma nova forma de interagir com inteligência artificial, 
              projetada para quem valoriza contexto e produtividade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-synapsis-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-synapsis-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como funciona?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Três passos simples para transformar sua produtividade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Conecte-se',
                description: 'Use o WhatsApp, app mobile ou interface web. Sua escolha.',
              },
              {
                step: '02',
                title: 'Converse',
                description: 'Fale naturalmente. O Synapsis aprende suas preferências e contexto.',
              },
              {
                step: '03',
                title: 'Lembre-se',
                description: 'Acesse qualquer informação do passado instantaneamente.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-white/5 absolute -top-4 -left-2">{item.step}</div>
                <div className="relative glass-card p-8">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que dizem nossos usuários
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'O Synapsis mudou minha forma de trabalhar. Não preciso mais anotar tudo, ele já sabe.',
                author: 'Maria Silva',
                role: 'Product Manager',
                rating: 5,
              },
              {
                quote: 'Finalmente um assistente que entende contexto. Parece conversar com alguém que me conhece.',
                author: 'João Santos',
                role: 'Desenvolvedor',
                rating: 5,
              },
              {
                quote: 'A integração com WhatsApp é perfeita. Uso no meu dia a dia sem complicação.',
                author: 'Ana Costa',
                role: 'Empreendedora',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-synapsis-600/20 to-cyan-600/20" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto para ampliar sua memória?
              </h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                Junte-se a milhares de usuários que já transformaram sua produtividade com o Synapsis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-synapsis-600 to-synapsis-500 hover:from-synapsis-500 hover:to-synapsis-400 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-synapsis-500/25">
                  Começar Gratuitamente
                </button>
              </div>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Grátis para começar
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Sem cartão de crédito
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Cancele quando quiser
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}