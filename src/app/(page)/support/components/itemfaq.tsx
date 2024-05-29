"use client";
import { CaretRight } from "@phosphor-icons/react";
import { useState } from "react";
import { motion } from "framer-motion";

const ItemFaq = ({ title, desc }: { title: string; desc: string }) => {
  const [isShow, setShow] = useState(false);
  const handleShow = () => {
    setShow(!isShow);
  };

  return (
    <>
      <div className="faq-item w-full">
        <button
          onClick={handleShow}
          className="flex w-full items-center justify-between bg-white py-4 font-black"
        >
          {title}
          <CaretRight
            size={24}
            className={`${isShow ? "rotate-90" : ""} duration-150`}
          />
        </button>
        {isShow && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }}>
            <p className="desc border-buttom w-full bg-[#EBEBEB] p-4 font-light">
              {desc}
            </p>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default ItemFaq;
