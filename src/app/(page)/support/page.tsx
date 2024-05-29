"use client";
import BackButton from "@/app/Components/BackButton";
import ContainerContent from "@/app/Components/Container";
import { EnvelopeSimple, Headset, WhatsappLogo } from "@phosphor-icons/react";
import ItemFaq from "./components/ItemFaq";
import { Faq } from "@/app/lib/Faq";
const SupportPage = () => {
  return (
    <ContainerContent url="/support">
      <BackButton url="/">Back to main</BackButton>
      <div className="support-page flex flex-col">
        <div className="header-page border-buttom h-full w-full py-8">
          <h1 className="text-4xl font-black">FAQ</h1>
          <p className="text-base font-light">Find your question bellow</p>
        </div>
        <div className="faq-list border-buttom grid h-full w-full grid-cols-1 py-8 md:grid-cols-2 md:gap-8">
          {Faq.map((item, index) => (
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
          <div className="body-content space-y-2">
            <h1 className="flex items-center justify-start gap-2 font-black">
              <Headset size={32} />
              Customer support
            </h1>
            <div className="">
              <p className="flex items-center justify-start gap-2">
                <EnvelopeSimple size={16} />
                aspa-support@asiansurf.co
              </p>
              <p className="flex items-center justify-start gap-2">
                <WhatsappLogo size={16} />
                +62 851 7227 7338
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContainerContent>
  );
};

export default SupportPage;
