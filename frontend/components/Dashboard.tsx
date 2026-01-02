"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import { AreaChart } from "./ui/area-chart";
import { BarChart } from "./ui/bar-chart";
import { DonutChart } from "./ui/pie-chart";
import { SearchResults } from "./generative-ui/SearchResults";
import {
  priceData,
  crossoverPoints,
  periodPerformanceData,
  regimeSensitivityData,
  degradationData,
  indicatorSensitivityData,
  diagnosticoResumo,
} from "../data/dashboard-data";

export function Dashboard() {
  useCopilotReadable({
    description: "Dados de diagnostico quantitativo para trading e estrategia baseada em SMA.",
    value: {
      priceData,
      crossoverPoints,
      periodPerformanceData,
      regimeSensitivityData,
      degradationData,
      indicatorSensitivityData,
      diagnosticoResumo,
      restricoes: [
        "Nao executar trades.",
        "Nao prometer resultados.",
        "Nao fornecer aconselhamento financeiro.",
      ],
      conceitos: [
        "Mudanca de regime (regime change).",
        "Concept drift.",
        "Overfitting temporal.",
        "Fragilidade de indicadores.",
        "Decaimento de estrategia.",
      ],
    },
  });

  useCopilotAction({
    name: "pesquisarInternet",
    available: "disabled",
    description: "Pesquisa na internet por informacoes.",
    parameters: [
      {
        name: "consulta",
        type: "string",
        description: "A consulta para pesquisar na internet.",
        required: true,
      },
    ],
    render: ({ args, status }) => {
      return <SearchResults query={args.consulta || "Nenhuma consulta fornecida"} status={status} />;
    },
  });

  const colors = {
    price: ["#111827", "#3b82f6", "#f59e0b"],
    performance: ["#10b981", "#ef4444"],
    regimes: ["#3b82f6", "#94a3b8", "#f59e0b"],
    degradation: ["#6366f1", "#10b981"],
    indicators: ["#0ea5e9", "#ef4444"],
  };

  const crossoverMarkers = crossoverPoints.map((point) => ({
    index: point.data,
    value: point.Preço,
    color: point.tipo === "Golden Cross" ? "#10b981" : "#ef4444",
    label: point.tipo,
  }));

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
      <Card className="col-span-1 md:col-span-2 lg:col-span-4">
        <CardHeader className="pb-1 pt-3">
          <CardTitle className="text-base font-medium">Preço com SMA 50 x SMA 200</CardTitle>
          <CardDescription className="text-xs">
            Cruzes destacados e contexto de regime change
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3">
          <div className="h-64">
            <AreaChart
              data={priceData}
              index="data"
              categories={["Preço", "SMA50", "SMA200"]}
              markers={crossoverMarkers}
              colors={colors.price}
              valueFormatter={(value) => `$${value.toFixed(0)}`}
              showLegend={true}
              showGrid={true}
              showXAxis={true}
              showYAxis={true}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 md:col-span-1 lg:col-span-2">
        <CardHeader className="pb-1 pt-3">
          <CardTitle className="text-base font-medium">Desempenho por Periodo Temporal</CardTitle>
          <CardDescription className="text-xs">
            Retorno, drawdown e sinais de overfitting temporal
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3">
          <div className="h-60">
            <BarChart
              data={periodPerformanceData}
              index="periodo"
              categories={["retorno", "drawdown"]}
              colors={colors.performance}
              valueFormatter={(value) => `${value.toFixed(1)}%`}
              showLegend={true}
              showGrid={true}
              layout="horizontal"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 md:col-span-1 lg:col-span-2">
        <CardHeader className="pb-1 pt-3">
          <CardTitle className="text-base font-medium">Sensibilidade a Regime</CardTitle>
          <CardDescription className="text-xs">
            Distribuicao de performance por regime de mercado
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3">
          <div className="h-60">
            <DonutChart
              data={regimeSensitivityData}
              category="valor"
              index="regime"
              valueFormatter={(value) => `${value}%`}
              colors={colors.regimes}
              centerText="Regimes"
              paddingAngle={0}
              showLabel={false}
              showLegend={true}
              innerRadius={45}
              outerRadius="90%"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 md:col-span-1 lg:col-span-2">
        <CardHeader className="pb-1 pt-3">
          <CardTitle className="text-base font-medium">Degradacao Temporal</CardTitle>
          <CardDescription className="text-xs">
            Retorno ajustado e estabilidade das features ao longo do tempo
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3">
          <div className="h-60">
            <AreaChart
              data={degradationData}
              index="janela"
              categories={["retornoAjustado", "estabilidade"]}
              colors={colors.degradation}
              valueFormatter={(value) => `${value.toFixed(1)}%`}
              showLegend={true}
              showGrid={true}
              showXAxis={true}
              showYAxis={true}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 md:col-span-1 lg:col-span-2">
        <CardHeader className="pb-1 pt-3">
          <CardTitle className="text-base font-medium">Sensibilidade dos Indicadores</CardTitle>
          <CardDescription className="text-xs">
            Fragilidade relativa e dependencia de contexto
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3">
          <div className="h-60">
            <BarChart
              data={indicatorSensitivityData}
              index="indicador"
              categories={["sensibilidade", "fragilidade"]}
              colors={colors.indicators}
              valueFormatter={(value) => `${value.toFixed(0)}%`}
              showLegend={true}
              showGrid={true}
              layout="horizontal"
            />
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
