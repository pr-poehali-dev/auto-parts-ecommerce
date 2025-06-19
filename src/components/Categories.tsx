import { Card, CardContent } from "@/components/ui/card";

const Categories = () => {
  const categories = [
    {
      name: "Двигатель",
      icon: "🔧",
      color: "from-red-500 to-orange-500",
      items: "15,420 товаров",
    },
    {
      name: "Тормозная система",
      icon: "🛞",
      color: "from-blue-500 to-cyan-500",
      items: "8,650 товаров",
    },
    {
      name: "Подвеска",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      items: "12,340 товаров",
    },
    {
      name: "Электрика",
      icon: "⚡",
      color: "from-purple-500 to-pink-500",
      items: "9,870 товаров",
    },
    {
      name: "Кузов",
      icon: "🚗",
      color: "from-orange-500 to-yellow-500",
      items: "6,230 товаров",
    },
    {
      name: "Салон",
      icon: "🪑",
      color: "from-indigo-500 to-blue-500",
      items: "4,560 товаров",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Популярные категории
          </h2>
          <p className="text-xl text-gray-600">
            Выберите нужную категорию запчастей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.items}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
