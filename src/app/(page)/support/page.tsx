import ContainerContent from "@/app/Components/Container";
import React from "react";
import ContactComponent from "./components/ContactComponent";
import { ListFaqUser } from "./components/ListFaqUser";

const SupportPage = () => {
  return (
    <ContainerContent url="/support">
      <div className="content-support">
        <div className="header-page h-full w-full py-8">
          <h1 className="text-4xl font-black">FAQ</h1>
          <p className="text-base font-light">Find your question bellow</p>
        </div>
        <ListFaqUser />
        <div className="h-full w-full space-y-8 py-8">
          <div className="header-content space-y-8">
            <h1 className="text-base font-black">Customer support</h1>
            <p className="w-full xl:w-1/2">
              We are here to help you with any support issues you may have. Feel
              free to reach out and we&apos;ll be happy to assist you.
            </p>
          </div>
          <ContactComponent />
        </div>
      </div>
    </ContainerContent>
  );
};

export default SupportPage;
