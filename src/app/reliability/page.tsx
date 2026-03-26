export default function ReliabilityPage() {
  return (
    <div>
      <header>
        <a href="/" style={{ fontSize: '18px', display: 'block', marginBottom: 'var(--spacing-md)' }}>
          ← Voltar para Início
        </a>
        <h1>Confiabilidade de Sites</h1>
        <p>Este módulo será incorporado no futuro para monitorar o status dos nossos serviços e garantir que tudo funcione sempre.</p>
      </header>

      <div className="content-card">
        <h2>O que é Confiabilidade?</h2>
        <p>Garantir que os sites estejam sempre no ar e rápidos para quem mais precisa.</p>
      </div>

      <button className="button-giant secondary" onClick={() => window.history.back()}>
        Entendido
      </button>
    </div>
  );
}
