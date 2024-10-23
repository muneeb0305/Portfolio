import React, { lazy, Suspense } from "react";
import { projectData } from "../data/projectData";
import Loading from "../components/Loader/loader";
import Masonry from "react-masonry-css";

const Card = lazy(() => import("../components/Card/card"));

export default function Project() {
  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1,
  };

  return (
    <Suspense fallback={<Loading />}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto"
        columnClassName="p-2"
      >
        {projectData.map((data, index) => (
          <Card
            key={index}
            imagePath={data.imagePath}
            alt={data.alt}
            title={data.title}
            url={data.url}
          />
        ))}
      </Masonry>
    </Suspense>
  );
}
