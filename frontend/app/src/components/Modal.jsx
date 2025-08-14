import React, { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      style={{ opacity: 1 }}
      onClick={onClose}
      aria-modal="true"
      tabIndex={-1}
    >
      <div
        className="relative bg-white shadow-xl"
        style={{
          borderRadius: "16px",
          width: 750,
          height: 660,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4.5 right-7 text-gray-400 hover:text-gray-700 text-2xl transition cursor-pointer"
        >
          &times;
        </button>
        <div className="py-10 px-12 h-full">{children}</div>
      </div>
    </div>
  );
}
