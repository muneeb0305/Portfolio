import React from "react";
import Card from "../components/Card/card";
import { projectData } from "../data/projectData";

export default function Project() {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {projectData.map((data, index) => (
          <Card
            key={index}
            imagePath={data.imagePath}
            alt={data.alt}
            title={data.title}
            styleType={data.styleType}
          />
        ))}
      </div>
    </>
  );
}
