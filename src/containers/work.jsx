import React, { lazy, Suspense } from "react";
import Loading from "../components/Loader/loader";
import { workData } from "../data/workData";

const Card = lazy(() => import("../components/Card/card"));

export default function Work() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="columns-3 gap-4">
        {workData.map((data, index) => (
          <Card
            key={index}
            imagePath={data.imagePath}
            alt={data.alt}
            title={data.title}
            styleType={data.styleType}
            url={data.url}
          />
        ))}
      </div>
    </Suspense>
  );
}
