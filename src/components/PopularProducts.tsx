import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

const PopularProducts = () => {
  const products = [
    {
      id: 1,
      name: "Тормозные колодки Bosch",
      brand: "Bosch",
      price: 3450,
      oldPrice: 4200,
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=200&fit=crop",
      rating: 4.8,
      inStock: true,
      isPopular: true,
    },
    {
      id: 2,
      name: "Масляный фильтр Mann",
      brand: "Mann-Filter",
      price: 890,
      oldPrice: null,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      rating: 4.6,
      inStock: true,
      isPopular: false,
    },
    {
      id: 3,
      name: "Амортизатор Bilstein",
      brand: "Bilstein",
      price: 8900,
      oldPrice: 10500,
      image:
        "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=300&h=200&fit=crop",
      rating: 4.9,
      inStock: true,
      isPopular: true,
    },
    {
      id: 4,
      name: "Свечи зажигания NGK",
      brand: "NGK",
      price: 1250,
      oldPrice: null,
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop",
      rating: 4.7,
      inStock: false,
      isPopular: false,
    },
    {
      id: 5,
      name: "Генератор Valeo",
      brand: "Valeo",
      price: 15400,
      oldPrice: 18000,
      image:
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=300&h=200&fit=crop",
      rating: 4.5,
      inStock: true,
      isPopular: true,
    },
    {
      id: 6,
      name: "Радиатор охлаждения",
      brand: "Nissens",
      price: 12300,
      oldPrice: null,
      image:
        "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=300&h=200&fit=crop",
      rating: 4.4,
      inStock: true,
      isPopular: false,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Популярные товары
          </h2>
          <p className="text-xl text-gray-600">Самые покупаемые автозапчасти</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {product.isPopular && (
                    <Badge className="absolute top-2 left-2 bg-orange-500">
                      Хит продаж
                    </Badge>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 rounded-t-lg flex items-center justify-center">
                      <span className="text-white font-semibold">
                        Нет в наличии
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">
                        {product.price.toLocaleString()} ₽
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {product.oldPrice.toLocaleString()} ₽
                        </span>
                      )}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.inStock ? "В корзину" : "Под заказ"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="px-8 py-3 text-lg">
            Показать все товары
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
