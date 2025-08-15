import React from "react";

export default function FormButton({
  label,
  icon,
  type = "button",
  variant = "primary",
  onClick,
}) {
  const baseClasses =
    "flex justify-center items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[16px] transition shadow cursor-pointer w-1/3";
  const variantClasses = {
    primary: "bg-[#00AAFF] text-white hover:bg-[#27b7ff] border-2 border-[#00AAFF]",
    secondary:
      "border-2 border-[#000000] bg-white text-[#232323] hover:bg-[#f8f8f8]",
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {label} {icon && <img src={icon} alt="" />}
    </button>
  );
}
