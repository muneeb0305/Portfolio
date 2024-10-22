import React, { lazy, Suspense } from "react";
import { printData } from "../data/printData";
import Loading from "../components/Loader/loader";

const Card = lazy(() => import("../components/Card/card"));

export default function Print() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {printData.map((data, index) => (
          <Card
            key={index}
            imagePath={data.imagePath}
            alt={data.alt}
            title={data.title}
            styleType={data.styleType}
            modal={true}
          />
        ))}
      </div>
    </Suspense>
  );
}
