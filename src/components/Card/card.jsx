import React from "react";

export default function Card({
  imagePath,
  alt,
  title,
  styleType,
  onClick,
  selectedCard,
}) {
  console.log(selectedCard)
  return (
    <div
      onClick={onClick}
      className={`w-full bg-white border border-gray-200 shadow relative group overflow-hidden ${
        styleType === "horizontal" ? "row-span-2 " : "row-span-1"
      }`}
    >
      <img className="w-full h-full object-fill" src={imagePath} alt={alt} />
      <div
        className={`absolute inset-0 bottom-0 bg-black 
        ${selectedCard ? "bg-opacity-0" : "bg-opacity-30 "} 
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-500 ease-in-out 
            flex items-end justify-center transform`}
      >
        <p className="text-md pl-5 pb-5 pr-5 font-serif tracking-tight text-white">
          {title}
        </p>
      </div>
    </div>
  );
}
