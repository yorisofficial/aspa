"use client";

import React, { useState } from "react";

const SortingParagraph = ({ data }: { data: string }) => {
  // sorting description using state
  const [isSorted, setSorted] = useState<Boolean>(
    data.length > 32 ? true : false,
  );

  //   handle description
  const handleDescription = () => {
    setSorted(!isSorted);
  };
  return (
    <>
      <p
        className={`mt-6 w-full origin-top text-justify text-sm font-light md:text-base ${isSorted ? "line-clamp-4" : ""}`}
      >
        {data}
      </p>
      <button
        type="button"
        onClick={handleDescription}
        className="text-sm font-light underline underline-offset-4"
      >
        {isSorted ? "Read more" : "Read less"}
      </button>
    </>
  );
};

export default SortingParagraph;
