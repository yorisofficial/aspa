"use client";
import React, { Suspense } from "react";
import ItemService from "./ItemService";
import Loading from "../loading";

interface Props {
  id: number;
  title: string;
  desc: string;
  pathImage: string;
}

const ListService = ({ data }: { data: Props[] }) => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="list-service grid w-full grid-cols-2 gap-4 xl:grid-cols-2 xl:gap-8">
        {data.map((item) => (
          <ItemService key={item.id} dataItem={item} />
        ))}
      </div>
    </Suspense>
  );
};

export default ListService;
