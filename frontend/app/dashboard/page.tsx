"use client";

import { CopilotSidebar } from "@copilotkit/react-ui";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CustomAssistantMessage } from "../../components/AssistantMessage";
import { prompt } from "../../lib/prompt";
import { Dashboard } from "../../components/Dashboard";
import { SplitNav } from "../../components/SplitNav";
import { useSearchParams } from "next/navigation";
import { useCopilotReadable } from "@copilotkit/react-core";
import { Suspense } from "react";

function DashboardContent() {
  const searchParams = useSearchParams();
  const openCopilot = searchParams?.get("openCopilot") === "true";

  useCopilotReadable({
    description: "Horario atual do sistema",
    value: new Date().toLocaleTimeString(),
  });

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="w-full max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex-grow space-y-6">
          <SplitNav />
          <Dashboard />
        </main>
        <Footer />
      </div>
      <CopilotSidebar
        defaultOpen={openCopilot}
        instructions={prompt}
        AssistantMessage={CustomAssistantMessage}
        labels={{
          title: "Relatorio Diagnostico",
          initial: "Sistema de diagnostico quantitativo para trading. Saidas sao relatorios tecnicos estruturados.",
          placeholder: "Descreva estrategia, periodo e indicadores para gerar relatorio...",
        }}
      />
    </>
  );
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}
