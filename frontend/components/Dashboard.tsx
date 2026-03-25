"use client";

import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import { Activity, ArrowUpRight, MonitorSmartphone, MousePointerClick, ShieldAlert, Wallet } from "lucide-react";
import { SearchResults } from "./generative-ui/SearchResults";
import { AreaChart } from "./ui/area-chart";
import { BarChart } from "./ui/bar-chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { DonutChart } from "./ui/pie-chart";
import {
  adUnitPerformanceData,
  alertasOperacionais,
  audienceQualityData,
  channelPerformanceData,
  devicePerformanceData,
  diagnosticoResumo,
  executiveSummary,
  optimizationMoments,
  performanceOverview,
  revenueData,
  seasonalityData,
} from "../data/dashboard-data";

const kpiCards = [
  {
    title: "Receita mensal",
    value: executiveSummary.receitaMensal,
    delta: executiveSummary.crescimentoReceita,
    detail: "vs. mes anterior",
    icon: Wallet,
  },
  {
    title: "Page RPM",
    value: executiveSummary.pageRPM,
    delta: executiveSummary.pageRPMDelta,
    detail: "ganho por mil paginas",
    icon: ArrowUpRight,
  },
  {
    title: "CTR medio",
    value: executiveSummary.ctr,
    delta: executiveSummary.ctrDelta,
    detail: "cliques por impressao",
    icon: MousePointerClick,
  },
  {
    title: "Viewability",
    value: executiveSummary.viewability,
    delta: executiveSummary.preenchimento,
    detail: "fill rate do inventario",
    icon: Activity,
  },
];

