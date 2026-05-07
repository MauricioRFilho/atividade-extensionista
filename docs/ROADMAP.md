# 🗺️ ROADMAP — CadenceCode SafeCheck

## Visão Macro
```mermaid
flowchart LR
    A[Fase 1 Planejamento] --> B[Fase 2 Base Desacoplada]
    B --> C[Fase 3 URL Scoring]
    B --> D[Fase 4 Imagem Scoring]
    C --> E[Fase 5 UX/Explicabilidade]
    D --> E
    E --> F[Fase 6 Testes + TCC]
```

## Timeline
```mermaid
gantt
    title Timeline de Execucao
    dateFormat  YYYY-MM-DD
    section Planejamento
    Definicao de regras e pesos         :done, p1, 2026-05-08, 3d
    section Fundacao
    Repo standalone e CI/CD             :active, p2, 2026-05-11, 3d
    section Analise
    Engine URL                          :p3, 2026-05-14, 6d
    Engine Imagem + OCR                 :p4, 2026-05-20, 6d
    section Produto
    Interface e explicabilidade         :p5, 2026-05-26, 4d
    section Finalizacao
    Testes, calibracao e apresentacao   :p6, 2026-05-30, 4d
```

## Status por Fase
- ✅ Fase 1: Planejamento e escopo do MVP sem IA.
- ✅ Fase 2: Concluída (repo standalone + deploy Vercel + remoto GitHub).
- 📋 Fase 3: Pendente.
- 📋 Fase 4: Pendente.
- 📋 Fase 5: Pendente.
- 📋 Fase 6: Pendente.
