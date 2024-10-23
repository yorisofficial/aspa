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
  const number = 6;
  const [addNumber, setNumber] = useState(number);

  const valueData = addNumber;
  const sliceData = teamData.slice(0, valueData);

  const handleIncrease = () => {
    if (valueData < teamData.length) {
      setNumber(valueData + number);
      localStorage.setItem("addNumber", JSON.stringify(valueData + number));
    } else {
      setNumber(valueData);
      localStorage.setItem("addNumber", JSON.stringify(valueData));
    }
  };

  const handleDecrease = () => {
    if (localStorage.getItem("addNumber") && valueData > number) {
      setNumber(valueData - number);
      localStorage.setItem("addNumber", JSON.stringify(valueData - number));

      // localStorage.removeItem("addNumber");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("addNumber")) {
      setNumber(JSON.parse(localStorage.getItem("addNumber")!));
    }
  }, []);

  return (
    <div className="simple-container border-buttom flex flex-col items-start justify-start gap-8 py-8">
      <h1 className="text-3xl font-black">{title}</h1>
      <Suspense fallback={<Loading />}>
        <ListTeam data={sliceData} categories={categories} />
        {teamData.length > valueData ? (
          <div className="flex w-full items-center justify-center py-8">
            <Button
              variant="primary"
              label="add more team"
              className=""
              onClick={handleIncrease}
            >
              Load more
            </Button>
          </div>
        ) : (
          <div className="flex w-full items-center justify-center py-8">
            <Button
              variant="border"
              label="add more team"
              className=""
              onClick={handleDecrease}
            >
              Show less
            </Button>
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default AspaCoachTeam;
