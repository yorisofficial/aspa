import Loading from "@/app/loading";
import React, { Suspense } from "react";
import ListUsers from "./ListUsers";
interface Props {
  id: number;
  full_name: string;
  nickname: string;
  title: string;
  age: number;
  experience: string;
  level: string;
  profile: string;
  achievement: any;
  user_instagram: string;
}

const AspaCoreTeam = ({
  title,
  teamData,
  categories,
}: {
  title: string;
  teamData: Props[];
  categories: string;
}) => {
  const data = teamData;

  return (
    <div className="simple-container border-buttom flex flex-col items-start justify-start gap-8 py-8">
      <h1 className="text-3xl font-black">{title}</h1>
      <Suspense fallback={<Loading />}>
        <ListUsers data={data} categories={categories} />
      </Suspense>
    </div>
  );
};

export default AspaCoreTeam;
