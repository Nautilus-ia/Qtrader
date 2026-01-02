// Dados sinteticos para diagnostico quantitativo (exemplo)
export const priceData = [
  { data: "2019-01", Preço: 98, SMA50: 96, SMA200: 94 },
  { data: "2019-03", Preço: 101, SMA50: 97, SMA200: 95 },
  { data: "2019-05", Preço: 104, SMA50: 99, SMA200: 96 },
  { data: "2019-07", Preço: 108, SMA50: 101, SMA200: 97 },
  { data: "2019-09", Preço: 112, SMA50: 104, SMA200: 99 },
  { data: "2019-11", Preço: 110, SMA50: 106, SMA200: 100 },
  { data: "2020-01", Preço: 106, SMA50: 105, SMA200: 101 },
  { data: "2020-03", Preço: 94, SMA50: 101, SMA200: 101 },
  { data: "2020-05", Preço: 100, SMA50: 99, SMA200: 100 },
  { data: "2020-07", Preço: 106, SMA50: 100, SMA200: 100 },
  { data: "2020-09", Preço: 111, SMA50: 103, SMA200: 101 },
  { data: "2020-11", Preço: 116, SMA50: 106, SMA200: 103 },
  { data: "2021-01", Preço: 118, SMA50: 109, SMA200: 105 },
  { data: "2021-03", Preço: 115, SMA50: 111, SMA200: 107 },
  { data: "2021-05", Preço: 109, SMA50: 110, SMA200: 108 },
  { data: "2021-07", Preço: 105, SMA50: 108, SMA200: 108 },
  { data: "2021-09", Preço: 107, SMA50: 107, SMA200: 108 },
  { data: "2021-11", Preço: 103, SMA50: 106, SMA200: 107 },
  { data: "2022-01", Preço: 98, SMA50: 104, SMA200: 106 },
  { data: "2022-03", Preço: 95, SMA50: 101, SMA200: 105 },
  { data: "2022-05", Preço: 97, SMA50: 99, SMA200: 104 },
  { data: "2022-07", Preço: 101, SMA50: 99, SMA200: 103 },
  { data: "2022-09", Preço: 104, SMA50: 100, SMA200: 102 },
  { data: "2022-11", Preço: 107, SMA50: 101, SMA200: 101 }
];

export const crossoverPoints = [
  { data: "2020-03", Preço: 94, tipo: "Death Cross" },
  { data: "2020-07", Preço: 106, tipo: "Golden Cross" },
  { data: "2021-07", Preço: 105, tipo: "Death Cross" },
  { data: "2022-07", Preço: 101, tipo: "Golden Cross" }
];

export const periodPerformanceData = [
  { periodo: "2019-2020", retorno: 12.4, drawdown: -8.1, sharpe: 1.12 },
  { periodo: "2021-2022", retorno: 3.2, drawdown: -14.5, sharpe: 0.42 },
  { periodo: "2023-2024", retorno: -1.8, drawdown: -9.9, sharpe: 0.08 }
];

export const regimeSensitivityData = [
  { regime: "Direcional", valor: 46 },
  { regime: "Lateral", valor: 32 },
  { regime: "Alta Volatilidade", valor: 22 }
];

export const degradationData = [
  { janela: "2019-2020", retornoAjustado: 11.1, estabilidade: 78 },
  { janela: "2021-2022", retornoAjustado: 4.3, estabilidade: 52 },
  { janela: "2023-2024", retornoAjustado: 1.6, estabilidade: 31 }
];

export const indicatorSensitivityData = [
  { indicador: "SMA 50", sensibilidade: 72, fragilidade: 28 },
  { indicador: "SMA 200", sensibilidade: 61, fragilidade: 39 },
  { indicador: "RSI 14", sensibilidade: 54, fragilidade: 46 }
];

export const diagnosticoResumo = {
  robustez: "Media",
  dependenciaRegime: "Alta",
  decaimentoEstrategia: "Evidente",
  riscoDrift: "Elevado",
  sensibilidadeIndicadores: "Media",
  estabilidadeFeatures: "Moderada"
};

export const estrategiaDefinicao = {
  nome: "Cruzamento SMA 50 x SMA 200",
  universo: "Ativos liquidos com tendencia persistente",
  horizonte: "Swing",
  regras: [
    "Entrar comprado quando SMA 50 cruza acima da SMA 200 (Golden Cross).",
    "Sair quando SMA 50 cruza abaixo da SMA 200 (Death Cross).",
    "Sem alavancagem, sem otimizacao de janela em tempo real."
  ],
  premissas: [
    "Tendencias sustentadas em janela media.",
    "Ruido limitado em regime direcional.",
    "Custos de transacao estaveis."
  ]
};
