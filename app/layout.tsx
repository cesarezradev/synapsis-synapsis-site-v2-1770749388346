import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Synapsis - Sua Memória, Ampliada',
  description: 'Synapsis é um assistente pessoal inteligente que lembra tudo para você, conectando suas conversas, arquivos e conhecimento em uma única experiência fluida.',
  keywords: ['IA', 'assistente pessoal', 'RAG', 'memória', 'produtividade', 'Next.js'],
  authors: [{ name: 'Synapsis Team' }],
  openGraph: {
    title: 'Synapsis - Sua Memória, Ampliada',
    description: 'Assistente pessoal inteligente com memória permanente',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}