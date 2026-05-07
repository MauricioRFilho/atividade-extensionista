# Relatório de Evidências — SafeCheck

**Data/Hora:** 2026-05-07 16:59:28  
**Ambiente:** Produção (Vercel)  
**URL:** https://cadencecode-safecheck.vercel.app  
**Commit referência:** 073fddf

## Objetivo
Registrar evidências visuais e analíticas para apresentação do TCC, cobrindo fluxos de URL e imagem com foco em cenário brasileiro.

## Evidências Capturadas
1. prints/01-home.png — Tela inicial do sistema em produção.
2. prints/02-url-segura-govbr.png — Análise de https://www.gov.br (esperado: baixo risco).
3. prints/03-url-suspeita-impersonacao.png — Análise de https://govbr-seguro-acesso.com (esperado: médio/alto risco por impersonação).
4. prints/04-imagem-suspeita.png — Print com texto de urgência + senha + link encurtado (esperado: alto risco).
5. prints/05-imagem-neutra.png — Print com texto neutro (esperado: risco inferior ao caso suspeito).

## Resumo Técnico da Análise
- O módulo de URL aplica heurísticas de segurança (HTTPS, encurtadores, termos sensíveis, impersonação de marcas/órgãos nacionais e padrões de domínio oficial BR).
- O módulo de imagem aplica heurísticas de metadados (resolução, proporção, tamanho) e conteúdo textual informado pelo usuário.
- O score é apresentado com explicabilidade (atores + ecomendações), sem uso de IA nesta versão.

## Resultado de Qualidade (Release)
- Testes automatizados: **10/10 passando**.
- Lint: **aprovado**.
- Build de produção: **aprovado**.
- Deploy de produção ativo e validado no momento da captura.

## Conclusão para banca
O MVP está funcional, público e reproduzível, com evidências de execução real em produção e critérios de análise coerentes com o contexto nacional.

## Próximos passos pós-banca
1. Expandir base nacional de sinais de fraude.
2. Incluir OCR dedicado para reduzir dependência de texto manual.
3. Evoluir para camada de IA supervisionada com dataset brasileiro curado.
