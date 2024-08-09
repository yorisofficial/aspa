"use client";
import { ChatCenteredText } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import { Support } from "../lib/Support";
import { motion } from "framer-motion";

const BottomNavigation = ({ data }: { data?: string }) => {
  return (
    <div
      style={{
        boxShadow: "#000000 0px 3px 8px",
      }}
      className="fixed bottom-0 left-0 w-full border border-bordersolid bg-white md:hidden"
    >
      <div className="flex items-center justify-center gap-4 p-4">
        <Link href={`/program/${data}/booking`} className="flex w-full">
          <motion.button
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            exit={{ scale: 1 }}
            className="flex w-full items-center justify-center rounded-lg bg-black py-3 text-white"
          >
            Book now
          </motion.button>
        </Link>
        <motion.a
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          exit={{ scale: 1 }}
          target="_blank"
          href={`https://wa.me/${Support[0].url}`}
          className="flex w-fit items-center justify-center rounded-lg bg-black p-3 text-white"
        >
          <ChatCenteredText size={24} />
        </motion.a>
      </div>
    </div>
  );
};

export default BottomNavigation;
