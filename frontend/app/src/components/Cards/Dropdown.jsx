import React from "react";

export default function Dropdown({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
}) {
  const isPlaceholder = !value;

  return (
    <div>
      {label && <label className="block mb-2 font-bold">{label}</label>}
      <div className="relative">
        <select
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          // Tailwind dynamic classes based on placeholder status
          className={`appearance-none w-full border border-[#dfdfdf] rounded-lg px-4 py-3 bg-white text-[16px] font-medium focus:outline-none focus:border-2 focus:border-black ${
            isPlaceholder ? "text-[#BCBCBC]" : "text-[#222222]"
          }`}
        >
          {options.map((opt, idx) => (
            <option
              key={idx}
              value={opt.value}
              hidden={opt.hidden}
              className="text-[#383838]"
            >
              {opt.label}
            </option>
          ))}
        </select>

        <svg
          className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
          fill="none"
          stroke="#383838"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
