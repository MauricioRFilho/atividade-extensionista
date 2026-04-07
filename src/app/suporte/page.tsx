import Link from 'next/link';
import Footer from '@/components/Footer';

export default function SuportePage() {
  return (
    <div className="main-container">
      <header>
        <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 'var(--spacing-md)', display: 'inline-block', textDecoration: 'none' }}>
          ← Voltar para o Início
        </Link>
        <h1>Central de Ajuda</h1>
        <p>Estamos aqui para garantir que você aprenda sem medo.</p>
      </header>

      <div className="steps-container">
        <section className="step-card">
          <div className="step-number" style={{ background: 'var(--color-secondary)' }}>🙋‍♂️</div>
          <h2>Dúvidas Frequentes</h2>
          <div style={{ marginTop: 'var(--spacing-md)' }}>
            <details style={{ marginBottom: 'var(--spacing-sm)', padding: 'var(--spacing-sm)', backgroundColor: '#F1F5F9', borderRadius: 'var(--radius-md)' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>O site é gratuito?</summary>
              <p style={{ marginTop: 'var(--spacing-xs)', fontSize: '18px' }}>Sim! Este é um projeto social da UNINTER para ajudar toda a comunidade.</p>
            </details>
            
            <details style={{ marginBottom: 'var(--spacing-sm)', padding: 'var(--spacing-sm)', backgroundColor: '#F1F5F9', borderRadius: 'var(--radius-md)' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Posso quebrar o celular se clicar errado?</summary>
              <p style={{ marginTop: 'var(--spacing-xs)', fontSize: '18px' }}>De jeito nenhum! Pode clicar em tudo. O simulador serve justamente para você treinar sem medo.</p>
            </details>

            <details style={{ padding: 'var(--spacing-sm)', backgroundColor: '#F1F5F9', borderRadius: 'var(--radius-md)' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Como volto para a tela inicial?</summary>
              <p style={{ marginTop: 'var(--spacing-xs)', fontSize: '18px' }}>Basta clicar no botão azul lá em cima que diz "Voltar para o Início" ou no logo do topo.</p>
            </details>
          </div>
        </section>

        <section className="step-card">
          <div className="step-number" style={{ background: 'var(--color-primary)' }}>📞</div>
          <h2>Contato para Facilitadores</h2>
          <p style={{ marginTop: 'var(--spacing-sm)' }}>
            Se você é um neto, filho ou voluntário ajudando um idoso, pode entrar em contato para sugerir novos temas ou relatar problemas:
          </p>
          <div style={{ marginTop: 'var(--spacing-lg)', padding: 'var(--spacing-md)', border: '2px dashed var(--color-primary)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>📧 Email do Projeto:</div>
            <div style={{ fontSize: '24px', color: 'var(--color-primary)', fontWeight: '900' }}>contato@uninter-extensao.edu.br</div>
            <p style={{ fontSize: '14px', color: '#64748B', marginTop: 'var(--spacing-xs)' }}>*Este é um projeto acadêmico de Atividade Extensionista.</p>
          </div>
        </section>
      </div>

      <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
        <Link href="/" className="button-giant secondary">
          Entendi, voltar para as aulas
        </Link>
      </div>

      <Footer />
    </div>
  );
}
