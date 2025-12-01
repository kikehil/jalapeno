'use client'

import { categories } from '@/data/products'

interface CategoryTabsProps {
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
}

export default function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 border-4 ${
            activeCategory === category.id
              ? 'bg-jalapeno-red text-white border-white shadow-lg'
              : 'bg-white text-jalapeno-red border-jalapeno-red hover:bg-jalapeno-red hover:text-white'
          }`}
        >
          <span className="mr-2">{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  )
}

