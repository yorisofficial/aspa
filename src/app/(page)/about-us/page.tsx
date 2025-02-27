import AccordionAboutUs from "@/app/Components/AccordionAboutUs";
import { ContentData } from "@/app/lib/Content";
import { AllTeams } from "@/app/lib/primary/AllTeams";
import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import HeaderSection from "./components/HeaderSection";
import HistoricalContent from "./components/HistoricalContent";
import TeamsPreviews from "./components/TeamsPreviews";

export const metadata = {
  title: "About Us",
  description: ContentData[0].description,
  openGraph: {
    title: "ASPA | About us",
    images: [
      {
        url: "/assets/projects/project_aspa-rising-star.webp",
        width: 800,
        height: 600,
        alt: "Og images",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Asian Surf Performance Academy",
  },
  twitter: {
    cardType: "summary_large_image",
    title: "About Us",
    description: ContentData[0].description,
    images: [
      {
        url: "/assets/projects/project_aspa-rising-star.webp",
        width: 800,
        height: 600,
        alt: "Og images",
      },
    ],
  },
};

const AcademyPage = () => {
  // get content about us
  const contentText = ContentData[0];

  return (
    <>
      <div className="min-h-screen w-full overflow-hidden pt-8">
        <HeaderSection
          title={contentText.quote}
          about={contentText.description}
        />
        <div className="image-width mt-4 h-[200px] w-full overflow-hidden md:mt-6 md:h-[400px] xl:mt-8">
          <Image
            src={"/Dump/WhatsApp Image 2025-01-29 at 14.21.31_fd7b41db.jpg"}
            alt="image"
            width={2400}
            height={1000}
            priority
            className="h-[200px] w-full object-cover md:h-[400px]"
          />
        </div>
        <HistoricalContent />
        <TeamsPreviews />
        <div className="image-width mt-4 h-[200px] w-full md:mt-6 md:h-[400px] xl:mt-8">
          <Image
            src={"/assets/projects/project_aspa-rising-star.webp"}
            alt="image"
            width={2400}
            height={800}
            className="h-full w-full object-cover md:h-[400px]"
          />
        </div>
        <div className="mx-auto mt-4 flex h-fit w-full flex-col justify-between px-4 md:mt-8 md:flex-row md:gap-5 md:px-16">
          <div className="content-info md:w-[400px]">
            <span className="font-bold uppercase">Locate ASPA</span>
            <h2 className="big-heading text-2xl uppercase md:text-4xl">
              Your Gateway to Surfing Success Starts Here!
            </h2>
            <Link
              href={
                "https://www.google.com/maps/search/Jl.+Subak+Sari+Barat,+Gg.+Sri+Kahyangan+No.77,+Tibubeneng,+Kec.+Kuta+Utara,+Kabupaten+Badung,+Bali+80361/@-8.6652396,115.1450258,19z?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D"
              }
              target="_blank"
              className="mt-4 flex w-fit items-center justify-center rounded-lg bg-black px-4 py-2 uppercase text-white duration-500 hover:bg-black/80"
            >
              Get directions
            </Link>
          </div>
          <div className="content-map mt-4 w-full md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d986.0691070784289!2d115.145025781627!3d-8.665239636119754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJl.%20Subak%20Sari%20Barat%2C%20Gg.%20Sri%20Kahyangan%20No.77%2C%20Tibubeneng%2C%20Kec.%20Kuta%20Utara%2C%20Kabupaten%20Badung%2C%20Bali%2080361!5e0!3m2!1sid!2sid!4v1738122410788!5m2!1sid!2sid"
              className="h-[400px] w-full"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademyPage;
