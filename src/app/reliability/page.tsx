import Link from 'next/link';

export default function ReliabilityPage() {
  return (
    <main className="main-container">
      <header>
        <Link 
          href="/" 
          style={{ fontSize: '18px', display: 'block', marginBottom: 'var(--spacing-md)', textDecoration: 'none', fontWeight: 'bold', color: 'var(--color-primary)' }}
        >
          ← Voltar para o Início
        </Link>
        <h1>Confiabilidade de Sites</h1>
        <p>Este módulo será incorporado no futuro para garantir que tudo funcione sempre para você.</p>
      </header>

      <div className="content-card">
        <h2>O que é Confiabilidade?</h2>
        <p>É o nosso compromisso em garantir que o site esteja sempre disponível, rápido e seguro para quem mais precisa.</p>
      </div>

      <Link href="/" className="button-giant secondary">
        Entendido, Voltar
      </Link>
    </main>
  );
}
