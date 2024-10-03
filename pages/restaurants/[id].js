'use client';

import { useState } from 'react';
import {
  ChevronLeft,
  Clock,
  Info,
  MapPin,
  Plus,
  ShoppingBag,
  Star,
} from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/button/button';
import MenuCategory from '@/components/layout/menuCategory/menuCategory';
import EstablishmentProfile from '@/components/layout/establishmentProfile/establishmentProfile';
import SideCart from '@/components/layout/cart/sideCart';

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

const menuCategories = ['Pizzas', 'Massas', 'Saladas', 'Bebidas', 'Sobremesas'];

const menuItems = [
  {
    id: 1,
    name: 'Pizza Margherita',
    description: 'Molho de tomate, mussarela, manjericão fresco',
    price: 39.9,
    category: 'Pizzas',
  },
  {
    id: 2,
    name: 'Pizza Pepperoni',
    description: 'Molho de tomate, mussarela, pepperoni',
    price: 45.9,
    category: 'Pizzas',
  },
  {
    id: 3,
    name: 'Espaguete à Bolonhesa',
    description: 'Espaguete com molho de carne',
    price: 32.9,
    category: 'Massas',
  },
  {
    id: 4,
    name: 'Salada Caesar',
    description: 'Alface, croutons, parmesão, molho Caesar',
    price: 25.9,
    category: 'Saladas',
  },
  {
    id: 5,
    name: 'Refrigerante',
    description: 'Lata 350ml',
    price: 5.9,
    category: 'Bebidas',
  },
  {
    id: 6,
    name: 'Tiramisu',
    description: 'Clássica sobremesa italiana',
    price: 18.9,
    category: 'Sobremesas',
  },
];

export default function RestauranteDetalhes() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);

  return (
    <div className="flex flex-col min-h-screen">
      <SideCart />
      <div className="flex h-14 items-center">
        <Button
          variant="ghost"
          className="mr-4"
          onClick={() => window.history.back()}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>
      </div>

      <div className="flex-1">
        <EstablishmentProfile />
        <div className="py-6">
          <MenuCategory>
            {menuCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </MenuCategory>

          <div className="mt-6 grid grid-cols-4">
            {menuCategories.map((category) => (
              <div key={category} id={category} className=" m-5">
                <h3 className="text-xl font-semibold">{category}</h3>
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <div key={item.id}>
                      <div>
                        <div className="cursor-pointer">
                          <div className="p-4 flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{item.name}</h4>
                              <p className="text-sm text-gray-600">
                                {item.description}
                              </p>
                              <p className="mt-2 font-medium">
                                R$ {item.price.toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mt-4">
                          <Button className="mt-4 w-full">
                            <Plus className="mr-2 h-4 w-4" /> Adicionar ao
                            carrinho
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-15 right-4"></div>
    </div>
  );
}
