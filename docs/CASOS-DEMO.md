# 🧪 Casos de Demonstração — SafeCheck (Brasil)

## Objetivo
Conjunto padronizado de casos para ensaio da banca e validação rápida pós-deploy.

## URLs — Casos para Demo

| ID | Entrada | Expectativa |
|---|---|---|
| URL-01 | `https://www.gov.br` | **Baixo risco** (domínio oficial gov.br) |
| URL-02 | `https://bcb.gov.br` | **Baixo risco** (domínio oficial Banco Central) |
| URL-03 | `https://www.bb.com.br` | **Baixo risco** (domínio oficial banco BR) |
| URL-04 | `http://bit.ly/login?senha=1234567890` | **Médio/Alto risco** (HTTP + encurtador + credencial) |
| URL-05 | `https://govbr-seguro-acesso.com` | **Médio/Alto risco** (impersonação gov.br) |
| URL-06 | `https://receita-federal-validacao.net` | **Médio/Alto risco** (impersonação de órgão BR) |
| URL-07 | `https://conta-pix-urgente.xyz/validar` | **Alto risco** (TLD suspeito + urgência/Pix) |
| URL-08 | `http://192.168.0.15/login` | **Médio/Alto risco** (HTTP + host por IP) |
| URL-09 | `https://tinyurl.com/atualiza-conta` | **Médio/Alto risco** (encurtador + termo sensível) |
| URL-10 | `https://www.caixa.gov.br` | **Baixo risco** (domínio oficial caixa.gov.br) |

## Imagens/Prints — Casos para Demo

## Como montar os 10 casos
- IMG-01 a IMG-05: prints de mensagens legítimas (sem urgência extrema), boa resolução.
- IMG-06 a IMG-10: prints com sinais de golpe (urgência, bloqueio, pedido de senha/código, link encurtado).

## Campos usados na análise
- Arquivo (`PNG/JPEG/WEBP`, até 8MB)
- Texto observado no print (campo livre para reforçar heurística sem IA)

## Exemplos de texto observado (copiar e colar)
- `Seu acesso foi bloqueado. Confirme sua senha agora para evitar multa.` (esperado: alto risco)
- `PIX pendente: clique em bit.ly/pix-suporte e valide seu codigo.` (esperado: alto risco)
- `Comprovante de transferência concluída às 14:35.` (esperado: baixo/médio)
- `Atualização cadastral necessária em até 24h.` (esperado: médio)

## Checklist de execução da demo
1. Rodar os 10 casos URL.
2. Rodar ao menos 5 casos de imagem com texto observado preenchido.
3. Confirmar consistência de classificação (baixo/médio/alto).
4. Capturar prints dos resultados para anexos da apresentação.
