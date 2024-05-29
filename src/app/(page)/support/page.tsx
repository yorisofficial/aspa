import ContainerContent from "@/app/Components/Container";
import React from "react";
import { FAQ } from "@/app/lib/FAQ";
import ItemFaq from "./components/Itemfaq";
import ContactComponent from "./components/ContactComponent";

const SupportPage = () => {
  return (
    <ContainerContent url="/support">
      <div className="content-support">
        <div className="header-page border-buttom h-full w-full py-8">
          <h1 className="text-4xl font-black">FAQ</h1>
          <p className="text-base font-light">Find your question bellow</p>
        </div>
        <div className="faq-list border-buttom grid h-full w-full grid-cols-1 gap-4 py-8 md:grid-cols-2">
          {FAQ.map((item, index) => (
            <ItemFaq key={index} title={item.title} desc={item.description} />
          ))}
        </div>
        <div className="h-full w-full space-y-8 py-8">
          <div className="header-content space-y-8">
            <h1 className="text-base font-black">Customer support</h1>
            <p className="w-full xl:w-1/2">
              Lorem ipsum dolor sit amet consectetur. Nisl turpis mollis integer
              id morbi tincidunt quis sapien. Sed quis turpis viverra mi velit
              aliquam. Nisl interdum et sed in ornare lorem morbi.
            </p>
          </div>
          <ContactComponent />
        </div>
      </div>
    </ContainerContent>
  );
};

export default SupportPage;
