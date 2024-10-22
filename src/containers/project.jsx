import React, { lazy, Suspense } from "react";
import { projectData } from "../data/projectData";
import Loading from "../components/Loader/loader";

const Card = lazy(() => import("../components/Card/card"));

export default function Project() {
  return (
    <Suspense fallback={<Loading />}>
      <div
        className="grid grid-cols-2 lg:grid-cols-3 gap-4 "
        data-aos="fade-up"
      >
        {projectData.map((data, index) => (
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
