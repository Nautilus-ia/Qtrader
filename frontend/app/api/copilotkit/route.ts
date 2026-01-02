import {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from '@copilotkit/runtime';
import { tavily } from '@tavily/core';
import { NextRequest } from 'next/server';

const serviceAdapter = new OpenAIAdapter({});
const runtime = new CopilotRuntime({
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
        handler: async ({consulta}: {consulta: string}) => {
          // pode referenciar com seguranca informacoes sensiveis como variaveis de ambiente
          const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });
          return await tvly.search(consulta, {max_results: 5});
        },
      },
    ]
  }
});

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: '/api/copilotkit',
  });

  return handleRequest(req);
};
