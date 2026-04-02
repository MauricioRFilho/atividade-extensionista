'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

type Level = 1 | 2 | 3 | 'win';

export default function SimuladorPage() {
  const [level, setLevel] = useState<Level>(1);
  const [message, setMessage] = useState<string>('Clique no botão verde gigante abaixo!');
  const [showConfetti, setShowConfetti] = useState(false);

  const nextLevel = () => {
    if (level === 1) {
      setLevel(2);
      setMessage('Muito bem! Agora, encontre os "Três Pontinhos" (Menu) no canto de cima.');
    } else if (level === 2) {
      setLevel(3);
      setMessage('Excelente! No Pix, sempre confira o nome antes de clicar em "Confirmar". Clique no nome MARCOS.');
    } else if (level === 3) {
      setLevel('win');
      setMessage('PARABÉNS! Você dominou os cliques básicos! 🎉');
      setShowConfetti(true);
    }
  };

  const handleError = () => {
    setMessage('Ops! Tente clicar exatamente no alvo indicado.');
    setTimeout(() => {
      // Restore hint message
      if (level === 1) setMessage('Clique no botão verde gigante abaixo!');
      if (level === 2) setMessage('Encontre os "Três Pontinhos" (Menu) no canto de cima.');
      if (level === 3) setMessage('Clique no nome MARCOS para confirmar o Pix.');
    }, 2000);
  };

  return (
    <div className="main-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <header style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
          <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 'var(--spacing-md)', display: 'inline-block' }}>
            ← Voltar para o Início
          </Link>
          <h1 style={{ color: 'var(--slate-900)' }}>Simulador de Cliques</h1>
          <div style={{ backgroundColor: '#DBEAFE', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-lg)', marginTop: 'var(--spacing-md)', borderLeft: '8px solid var(--primary)' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1E40AF', margin: 0 }}>
              {message}
            </p>
          </div>
        </header>

        <div style={{ 
          width: '320px', 
          height: '500px', 
          backgroundColor: '#FFFFFF', 
          borderRadius: '40px', 
          border: '12px solid #334155', 
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-xl)',
          marginBottom: 'var(--spacing-xl)'
        }}>
          
          {/* Nível 1: Precisão */}
          {level === 1 && (
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={handleError}>
              <button 
                onClick={(e) => { e.stopPropagation(); nextLevel(); }}
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  backgroundColor: '#22C55E',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                className="animate-pulse-slow"
              >
                CLIQUE AQUI
              </button>
            </div>
          )}

          {/* Nível 2: Menus (WhatsApp Style) */}
          {level === 2 && (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }} onClick={handleError}>
              <div style={{ height: '60px', backgroundColor: '#075E54', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 15px' }}>
                <div style={{ color: 'white', fontWeight: 'bold' }}>WhatsApp</div>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextLevel(); }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '24px',
                    cursor: 'pointer',
                    padding: '10px'
                  }}
                  className="animate-pulse-slow"
                >
                  ⋮
                </button>
              </div>
              <div style={{ flex: 1, backgroundColor: '#E5DDD5', padding: '20px' }}>
                <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '8px', maxWidth: '80%' }}>
                  Olá! Encontre o menu de três pontinhos lá em cima.
                </div>
              </div>
            </div>
          )}

          {/* Nível 3: Confirmação (Pix Style) */}
          {level === 3 && (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#F1F5F9' }} onClick={handleError}>
              <div style={{ padding: '20px', textAlign: 'center', flex: 1 }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Confirmar Envio</h3>
                <p>Escolha para quem enviar:</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px' }}>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleError(); }}
                    style={{ padding: '15px', borderRadius: '12px', border: '2px solid #CBD5E1', backgroundColor: 'white', fontSize: '1.1rem', textAlign: 'left' }}
                  >
                    👤 JOÃO DA SILVA
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextLevel(); }}
                    style={{ 
                      padding: '15px', 
                      borderRadius: '12px', 
                      border: '3px solid #22C55E', 
                      backgroundColor: 'white', 
                      fontSize: '1.1rem', 
                      textAlign: 'left',
                      fontWeight: 'bold',
                      color: '#166534'
                    }}
                    className="animate-pulse-slow"
                  >
                    👤 MARCOS DE CURITIBA
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleError(); }}
                    style={{ padding: '15px', borderRadius: '12px', border: '2px solid #CBD5E1', backgroundColor: 'white', fontSize: '1.1rem', textAlign: 'left' }}
                  >
                    👤 MARIA SOUZA
                  </button>
                </div>
              </div>
              <div style={{ padding: '20px', backgroundColor: 'white', borderTop: '1px solid #E2E8F0' }}>
                <button disabled style={{ width: '100%', padding: '15px', borderRadius: '12px', backgroundColor: '#94A3B8', color: 'white', border: 'none', fontSize: '1.2rem' }}>
                  Confirmar
                </button>
              </div>
            </div>
          )}

          {/* Vitória Final */}
          {level === 'win' && (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px', backgroundColor: '#ECFDF5' }}>
              <span style={{ fontSize: '100px', marginBottom: '20px' }}>🥇</span>
              <h2 style={{ color: '#065F46' }}>Você Ganhou!</h2>
              <p style={{ fontSize: '1.2rem', color: '#065F46' }}>Agora você tem dedos de mestre.</p>
              <button 
                onClick={() => setLevel(1)}
                style={{ marginTop: '30px', padding: '15px 30px', borderRadius: '30px', backgroundColor: '#059669', color: 'white', border: 'none', fontSize: '1.2rem', fontWeight: 'bold' }}
              >
                Jogar de Novo
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
