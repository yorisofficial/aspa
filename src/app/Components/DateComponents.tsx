"use client";

import React from "react";
import Moment from "react-moment";

const DateComponents = ({ data }: { data: string }) => {
  return (
    <div>
      <Moment format="YYYY-MM-DD">{data}</Moment>
    </div>
  );
};

export default DateComponents;
