import SideCart from '@/components/layout/cart/sideCart';
import Establishment from '@/components/layout/establishment/establishment';
import Button from '@/components/ui/button/button';
import Input from '@/components/ui/input/input';
import { Select } from '@/components/ui/select/select';
import { SelectContent } from '@/components/ui/select/selectContent';
import { SelectItem } from '@/components/ui/select/selectItem';
import { SelectTrigger } from '@/components/ui/select/selectTrigger';
import { SelectValue } from '@/components/ui/select/selectValue';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

export default function Restaurants() {
  return (
    <div className="flex flex-col min-h-screen">
      <SideCart />
      <div className=" flex h-14 items-center">
        <Button
          className="mr-4"
          bgType={'blue'}
          onClick={() => window.history.back()}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>
        <h1 className="text-lg font-semibold">Restaurantes próximos</h1>
      </div>

      <div className="flex-1  py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <div className="flex-1 w-full md:w-auto md:max-w-md">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                className="pl-8"
                placeholder="Buscar restaurantes"
                type="search"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Select defaultValue="relevancia">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevancia">Relevância</SelectItem>
                <SelectItem value="avaliacao">Avaliação</SelectItem>
                <SelectItem value="entrega">Menor tempo de entrega</SelectItem>
                <SelectItem value="taxa">Menor taxa de entrega</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="todos">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar por cozinha" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todas as cozinhas</SelectItem>
                <SelectItem value="italiana">Italiana</SelectItem>
                <SelectItem value="japonesa">Japonesa</SelectItem>
                <SelectItem value="brasileira">Brasileira</SelectItem>
                <SelectItem value="mexicana">Mexicana</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Establishment />
      </div>
    </div>
  );
}
