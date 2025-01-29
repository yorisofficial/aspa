import AccordionAboutUs from "@/app/Components/AccordionAboutUs";
import { ContentData } from "@/app/lib/Content";
import { AllTeams } from "@/app/lib/primary/AllTeams";
import Loading from "@/app/loading";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

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
  const teams = AllTeams;
  const motoBrand = [
    {
      title: "Vision",
      description:
        "Support Surf Athletes to become the worlds best surfers and people",
    },
    {
      title: "Mision",
      description:
        "Transform into a Performance Surf Academy that prioritizes athletes, is supported by coaches, focuses on performance, and integrates all aspects of performance",
    },
  ];
  return (
    <>
      <div className="min-h-screen w-full">
        <div className="section-header flex h-fit w-full flex-col gap-4 px-4 md:items-center md:justify-center md:px-10 xl:px-0">
          <div className="core-content flex w-full flex-col md:items-center md:text-center">
            <span className="font-bold uppercase text-brand">
              ASIAN SURF PERFORMANCE ACADEMY
            </span>
            <h2 className="big-heading text-xl uppercase md:w-3/4 md:text-3xl xl:w-1/2 xl:text-4xl">
              Pushing Boundaries, Sharpening Skills, Becoming the Best Surfer!
            </h2>
          </div>
          <p className="text-justify text-base md:text-center xl:w-3/4">
            {contentText.description}
          </p>
          <Link
            href={"/"}
            target="_blank"
            aria-label="Link to instagram"
            className="group flex w-fit items-center justify-center rounded-lg border-[0.5px] border-black p-1 duration-500 hover:border-brand"
          >
            <InstagramLogo
              size={24}
              weight="fill"
              className="duration-500 group-hover:text-brand"
            />
          </Link>
        </div>
        <div className="image-width mt-4 h-[200px] w-full md:mt-6 md:h-[300px] xl:mt-8">
          <Image
            src={
              "https://s3-alpha-sig.figma.com/img/c966/d565/cff55a4f8e18028e615d7c27b7b5da52?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJkR-Dm8N5p19nuRkVuJj8aPdDeLLqTScNnXCsrKaTsozcP0WsYsjOeyzRyxNCSukzjk4IY10PzXlu~oLl6fnDll-pqdAezjIfmpHaKweMwTaUhzs94Kz0XRyaLQtuqhrGJ77b6VVHhku-IYNOZDRF9eFxvy6PJFz7E4jqiFGqsx7gHMDCFwt8W4Tlldn3SsnocVzgZbz6LQ9eNsfR3zUar856PwF9Z09Mm9HRXgM~UF37EXipp14fFIrPAsqlZi1ZZf6~VUECQI7GQRwrp9RDDhL0N11gcJETP3cTCADwdoQql15OcrsDjf5d0v~rYNtMY9pFfBhPLteMcVoiqBog__"
            }
            alt="image"
            width={2400}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="our-teams mx-auto mt-4 flex h-fit w-full max-w-6xl flex-col items-start justify-between px-4 md:mt-6 md:flex-row md:gap-5 md:px-10 xl:mt-8 xl:px-0">
          <div className="core-content md:w-3/4">
            <h2 className="big-heading text-2xl uppercase md:text-4xl">
              Where ASC&apos;s Expertise Meets Your Surfing Ambitions
            </h2>
          </div>
          <p className="mt-4 w-full text-justify text-base md:mt-0">
            Behind and supporting ASPA is the Asian Surf Cooperative or ASC,
            with over 20 years of experience in the surf industry. As a
            professional surfing organization, ASC has nearly two decades of
            experience in organizing, managing, and supporting surfing events
            across the Asian Region, from local boardriders club competitions to
            World Championship Tour events, including the recent 2022 Quiksilver
            Pro G-Land. Bali offers everything a surfer needs to develop and
            improve their skills to become one of the best surfers in the world.
            With a wide variety of waves, both reef and sand, and a vibrant
            surfing community, ASPA provides a specialized space for surfers to
            enjoy and learn. With top coaches and trainers, athletes have access
            to various activities and training sessions. At ASPA, we aim to
            provide the best performance experience for the best surfers,
            offering fully equipped facilities and an environment tailored for
            success.
          </p>
        </div>
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
        <div className="our-teams mx-auto mt-4 h-fit w-full max-w-6xl px-4 md:mt-6 md:px-10 md:text-center xl:mt-8 xl:px-0">
          <h2 className="big-heading text-2xl uppercase md:text-center md:text-4xl">
            meet everyone who made this posible
          </h2>
          <div className="content-list h-fit w-full">
            <div className="mt-4 grid h-fit w-full grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {teams.splice(0, 8).map((item) => (
                <div key={item.id} className="group">
                  <div className="img-profile h-[200px] w-full overflow-hidden rounded-lg">
                    <Image
                      src={item.profile}
                      alt="profile"
                      width={500}
                      height={500}
                      priority
                      className="h-full w-full rounded-lg object-cover duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="body-data mt-2 flex flex-col items-center justify-center">
                    <h2 className="text-center text-base font-bold uppercase md:text-xl">
                      {item.full_name}
                    </h2>
                    <span className="text-center text-sm font-light">
                      {item.title}
                    </span>
                    <Link
                      target="_blank"
                      aria-label={`Instagram ${item.full_name}`}
                      href={item.user_instagram}
                      className="mt-2 block"
                    >
                      <InstagramLogo size={24} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex w-full items-center justify-center">
              <Link
                href="/team"
                aria-label="See more teams"
                className="flex items-center gap-2 rounded bg-black px-4 py-2 text-white"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
        <div className="image-width mt-4 h-[200px] w-full md:mt-6 md:h-[300px] xl:mt-8">
          <Image
            src={
              "https://s3-alpha-sig.figma.com/img/3e9c/a1b7/31529b4fa795af9d1c790df45fded1c2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nlbwuwXz6OuJy8CYOgy6uSdsCiPMXfC7~uQN~-oOOl3hg6-0~PBAUJ7mQ-KC2R7jx9r~hl9eU7Rj1W2hDiUT4DedviUnM6pZkb1WPFAZPNX3OM5xjMVaVZ3uFcHIJ7I4u64B5HkmdOIhE7JdZHnCR5sSzM2vszVfgr0U~6FNQzIevYz~1VPB7e2bgR5f7fkwt0kj8ipHmwyBQ6uOIIj~VtKXLcb4rdD3I~yky-YbJqIGF5FSKnnRaLKSQh-m1XTiSJ2Q5E-KsHivGyPQ2iu4WiBcW9RDKlEB9sYk-5tgKq7Q0Eehx09w11SlW4XJ3mi-PpFlcisoz8pbthYFYS8S~Q__"
            }
            alt="image"
            width={2400}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mx-auto flex h-fit w-full max-w-6xl flex-col justify-between px-4 md:mt-6 md:flex-row md:gap-5 md:px-10 xl:mt-8 xl:px-0">
          <div className="content-info w-[400px]">
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
