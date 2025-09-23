import React from "react";

export function DropdownFilter({ label, name, value, setFilters, filters, options, borderClasses }) {
  const textColorClass = value ? "text-[#222222]" : "text-[#686868]";

  return (
    <div className={`flex items-center gap-3 ${borderClasses} px-5 py-6 h-8 w-1/4`}>
      <img
        src={`/${name}.svg`}
        alt={label}
        className="w-5 h-5 opacity-70"
      />
      <select
        className={`bg-transparent outline-none text-[16px] font-medium cursor-pointer w-full ${textColorClass}`}
        value={value}
        onChange={(e) => setFilters({ ...filters, [name]: e.target.value })}
      >
        <option value="" hidden className="text-[#686868]">
          {label}
        </option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value} className="text-[#686868]">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
