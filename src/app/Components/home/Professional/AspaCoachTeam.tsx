"use client";
import Loading from "@/app/loading";
import React, { Suspense, useEffect, useState } from "react";
import ListTeam from "./ListTeam";
import Button from "../../Button";

const AspaCoachTeam = ({
  title,
  teamData,
  categories,
}: {
  title: string;
  categories: string;
  teamData: CoachProps[];
}) => {
  return (
    <div className="simple-container border-buttom flex flex-col items-start justify-start gap-8 py-8">
      <h1 className="text-3xl font-black">{title}</h1>
      <Suspense fallback={<Loading />}>
        <ListTeam data={teamData} categories={categories} />
      </Suspense>
    </div>
  );
};

export default AspaCoachTeam;
