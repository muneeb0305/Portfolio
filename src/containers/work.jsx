import React from "react";
import { projectData } from "../data/projectData";
import Card from "../components/Card/card";

export default function Work() {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
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
