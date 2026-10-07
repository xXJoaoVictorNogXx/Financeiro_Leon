'use client'
import {
  ChevronDown,
  Download,
  PlusCircle,
  FileText,
  CheckCircle2,
  Percent,
  Search,
  Filter,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function ServicosPage() {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-1 uppercase text-[10px] tracking-wider">
              <span>Leon Soluções Técnicas</span>
              <ChevronDown className="h-3 w-3 -rotate-90" />
              <span>Operações</span>
              <ChevronDown className="h-3 w-3 -rotate-90" />
              <span>Serviços Cadastrados</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Gestão e Cadastro de Serviços
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Acompanhamento do portfólio de projetos técnicos, faturamento contratado, cronogramas de entrega e status operacional.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="outline" className="h-9 gap-2 text-sm font-medium text-slate-700">
              <Download className="h-4 w-4" />
              Exportar Relatório
            </Button>
            <Button className="h-9 gap-2 bg-blue-600 hover:bg-blue-700 text-sm font-medium">
              <PlusCircle className="h-4 w-4" />
              Novo Serviço / Projeto
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="shadow-sm">
            <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-xs font-semibold text-slate-500 uppercase">Total em Contratos Ativos</CardTitle>
              <FileText className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-2xl font-bold text-slate-900 mb-2">R$ 0<span className="text-base text-slate-500 font-medium">,00</span></div>
              <div className="flex items-center gap-1 text-[11px] text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span>
                0 frentes de obra em execução
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-xs font-semibold text-slate-500 uppercase">Serviços em Andamento</CardTitle>
              <FileText className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-2xl font-bold text-slate-900 mb-2">0 projetos</div>
              <div className="flex items-center gap-1 text-[11px] text-slate-500">
                <span className="text-green-500 font-medium">~ 0%</span>
                dentro do prazo previsto
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-xs font-semibold text-slate-500 uppercase">Serviços Concluídos (Ano)</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-2xl font-bold text-slate-900 mb-2">0 entregas</div>
              <div className="flex items-center gap-1 text-[11px] text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 inline-block"></span>
                0% de laudos e ARTs emitidos
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-xs font-semibold text-slate-500 uppercase">Margem Média Operacional</CardTitle>
              <Percent className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-2xl font-bold text-slate-900 mb-2">0,0%</div>
              <div className="flex items-center gap-1 text-[11px] text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                Equilíbrio saudável pós ins...
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Form Section */}
        <Card className="shadow-sm border-blue-100 bg-blue-50/30">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">Cadastrar Novo Serviço Técnico</CardTitle>
                  <p className="text-xs text-slate-500 mt-0.5">Cadastre os parâmetros operacionais, faturamento e cronograma da ordem de serviço.</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 text-[10px]">
                Módulo Integrado DRE
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-600 uppercase">ID do Serviço</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">#</span>
                    <Input disabled placeholder="Automático" className="pl-7 bg-slate-100/50" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-600 uppercase">Nome do Projeto & Cliente Solicitante</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input placeholder="Ex: Gerdau Aços - Laudo Técnico SPDA e Aterramento" className="pl-9" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-600 uppercase">Categoria Operacional</label>
                  <select className="flex h-9 w-full items-center justify-between rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="" disabled selected>Selecione...</option>
                    <option value="alta_tensao">Alta Tensão & Subestação</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-600 uppercase">Data de Início</label>
                  <Input type="date" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-600 uppercase">Previsão de Conclusão</label>
                  <Input type="date" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-600 uppercase">Receita Contratada (R$)</label>
                  <Input type="number" placeholder="0,00" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-600 uppercase">Status do Cronograma</label>
                  <select className="flex h-9 w-full items-center justify-between rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="" disabled selected>Selecione...</option>
                    <option value="em_andamento">Em andamento</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-600 uppercase">Responsável Técnico / Engenheiro</label>
                  <Input placeholder="Eng. Carlos Eduardo Leon - CREA/SP 5062819" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-600 uppercase">Local de Execução / Polo Operacional</label>
                  <Input placeholder="Ex: Planta Industrial Taubaté - Setor Leste" />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <Button variant="ghost" className="h-9 text-slate-500 text-sm">
                  Limpar Formulário
                </Button>
                <Button className="h-9 bg-blue-600 hover:bg-blue-700 text-sm font-medium gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Salvar e Abrir Ordem de Serviço
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Table Section */}
        <Card className="shadow-sm border-slate-200">
          <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-1.5 rounded text-blue-600">
                <Briefcase className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Serviços e Frentes de Operação</h3>
                <p className="text-[11px] text-slate-500">0 serviços ativos monitorados em tempo real</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                <Input placeholder="Filtrar por projeto, ID ou cliente..." className="h-8 pl-8 text-xs bg-slate-50" />
              </div>

              <div className="flex items-center bg-slate-100 p-0.5 rounded-md text-xs font-medium w-full sm:w-auto">
                <button className="px-3 py-1 bg-white shadow-sm rounded-sm text-slate-900 w-full sm:w-auto">Todos</button>
                <button className="px-3 py-1 text-slate-500 hover:text-slate-700 w-full sm:w-auto">Em andamento</button>
                <button className="px-3 py-1 text-slate-500 hover:text-slate-700 w-full sm:w-auto">Concluído</button>
              </div>
            </div>
          </div>

          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="text-[10px] font-semibold text-slate-500 h-9 uppercase tracking-wider w-[120px]">ID Serviço</TableHead>
                <TableHead className="text-[10px] font-semibold text-slate-500 h-9 uppercase tracking-wider">Nome do Projeto / Cliente</TableHead>
                <TableHead className="text-[10px] font-semibold text-slate-500 h-9 uppercase tracking-wider">Data Início</TableHead>
                <TableHead className="text-[10px] font-semibold text-slate-500 h-9 uppercase tracking-wider">Data Prevista</TableHead>
                <TableHead className="text-[10px] font-semibold text-slate-500 h-9 uppercase tracking-wider text-right">Valor Cobrado</TableHead>
                <TableHead className="text-[10px] font-semibold text-slate-500 h-9 uppercase tracking-wider text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Empty state or raw data to be populated */}
              <TableRow>
                <TableCell colSpan={6} className="text-center text-sm text-slate-500 py-8">
                  Nenhum serviço cadastrado.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="p-3 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50 rounded-b-xl">
            <div className="flex items-center gap-6">
              <span className="text-slate-500 uppercase text-[10px] font-semibold tracking-wider">Total Amostrado: <span className="font-bold text-slate-900 text-xs">0 serviços</span></span>
              <span className="text-slate-500 uppercase text-[10px] font-semibold tracking-wider">Receita em Andamento: <span className="font-bold text-blue-600 text-xs">R$ 0,00</span></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-[10px]">Página 1 de 1</span>
              <div className="flex gap-1">
                <Button variant="outline" size="icon" className="h-6 w-6 rounded text-slate-400" disabled>
                  <ChevronDown className="h-3 w-3 rotate-90" />
                </Button>
                <Button variant="outline" size="icon" className="h-6 w-6 rounded bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:text-white">
                  1
                </Button>
                <Button variant="outline" size="icon" className="h-6 w-6 rounded text-slate-400" disabled>
                  <ChevronDown className="h-3 w-3 -rotate-90" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-start gap-3">
          <div className="mt-0.5">
            <CheckCircle2 className="h-4 w-4 text-blue-500" />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <p className="text-xs text-blue-800">
              Ao vincular uma nova ordem de serviço, você pode alocar técnicos e insumos diretamente através do módulo <span className="font-semibold">Mão de Obra por Serviço</span>.
            </p>
            <Button variant="link" className="h-auto p-0 text-xs text-blue-600 font-medium">
              Ir para Alocação de Equipes →
            </Button>
          </div>
        </div>

        <div className="h-8" />
      </div>
    </div>
  );
}
