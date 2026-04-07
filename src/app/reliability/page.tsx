import Link from 'next/link';
import Footer from '@/components/Footer';

export default function ReliabilityPage() {
  return (
    <div className="main-container">
      <header>
        <Link 
          href="/" 
          style={{ fontSize: '18px', display: 'block', marginBottom: 'var(--spacing-md)', textDecoration: 'none', fontWeight: 'bold', color: 'var(--color-primary)' }}
        >
          ← Voltar para o Início
        </Link>
        <h1>Como saber se um site é seguro?</h1>
        <p>Aprenda a identificar se você pode confiar nas informações da tela.</p>
      </header>

      <div className="steps-container">
        <section className="step-card">
          <div className="step-number" style={{ background: '#059669' }}>🔒</div>
          <h2>O Cadeado Verde</h2>
          <p style={{ marginTop: 'var(--spacing-sm)' }}>
            Lá no topo da tela, onde fica o endereço do site, procure por um desenho de <strong>Cadeado Fechado</strong>. 
            Ele significa que suas informações estão protegidas como se estivessem dentro de um cofre.
          </p>
        </section>

        <section className="step-card">
          <div className="step-number" style={{ background: '#EAB308' }}>🧐</div>
          <h2>Erros de Português</h2>
          <p style={{ marginTop: 'var(--spacing-sm)' }}>
            Sites falsos muitas vezes têm pressa e cometem erros de escrita. 
            Se você ler palavras erradas ou frases estranhas, desconfie na hora! Bancos e lojas oficiais escrevem tudo certinho.
          </p>
        </section>

        <section className="step-card">
          <div className="step-number" style={{ background: '#DC2626' }}>⚠️</div>
          <h2>Promessas Mirabolantes</h2>
          <p style={{ marginTop: 'var(--spacing-sm)' }}>
            Se o site diz que você ganhou um prêmio incrível de graça, ou que seu CPF está com problema, pare tudo. 
            <strong>Nunca coloque sua senha ou dados pessoais</strong> em sites que prometem dinheiro fácil.
          </p>
        </section>
      </div>

      <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
        <Link href="/" className="button-giant">
          Obrigado, agora me sinto seguro!
        </Link>
      </div>

      <Footer />
    </div>
  );
}
