import RegulationComponents from "@/app/Components/Regulation/RegulationComponents";
import { DataRegulation } from "@/app/lib/DataRegulations";
import Loading from "@/app/loading";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const generateStaticParams = async () => {
  const data = DataRegulation;

  return data.map((tnc: any) => ({
    slug: tnc.language.toString(),
  }));
};

export const metadata: Metadata = {
  title: "Regulation | Asian Surf Performance Academy",
  description:
    "This page is intended to provide users with an understanding of the regulations governing the use of the Asian Surf Performance Academy website.",
};

export default function RegulationPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="mx-auto h-fit w-full max-w-5xl">
      <Suspense fallback={<Loading />}>
        <RegulationComponents setLang={params.slug} data={DataRegulation} />
      </Suspense>
    </div>
  );
}
