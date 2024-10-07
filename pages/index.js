import SideCart from '@/components/layout/cart/sideCart';
import Category from '@/components/layout/category/category';
import Cover from '@/components/layout/cover/cover';
import Establishment from '@/components/layout/establishment/establishment';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <SideCart />
        <Cover />
        <Category />
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">Restaurantes próximos</h2>
          <Link
            href={'/establishments/establishments'}
            className=" text-2xl cursor-pointer"
          >
            <ArrowRight />
          </Link>
        </div>
        <Establishment />
      </main>
    </div>
  );
}
