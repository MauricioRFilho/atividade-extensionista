'use client';

import Link from 'next/link';
import { trackEvent } from '@/utils/track';

const SAFECHECK_URL = 'https://cadencecode-safecheck.vercel.app';

export default function SafeCheckPage() {
  return (
    <main className="main-container">
      <header>
        <h1>Verificador de Golpes</h1>
        <p>
          Confira se um link ou print é seguro. Se aparecer perigo, não clique e peça ajuda.
        </p>
      </header>

      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-md)',
        }}
      >
        <a
          href={SAFECHECK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="button-giant"
          onClick={() => trackEvent('safecheck_open_external')}
          style={{ background: 'linear-gradient(135deg, #0EA5E9, #075985)', minHeight: '120px' }}
        >
          <span style={{ fontSize: '40px', marginRight: 'var(--spacing-sm)' }}>🔎</span>
          Abrir Verificador Completo
        </a>

        <div
          style={{
            background: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-md)',
            boxShadow: 'var(--shadow-md)',
            border: '2px solid var(--color-gray-soft)',
          }}
        >
          <h2 style={{ marginBottom: 'var(--spacing-sm)' }}>Dica Rápida de Uso</h2>
          <p style={{ marginBottom: 'var(--spacing-sm)' }}>
            1. Cole o link ou envie um print.
          </p>
          <p style={{ marginBottom: 'var(--spacing-sm)' }}>
            2. Veja a porcentagem e leia as recomendações.
          </p>
          <p style={{ marginBottom: 'var(--spacing-sm)' }}>
            3. Em caso de risco alto, não passe dados, não faça Pix e fale com familiar.
          </p>
        </div>

        <div
          style={{
            background: 'white',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
            border: '2px solid var(--color-gray-soft)',
            overflow: 'hidden',
          }}
        >
          <iframe
            src={SAFECHECK_URL}
            title="Verificador de Golpes Integrado"
            style={{ width: '100%', height: '900px', border: 'none' }}
          />
        </div>

        <Link
          href="/"
          className="button-giant secondary"
          onClick={() => trackEvent('safecheck_back_home')}
          style={{ minHeight: '90px' }}
        >
          ⬅️ Voltar para Início
        </Link>
      </section>
    </main>
  );
}
