'use client';

import { use } from 'react';
import Link from 'next/link';
import { CONTENTS } from "@/data/contents";
import Footer from '@/components/Footer';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = use(params);
  
  // Mapeamento de Slugs para as categorias reais do CONTENTS
  const categoryConfig: Record<string, { label: string; filterNames: string[] }> = {
    'basico': { 
      label: 'Módulo Básico', 
      filterNames: ['Básico', 'Serviços Públicos'] 
    },
    'whatsapp': { 
      label: 'Módulo WhatsApp', 
      filterNames: ['WhatsApp'] 
    },
    'seguranca': { 
      label: 'Segurança Digital', 
      filterNames: ['Segurança'] 
    },
    'social-financas': { 
      label: 'Social & Finanças', 
      filterNames: ['Social', 'Finanças'] 
    }
  };

  const currentConfig = categoryConfig[slug] || { label: 'Vídeos', filterNames: [] };
  const filteredVideos = CONTENTS.filter(v => currentConfig.filterNames.includes(v.category));

  return (
    <div className="main-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header>
        <Link 
          href="/" 
          style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 'var(--spacing-md)', display: 'inline-block', textDecoration: 'none' }}
        >
          ← Voltar para o Início
        </Link>
        <h1>{currentConfig.label}</h1>
        <p>Assista aos vídeos abaixo para aprender sobre {currentConfig.label.toLowerCase()}.</p>
      </header>

      <div className="content-grid">
        {filteredVideos.map((video, index) => (
          <article key={index} className="content-card">
            <span className={`category-tag tag-${slug}`}>
              {video.category}
            </span>
            <div className="video-wrapper">
              <iframe 
                src={video.url_video}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <h2>{video.title}</h2>
            <p>{video.description}</p>
            <a 
              href={video.url_video.replace('embed/', 'watch?v=')} 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-giant"
              style={{ marginTop: 'var(--spacing-md)' }}
            >
              Abrir no YouTube
            </a>
          </article>
        ))}

        {filteredVideos.length === 0 && (
          <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: 'var(--spacing-xl)' }}>
            <p style={{ fontSize: '1.5rem', color: '#64748B' }}>Nenhum vídeo encontrado nesta categoria ainda.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
