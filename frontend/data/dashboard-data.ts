export const revenueData = [
  { mes: "Jan", receita: 8420, pageRPM: 11.8, sessoesMil: 712 },
  { mes: "Fev", receita: 9010, pageRPM: 12.4, sessoesMil: 726 },
  { mes: "Mar", receita: 9580, pageRPM: 12.9, sessoesMil: 741 },
  { mes: "Abr", receita: 10120, pageRPM: 13.6, sessoesMil: 754 },
  { mes: "Mai", receita: 10940, pageRPM: 14.1, sessoesMil: 779 },
  { mes: "Jun", receita: 11480, pageRPM: 14.7, sessoesMil: 792 },
  { mes: "Jul", receita: 11890, pageRPM: 15.3, sessoesMil: 805 },
  { mes: "Ago", receita: 11640, pageRPM: 15.1, sessoesMil: 799 },
  { mes: "Set", receita: 12180, pageRPM: 15.7, sessoesMil: 818 },
  { mes: "Out", receita: 12940, pageRPM: 16.6, sessoesMil: 834 },
  { mes: "Nov", receita: 13760, pageRPM: 17.8, sessoesMil: 851 },
  { mes: "Dez", receita: 14980, pageRPM: 19.2, sessoesMil: 872 },
];

export const optimizationMoments = [
  { mes: "Abr", receita: 10120, tipo: "Refresh de blocos" },
  { mes: "Jul", receita: 11890, tipo: "Header bidding" },
  { mes: "Nov", receita: 13760, tipo: "Sazonalidade Q4" },
];

export const performanceOverview = [
  { periodo: "Q1", receita: 27010, pageRPM: 12.4, viewability: 64 },
  { periodo: "Q2", receita: 32540, pageRPM: 14.1, viewability: 68 },
  { periodo: "Q3", receita: 35710, pageRPM: 15.4, viewability: 71 },
  { periodo: "Q4", receita: 41680, pageRPM: 17.9, viewability: 75 },
];

export const devicePerformanceData = [
  { dispositivo: "Mobile", receita: 44, ctr: 1.46, rpm: 13.2 },
  { dispositivo: "Desktop", receita: 38, ctr: 1.18, rpm: 18.9 },
  { dispositivo: "Tablet", receita: 18, ctr: 0.92, rpm: 10.4 },
];

export const channelPerformanceData = [
  { canal: "Noticias", receita: 32, pageRPM: 18.4, visibilidade: 77 },
  { canal: "Financas", receita: 24, pageRPM: 16.2, visibilidade: 73 },
  { canal: "Tecnologia", receita: 21, pageRPM: 14.7, visibilidade: 69 },
  { canal: "Guias", receita: 14, pageRPM: 11.9, visibilidade: 67 },
  { canal: "Blog institucional", receita: 9, pageRPM: 8.1, visibilidade: 58 },
];

export const adUnitPerformanceData = [
  { unidade: "Top Leaderboard", viewability: 82, ctr: 1.54 },
  { unidade: "In-content 1", viewability: 76, ctr: 1.32 },
  { unidade: "In-content 2", viewability: 71, ctr: 1.18 },
  { unidade: "Sidebar Sticky", viewability: 68, ctr: 0.88 },
];

export const audienceQualityData = [
  { origem: "Organico", sessoes: 41, rpm: 17.1 },
  { origem: "Direto", sessoes: 24, rpm: 15.2 },
  { origem: "Social", sessoes: 19, rpm: 9.4 },
  { origem: "Referral", sessoes: 16, rpm: 12.3 },
];

export const seasonalityData = [
  { fase: "Posicao do anuncio", impacto: 34 },
  { fase: "Viewability", impacto: 26 },
  { fase: "Mix de trafego", impacto: 18 },
  { fase: "Core Web Vitals", impacto: 12 },
  { fase: "Sazonalidade", impacto: 10 },
];

export const executiveSummary = {
  receitaMensal: "US$ 14.980",
  crescimentoReceita: "+12,3%",
  pageRPM: "US$ 19,20",
  pageRPMDelta: "+1,4 pts",
  ctr: "1,34%",
  ctrDelta: "+0,09 pts",
  viewability: "75%",
  preenchimento: "98,1%",
  observacao:
    "A operacao encerra o periodo com ganho de receita sustentado por alta de RPM, melhoria de viewability e melhor captura da sazonalidade do Q4.",
};

export const diagnosticoResumo = {
  maturidadeMonetizacao: "Alta",
  dependenciaMobile: "Elevada",
  sazonalidadeReceita: "Relevante",
  riscoDeCanibalizacao: "Moderado",
  inventarioPremium: "Em expansao",
  qualidadeTrafego: "Estavel",
};

export const alertasOperacionais = [
  "Mobile concentra 44% da receita, mas tambem a maior pressao de layout e CLS nas paginas longas.",
  "Social entrega volume, porem RPM significativamente menor do que organico e direto.",
  "Blog institucional tem baixa densidade de monetizacao e pode exigir estrategia de ad load distinta.",
  "Sidebar sticky perdeu CTR e deve ser reavaliada em paginas com menor profundidade de scroll.",
];

export const estrategiaDefinicao = {
  nome: "Operating System de Monetizacao AdSense",
  horizonte: "Ciclo mensal com leitura diaria",
  universo: "Portais e propriedades editoriais que dependem de inventario display para monetizacao recorrente.",
  regras: [
    "Priorizar crescimento de receita sem comprometer experiencia do usuario nem estabilidade visual.",
    "Ler Page RPM, CTR, viewability, preenchimento e origem de trafego como conjunto, nao de forma isolada.",
    "Executar testes de posicionamento e densidade de anuncios por canal e por tipo de pagina.",
    "Tratar sazonalidade, mix de audiencia e performance por dispositivo como vetores permanentes de decisao.",
  ],
  premissas: [
    "Receita cresce quando qualidade de inventario e qualidade de audiencia evoluem juntas.",
    "Aumentar ad load sem controle pode elevar impressao e reduzir RPM, CTR e retencao.",
    "O melhor layout para desktop nem sempre replica resultado em mobile.",
    "A operacao precisa de diagnostico continuo para capturar variacoes de demanda e comportamento.",
  ],
};
