import React, { useState } from 'react';
import { Search } from 'lucide-react';

const CitySearch = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
  };

  return (
      <div className="max-w-md mx-auto mb-8">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-lg">
        <div>
    <form onSubmit={handleSubmit} className="flex justify-center my-4">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        className="flex-1 px-4 py-3 bg-white/90 rounded-l-xl border-0 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-500 disabled:opacity-50"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-r-xl transition-all duration-200 flex items-center justify-center min-w-[60px]"
      >
        <Search size={18} />
      </button>
    </form>
     </div>
      </div>
    </div>
  );
};

export default CitySearch;