'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Circle, 
  Rocket,
  Sparkles,
  Clock,
  Zap,
  Globe,
  Smartphone
} from 'lucide-react';

const roadmapData = [
  {
    quarter: 'Q1 2026',
    status: 'completed',
    items: [
      { title: 'Core Chat Interface', status: 'completed', description: 'Interface de chat profissional com streaming' },
      { title: 'RAG System', status: 'completed', description: 'Sistema de memória semântica com LanceDB' },
      { title: 'WhatsApp Integration', status: 'completed', description: 'Gateway WhatsApp completo' },
      { title: 'Multi-Model Support', status: 'completed', description: 'Suporte a Claude, GPT e outros' },
      { title: 'Mobile App v1', status: 'completed', description: 'App React Native funcional' },
    ],
  },
  {
    quarter: 'Q2 2026',
    status: 'in-progress',
    items: [
      { title: 'UI/UX Redesign', status: 'completed', description: 'Nova interface estilo ChatGPT/Claude' },
      { title: 'LLM Proxy', status: 'in-progress', description: 'Integração com AWS para custo reduzido' },
      { title: 'Voice Integration', status: 'planned', description: 'Chamada de voz e voice-to-text' },
      { title: 'File Upload v2', status: 'in-progress', description: 'Upload múltiplo e processamento paralelo' },
      { title: 'Teams/Collaboration', status: 'planned', description: 'Workspaces compartilhados' },
    ],
  },
  {
    quarter: 'Q3 2026',
    status: 'planned',
    items: [
      { title: 'Builder v1', status: 'planned', description: 'Criação de apps via prompt + deploy automático' },
      { title: 'Advanced Analytics', status: 'planned', description: 'Dashboard de uso e insights' },
      { title: 'Plugin System', status: 'planned', description: 'Extensões de terceiros' },
      { title: 'API Pública', status: 'planned', description: 'API REST para desenvolvedores' },
      { title: 'White Label', status: 'planned', description: 'Solução customizável para empresas' },
    ],
  },
  {
    quarter: 'Q4 2026',
    status: 'planned',
    items: [
      { title: 'Local LLM Support', status: 'planned', description: 'Suporte a modelos locais (Ollama)' },
      { title: 'Enterprise SSO', status: 'planned', description: 'SAML, OIDC, SCIM' },
      { title: 'On-Premise', status: 'planned', description: 'Deployment self-hosted' },
      { title: 'Agent Framework', status: 'planned', description: 'Agentes autônomos com ferramentas' },
      { title: 'Synapsis 2.0', status: 'planned', description: 'Major release com todas as features' },
    ],
  },
];

const highlights = [
  {
    icon: Zap,
    title: '2026',
    subtitle: 'Ano de Expansão',
    description: 'Foco em escala, performance e recursos enterprise',
  },
  {
    icon: Globe,
    title: 'Multi-idioma',
    subtitle: 'PT, EN, ES',
    description: 'Suporte completo para português, inglês e espanhol',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    subtitle: 'iOS & Android',
    description: 'Experiência nativa em todos os dispositivos',
  },
];

export default function RoadmapPage() {
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
            <Rocket className="w-4 h-4 text-synapsis-400" />
            <span className="text-sm font-medium text-synapsis-300">Roadmap</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Para onde estamos
            <span className="gradient-text"> indo</span>
          </h1>
          
          <p className="text-lg text-slate-400">
            Nossa visão de longo prazo e os marcos que estamos construindo.
            Sempre ouvindo a comunidade e adaptando prioridades.
          </p>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-synapsis-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-synapsis-400" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">{item.title}</h3>
              <p className="text-synapsis-400 font-medium mb-2">{item.subtitle}</p>
              <p className="text-sm text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Roadmap 2026</h2>
          <p className="text-slate-400">O que está por vir</p>
        </div>

        <div className="space-y-8">
          {roadmapData.map((quarter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  quarter.status === 'completed' ? 'bg-green-500/20' :
                  quarter.status === 'in-progress' ? 'bg-yellow-500/20' :
                  'bg-slate-700/50'
                }`}>
                  {quarter.status === 'completed' ? (
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  ) : quarter.status === 'in-progress' ? (
                    <Clock className="w-6 h-6 text-yellow-400" />
                  ) : (
                    <Circle className="w-6 h-6 text-slate-500" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{quarter.quarter}</h3>
                  <span className={`text-sm ${
                    quarter.status === 'completed' ? 'text-green-400' :
                    quarter.status === 'in-progress' ? 'text-yellow-400' :
                    'text-slate-500'
                  }`}>
                    {quarter.status === 'completed' ? 'Concluído' :
                     quarter.status === 'in-progress' ? 'Em Progresso' :
                     'Planejado'}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {quarter.items.map((item, i) => (
                  <div 
                    key={i} 
                    className={`p-4 rounded-xl border ${
                      item.status === 'completed' ? 'bg-green-500/5 border-green-500/20' :
                      item.status === 'in-progress' ? 'bg-yellow-500/5 border-yellow-500/20' :
                      'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        {item.status === 'completed' ? (
                          <CheckCircle2 className="w-5 h-5 text-green-400" />
                        ) : item.status === 'in-progress' ? (
                          <Clock className="w-5 h-5 text-yellow-400" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-600" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="glass-card p-8 md:p-12 text-center">
          <Sparkles className="w-12 h-12 text-synapsis-400 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Tem uma sugestão?
          </h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Nosso roadmap é vivo e muda com base no feedback da comunidade.
            Adoramos ouvir suas ideias!
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-synapsis-600 to-synapsis-500 hover:from-synapsis-500 hover:to-synapsis-400 text-white font-semibold rounded-xl transition-all hover:scale-105">
            Enviar Sugestão
          </button>
        </div>
      </section>
    </div>
  );
}