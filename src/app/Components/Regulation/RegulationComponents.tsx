"use client";

import { PropsRegulationData } from "@/app/lib/DataRegulations";
import { Link } from "@phosphor-icons/react";
import React from "react";

export default function RegulationComponents({
  data,
  setLang,
}: {
  data: PropsRegulationData[];
  setLang: string;
}) {
  const selectedLanguage = data.find((item) => item.language == setLang)?.data;

  return (
    <div className="h-fit w-full py-6">
      <div className="">
        <h1 className="text-2xl font-bold uppercase">Term and regulations</h1>
      </div>
      {selectedLanguage && (
        <ul className="h-fit w-full">
          {selectedLanguage.map((item, index) => (
            <li key={index} className="item_regulation group mt-4 ">
              <div className="relative flex items-center gap-2 uppercase">
                <Link
                  size={24}
                  className="absolute right-full top-0 -translate-x-2 opacity-0 transition-all duration-500 group-hover:opacity-100"
                />
                <span className="text-lg font-medium">{item.title}</span>
              </div>
              <p className="w-full text-justify">{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
