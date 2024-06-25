"use client";
import React from "react";

const GetDateComponent = ({ data }: { data: string }) => {
  const postContent = data;
  const getInfoDate = postContent;
  const getFullYear = getInfoDate.slice(0, 4);
  const getMonth = getInfoDate.slice(5, 7);
  const getDate = getInfoDate.slice(8, 10);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getNameOfMonth = months[parseInt(getMonth) - 1];
  const datePost = `${getNameOfMonth} ${getDate}, ${getFullYear}`;

  return (
    <>
      <span>{datePost}</span>
    </>
  );
};

export default GetDateComponent;
