import { Search, Bell, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
      <div className="flex-1 max-w-xl relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          type="text"
          placeholder="Buscar por serviço, cliente, insumo ou parceiro..."
          className="w-full pl-9 bg-slate-50 border-slate-200 h-9 text-sm"
        />
      </div>
      <div className="flex items-center gap-6 ml-6">
        <div className="flex items-center gap-2 text-sm text-slate-600 hidden sm:flex">
          <Calendar className="h-4 w-4" />
          <span>São Paulo, SP • Hoje</span>
        </div>
        <button className="relative text-slate-500 hover:text-slate-700">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <div className="flex items-center gap-3 border-l border-slate-200 pl-6">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium leading-tight">Usuário Teste</p>
            <p className="text-xs text-slate-500">Administrador</p>
          </div>
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-blue-100 text-blue-600 text-xs font-medium">
              AD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
