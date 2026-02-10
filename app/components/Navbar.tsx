'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/funcionalidades', label: 'Funcionalidades' },
  { href: '/tecnologia', label: 'Tecnologia' },
  { href: '/roadmap', label: 'Roadmap' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-synapsis-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Synapsis</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2.5 bg-gradient-to-r from-synapsis-600 to-synapsis-500 hover:from-synapsis-500 hover:to-synapsis-400 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-synapsis-500/25">
              Começar Grátis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-synapsis-600 to-synapsis-500 text-white font-semibold rounded-xl">
                Começar Grátis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}