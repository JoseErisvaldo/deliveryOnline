import Category from '@/components/layout/category/category';
import Cover from '@/components/layout/cover/cover';
import Establishment from '@/components/layout/establishment/establishment';
import Footer from '@/components/layout/footer/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Cover />
        <Category />
        <Establishment />
      </main>
    </div>
  );
}
