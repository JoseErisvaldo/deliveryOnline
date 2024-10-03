import Button from '@/components/ui/button/button';
import { ShoppingBag, User } from 'lucide-react';

export default function Header() {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">Logo</div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Button>Restaurantes</Button>
            <Button>Mercados</Button>
            <Button>Bebidas</Button>
          </nav>
          <div className="flex items-center space-x-4">
            <Button size="icon">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Carrinho</span>
            </Button>
            <Button size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Conta</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
