import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🔧</span>
              </div>
              <span className="text-2xl font-bold">АвтоЗапчасти</span>
            </div>
            <p className="text-gray-300 mb-4">
              Надежный поставщик автозапчастей с 2010 года. Гарантия качества и
              быстрая доставка по всей России.
            </p>
            <div className="flex space-x-4">
              <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700">
                📘
              </span>
              <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700">
                📺
              </span>
              <span className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500">
                🐦
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="/catalog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Каталог
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  О компании
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Гарантии
                </a>
              </li>
              <li>
                <a
                  href="/contacts"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-orange-500" />
                <span className="text-gray-300">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-orange-500" />
                <span className="text-gray-300">info@autozapchasti.ru</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-orange-500 mt-0.5" />
                <span className="text-gray-300">
                  г. Москва, ул. Автозаводская, 15
                </span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-orange-500" />
                <div>
                  <p className="text-gray-300">Пн-Пт: 9:00 - 19:00</p>
                  <p className="text-gray-300">Сб-Вс: 10:00 - 17:00</p>
                </div>
              </div>
            </div>

            <h4 className="text-md font-medium mt-6 mb-3">Способы оплаты</h4>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-blue-600 text-xs rounded">
                VISA
              </span>
              <span className="px-2 py-1 bg-red-600 text-xs rounded">MC</span>
              <span className="px-2 py-1 bg-green-600 text-xs rounded">
                МИР
              </span>
              <span className="px-2 py-1 bg-purple-600 text-xs rounded">
                PayPal
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 АвтоЗапчасти. Все права защищены. |
            <a href="#" className="hover:text-white ml-1">
              Политика конфиденциальности
            </a>{" "}
            |
            <a href="#" className="hover:text-white ml-1">
              Условия использования
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
