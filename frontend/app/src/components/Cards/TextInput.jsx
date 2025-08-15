import React, { useState } from "react";

export default function TextInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  icon = null,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = isFocused
    ? "border-1 border-[#222222]"
    : value
    ? "border-1 border-[#222222]"
    : "border-[#dfdfdf]";

  return (
    <div>
      {label && <label className="block mb-2 font-bold">{label}</label>}
      <div className="relative">
        {icon && (
          <span
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
            style={{ color: value ? "#222222" : "#BCBCBC" }}
          >
            {icon}
          </span>
        )}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full rounded-lg
      ${icon ? "pl-9" : "px-4"} py-3 text-[18px] placeholder:text-[16px]
      placeholder:font-normal placeholder:text-[#BCBCBC]
      focus:outline-none focus:ring-0 ${borderColor}
      text-[#222222] font-medium
      border
      `}
        />
      </div>
    </div>
  );
}
