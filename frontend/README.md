# Strategic Mapping - Diagnostico Quantitativo para Trading

Sistema de diagnostico estatistico para avaliar robustez, mudanca de regime,
degradacao temporal e concept drift em estrategias quantitativas. O produto
nao executa trades, nao promete resultados e nao fornece aconselhamento financeiro.

## Visao Geral

- Diagnostico quantitativo com foco em estabilidade e regime change.
- Relatorios tecnicos estruturados gerados pelo agente.
- Graficos de Preço com SMA 50/200 e cruzamentos destacados.
- Comparativos por periodo e sensibilidade por regime.

## Como Iniciar

### Requisitos

- Node.js 18+
- npm, yarn ou pnpm

### Instalacao

1. Instale as dependencias:
   ```bash
   pnpm install
   ```

2. Crie um arquivo `.env` com as chaves:
   ```
   OPENAI_API_KEY=your_openai_api_key
   TAVILY_API_KEY=your_tavily_api_key
   ```

3. Rode o servidor:
   ```bash
   pnpm dev
   ```

4. Acesse `http://localhost:3000`.

## Componentes Principais

### Nautilus Provider

`app/layout.tsx` injeta o runtime do agente e aplica o layout principal.

### CopilotReadable

`components/Dashboard.tsx` expõe dados para o agente: Preços, indicadores,
cruzamentos SMA, regime e degradacao.

### Prompt do Agente

`lib/prompt.ts` define formato de relatorio tecnico, restricoes e linguagem
obrigatoria (regime change, concept drift, overfitting temporal).

## Observacoes

- O sistema e estritamente analitico.
- Nao ha execucao de ordens.
- Saidas sao sempre relatorios tecnicos estruturados.
