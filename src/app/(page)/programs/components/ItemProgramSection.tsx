"use client";

import { NewAcademy } from "@/app/lib/program/academy/NewAcademy";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { randomString } from "@/app/Components/Events/SliderContentProgram";

const ItemProgramSection = ({
  id,
  oddBy,
  index,
}: {
  id: string;
  oddBy: boolean;
  index: number;
}) => {
  const SurfProgram = NewAcademy[index];
  const [active, setActive] = useState("");
  const handleAccordion = (id: string) => {
    if (active === id) {
      setActive("");
    } else {
      setActive(id);
    }
  };

  return (
    <div
      id={id}
      className="relative mt-8 flex h-fit w-full flex-col overflow-hidden md:h-screen"
    >
      <div className={`w-full ${oddBy ? "md:pl-32" : "md:pr-32"}`}>
        <Image
          src={SurfProgram.image}
          alt="..."
          width={2400}
          height={800}
          priority
          className="h-screen w-full object-cover"
        />
      </div>
      <div
        className={`relative md:absolute ${oddBy ? "md:left-4" : "md:right-4"} h-fit overflow-hidden border border-bordersolid bg-white p-5 drop-shadow-lg md:top-1/2 md:w-1/3 md:-translate-y-1/2`}
      >
        <h1 className="text-2xl font-bold uppercase">{SurfProgram.title}</h1>
        <div className="listing_program mt-4">
          {SurfProgram.listing_program.map((item, index) => (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.2 * index }}
              viewport={{ once: true }}
              key={item.id}
              className="w-full"
            >
              <button
                type="button"
                aria-label="program"
                onClick={() => handleAccordion(item.id)}
                className={`flex w-full items-start justify-between border-b py-2 text-start text-base uppercase ${active === item.id ? "font-bold text-brand" : "font-normal text-black"}`}
              >
                <span className="w-3/4">{item.title}</span>
                {active === item.id ? (
                  <CaretUp size={24} />
                ) : (
                  <CaretDown size={24} />
                )}
              </button>
              {active === item.id && (
                <div className="overflow-y-auto py-2">
                  <p className="text-sm md:text-base">{item.description}</p>
                  <div className="mt-4">
                    {item.price_list.length > 0 && (
                      <h2 className="text-lg font-bold uppercase">Pricing</h2>
                    )}
                    <ul className="pricing_program mt-4 w-full">
                      {item.price_list.map((price, index) => (
                        <li
                          key={index}
                          className="flex items-start justify-between bg-black px-4 py-2 text-white"
                        >
                          <span className="w-full text-start md:w-3/4">
                            {price.title}
                          </span>
                          <span className="w-full text-end md:w-1/2">
                            {price.pricing.toLocaleString("id-ID", {
                              style: "currency",
                              currency: "IDR",
                              minimumFractionDigits: 0,
                            })}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {item.additional && (
                      <p className="text-sm">
                        <br />*{item.additional}
                      </p>
                    )}
                    <div className="my-4 flex h-fit w-full items-end justify-end">
                      <Link
                        href={`/checkout/${item.id}/${randomString}`}
                        aria-label="Book now the program"
                        className="inline-block bg-black px-4 py-2 text-white"
                      >
                        Book now
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemProgramSection;
