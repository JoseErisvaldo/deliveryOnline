'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ChevronLeft } from 'lucide-react';
import Button from '@/components/ui/button/button';
import MenuCategory from '@/components/layout/menuCategory/menuCategory';
import EstablishmentProfile from '@/components/layout/establishmentProfile/establishmentProfile';
import SideCart from '@/components/layout/cart/sideCart';
import { fetchSupabaseID } from '../api/base/GET/fetchSupabaseID';

export default function EstablishmentDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [establishment, setEstablishment] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState();
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEstablishmentAndCategories = async () => {
      if (id) {
        setLoading(true);
        try {
          const [establishmentData, categoriesData, productsData] =
            await Promise.all([
              fetchSupabaseID(id, 'view_establishment'),
              fetchSupabaseID(id, 'view_categories_client'),
              fetchSupabaseID(id, 'view_products_client'),
            ]);
          setEstablishment(establishmentData);
          setCategories(categoriesData);
          setActiveCategory(categoriesData[0]?.name_category || '');
          setProducts(productsData);
          console.log(productsData);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    getEstablishmentAndCategories();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!establishment) return <div>No establishment found.</div>;

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
        <EstablishmentProfile establishment={establishment} />
        <div className="py-6">
          <MenuCategory>
            {categories.length > 0 ? (
              categories.map((category) => (
                <Button
                  key={category.category_id}
                  variant={
                    activeCategory === category.name_category
                      ? 'solid'
                      : 'outline'
                  }
                  onClick={() => setActiveCategory(category.name_category)}
                >
                  {category.name_category}
                </Button>
              ))
            ) : (
              <div>No categories found.</div>
            )}
          </MenuCategory>
          <div>
            {products.map((item) => (
              <div>{item.name_products}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-15 right-4"></div>
    </div>
  );
}
