"use client";
import React, { useState } from "react";
import Itemachievements from "./ItemAchievements";

interface Props {
  title: string;
}

const ListAchievementsKiddo = ({
  dataAchievements,
}: {
  dataAchievements: Props[];
}) => {
  const [isShowMedal, setShowMedal] = useState(false);
  const [medal, setMedal] = useState(3);

  const handleShowMedal = () => {
    setShowMedal(!isShowMedal);
  };

  const item = dataAchievements;

  return (
    <div className="achievement-card  h-full">
      <h1 className="font-bold">Achievement</h1>
      <ul className="list-inside list-disc">
        {item.slice(0, isShowMedal ? item.length : medal).map((item, index) => (
          <Itemachievements key={index} dataProps={item} />
        ))}
      </ul>
      {item.length >= medal && (
        <button
          onClick={handleShowMedal}
          aria-label="See more achievement"
          className="py-1 text-sm underline underline-offset-4"
        >
          {isShowMedal ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
};

export default ListAchievementsKiddo;
