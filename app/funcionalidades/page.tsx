'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  MessageSquare, 
  FileText, 
  Search,
  Smartphone,
  Lock,
  Zap,
  Database,
  Cloud,
  Clock,
  Languages,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Memória Permanente',
    description: 'O Synapsis mantém um registro persistente de todas as suas conversas, preferências e contextos importantes. Nunca mais repita informações.',
    highlight: '256K tokens de contexto',
  },
  {
    icon: MessageSquare,
    title: 'Chat Inteligente',
    description: 'Interface de conversação natural com suporte a múltiplos modelos de IA. Escolha entre Claude, GPT, ou deixe o Synapsis decidir o melhor para cada tarefa.',
    highlight: 'Múltiplos modelos',
  },
  {
    icon: FileText,
    title: 'Análise de Documentos',
    description: 'Envie PDFs, imagens, e documentos. O Synapsis extrai informações, responde perguntas e conecta o conteúdo ao seu contexto pessoal.',
    highlight: 'OCR avançado',
  },
  {
    icon: Search,
    title: 'Busca Semântica',
    description: 'Encontre qualquer informação que você mencionou antes, mesmo usando palavras diferentes. A busca entende o significado, não apenas keywords.',
    highlight: 'Powered by LanceDB',
  },
  {
    icon: Smartphone,
    title: 'Multi-Plataforma',
    description: 'Acesse pelo WhatsApp, app mobile (iOS/Android) ou web. Sua experiência sincronizada perfeitamente em todos os dispositivos.',
    highlight: 'Experiência unificada',
  },
  {
    icon: Lock,
    title: 'Segurança Enterprise',
    description: 'Criptografia end-to-end, tokens criptografados em repouso, e você sempre no controle dos seus dados. Privacidade por design.',
    highlight: 'AES-256-GCM',
  },
];

const advancedFeatures = [
  {
    icon: Zap,
    title: 'Respostas em Tempo Real',
    description: 'Streaming de respostas com latência média inferior a 500ms. Sinta a velocidade.',
  },
  {
    icon: Database,
    title: 'RAG Avançado',
    description: 'Retrieval-Augmented Generation com embeddings OpenAI e banco vetorial LanceDB para memória semântica.',
  },
  {
    icon: Cloud,
    title: 'Sync em Nuvem',
    description: 'Seus dados sincronizados automaticamente entre todos os dispositivos, sempre disponíveis.',
  },
  {
    icon: Clock,
    title: 'Histórico Ilimitado',
    description: 'Acesse conversas do passado sem limite de tempo. O Synapsis lembra de tudo.',
  },
  {
    icon: Languages,
    title: 'Multi-idioma',
    description: 'Suporte nativo para português, inglês, espanhol e mais. Comunique-se na sua língua.',
  },
  {
    icon: Sparkles,
    title: 'Modelos Configuráveis',
    description: 'Escolha thinking level (low/medium/high) e modelo (Claude, GPT) para cada conversa.',
  },
];

export default function FuncionalidadesPage() {
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
            <Sparkles className="w-4 h-4 text-synapsis-400" />
            <span className="text-sm font-medium text-synapsis-300">Funcionalidades</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tudo que você precisa,
            <span className="gradient-text"> em um só lugar</span>
          </h1>
          
          <p className="text-lg text-slate-400">
            Uma suite completa de ferramentas de produtividade impulsionada por IA,
            projetada para quem valoriza eficiência e contexto.
          </p>
        </motion.div>
      </section>

      {/* Main Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover:bg-white/10 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-synapsis-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-synapsis-400" />
                </div>
                <span className="text-xs font-medium text-synapsis-400 bg-synapsis-500/10 px-2 py-1 rounded-full">
                  {feature.highlight}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advanced Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Recursos Avançados</h2>
          <p className="text-slate-400">Tecnologia de ponta para experiências excepcionais</p>
        </div>

        <div className="glass-card p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-synapsis-500/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-synapsis-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Casos de Uso</h2>
          <p className="text-slate-400">Como nossos usuários aproveitam o Synapsis</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Produtividade Pessoal',
              description: 'Organize tarefas, lembretes e notas em conversas naturais.',
              icon: '📝',
            },
            {
              title: 'Pesquisa',
              description: 'Analise documentos e conecte informações de fontes diversas.',
              icon: '🔍',
            },
            {
              title: 'Estudos',
              description: 'Crie resumos, flashcards e explique conceitos complexos.',
              icon: '📚',
            },
            {
              title: 'Trabalho',
              description: 'Automatize tarefas, escreva emails e gere código.',
              icon: '💼',
            },
          ].map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center hover:bg-white/10 transition-all"
            >
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="font-semibold text-white mb-2">{useCase.title}</h3>
              <p className="text-sm text-slate-400">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}