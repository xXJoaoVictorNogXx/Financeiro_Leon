'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  CreditCard,
  Wallet,
  FileText,
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Visão Geral", href: "/", icon: LayoutDashboard },
    { name: "Serviços & Operações", href: "/servicos", icon: Briefcase },
    { name: "Parceiros & Subcontratações", href: "/parceiros", icon: Users },
    { name: "Empréstimos & Financiamentos", href: "/emprestimos", icon: CreditCard },
    { name: "Custos de Projetos", href: "/custos", icon: Wallet },
    { name: "Relatórios & DRE", href: "/relatorios", icon: FileText },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between hidden md:flex shrink-0">
      <div>
        <div className="h-16 flex items-center px-6 border-b border-slate-200 gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold shrink-0">
            LF
          </div>
          <div className="min-w-0">
            <h1 className="font-bold text-sm leading-tight truncate">Leon Financeiro</h1>
            <p className="text-[10px] text-slate-500 truncate">Leon Soluções Técnicas</p>
          </div>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-50"
                  }`}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="p-4 border-t border-slate-200">
        <div className="bg-slate-50 p-3 rounded-md border border-slate-100">
          <p className="text-xs font-semibold text-blue-600 mb-1 uppercase">
            Status do Sistema
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
            Sincronizado • Base SP-01
          </p>
        </div>
      </div>
    </aside>
  );
}
