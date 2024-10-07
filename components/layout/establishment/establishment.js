import { fetchSupabase } from '@/pages/api/base/GET/fetchSupabase';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Establishment() {
  const [establishments, setEstablishments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEstablishments = async () => {
      try {
        const data = await fetchSupabase(
          '/rest/v1/view_establishment',
          'select=*'
        );
        setEstablishments(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getEstablishments();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {establishments.map((item) => (
            <div
              key={item.establishment_id}
              className="rounded-lg overflow-hidden shadow-lg bg-white"
            >
              <div className="relative bg-white shadow-md rounded-lg cursor-pointer overflow-hidden">
                <img
                  src={item.photo_establishment}
                  alt={`${item.name_establishment} Photo`}
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />

                <div className="relative z-10 p-4">
                  <h3 className="font-bold text-lg flex justify-between items-center">
                    <div>{item.name_establishment}</div>
                    <div className="cursor-pointer hover:scale-110">
                      {' '}
                      <Heart />
                    </div>
                  </h3>
                  <Link href={`/establishments/${item.establishment_id}`}>
                    <p className="text-black text-sm">
                      <strong>Especialidade •</strong> {item.specialty}
                    </p>
                    <p className="text-black text-sm">
                      <strong>Entrega entre •</strong> {item.minimumTime} -{' '}
                      {item.maximumTime} minutos
                    </p>
                    <p className="text-black text-sm">
                      <strong>Endreço•</strong> {item.address_establishment} -{' '}
                      {item.maximumTime} minutos
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
