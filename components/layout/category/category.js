import Button from '@/components/ui/button/button';

export default function Category() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-4">Categorias</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            'Pizza',
            'Hambúrguer',
            'Japonesa',
            'Italiana',
            'Brasileira',
            'Sobremesas',
          ].map((category) => (
            <Button
              key={category}
              variant="outline"
              className="h-24 flex flex-col items-center justify-center"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
