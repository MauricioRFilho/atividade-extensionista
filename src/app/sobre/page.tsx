'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';

export default function SobrePage() {
  return (
    <div className="main-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <header>
        <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 'var(--spacing-md)', display: 'inline-block' }}>
          ← Voltar para as Aulas
        </Link>
        <h1>Sobre o Projeto</h1>
        <p>Conheça a história e o objetivo desta iniciativa social.</p>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto', gap: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column' }}>
        
        <section className="step-card">
          <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>🎓 Atividade de Extensão</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>
            Este site é o resultado de uma **Atividade Extensionista** desenvolvida por **Mauricio R. Filho**. 
            O objetivo é levar tecnologia e autonomia para a população idosa da cidade de **Curitiba - PR**.
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            Acreditamos que a idade não deve ser uma barreira para a comunicação. Por isso, criamos este espaço 
            gratuito, acessível e simplificado para que todos possam usar o celular com confiança.
          </p>
        </section>

        <section className="step-card">
          <h2 style={{ fontSize: '1.8rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-secondary)' }}>🏙️ Inclusão em Curitiba</h2>
          <p style={{ fontSize: '1.1rem' }}>
            Curitiba é uma cidade referência em inovação, mas sabemos que muitos cidadãos ainda se sentem 
            excluídos do mundo digital. Este projeto busca preencher essa lacuna, oferecendo conteúdos 
            que respeitam o tempo e a forma de aprendizado do idoso.
          </p>
          <div style={{ marginTop: 'var(--spacing-md)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', backgroundColor: '#F1F5F9', border: '1px solid #CBD5E1' }}>
            <p style={{ fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>Recursos Oficiais de Curitiba:</p>
            <ul style={{ listStyle: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <li>
                <a href="https://www.curitiba.pr.gov.br/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>
                  🔗 Prefeitura de Curitiba
                </a>
              </li>
              <li>
                <a href="https://saudeja.curitiba.pr.gov.br/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>
                  🏥 App Saúde Já (Agendamentos SUS)
                </a>
              </li>
              <li>
                <a href="https://armazemdafamilia.curitiba.pr.gov.br/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>
                  🛒 Armazém da Família
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="step-card" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: 'var(--spacing-md)' }}>🚀 Nossa Missão</h2>
          <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
            "Simplificar a tecnologia para conectar gerações."
          </p>
        </section>

      </div>

      <Footer />
    </div>
  );
}
