import React from "react";
import { DotLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <DotLoader color="#0f40ee" />;
    </div>
  );
};

export default Loading;
