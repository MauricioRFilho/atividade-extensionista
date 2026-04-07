import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ 
      marginTop: 'var(--spacing-xl)', 
      padding: 'var(--spacing-xl) 0', 
      borderTop: '2px solid var(--color-gray-soft)',
      textAlign: 'center'
    }} className="no-print">
      
      <div style={{ marginBottom: 'var(--spacing-lg)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Ficou fácil de aprender?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)', maxWidth: '1000px', margin: '0 auto' }}>
          <a 
            href="https://forms.gle/NQKq4myatLHDBaYn6" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button-giant animate-pulse-slow" 
            style={{ background: 'linear-gradient(135deg, #7C3AED, #0891B2)', color: 'white', border: '4px solid white' }}
          >
            <span style={{ fontSize: '32px', marginRight: 'var(--spacing-sm)' }}>⭐</span>
            Contar o que achou
          </a>
          <Link 
            href="/suporte" 
            className="button-giant" 
            style={{ background: 'linear-gradient(135deg, #EAB308, #D97706)', color: '#0F172A' }}
          >
            <span style={{ fontSize: '32px', marginRight: 'var(--spacing-sm)' }}>❓</span>
            Tire Suas Dúvidas
          </Link>
        </div>
      </div>

      <nav style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: 'var(--spacing-lg)', 
        flexWrap: 'wrap',
        marginBottom: 'var(--spacing-xl)' 
      }}>
        <Link href="/sobre" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Sobre o Projeto</Link>
        <Link href="/simulador" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Simulador de Cliques</Link>
        <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Início (Aulas)</Link>
      </nav>

      <div style={{ 
        padding: 'var(--spacing-md)', 
        borderRadius: 'var(--radius-md)', 
        backgroundColor: '#F1F5F9', 
        border: '2px dashed #CBD5E1', 
        maxWidth: '600px', 
        margin: '0 auto' 
      }}>
        <p style={{ color: '#64748B', fontSize: '18px', fontWeight: 'bold', margin: 0 }}>
          🛡️ Módulo de Confiabilidade
        </p>
        <p style={{ color: '#94A3B8', fontSize: '14px', margin: '5px 0 0 0' }}>
          (Projeto externo em desenvolvimento - Atividade de Extensão)
        </p>
      </div>

      <div style={{ marginBottom: 'var(--spacing-xl)', color: '#94A3B8', fontSize: '14px' }}>
        <p>© 2026 Inclusão Digital Curitiba - Um projeto de Mauricio R. Filho</p>
        <p style={{ marginTop: '8px' }}>Contato: mauricio.santos0198@gmail.com</p>
      </div>
    </footer>
  );
}
