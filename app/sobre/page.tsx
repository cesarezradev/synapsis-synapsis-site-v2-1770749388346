'use client';

import { motion } from 'framer-motion';
import { Brain, Target, Heart, Rocket, Users, Globe } from 'lucide-react';

const values = [
  {
    icon: Brain,
    title: 'Inteligência',
    description: 'Buscamos constantemente inovar e aplicar tecnologia de ponta para resolver problemas reais.',
  },
  {
    icon: Heart,
    title: 'Humanidade',
    description: 'Tecnologia deve servir pessoas. Design e experiência centrados no ser humano.',
  },
  {
    icon: Target,
    title: 'Foco',
    description: 'Fazemos uma coisa e fazemos bem: amplificar sua capacidade de lembrar e conectar informações.',
  },
  {
    icon: Shield,
    title: 'Privacidade',
    description: 'Seus dados são seus. Criptografia, transparência e controle total sobre suas informações.',
  },
];

import { Shield } from 'lucide-react';

const team = [
  {
    name: 'Cesar Silva',
    role: 'Fundador & CEO',
    bio: 'Visionário apaixonado por IA e produtividade. Acredita que tecnologia deve ser invisível e empoderadora.',
  },
  {
    name: 'Den',
    role: 'AI Partner',
    bio: 'Assistente inteligente que ajuda no desenvolvimento e evolução do Synapsis. Metade código, metade caos controlado.',
  },
];

import { Sparkles } from 'lucide-react';

export default function SobrePage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-synapsis-500/10 border border-synapsis-500/20 mb-8">
            <Users className="w-4 h-4 text-synapsis-400" />
            <span className="text-sm font-medium text-synapsis-300">Nossa História</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Construindo o futuro da
            <span className="gradient-text"> memória digital</span>
          </h1>
          
          <p className="text-lg text-slate-400">
            O Synapsis nasceu de uma simples pergunta: e se sua IA pudesse realmente 
            se lembrar de quem você é, do que você gosta, e do contexto das suas conversas?
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Nossa Missão</h2>
              <p className="text-slate-400 mb-6">
                Democratizar o acesso a assistentes pessoais inteligentes que realmente 
                entendem contexto. Queremos eliminar a frustração de repetir informações 
                e criar uma experiência fluida entre humanos e IA.
              </p>
              <p className="text-slate-400">
                Acreditamos que o futuro não é sobre IA substituindo humanos, 
                mas sobre IA amplificando o que torna os humanos especiais: 
                criatividade, empatia e conexão.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center">
                <Globe className="w-8 h-8 text-synapsis-400 mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">Global</div>
                <div className="text-sm text-slate-500">Acesso mundial</div>
              </div>
              <div className="glass-card p-6 text-center">
                <Rocket className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">Inovador</div>
                <div className="text-sm text-slate-500">Tecnologia de ponta</div>
              </div>
              <div className="glass-card p-6 text-center">
                <Heart className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">Humanizado</div>
                <div className="text-sm text-slate-500">Centrado em pessoas</div>
              </div>
              <div className="glass-card p-6 text-center">
                <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">Magia</div>
                <div className="text-sm text-slate-500">Experiência fluida</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
          <p className="text-slate-400">Princípios que guiam cada decisão que tomamos</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover:bg-white/10 transition-all"
            >
              <value.icon className="w-10 h-10 text-synapsis-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-sm text-slate-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Como tudo começou</h2>
          <div className="space-y-8">
            {[
              {
                year: '2025',
                title: 'A Ideia',
                description: 'Cesar, frustrado com assistentes que esqueciam tudo a cada conversa, começou a desenvolver uma solução com memória persistente.',
              },
              {
                year: '2025',
                title: 'Primeiro Protótipo',
                description: 'Nasce o Synapsis: um assistente que lembra preferências, contatos e contexto usando RAG e embeddings semânticos.',
              },
              {
                year: '2026',
                title: 'Expansão',
                description: 'Integração com WhatsApp, desenvolvimento do app mobile, e evolução para uma plataforma completa de produtividade.',
              },
              {
                year: '2026',
                title: 'O Futuro',
                description: 'Sinapses conectando pessoas, conhecimento e IA em uma experiência verdadeiramente fluida e natural.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-synapsis-400 font-bold">{item.year}</span>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 rounded-full bg-synapsis-500" />
                  {index < 3 && <div className="absolute top-4 left-2 w-0.5 h-16 bg-slate-700" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Quem faz acontecer</h2>
          <p className="text-slate-400">Um time pequeno com ambições gigantes</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-synapsis-500 to-cyan-500 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-synapsis-400 text-sm mb-3">{member.role}</p>
              <p className="text-sm text-slate-500">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}