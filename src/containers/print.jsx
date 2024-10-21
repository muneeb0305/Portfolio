import React, { useCallback, useState } from "react";
import Card from "../components/Card/card";
import { printData } from "../data/printData";

export default function Print() {
  const [selectedCard, setSelectedCard] = useState(null);

  const openCard = useCallback((data) => {
    setSelectedCard(data);
  }, []);

  const closeCard = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {printData.map((data, index) => (
          <Card
            selectedCard={selectedCard}
            key={index}
            imagePath={data.imagePath}
            alt={data.alt}
            title={data.title}
            styleType={data.styleType}
            onClick={() => openCard(data)}
          />
        ))}
      </div>
      {selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4 sm:p-8">
          <div className="bg-white p-4 sm:p-8 rounded-lg max-w-full w-full sm:max-w-lg sm:w-auto relative">
            <button
              onClick={closeCard}
              className="absolute top-1 right-1 sm:top-4 sm:right-4 text-xl font-bold "
            >
              &times;
            </button>
            <Card
              imagePath={selectedCard.imagePath}
              alt={selectedCard.alt}
              title={selectedCard.title}
              styleType={selectedCard.styleType}
            />
          </div>
        </div>
      )}
    </>
  );
}
