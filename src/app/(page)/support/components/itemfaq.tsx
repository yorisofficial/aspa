"use client";
import { CaretRight } from "@phosphor-icons/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ItemFaq = ({ title, desc }: { title: string; desc: string }) => {
  const [isShow, setShow] = useState(false);
  const handleShow = () => {
    setShow(!isShow);
  };

  return (
    <>
      <div className="faq-item w-full">
        <motion.button
          initial={false}
          onClick={handleShow}
          className={`flex w-full items-center justify-between p-4 font-black ${isShow ? "bg-primary text-white" : "bg-white text-black"}`}
        >
          {title}
          <CaretRight
            size={24}
            className={`${isShow ? "rotate-90" : ""} duration-150`}
          />
        </motion.button>
        <AnimatePresence initial={false}>
          {isShow && (
            <motion.div>
              <p className="desc border-buttom h-full w-full bg-gray-50 p-4 font-light">
                {desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ItemFaq;
