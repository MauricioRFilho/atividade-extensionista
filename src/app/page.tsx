'use client';

import Link from 'next/link';
import { trackEvent } from "@/utils/track";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="main-container">
      <header>
        <h1>Aprenda a Usar seu Celular</h1>
        <p>Escolha o que você quer aprender hoje clicando em um dos botões coloridos:</p>
      </header>

      <div style={{ marginBottom: 'var(--spacing-xl)', maxWidth: '1200px', margin: '0 auto var(--spacing-xl) auto' }}>
        <Link 
          href="/simulador" 
          className="button-giant" 
          onClick={() => trackEvent('home_simulador_click')}
          style={{ background: 'linear-gradient(135deg, #7C3AED, #4C1D95)', minHeight: '140px', padding: 'var(--spacing-md)' }}
        >
          <span style={{ fontSize: '48px', marginRight: 'var(--spacing-md)' }}>🕹️</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '28px', fontWeight: '900', lineHeight: '1.2' }}>Jogar: Treinar meus Cliques</div>
            <div style={{ fontSize: '18px', opacity: 0.9, fontWeight: 'normal', marginTop: '4px' }}>Aprenda a clicar sem medo de quebrar nada!</div>
          </div>
        </Link>
      </div>

      <div className="content-grid">
        {/* Módulo Básico */}
        <Link 
          href="/category/basico" 
          className="button-giant" 
          onClick={() => trackEvent('home_module_click', { module: 'basico' })}
          style={{ background: 'linear-gradient(135deg, #1D4ED8, #1E3A8A)' }}
        >
          <span style={{ fontSize: '40px', marginRight: 'var(--spacing-sm)' }}>📱</span>
          Módulo Básico
        </Link>

        {/* Módulo WhatsApp */}
        <Link 
          href="/category/whatsapp" 
          className="button-giant secondary" 
          onClick={() => trackEvent('home_module_click', { module: 'whatsapp' })}
          style={{ background: 'linear-gradient(135deg, #059669, #064E3B)' }}
        >
          <span style={{ fontSize: '40px', marginRight: 'var(--spacing-sm)' }}>💬</span>
          Módulo WhatsApp
        </Link>

        {/* Módulo Segurança */}
        <Link 
          href="/category/seguranca" 
          className="button-giant" 
          onClick={() => trackEvent('home_module_click', { module: 'seguranca' })}
          style={{ background: 'linear-gradient(135deg, #DC2626, #991B1B)' }}
        >
          <span style={{ fontSize: '40px', marginRight: 'var(--spacing-sm)' }}>🛡️</span>
          Segurança Digital
        </Link>

        {/* Módulo Social e Finanças */}
        <Link 
          href="/category/social-financas" 
          className="button-giant" 
          onClick={() => trackEvent('home_module_click', { module: 'social-financas' })}
          style={{ background: 'linear-gradient(135deg, #D97706, #92400E)' }}
        >
          <span style={{ fontSize: '40px', marginRight: 'var(--spacing-sm)' }}>💸</span>
          Social & Finanças
        </Link>
      </div>

      <div style={{ marginTop: 'var(--spacing-lg)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>Aulas por Escrito</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          <Link 
            href="/guias/enxergar-melhor" 
            className="button-giant" 
            onClick={() => trackEvent('home_guide_click', { guide: 'enxergar-melhor' })}
            style={{ background: 'linear-gradient(135deg, #64748B, #334155)', minHeight: '100px' }}
          >
            <span style={{ fontSize: '40px', marginRight: 'var(--spacing-sm)' }}>👓</span>
            Guia: Como Enxergar Melhor
          </Link>
          <Link 
            href="/guias/pix-seguro" 
            className="button-giant" 
            onClick={() => trackEvent('home_guide_click', { guide: 'pix-seguro' })}
            style={{ background: 'linear-gradient(135deg, #059669, #065F46)', minHeight: '100px' }}
          >
            <span style={{ fontSize: '40px', marginRight: 'var(--spacing-sm)' }}>💰</span>
            Guia: Pix Seguro (Sem Golpes)
          </Link>
          <Link 
            href="/guias/whatsapp-protegido" 
            className="button-giant" 
            onClick={() => trackEvent('home_guide_click', { guide: 'whatsapp-protegido' })}
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', minHeight: '100px' }}
          >
            <span style={{ fontSize: '40px', marginRight: 'var(--spacing-sm)' }}>🔐</span>
            Guia: WhatsApp Protegido
          </Link>
          <Link 
            href="/guias/gov-br-acesso" 
            className="button-giant" 
            onClick={() => trackEvent('home_guide_click', { guide: 'gov-br-acesso' })}
            style={{ background: 'linear-gradient(135deg, #004481, #002D56)', minHeight: '100px' }}
          >
            <span style={{ fontSize: '40px', marginRight: 'var(--spacing-sm)' }}>🏛️</span>
            Guia: Gov.br Fácil
          </Link>
          <Link 
            href="/guias/anti-golpes-2026" 
            className="button-giant" 
            onClick={() => trackEvent('home_guide_click', { guide: 'anti-golpes-2026' })}
            style={{ background: 'linear-gradient(135deg, #7F1D1D, #450A0A)', minHeight: '100px' }}
          >
            <span style={{ fontSize: '40px', marginRight: 'var(--spacing-sm)' }}>🛡️</span>
            Guia: Anti-Golpes 2026
          </Link>
          <Link 
            href="/guias/redes-sociais-seguras" 
            className="button-giant" 
            onClick={() => trackEvent('home_guide_click', { guide: 'redes-sociais-seguras' })}
            style={{ background: 'linear-gradient(135deg, #4338CA, #312E81)', minHeight: '100px' }}
          >
            <span style={{ fontSize: '40px', marginRight: 'var(--spacing-sm)' }}>🤳</span>
            Guia: Redes Sociais sem Mico
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
