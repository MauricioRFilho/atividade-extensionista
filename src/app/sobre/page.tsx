import Link from 'next/link';
import Footer from '@/components/Footer';

export default function SobrePage() {
  return (
    <div className="main-container">
      <header>
        <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 'var(--spacing-md)', display: 'inline-block', textDecoration: 'none' }}>
          ← Voltar para o Início
        </Link>
        <h1>Sobre o Projeto</h1>
        <p>Conheça a iniciativa de Inclusão Digital para a Melhor Idade.</p>
      </header>

      <div className="steps-container">
        <section className="step-card">
          <h2>O que é este Projeto?</h2>
          <p style={{ marginTop: 'var(--spacing-sm)' }}>
            Esta plataforma é o resultado da <strong>Atividade Extensionista I</strong> do Centro Universitário Internacional <strong>UNINTER</strong>. 
            Nosso objetivo é reduzir o isolamento social e digital de idosos, fornecendo ferramentas simples e acessíveis para o uso do smartphone no dia a dia.
          </p>
        </section>

        <section className="step-card">
          <h2>Metodologia</h2>
          <p style={{ marginTop: 'var(--spacing-sm)' }}>
            Baseado nos princípios do <strong>Desenho Universal</strong>, desenvolvemos uma interface com:
          </p>
          <ul style={{ marginLeft: 'var(--spacing-lg)', marginTop: 'var(--spacing-sm)', listStyle: 'disc' }}>
            <li>Botões gigantes e coloridos para facilitar o toque.</li>
            <li>Textos em tamanho ampliado para melhor leitura.</li>
            <li>Vídeos curtos e diretos, sem termos técnicos complicados.</li>
            <li>Simuladores para treinar cliques sem medo de errar.</li>
          </ul>
        </section>

        <section className="step-card">
          <h2>Resultados em Curitiba</h2>
          <p style={{ marginTop: 'var(--spacing-sm)' }}>
            Durante a fase de testes em centros comunitários de Curitiba, alcançamos:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-md)' }}>
            <div style={{ textAlign: 'center', padding: 'var(--spacing-sm)', backgroundColor: '#DBEAFE', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#1E40AF' }}>+50</div>
              <div style={{ fontSize: '14px' }}>Idosos Atendidos</div>
            </div>
            <div style={{ textAlign: 'center', padding: 'var(--spacing-sm)', backgroundColor: '#D1FAE5', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#065F46' }}>82%</div>
              <div style={{ fontSize: '14px' }}>Mais Confiança</div>
            </div>
          </div>
        </section>
      </div>

      <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
        <Link href="/" className="button-giant">
          Entendi, vamos aprender!
        </Link>
      </div>

      <Footer />
    </div>
  );
}
