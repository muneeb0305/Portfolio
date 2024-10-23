import React, { lazy, Suspense } from "react";
import Loading from "../components/Loader/loader";
import { workData } from "../data/workData";
import Masonry from "react-masonry-css";

const Card = lazy(() => import("../components/Card/card"));

export default function Work() {
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
        {" "}
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
      </Masonry>
    </Suspense>
  );
}
