"use client";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ItemBlog = ({ data, index }: { data: any; index: number }) => {
  const item = data;
  const url = item.title.rendered.replaceAll(" ", "-").toLowerCase();

  return (
    <>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        key={item.id}
      >
        <Link href={`/blog/${item.id}/${url}`} className="w-full">
          <div className="group relative flex w-full items-start justify-between py-2">
            <div className="pr-8">
              <h1 className="text-sm underline-offset-4 group-hover:underline xl:text-base">
                {item.title.rendered}
              </h1>
            </div>
            <ArrowRightCircle
              size={24}
              className="flex-shrink-0 duration-500 group-hover:translate-x-4"
            />
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default ItemBlog;
