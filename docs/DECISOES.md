# 🧾 DECISOES (ADR Simplificado)

## ADR-001 — MVP inicial sem IA
- **Data:** 2026-05-07
- **Status:** ✅ Aprovado
- **Decisão:** versão inicial não usará IA/ML treinado.
- **Justificativa:** reduzir custo, risco e tempo de implementação.
- **Consequência:** análise baseada em regras/heurísticas; menor adaptabilidade automática.

## ADR-002 — Publicação pública desacoplada
- **Data:** 2026-05-07
- **Status:** ✅ Aprovado
- **Decisão:** criar projeto standalone da CadenceCode.
- **Justificativa:** facilitar deploy aberto no Vercel e evolução independente.
- **Consequência:** novo repositório e pipeline próprio.

## ADR-003 — Score explicável obrigatório
- **Data:** 2026-05-07
- **Status:** ✅ Aprovado
- **Decisão:** toda resposta deve explicar os fatores do score.
- **Justificativa:** transparência para usuários e defesa metodológica no TCC.
- **Consequência:** modelo de resposta inclui "fatores" e "dicas".

## ADR-004 — Stack inicial
- **Data:** 2026-05-07
- **Status:** ✅ Aprovado
- **Decisão:** Next.js 16 + Route Handlers + Vercel.
- **Justificativa:** menor fricção com ambiente atual e deploy rápido.
- **Consequência:** backend acoplado ao app web no MVP.
