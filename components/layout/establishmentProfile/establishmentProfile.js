// Exemplo de componente atualizado
import Button from '@/components/ui/button/button';
import { Clock, Info, MapPin, ShoppingBag, Star } from 'lucide-react';

export default function EstablishmentProfile({ establishment }) {
  // Verifica se o estabelecimento está definido e se é um array
  if (!establishment || establishment.length === 0)
    return <div>Loading...</div>; // Se não houver estabelecimento, mostra um carregando

  const data = establishment[0]; // Acessa o primeiro elemento do array

  return (
    <div>
      {data ? (
        <>
          <div>
            <img
              className="w-screen h-52 object-cover rounded-2xl"
              src={data.photo_establishment || '/default-image.jpg'} // Use uma imagem padrão se não houver
              alt={data.name_establishment}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                {data.name_establishment || 'Nome não disponível'}
              </h2>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>
                  {data.specialty_establishment || 'Categoria não disponível'}
                </span>
                <span>•</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>{data.rating || 'Rating não disponível'}</span>
                </div>
              </div>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              <Info className="h-4 w-4 mr-2" />
              Mais informações
            </Button>
          </div>

          <div className="mb-6">
            <div className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium">Tempo de entrega</p>
                    <p className="text-sm text-gray-600">
                      {data.minimumTime
                        ? `${data.minimumTime} - ${data.maximumTime} minutos`
                        : 'Tempo não disponível'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ShoppingBag className="h-5 w-5 mr-2 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium">Pedido mínimo</p>
                    <p className="text-sm text-gray-600">
                      R$ {data.minimumOrder || 'Não disponível'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium">Endereço</p>
                    <p className="text-sm text-gray-600">
                      {data.address_establishment || 'Endereço não disponível'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ShoppingBag className="h-5 w-5 mr-2 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium">Taxa de entrega</p>
                    <p className="text-sm text-gray-600">
                      R$ {data.deliveryFee || 'Não disponível'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>No establishment found.</div>
      )}
    </div>
  );
}
