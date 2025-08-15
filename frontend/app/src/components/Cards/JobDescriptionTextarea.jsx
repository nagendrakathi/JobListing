import React, { useState } from "react";

export default function JobDescriptionTextarea({ value, onChange, name, required }) {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = isFocused
    ? "border-1 border-[#222222]"
    : value
    ? "border-1 border-[#222222]"
    : "border border-[#dfdfdf]";

  return (
    <div className="mb-5">
      <label htmlFor={name} className="block font-bold">
        Job Description
      </label>
      <textarea
        name={name}
        id={name}
        className={`w-full rounded-lg px-4 py-3 text-[16px] min-h-[100px] placeholder:font-normal font-medium placeholder:text-[#BCBCBC] text-[#222222] focus:outline-none ${borderColor}`}
        placeholder="Please share a description to let the candidate know more about the job role"
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}
