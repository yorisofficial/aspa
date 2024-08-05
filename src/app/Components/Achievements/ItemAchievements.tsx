import React from "react";

interface Props {
  title: string;
}

const ItemAchievements = ({ dataProps }: { dataProps: Props }) => {
  return <li className="w-full truncate">{dataProps?.title}</li>;
};

export default ItemAchievements;
