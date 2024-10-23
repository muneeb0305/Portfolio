import React, { lazy, Suspense } from "react";
import { printData } from "../data/printData";
import Loading from "../components/Loader/loader";
import Masonry from "react-masonry-css";

const Card = lazy(() => import("../components/Card/card"));

export default function Print() {
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
      </Masonry>
    </Suspense>
  );
}
