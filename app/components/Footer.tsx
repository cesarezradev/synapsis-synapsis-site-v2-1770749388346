import Link from 'next/link';
import { Brain, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const footerLinks = {
  produto: [
    { label: 'Funcionalidades', href: '/funcionalidades' },
    { label: 'Tecnologia', href: '/tecnologia' },
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'Preços', href: '#' },
  ],
  empresa: [
    { label: 'Sobre', href: '/sobre' },
    { label: 'Blog', href: '#' },
    { label: 'Carreiras', href: '#' },
    { label: 'Contato', href: '#' },
  ],
  recursos: [
    { label: 'Documentação', href: '#' },
    { label: 'API', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  legal: [
    { label: 'Privacidade', href: '#' },
    { label: 'Termos', href: '#' },
    { label: 'Segurança', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-synapsis-500 to-cyan-500 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Synapsis</span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              Sua memória, ampliada. O assistente pessoal que conecta suas conversas, arquivos e conhecimento.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Produto</h4>
            <ul className="space-y-2">
              {footerLinks.produto.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2026 Synapsis. Todos os direitos reservados.
          </p>
          <p className="text-sm text-slate-500">
            Feito com 💙 e muita caféína
          </p>
        </div>
      </div>
    </footer>
  );
}