'use client';

import Link from 'next/link';
import { GUIDES } from "@/data/contents";
import { use } from 'react';
import Footer from '@/components/Footer';

interface GuidePageProps {
  params: Promise<{ id: string }>;
}

export default function GuidePage({ params }: GuidePageProps) {
  const { id } = use(params);
  const guide = GUIDES.find(g => g.id === id);

  if (!guide) {
    return (
      <main className="main-container">
        <h1>Guia não encontrado</h1>
        <Link href="/" className="button-giant">Voltar para Home</Link>
      </main>
    );
  }

  return (
    <div className="main-container">
      <main>
        <header className="no-print">
          <Link 
            href="/" 
            className="button-giant secondary"
            style={{ fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--spacing-md)', textDecoration: 'none', fontWeight: 'bold' }}
          >
            ← Voltar para o Início
          </Link>
          <span className="category-tag tag-basico">{guide.category}</span>
          <h1>{guide.title}</h1>
          <p style={{ fontSize: '20px', marginBottom: 'var(--spacing-xl)' }}>{guide.description}</p>
        </header>

        <div className="steps-container">
          {guide.steps.map((step, index) => (
            <section key={index} className="step-card">
              <div className="step-number">{index + 1}</div>
              <p className="step-text">{step.text}</p>
              <div className="step-image-wrapper">
                <img 
                  src={step.image_url} 
                  alt={`Passo ${index + 1}`} 
                  className="step-image"
                  loading="lazy"
                />
              </div>
            </section>
          ))}
        </div>

        <div className="no-print" style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
          <button 
            className="button-giant warning" 
            onClick={() => window.print()}
            style={{ marginBottom: 'var(--spacing-md)', background: 'linear-gradient(135deg, #EAB308, #D97706)', color: '#0F172A' }}
          >
            🖨️ Imprimir para ler no Papel
          </button>
          <Link href="/" className="button-giant">
            Concluí o aprendizado!
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Next.js 16/15 suporte para SSG em Client Pages com generateStaticParams (experimental/beta em algumas versões, mas comum)
// Na dúvida, se o build funcionar como ƒ (Dynamic), está ok para o ambiente local.
