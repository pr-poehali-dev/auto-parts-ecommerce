import { Search, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-orange-500 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Найдите нужные <span className="text-orange-300">автозапчасти</span>{" "}
            быстро и легко
          </h1>
          <p className="text-xl mb-10 text-blue-100">
            Более 100 000 оригинальных запчастей для всех марок автомобилей
          </p>

          {/* Search Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-6">Поиск по автомобилю</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select>
                <SelectTrigger className="bg-white text-gray-800">
                  <SelectValue placeholder="Марка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                  <SelectItem value="mercedes">Mercedes</SelectItem>
                  <SelectItem value="audi">Audi</SelectItem>
                  <SelectItem value="volkswagen">Volkswagen</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="bg-white text-gray-800">
                  <SelectValue placeholder="Модель" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="camry">Camry</SelectItem>
                  <SelectItem value="corolla">Corolla</SelectItem>
                  <SelectItem value="x5">X5</SelectItem>
                  <SelectItem value="e-class">E-Class</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="bg-white text-gray-800">
                  <SelectValue placeholder="Год" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3">
                <Search className="w-5 h-5 mr-2" />
                Найти
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-8 text-blue-100">
            <div className="flex items-center">
              <Car className="w-6 h-6 mr-2" />
              <span>Быстрая доставка</span>
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 mr-2">✓</span>
              <span>Гарантия качества</span>
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 mr-2">💰</span>
              <span>Лучшие цены</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
