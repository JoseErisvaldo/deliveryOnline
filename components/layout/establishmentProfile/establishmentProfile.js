import Button from '@/components/ui/button/button';
import { Clock, Info, MapPin, ShoppingBag, Star } from 'lucide-react';

export default function EstablishmentProfile() {
  const restaurantData = {
    name: 'Pizzaria Bella Napoli',
    photo: 'https://www.designi.com.br/images/preview/12870455.jpg',
    rating: 4.7,
    category: 'Italiana',
    deliveryTime: '30-45',
    deliveryFee: '5.99',
    minOrder: '20.00',
    address: 'Rua das Pizzas, 123 - Centro',
    description:
      'Autêntica pizza napolitana feita em forno a lenha. Ingredientes frescos e de qualidade.',
  };

  return (
    <div>
      <div className="">
        <img
          className="w-screen h-52 object-cover rounded-2xl"
          src={restaurantData.photo}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">{restaurantData.name}</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>{restaurantData.category}</span>
            <span>•</span>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span>{restaurantData.rating}</span>
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
                  {restaurantData.deliveryTime} min
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <ShoppingBag className="h-5 w-5 mr-2 text-gray-600" />
              <div>
                <p className="text-sm font-medium">Pedido mínimo</p>
                <p className="text-sm text-gray-600">
                  R$ {restaurantData.minOrder}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-gray-600" />
              <div>
                <p className="text-sm font-medium">Endereço</p>
                <p className="text-sm text-gray-600">
                  {restaurantData.address}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <ShoppingBag className="h-5 w-5 mr-2 text-gray-600" />
              <div>
                <p className="text-sm font-medium">Taxa de entrega</p>
                <p className="text-sm text-gray-600">
                  R$ {restaurantData.deliveryFee}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
