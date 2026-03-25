"use client";

import { CopilotSidebar } from "@copilotkit/react-ui";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CustomAssistantMessage } from "../../components/AssistantMessage";
import { prompt } from "../../lib/prompt";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { estrategiaDefinicao } from "../../data/dashboard-data";
import { SplitNav } from "../../components/SplitNav";
import { useSearchParams } from "next/navigation";
import { useCopilotReadable } from "@copilotkit/react-core";
import { Suspense } from "react";

function MapaEstrategicoContent() {
  const searchParams = useSearchParams();
  const openCopilot = searchParams?.get("openCopilot") === "true";

  useCopilotReadable({
    description: "Definicao da estrategia de monetizacao e premissas de interpretacao",
    value: estrategiaDefinicao,
  });

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex-grow space-y-6">
          <SplitNav />
          <Card>
            <CardHeader className="pb-2 pt-5">
              <CardTitle className="text-lg font-semibold">Plano de monetizacao</CardTitle>
              <CardDescription className="text-sm">
                Fundamentos da operacao de AdSense e parametros para leitura das metricas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="text-xs text-gray-500">Descricao da operacao</p>
                <p className="text-base font-semibold text-gray-900">{estrategiaDefinicao.nome}</p>
                <p className="text-xs text-gray-500">{estrategiaDefinicao.horizonte}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Escopo e contexto</p>
                <p className="text-sm text-gray-900">{estrategiaDefinicao.universo}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Diretrizes operacionais</p>
                <ul className="list-disc ml-4">
                  {estrategiaDefinicao.regras.map((regra) => (
                    <li key={regra}>{regra}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs text-gray-500">Premissas de monetizacao</p>
                <ul className="list-disc ml-4">
                  {estrategiaDefinicao.premissas.map((premissa) => (
                    <li key={premissa}>{premissa}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
      <CopilotSidebar
        defaultOpen={openCopilot}
        instructions={prompt}
        AssistantMessage={CustomAssistantMessage}
        labels={{
          title: "Revenue Copilot",
          initial: "Sistema de analise de monetizacao AdSense com saidas tecnicas estruturadas para operacao editorial.",
          placeholder: "Descreva canal, dispositivo, periodo ou problema de monetizacao...",
        }}
      />
    </>
  );
}

export default function MapaEstrategicoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      }
    >
      <MapaEstrategicoContent />
    </Suspense>
  );
}
