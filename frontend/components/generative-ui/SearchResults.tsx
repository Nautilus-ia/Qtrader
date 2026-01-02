import React from 'react';
import { Search, Loader, CheckCircle, AlertCircle } from 'lucide-react';

type SearchResultsProps = {
  query: string;
  status: 'executing' | 'inProgress' | 'complete' | 'error';
};

export function SearchResults({ query, status }: SearchResultsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Search className="h-4 w-4 text-blue-500" />
        <h3 className="text-sm font-medium">Resultados de Pesquisa Externa</h3>
      </div>
      
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
        Consulta: {query}
      </p>
      
      {status === "executing" && (
        <div className="flex items-center gap-2 text-xs text-blue-500">
          <Loader className="h-3 w-3 animate-spin" />
          <span>Coletando fontes...</span>
        </div>
      )}
      
      {status === "inProgress" && (
        <div className="flex items-center gap-2 text-xs text-amber-500">
          <Loader className="h-3 w-3 animate-spin" />
          <span>Processando resultados...</span>
        </div>
      )}
      
      {status === "complete" && (
        <div className="flex items-center gap-2 text-xs text-green-500">
          <CheckCircle className="h-3 w-3" />
          <span>Concluido</span>
        </div>
      )}
      
      {status === "error" && (
        <div className="flex items-center gap-2 text-xs text-red-500">
          <AlertCircle className="h-3 w-3" />
          <span>Erro</span>
        </div>
      )}
    </div>
  );
} 
