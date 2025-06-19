import { Search, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🔧</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">
              АвтоЗапчасти
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Поиск запчастей по марке, модели или артикулу..."
                className="pl-10 py-3 bg-gray-50 border-gray-200 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Главная
            </a>
            <a
              href="/catalog"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Каталог
            </a>
            <a
              href="/contacts"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Контакты
            </a>
          </nav>

          {/* Cart */}
          <Button variant="outline" className="relative ml-4">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Button>

          {/* Mobile Menu */}
          <Button variant="ghost" className="md:hidden ml-2">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
