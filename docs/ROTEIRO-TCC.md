# 🎓 Roteiro de Apresentação — TCC SafeCheck

## 1. Problema (1 min)
- Golpes digitais no Brasil com phishing por link e print manipulado.
- Usuário comum não consegue avaliar risco rapidamente.

## 2. Proposta (1 min)
- Plataforma pública da CadenceCode para análise gratuita.
- Entrada por URL ou imagem/print.
- Saída com porcentagem de segurança + justificativas + recomendações.

## 3. Arquitetura MVP (1 min)
- Next.js 16 (frontend + APIs).
- Motor heurístico sem IA.
- Deploy público no Vercel.

## 4. Demonstração ao vivo (4 min)
1. Abrir `https://cadencecode-safecheck.vercel.app`
2. Testar URL segura (`https://www.gov.br`) e mostrar score alto.
3. Testar URL suspeita (`https://govbr-seguro-acesso.com`) e mostrar fatores.
4. Testar imagem com texto de urgência e pedido de senha.
5. Mostrar recomendações práticas exibidas ao usuário.

## 5. Qualidade e confiabilidade (1 min)
- Testes automatizados com Vitest.
- `npm test`, `npm run lint`, `npm run build` aprovados.
- Regras nacionais: domínios oficiais BR e detecção de impersonação.

## 6. Limitações e próximos passos (1 min)
- Sem IA nesta fase (decisão por custo e prazo).
- Possível evolução: OCR avançado, modelo treinado com base nacional, calibração por dataset real.

## Evidências para anexar no slide
- URL de produção.
- Hash do commit de release.
- Resultado resumido da bateria de testes (10/10 passando).
- Prints de 4 casos (2 seguros, 2 suspeitos).
