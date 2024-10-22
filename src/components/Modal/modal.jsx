import React, { useEffect } from "react";

export default function Modal({ isOpen, closeModal, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
      onClick={closeModal}
    >
      <div
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
        className="mt-4 pr-2 relative bg-white p-6 rounded-lg max-w-lg w-full mx-4 shadow-lg md:max-w-2xl lg:max-w-3xl transform t
        ransition-transform duration-300 ease-in-out scale-95 md:scale-100 max-h-full overflow-y-auto"
      >
        <div className="relative">
          {children}
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition duration-200 ease-in-out focus:outline-none"
            onClick={closeModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
