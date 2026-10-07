'use client'
import {
  ChevronDown,
  Filter,
  Download,
  TrendingUp,
  Receipt,
  Calculator,
  Users,
  CreditCard,
  ArrowRight,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-1">
              <span>Leon Soluções Técnicas</span>
              <ChevronDown className="h-3 w-3 -rotate-90" />
              <span>Visão Geral</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Dashboard Financeiro Executivo
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Acompanhamento consolidado de faturamento, margens operacionais e projeções com inteligência preditiva.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="outline" className="h-9 gap-2 text-sm font-medium">
              <Calendar className="h-4 w-4 text-slate-500" />
              Este Mês
              <ChevronDown className="h-4 w-4 text-slate-500 ml-1" />
            </Button>
            <Button variant="outline" className="h-9 gap-2 text-sm font-medium">
              <Filter className="h-4 w-4 text-slate-500" />
              Filtros
            </Button>
            <Button className="h-9 gap-2 bg-blue-600 hover:bg-blue-700 text-sm font-medium">
              <Download className="h-4 w-4" />
              Exportar Relatório Consolidado
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card className="shadow-sm">
            <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-xs font-semibold text-slate-500 uppercase">Lucro Líquido</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-2xl font-bold text-slate-900 mb-2">R$ 0<span className="text-base text-slate-500 font-medium">,00</span></div>
              <Badge variant="secondary" className="bg-slate-50 text-slate-700 hover:bg-slate-50 border-transparent text-[10px] font-medium rounded-sm">
                - vs. mês anterior
              </Badge>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-xs font-semibold text-slate-500 uppercase">Receita Bruta Faturada</CardTitle>
              <Receipt className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-2xl font-bold text-slate-900 mb-2">R$ 0<span className="text-base text-slate-500 font-medium">,00</span></div>
              <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                <span>Meta: R$ 0,00</span>
                <span className="font-medium text-slate-600">0%</span>
              </div>
              <Progress value={0} className="h-1.5" />
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-xs font-semibold text-slate-500 uppercase">Custos & Insumos</CardTitle>
              <Calculator className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-2xl font-bold text-slate-900 mb-2">R$ 0<span className="text-base text-slate-500 font-medium">,00</span></div>
              <Badge variant="secondary" className="bg-slate-50 text-slate-600 hover:bg-slate-50 border-transparent text-[10px] font-medium rounded-sm">
                -
              </Badge>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-xs font-semibold text-slate-500 uppercase">Mão de Obra & Terceiros</CardTitle>
              <Users className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-2xl font-bold text-slate-900 mb-2">R$ 0<span className="text-base text-slate-500 font-medium">,00</span></div>
              <div className="flex items-center gap-3 text-[11px] font-medium">
                <span className="text-slate-600">0 equipes ativas</span>
                <span className="text-slate-400">0% receita</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-xs font-semibold text-slate-500 uppercase">Passivos & Parcelas</CardTitle>
              <CreditCard className="h-4 w-4 text-slate-400" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-2xl font-bold text-slate-900 mb-2">R$ 0<span className="text-base text-slate-500 font-medium">,00</span></div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-slate-50 text-slate-600 hover:bg-slate-50 border-transparent text-[10px] font-medium rounded-sm">
                  -
                </Badge>
                <span className="text-[11px] text-slate-500 font-medium truncate">
                  -
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section: Tables & Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Projects Flow Table */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Fluxo de Projetos & Rentabilidade</h3>
                <p className="text-sm text-slate-500">Acompanhamento de margem bruta e líquida por frente de obra.</p>
              </div>
              <button className="text-sm font-medium text-blue-600 flex items-center gap-1 hover:underline">
                Ver Todos <ArrowRight className="h-3 w-3 -rotate-45" />
              </button>
            </div>

            <Card className="shadow-sm border-slate-200">
              <Table>
                <TableHeader className="bg-slate-50/50">
                  <TableRow>
                    <TableHead className="text-xs font-semibold text-slate-500 h-10 uppercase">Projeto / Objeto</TableHead>
                    <TableHead className="text-xs font-semibold text-slate-500 h-10 text-right uppercase">Valor Contrato</TableHead>
                    <TableHead className="text-xs font-semibold text-slate-500 h-10 text-right uppercase">Custo Realizado</TableHead>
                    <TableHead className="text-xs font-semibold text-slate-500 h-10 text-right uppercase">Margem Líq.</TableHead>
                    <TableHead className="text-xs font-semibold text-slate-500 h-10 text-center uppercase">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Empty state or raw data to be populated */}
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-sm text-slate-500 py-8">
                      Nenhum projeto encontrado.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="p-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 bg-slate-50 rounded-b-xl">
                <span>Total consolidado na amostragem: <span className="font-semibold text-slate-900">R$ 0,00</span></span>
                <span>Margem ponderada: <span className="font-semibold text-slate-900">0.0%</span></span>
              </div>
            </Card>
          </div>

          {/* Upcoming Payments */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Próximos Vencimentos</h3>
                <p className="text-sm text-slate-500">Horizonte de obrigações nos próximos 15 dias.</p>
              </div>
              <Button variant="outline" size="icon" className="h-8 w-8 text-slate-500">
                <Calendar className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-col gap-3">
              {/* Empty state or raw data to be populated */}
              <div className="text-center text-sm text-slate-500 py-8 bg-white border border-slate-200 rounded-xl">
                Nenhum vencimento próximo.
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Total Comprometido (15D)</p>
                <p className="text-xl font-bold text-slate-900">R$ 0,00</p>
              </div>
              <Button variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-medium h-8">
                Programar Lotes <CheckCircle className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </div>
        </div>

        <div className="h-12" /> {/* Bottom padding */}
      </div>
    </div>
  );
}
