'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function SuportePage() {
  const [voted, setVoted] = useState(false);

  const handleImpactClick = () => {
    setVoted(true);
    // In a real app, this would send to Supabase/API
    alert("Obrigado pelo seu feedback! Isso ajuda nosso projeto na universidade.");
  };

  const faqs = [
    {
      q: "O vídeo não está carregando, o que eu faço?",
      a: "Verifique se a sua internet (Wi-Fi) está ligada. Às vezes, desligar o celular e ligar de novo resolve a maioria dos problemas!"
    },
    {
      q: "Como faço para aumentar as letras de novo?",
      a: "Vá no nosso 'Guia: Como Enxergar Melhor' que está na tela inicial. Lá explicamos o passo a passo com fotos grandes."
    },
    {
      q: "Posso compartilhar essas aulas com meus amigos?",
      a: "Com certeza! Clique na setinha de 'Compartilhar' do vídeo ou mande o link deste site no seu grupo do WhatsApp."
    },
    {
      q: "Este site é pago?",
      a: "Não! Todo o conteúdo aqui é gratuito e faz parte de uma Atividade de Extensão da Universidade."
    }
  ];

  return (
    <div className="main-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <header>
        <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 'var(--spacing-md)', display: 'inline-block' }}>
          ← Voltar para as Aulas
        </Link>
        <h1>Central de Suporte</h1>
        <p>Estamos aqui para ajudar você.</p>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto', gap: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column' }}>
        
        {/* Pesquisa de Impacto (ACADÊMICO) */}
        <section className="step-card" style={{ border: '4px solid var(--color-accent)', backgroundColor: '#FEFCE8' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: 'var(--spacing-md)', color: '#92400E' }}>⭐ Ajude o Projeto</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>
            Este site te ajudou a aprender algo novo hoje? O seu "SIM" é muito importante para o nosso projeto na universidade!
          </p>
          {!voted ? (
            <button 
              onClick={handleImpactClick} 
              className="button-giant" 
              style={{ background: 'linear-gradient(135deg, #22C55E, #166534)' }}
            >
              🚀 Sim, este site me ajudou!
            </button>
          ) : (
            <div style={{ textAlign: 'center', padding: 'var(--spacing-md)', backgroundColor: '#DCFCE7', borderRadius: 'var(--radius-lg)', border: '2px solid #166534' }}>
              <p style={{ color: '#166534', fontWeight: 'bold', fontSize: '1.5rem', margin: 0 }}>✅ Feedback Enviado!</p>
            </div>
          )}
        </section>

        {/* FAQ */}
        <section className="step-card">
          <h2 style={{ fontSize: '1.8rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>Dúvidas Comuns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{ borderBottom: '1px solid var(--color-gray-soft)', paddingBottom: '15px' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{faq.q}</h3>
                <p style={{ color: '#475569' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Falar com Humano */}
        <section className="step-card" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>Ainda está com dúvida?</h2>
          <p style={{ marginBottom: 'var(--spacing-md)' }}>Fale diretamente no WhatsApp do autor do projeto:</p>
          <a 
            href="https://wa.me/5541999999999" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button-giant" 
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
          >
            💬 Abrir WhatsApp
          </a>
        </section>

      </div>

      <Footer />
    </div>
  );
}
