import React from "react";
import {
  Grid,
  Book,
  Dumbbell,
  Building2,
  Gamepad2,
  GraduationCap,
  Car,
  Heart,
  UtensilsCrossed,
  ShoppingBag,
  Glasses,
  Tv,
  Rocket,
  Church,
  Youtube,
} from "lucide-react";

const industries = [
  { name: "Social media", icon: Grid },
  { name: "Fitness and sport", icon: Dumbbell },
  { name: "Bank", icon: Building2 },
  { name: "Construction", icon: Building2 },
  { name: "Game projects", icon: Gamepad2 },
  { name: "Education", icon: GraduationCap },
  { name: "Auto, transport", icon: Car },
  { name: "Medicine, health", icon: Heart },
  { name: "Restaurants, food delivery", icon: UtensilsCrossed },
  { name: "Marketplaces", icon: ShoppingBag },
  { name: "AR technology", icon: Glasses },
  { name: "TV series", icon: Tv },
  { name: "Startups", icon: Rocket },
  { name: "Religion", icon: Church },
  { name: "Online courses", icon: Youtube },
];

const Lists = () => {
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const columns = chunkArray(industries, 6);

  return (
    <div className="  p-6 bg-white rounded-lg ">
      <h2 className="text-3xl font-bold mb-6 pl-20">
        Developed more than <span className="text-green-500">100</span>
        <br></br>
        projects in <span className="text-green-500">15</span> industries
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 pl-20 ">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex-1">
            {column.map((industry, index) => (
              <div key={index} className="flex items-center space-x-2 mb-3">
                <industry.icon className="w-6 h-6 text-yellow-400" />
                <span className="text-gray-700">{industry.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lists;
