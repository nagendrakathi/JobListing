import React from "react";

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
  return (
    <div>
      {label && <label className="block mb-2 font-bold">{label}</label>}
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
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
          className={`w-full border border-[#dfdfdf] rounded-lg 
            ${icon ? "pl-9" : "px-4"} py-3 text-[18px] placeholder:text-[16px] 
            placeholder:font-normal placeholder:text-[#BCBCBC] focus:outline-none 
            focus:border-2 focus:border-black text-[#222222] font-medium`}
        />
      </div>
    </div>
  );
}
