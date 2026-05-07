# Apresentação TCC — SafeCheck (CadenceCode)

## Slide 1 — Capa
- **Título:** SafeCheck — Verificação de Segurança de URLs e Imagens
- **Subtítulo:** MVP público sem IA, com foco no cenário brasileiro
- **Autor:** Mauricio R. Filho
- **Curso/Instituição:** (preencher)

## Slide 2 — Problema
- Golpes digitais no Brasil crescem em links falsos e prints manipulados.
- Usuários comuns têm dificuldade em validar autenticidade rapidamente.
- Falta ferramenta gratuita, pública e simples para triagem inicial.

## Slide 3 — Objetivo do Projeto
- Permitir análise de URL e imagem com score de segurança (%).
- Exibir explicação clara do score (fatores + recomendações).
- Publicar em ambiente real para uso público e validação acadêmica.

## Slide 4 — Solução Proposta
- Plataforma web `SafeCheck` (Next.js 16 + Vercel).
- Dois fluxos:
  1. Análise de URL.
  2. Análise de print/imagem.
- MVP sem IA (heurísticas determinísticas, baixo custo).

## Slide 5 — Arquitetura (alto nível)
- Frontend + API no mesmo projeto Next.js.
- Endpoint `POST /api/analyze-url`.
- Endpoint `POST /api/analyze-image`.
- Motor heurístico para score e classificação de risco.

## Slide 6 — Regras com foco Brasil
- Reconhecimento de domínios oficiais (`.gov.br`, `.jus.br`, etc.).
- Sinalização de impersonação de marcas/órgãos brasileiros.
- Heurísticas de phishing: encurtador, HTTP, urgência, pedido de credencial.

## Slide 7 — Evidência 1 (Tela inicial)
- Inserir imagem: `prints/01-home.png`
- Fala sugerida:
  - “Esta é a versão de produção pública no Vercel.”
  - “A interface possui dois módulos: URL e imagem.”

## Slide 8 — Evidência 2 (URL segura)
- Inserir imagem: `prints/02-url-segura-govbr.png`
- Fala sugerida:
  - “Teste com domínio oficial brasileiro (`gov.br`).”
  - “Resultado esperado: score alto e baixo risco.”

## Slide 9 — Evidência 3 (URL suspeita)
- Inserir imagem: `prints/03-url-suspeita-impersonacao.png`
- Fala sugerida:
  - “Caso de impersonação que parece gov.br, mas não é domínio oficial.”
  - “Sistema reduz score e explica os fatores de risco.”

## Slide 10 — Evidência 4 (Imagem suspeita)
- Inserir imagem: `prints/04-imagem-suspeita.png`
- Fala sugerida:
  - “Print com urgência, senha e link encurtado.”
  - “Classificação tende a alto risco com recomendações de prevenção.”

## Slide 11 — Evidência 5 (Imagem neutra)
- Inserir imagem: `prints/05-imagem-neutra.png`
- Fala sugerida:
  - “Comparação com print neutro para mostrar diferença de score.”
  - “Mostra consistência de análise entre cenários.”

## Slide 12 — Qualidade e Testes
- Bateria automatizada com Vitest:
  - testes de libs de score (URL/imagem);
  - testes dos endpoints.
- Resultado de validação:
  - `npm test` (10/10 passando),
  - `npm run lint` aprovado,
  - `npm run build` aprovado.

## Slide 13 — Limitações
- Score é estimativa de risco, não laudo definitivo.
- Versão atual sem IA e sem OCR avançado.
- Dependência de texto informado no fluxo de imagem para maior precisão.

## Slide 14 — Próximos Passos
- Integrar OCR completo e melhorar extração textual automática.
- Evoluir para camada de IA supervisionada com base brasileira.
- Coletar feedback de uso real para calibrar pesos e reduzir falsos positivos.

## Slide 15 — Encerramento
- MVP funcional, público, testado e alinhado ao problema nacional.
- Link da solução: `https://cadencecode-safecheck.vercel.app`
- Perguntas.

---

## Ordem sugerida de apresentação (8-10 min)
1. Slides 1-3 (2 min)
2. Slides 4-6 (2 min)
3. Slides 7-11 (3 min, demo/evidências)
4. Slides 12-15 (2-3 min)
