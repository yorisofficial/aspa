import React from "react";
import { FAQ } from "@/app/lib/FAQ";
import ItemFaq from "./Itemfaq";

const ListFaq = () => {
  return (
    <div className="faq-list grid h-full w-full grid-cols-1 gap-4 py-8 md:grid-cols-2">
      {FAQ.map((item, index) => (
        <ItemFaq key={index} title={item.title} desc={item.description} />
      ))}
    </div>
  );
};

export default ListFaq;
