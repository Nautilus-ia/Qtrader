"use client";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-medium text-gray-900">Quantitative Trading Study</h1>
          <p className="text-sm text-gray-500 mt-1">
            Sistema analitico de suporte a decisao, sem execucao de trades
          </p>
        </div>
      </div>
    </header>
  );
} 
