import Button from '@/components/ui/button/button';
import { ShoppingBag, User } from 'lucide-react';

export default function Header() {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-light">
      <div className="flex justify-between">
        <div className="m-4 font-bold">Delivery Online</div>
        <div className="m-4 flex items-center">
          <div className="flex items-center gap-3">
            <Button size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
