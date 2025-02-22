'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

type OptionType = string | { label: string; value: string };

type AutocompleteProps = {
  options: OptionType[];
  placeholder?: string;
  onSelect?: (value: string) => void;
};

export default function Autocomplete({
  options,
  placeholder = 'Rechercher...',
  onSelect,
}: AutocompleteProps) {
  const [query, setQuery] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<OptionType[]>(options);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const commandRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      commandRef.current &&
      !commandRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getLabel = (option: OptionType): string =>
    typeof option === 'string' ? option : option.label;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setFilteredOptions(
      options.filter((option) =>
        getLabel(option).toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSelect = useCallback(
    (option: OptionType) => {
      const label = getLabel(option);
      setQuery(label);
      setSelectedOption(option);
      setIsOpen(false);
      if (onSelect) onSelect(label);
    },
    [onSelect]
  );

  return (
    <div ref={commandRef} className="relative w-full">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-700" />
        </div>
        <Input
          placeholder={placeholder}
          className="pl-10 border-none shadow-none focus-visible:border-none focus:border-none focus-visible:ring-0"
          onFocus={handleFocus}
          onChange={handleChange}
          value={query}
        />
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white rounded-lg">
          <ul>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(option)}
                  className={`p-2 cursor-pointer hover:bg-gray-100 text-sm ${
                    selectedOption === option
                      ? 'bg-gray-100 text-primary-first'
                      : ''
                  }`}
                >
                  {getLabel(option)}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">Aucun résultat</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
