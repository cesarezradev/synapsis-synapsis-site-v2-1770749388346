'use client';

import { motion } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  Shield, 
  Server,
  Layers,
  GitBranch,
  Box,
  Globe,
  Lock,
  Gauge
} from 'lucide-react';

const techStack = [
  {
    category: 'Frontend',
    icon: Globe,
    technologies: [
      { name: 'Next.js 15', description: 'React framework com App Router' },
      { name: 'React 19', description: 'UI library com Server Components' },
      { name: 'Tailwind CSS', description: 'Utility-first styling' },
      { name: 'Framer Motion', description: 'Animações fluidas' },
      { name: 'Expo', description: 'React Native para mobile' },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    technologies: [
      { name: 'Node.js', description: 'Runtime JavaScript' },
      { name: 'Express', description: 'Web framework' },
      { name: 'TypeScript', description: 'Tipagem estática' },
      { name: 'PostgreSQL', description: 'Banco de dados relacional' },
      { name: 'Redis', description: 'Cache e sessões' },
    ],
  },
  {
    category: 'IA & ML',
    icon: Cpu,
    technologies: [
      { name: 'OpenAI', description: 'Embeddings e GPT models' },
      { name: 'Claude', description: 'Anthropic models via API' },
      { name: 'LanceDB', description: 'Banco vetorial embedded' },
      { name: 'OpenClaw', description: 'Gateway de IA' },
      { name: 'RAG', description: 'Retrieval-Augmented Generation' },
    ],
  },
  {
    category: 'Infraestrutura',
    icon: Box,
    technologies: [
      { name: 'Vercel', description: 'Deploy e hosting' },
      { name: 'Hetzner', description: 'VPS bare-metal' },
      { name: 'Cloudflare', description: 'DNS e CDN' },
      { name: 'Docker', description: 'Containerização' },
      { name: 'GitHub Actions', description: 'CI/CD' },
    ],
  },
];

const architecture = [
  {
    layer: 'Camada de Apresentação',
    components: ['Web App (Next.js)', 'Mobile App (Expo)', 'WhatsApp Gateway'],
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    layer: 'Camada de API',
    components: ['REST API', 'WebSocket', 'SSE Streaming', 'Rate Limiting'],
    icon: Server,
    color: 'from-cyan-500 to-teal-500',
  },
  {
    layer: 'Camada de Lógica',
    components: ['RAG Service', 'Chat Orchestration', 'Memory Manager', 'Auth'],
    icon: Layers,
    color: 'from-teal-500 to-green-500',
  },
  {
    layer: 'Camada de Dados',
    components: ['PostgreSQL', 'LanceDB', 'Redis', 'File Storage'],
    icon: Database,
    color: 'from-green-500 to-emerald-500',
  },
];

const securityFeatures = [
  {
    icon: Lock,
    title: 'Criptografia',
    description: 'Todos os dados sensíveis criptografados com AES-256-GCM em repouso e TLS 1.3 em trânsito.',
  },
  {
    icon: Shield,
    title: 'Autenticação',
    description: 'JWT com RS256, refresh tokens, e proteção contra brute force e rate limiting.',
  },
  {
    icon: Database,
    title: 'Isolamento',
    description: 'Dados de cada usuário isolados logicamente com row-level security no PostgreSQL.',
  },
  {
    icon: Gauge,
    title: 'Monitoramento',
    description: 'Logs de auditoria, anomaly detection, e alertas em tempo real.',
  },
];

export default function TecnologiaPage() {
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
            <Cpu className="w-4 h-4 text-synapsis-400" />
            <span className="text-sm font-medium text-synapsis-300">Tecnologia</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Stack moderna,
            <span className="gradient-text"> performance máxima</span>
          </h1>
          
          <p className="text-lg text-slate-400">
            Construído com as melhores tecnologias disponíveis, 
            otimizado para velocidade, segurança e escalabilidade.
          </p>
        </motion.div>
      </section>

      {/* Architecture Diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Arquitetura</h2>
          <p className="text-slate-400">Design em camadas para escalabilidade e manutenibilidade</p>
        </div>

        <div className="space-y-4">
          {architecture.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0`}>
                  <layer.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-white mb-2">{layer.layer}</h3>
                  <div className="flex flex-wrap gap-2">
                    {layer.components.map((component, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-white/5 rounded-full text-slate-300">
                        {component}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Stack Tecnológico</h2>
          <p className="text-slate-400">As ferramentas que usamos para construir o futuro</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-synapsis-500/20 to-cyan-500/20 flex items-center justify-center">
                  <stack.icon className="w-5 h-5 text-synapsis-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{stack.category}</h3>
              </div>
              <div className="space-y-3">
                {stack.technologies.map((tech, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="font-medium text-slate-200">{tech.name}</span>
                    <span className="text-sm text-slate-500">{tech.description}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Segurança</h2>
          <p className="text-slate-400">Proteção em múltiplas camadas</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Performance</h2>
            <p className="text-slate-400">Métricas reais do sistema em produção</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '< 500ms', label: 'Latência Média' },
              { value: '99.9%', label: 'Uptime' },
              { value: '256K', label: 'Context Window' },
              { value: '10K+', label: 'RPS Capacity' },
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold gradient-text">{metric.value}</div>
                <div className="text-sm text-slate-500">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}