import { CONTENTS } from "@/data/contents";

export default function Home() {
  return (
    <div>
      <header>
        <h1>Inclusão Digital</h1>
        <p>Escolha o que você quer aprender hoje:</p>
      </header>

      <div className="content-grid">
        {CONTENTS.map((content) => (
          <section key={content.id} className="content-card">
            <span className="category-tag">{content.category}</span>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            
            <div className="video-wrapper">
              <iframe 
                src={content.url_video} 
                title={content.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            <button className="button-giant">
              Assistir em Tela Cheia
            </button>
          </section>
        ))}
      </div>

      <footer style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
        <a href="/reliability" className="button-giant secondary" style={{ fontSize: '18px', minHeight: '60px' }}>
          Módulo de Confiabilidade (Em breve)
        </a>
      </footer>
    </div>
  );
}
