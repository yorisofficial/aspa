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
    title: "About Us",
    images: [
      {
        url: "https://s3-alpha-sig.figma.com/img/c966/d565/cff55a4f8e18028e615d7c27b7b5da52?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJkR-Dm8N5p19nuRkVuJj8aPdDeLLqTScNnXCsrKaTsozcP0WsYsjOeyzRyxNCSukzjk4IY10PzXlu~oLl6fnDll-pqdAezjIfmpHaKweMwTaUhzs94Kz0XRyaLQtuqhrGJ77b6VVHhku-IYNOZDRF9eFxvy6PJFz7E4jqiFGqsx7gHMDCFwt8W4Tlldn3SsnocVzgZbz6LQ9eNsfR3zUar856PwF9Z09Mm9HRXgM~UF37EXipp14fFIrPAsqlZi1ZZf6~VUECQI7GQRwrp9RDDhL0N11gcJETP3cTCADwdoQql15OcrsDjf5d0v~rYNtMY9pFfBhPLteMcVoiqBog__",
        width: 800,
        height: 600,
        alt: "Og images",
      },
    ],
    type: "website",
    locale: "id_ID",
    siteName: "Asian Surf Performance Academy",
  },
  twitter: {
    cardType: "summary_large_image",
    title: "About Us",
    description: ContentData[0].description,
    images: [
      {
        url: "https://s3-alpha-sig.figma.com/img/c966/d565/cff55a4f8e18028e615d7c27b7b5da52?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJkR-Dm8N5p19nuRkVuJj8aPdDeLLqTScNnXCsrKaTsozcP0WsYsjOeyzRyxNCSukzjk4IY10PzXlu~oLl6fnDll-pqdAezjIfmpHaKweMwTaUhzs94Kz0XRyaLQtuqhrGJ77b6VVHhku-IYNOZDRF9eFxvy6PJFz7E4jqiFGqsx7gHMDCFwt8W4Tlldn3SsnocVzgZbz6LQ9eNsfR3zUar856PwF9Z09Mm9HRXgM~UF37EXipp14fFIrPAsqlZi1ZZf6~VUECQI7GQRwrp9RDDhL0N11gcJETP3cTCADwdoQql15OcrsDjf5d0v~rYNtMY9pFfBhPLteMcVoiqBog__",
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
  const motoBrand = [
    {
      title: "Vision",
      description:
        "To be a global leader in surf performance and education, inspiring individuals to achieve excellence, embrace the ocean responsibly, and contribute to the growth and sustainability of surfing worldwide.",
    },
    {
      title: "Mision",
      description:
        "To empower surfers of all levels through high-quality coaching, surf education, and professional development, fostering a community that values performance, sustainability, and growth both in and out of the water.",
    },
  ];
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
        <div className="moto-section tems-start mx-auto mt-4 flex h-fit w-full max-w-6xl flex-col justify-between px-4 md:mt-6 md:gap-5 md:px-10 xl:px-0">
          <Suspense fallback={<Loading />}>
            {motoBrand.map((item, index) => (
              <AccordionAboutUs
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </Suspense>
        </div>
        <TeamsPreviews />
        <div className="image-width mt-4 h-[200px] w-full md:mt-6 md:h-[400px] xl:mt-8">
          <Image
            src={
              "https://s3-alpha-sig.figma.com/img/3e9c/a1b7/31529b4fa795af9d1c790df45fded1c2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nlbwuwXz6OuJy8CYOgy6uSdsCiPMXfC7~uQN~-oOOl3hg6-0~PBAUJ7mQ-KC2R7jx9r~hl9eU7Rj1W2hDiUT4DedviUnM6pZkb1WPFAZPNX3OM5xjMVaVZ3uFcHIJ7I4u64B5HkmdOIhE7JdZHnCR5sSzM2vszVfgr0U~6FNQzIevYz~1VPB7e2bgR5f7fkwt0kj8ipHmwyBQ6uOIIj~VtKXLcb4rdD3I~yky-YbJqIGF5FSKnnRaLKSQh-m1XTiSJ2Q5E-KsHivGyPQ2iu4WiBcW9RDKlEB9sYk-5tgKq7Q0Eehx09w11SlW4XJ3mi-PpFlcisoz8pbthYFYS8S~Q__"
            }
            alt="image"
            width={2400}
            height={800}
            className="h-full w-full object-cover md:h-[400px]"
          />
        </div>
        <div className="mx-auto mt-4 flex h-fit w-full max-w-6xl flex-col justify-between px-4 md:mt-0 md:flex-row md:gap-5 md:px-10 xl:mt-8 xl:px-0">
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
