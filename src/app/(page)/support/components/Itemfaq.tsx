"use client";
import { CaretDown, CaretRight } from "@phosphor-icons/react";
import React, { useState } from "react";

interface Props {
  title: string;
  desc: string;
}

const ItemFaq = ({ title, desc }: Props) => {
  const [isShow, setShow] = useState(false);
  const handleShow = () => {
    setShow(!isShow);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={handleShow}
        className={`border-buttom flex w-full items-start justify-between p-4 text-start ${isShow ? "h-fit bg-primary text-white" : "h-full "}`}
      >
        {title}
        {isShow ? <CaretDown size={24} /> : <CaretRight size={24} />}
      </button>
      {isShow && (
        <div className="w-full bg-zinc-50 p-4">
          <p className="text-base font-light">{desc}</p>
        </div>
      )}
    </div>
  );
};

export default ItemFaq;
