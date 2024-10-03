export default function Establishment() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-4">Restaurantes próximos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-lg bg-white"
            >
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Restaurante {i}</h3>
                <p className="text-gray-600 text-sm mb-2">Especialidade • $$</p>
                <p className="text-gray-600 text-sm">
                  30-45 min • Entrega: R$ 5,99
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
