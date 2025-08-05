import { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Filter() {
  const categories = [
    { key: 'guitar', label: 'Guitar' },
    { key: 'keyboard', label: 'Keyboard' },
    { key: 'drums', label: 'Drums' },
    { key: 'violin', label: 'Violin' },
    { key: 'flute', label: 'Flute' },
    { key: 'saxophone', label: 'Saxophone' },
  ];

  const brands = [
    { key: 'yamaha', label: 'Yamaha' },
    { key: 'fender', label: 'Fender' },
    { key: 'roland', label: 'Roland' },
    { key: 'gibson', label: 'Gibson' },
    { key: 'casio', label: 'Casio' },
  ];

  const prices = [
    { key: 'low', label: 'Below $100' },
    { key: 'mid', label: '$100 - $500' },
    { key: 'high', label: '$500+' },
  ];

  const [selectedCategories, setSelectedCategories] = useState({});
  const [selectedBrands, setSelectedBrands] = useState({});
  const [selectedPrices, setSelectedPrices] = useState({});

  const toggle = (key, setter) => {
    setter((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="mx-40 mt-10 flex space-x-6">
      {/* Category Filter */}
      <Menu as="div" className="relative inline-block">
        <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
          Category
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
        <MenuItems className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none p-2 space-y-1">
          {categories.map((category) => (
            <MenuItem key={category.key}>
              {({ active }) => (
                <label
                  className={`flex items-center text-sm px-2 py-1 rounded ${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={!!selectedCategories[category.key]}
                    onChange={() => toggle(category.key, setSelectedCategories)}
                    className="mr-2"
                  />
                  {category.label}
                </label>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>

      {/* Brand Filter */}
      <Menu as="div" className="relative inline-block">
        <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
          Brand
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
        <MenuItems className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none p-2 space-y-1">
          {brands.map((brand) => (
            <MenuItem key={brand.key}>
              {({ active }) => (
                <label
                  className={`flex items-center text-sm px-2 py-1 rounded ${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={!!selectedBrands[brand.key]}
                    onChange={() => toggle(brand.key, setSelectedBrands)}
                    className="mr-2"
                  />
                  {brand.label}
                </label>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>

      {/* Price Filter */}
      <Menu as="div" className="relative inline-block">
        <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
          Price
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
        <MenuItems className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none p-2 space-y-1">
          {prices.map((price) => (
            <MenuItem key={price.key}>
              {({ active }) => (
                <label
                  className={`flex items-center text-sm px-2 py-1 rounded ${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={!!selectedPrices[price.key]}
                    onChange={() => toggle(price.key, setSelectedPrices)}
                    className="mr-2"
                  />
                  {price.label}
                </label>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}
