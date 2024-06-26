import React from "react";
import ItemTeam from "./ItemTeam";

interface Props {
  id: number;
  full_name: string;
  nickname: string;
  title: string;
  location?: string;
  profile: string;
}

const ListTeam = ({
  data,
  categories,
}: {
  data: Props[];
  categories: string;
}) => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data.map((item, index) => (
          <ItemTeam
            index={index}
            key={item.id}
            data={item}
            categories={categories}
          />
        ))}
      </div>
    </>
  );
};

export default ListTeam;