export function Dashboard() {
  useCopilotReadable({
    description: "Dados do dashboard executivo de AdSense e monetizacao editorial.",
    value: {
      revenueData,
      optimizationMoments,
      performanceOverview,
      devicePerformanceData,
      channelPerformanceData,
      adUnitPerformanceData,
      audienceQualityData,
      seasonalityData,
      executiveSummary,
      diagnosticoResumo,
      alertasOperacionais,
      restricoes: [
        "Nao alterar politicas de AdSense automaticamente.",
        "Nao prometer ganhos de receita.",
        "Nao substituir testes controlados por opinioes.",
      ],
      conceitos: [
        "Page RPM.",
        "Viewability.",
        "Fill rate.",
        "Mix de audiencia.",
        "Sazonalidade de monetizacao.",
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
    revenue: ["#0f172a", "#f97316", "#14b8a6"],
    overview: ["#f97316", "#0ea5e9", "#16a34a"],
    devices: ["#f97316", "#0f766e", "#1d4ed8"],
    channels: ["#ea580c", "#0f766e", "#1d4ed8"],
    quality: ["#fb923c", "#38bdf8"],
    seasonality: ["#f97316", "#facc15", "#0ea5e9", "#10b981", "#334155"],
  };

  const optimizationMarkers = optimizationMoments.map((point) => ({
    index: point.mes,
    value: point.receita,
    color: point.tipo === "Sazonalidade Q4" ? "#f97316" : "#0f766e",
    label: point.tipo,
  }));

  return (
    <div className="space-y-4 w-full">
      <section className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {kpiCards.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title} className="border-orange-100/80 shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <p className="text-3xl font-semibold tracking-tight text-gray-950">{item.value}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700">
                        {item.delta}
                      </span>
                      <span className="text-gray-500">{item.detail}</span>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-orange-50 p-3 text-orange-600">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="grid gap-4 grid-cols-1 xl:grid-cols-3">
        <Card className="xl:col-span-3 overflow-hidden border-gray-200">
          <CardHeader className="pb-1 pt-4">
            <CardTitle className="text-base font-semibold">Receita, RPM e sessoes monetizadas</CardTitle>
            <CardDescription className="text-xs">
              Evolucao mensal da operacao com marcos de otimizacao e captura de sazonalidade
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3">
            <div className="h-72">
              <AreaChart
                data={revenueData}
                index="mes"
                categories={["receita", "pageRPM", "sessoesMil"]}
                markers={optimizationMarkers}
                colors={colors.revenue}
                valueFormatter={(value) => (value > 100 ? `US$ ${value.toFixed(0)}` : `${value.toFixed(1)}`)}
                showLegend={true}
                showGrid={true}
                showXAxis={true}
                showYAxis={true}
                yAxisWidth={72}
              />
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-1 pt-4">
            <CardTitle className="text-base font-semibold">Performance por trimestre</CardTitle>
            <CardDescription className="text-xs">
              Receita total, Page RPM e viewability em leitura consolidada
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3">
            <div className="h-64">
              <BarChart
                data={performanceOverview}
                index="periodo"
                categories={["receita", "pageRPM", "viewability"]}
                colors={colors.overview}
                valueFormatter={(value) => (value > 100 ? `US$ ${value.toFixed(0)}` : `${value.toFixed(1)}`)}
                showLegend={true}
                showGrid={true}
                layout="horizontal"
                yAxisWidth={70}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-1 pt-4">
            <CardTitle className="text-base font-semibold">Participacao por dispositivo</CardTitle>
            <CardDescription className="text-xs">
              Distribuicao de receita entre mobile, desktop e tablet
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3">
            <div className="h-64">
              <DonutChart
                data={devicePerformanceData}
                category="receita"
                index="dispositivo"
                valueFormatter={(value) => `${value}%`}
                colors={colors.devices}
                centerText="Devices"
                paddingAngle={2}
                showLabel={false}
                showLegend={true}
                innerRadius={54}
                outerRadius="92%"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-1 pt-4">
            <CardTitle className="text-base font-semibold">Canais com maior impacto em receita</CardTitle>
            <CardDescription className="text-xs">
              Receita relativa, RPM e visibilidade por editoria
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3">
            <div className="h-72">
              <BarChart
                data={channelPerformanceData}
                index="canal"
                categories={["receita", "pageRPM", "visibilidade"]}
                colors={colors.channels}
                valueFormatter={(value) => `${value.toFixed(0)}`}
                showLegend={true}
                showGrid={true}
                layout="horizontal"
                yAxisWidth={68}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-1 pt-4">
            <CardTitle className="text-base font-semibold">Alertas operacionais</CardTitle>
            <CardDescription className="text-xs">
              Pontos de atencao para a proxima rodada de otimizacao
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 p-4">
            {alertasOperacionais.map((alerta) => (
              <div key={alerta} className="rounded-2xl border border-amber-100 bg-amber-50/70 p-3">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-amber-100 p-2 text-amber-700">
                    <ShieldAlert className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-6 text-gray-700">{alerta}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-1 pt-4">
            <CardTitle className="text-base font-semibold">Qualidade da audiencia</CardTitle>
            <CardDescription className="text-xs">
              Origens de trafego com peso em sessoes e monetizacao
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3">
            <div className="h-64">
              <BarChart
                data={audienceQualityData}
                index="origem"
                categories={["sessoes", "rpm"]}
                colors={colors.quality}
                valueFormatter={(value) => `${value.toFixed(1)}`}
                showLegend={true}
                showGrid={true}
                layout="horizontal"
                yAxisWidth={62}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-1 pt-4">
            <CardTitle className="text-base font-semibold">Saude das unidades de anuncio</CardTitle>
            <CardDescription className="text-xs">
              Viewability e CTR das principais posicoes comerciais
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 p-4">
            {adUnitPerformanceData.map((unit) => (
              <div key={unit.unidade} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{unit.unidade}</p>
                    <p className="text-xs text-gray-500">Monitorar equilibrio entre visibilidade e interacao</p>
                  </div>
                  <div className="rounded-full bg-slate-100 p-2 text-slate-700">
                    <MonitorSmartphone className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-gray-500">Viewability</p>
                    <p className="mt-1 text-lg font-semibold text-gray-950">{unit.viewability}%</p>
                  </div>
                  <div className="rounded-xl bg-orange-50 p-3">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-orange-500">CTR</p>
                    <p className="mt-1 text-lg font-semibold text-gray-950">{unit.ctr}%</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-1 pt-4">
            <CardTitle className="text-base font-semibold">Drivers de monetizacao</CardTitle>
            <CardDescription className="text-xs">
              Alavancas que mais influenciam o resultado do inventario
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3">
            <div className="h-64">
              <DonutChart
                data={seasonalityData}
                category="impacto"
                index="fase"
                valueFormatter={(value) => `${value}%`}
                colors={colors.seasonality}
                centerText="Drivers"
                paddingAngle={1}
                showLabel={false}
                showLegend={true}
                innerRadius={54}
                outerRadius="92%"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
