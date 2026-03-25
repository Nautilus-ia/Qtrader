"use client";

export function Header() {
  return (
    <header className="border-b border-orange-100 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-medium text-gray-900">AdSense Revenue Intelligence</h1>
          <p className="text-sm text-gray-500 mt-1">
            Sistema analitico para leitura de monetizacao, inventario e performance de audiencia
          </p>
        </div>
      </div>
    </header>
  );
} 
