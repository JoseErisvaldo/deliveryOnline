import Input from '@/components/ui/input/input';
import { Search } from 'lucide-react';

export default function Cover() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-[#2f70d1] rounded-3xl">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Realize seu pedido agora !! 
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl">
              Os melhores estabelecimento com os melhores preços, entregues na sua
              porta.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 cursor-pointer" />
              <Input
                className="pl-8 bg-white"
                placeholder="Buscar restaurantes ou pratos"
                type="search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
