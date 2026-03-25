import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const POST = async (req: NextRequest) => {
  const [{ CopilotRuntime, OpenAIAdapter, copilotRuntimeNextJSAppRouterEndpoint }, { tavily }] =
    await Promise.all([import("@copilotkit/runtime"), import("@tavily/core")]);

  const serviceAdapter = new OpenAIAdapter({});
  const runtimeInstance = new CopilotRuntime({
    actions: () => {
      return [
        {
          name: "pesquisarInternet",
          description: "Pesquisa na internet por informacoes.",
          parameters: [
            {
              name: "consulta",
              type: "string",
              description: "A consulta para pesquisar na internet.",
              required: true,
            },
          ],
          handler: async ({ consulta }: { consulta: string }) => {
            const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });
            return await tvly.search(consulta, { max_results: 5 });
          },
        },
      ];
    },
  });

  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime: runtimeInstance,
    serviceAdapter,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};
