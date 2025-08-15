import React from "react";

export function SearchInput({ filters, setFilters }) {
  const hasValue = filters.title && filters.title.trim() !== "";

  return (
    <div className="flex items-center gap-3 flex-1 bg-white border-[#fcfcfc] px-6 py-3 rounded-[16px] w-full">
      <img src="/search.svg" alt="Search" className="w-5 h-5 opacity-70" />
      <input
        type="text"
        placeholder="Search By Job Title, Role"
        className={`border-none bg-transparent font font-medium outline-none placeholder-gray-500 w-full text-[16px] ${
          hasValue ? "text-[#222222]" : "text-gray-500"
        }`}
        value={filters.title}
        onChange={(e) => setFilters({ ...filters, title: e.target.value })}
      />
    </div>
  );
}
