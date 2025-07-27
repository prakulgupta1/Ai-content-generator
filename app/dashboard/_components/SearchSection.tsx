import { Search } from 'lucide-react';
import React from 'react';

interface SearchSectionProps {
  onSearchInput: (value: string) => void;
  searchValue: string;
}

function SearchSection({ onSearchInput, searchValue }: SearchSectionProps) {
  return (
    <div className='p-10 bg-gradient-to-br from-blue-500 via-blue-700 to-green-600 flex flex-col justify-center items-center text-white'>
      <h2 className='text-3xl font-bold'>Explore Our Templates</h2>
      <p>What are we creating today?</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[30%]'>
          <Search className='text-primary' />
          <input
            type="text"
            value={searchValue} // ✅ controlled input
            placeholder="Search"
            onChange={(event) => onSearchInput(event.target.value)}
            className="bg-transparent text-black placeholder-gray-500 w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
