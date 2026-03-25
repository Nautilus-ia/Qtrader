"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/mapa-estrategico", label: "Plano de monetizacao" },
];

export function SplitNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center">
      <div className="inline-flex items-stretch rounded-full border border-gray-200 bg-white shadow-sm overflow-hidden">
        {links.map((link, index) => {
          const isActive = pathname === link.href;

          return (
            <div key={link.href} className="flex items-stretch">
              <Link
                href={link.href}
                className={[
                  "px-6 py-3 text-sm font-medium transition-colors",
                  isActive ? "bg-gray-900 text-white" : "text-gray-900 hover:bg-gray-900 hover:text-white",
                ].join(" ")}
              >
                {link.label}
              </Link>
              {index === 0 ? <span className="w-px bg-gray-200 self-stretch" aria-hidden="true" /> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
