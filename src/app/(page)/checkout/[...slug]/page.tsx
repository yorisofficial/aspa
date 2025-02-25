import CheckoutForm from "@/app/Components/CheckoutForm";
import { DataBooking } from "@/app/lib/program/academy/DataBooking";
import Loading from "@/app/loading";
import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";

export default function CheckoutPage({ params }: { params: { slug: string } }) {
  const getTitle =
    DataBooking.find((item) => item.id == params.slug[0])?.resource || "";
  const getId = params.slug[1];

  const getAllData = DataBooking.find((item) => item.id == params.slug[0]);

  return (
    <div className="w-full px-4 md:px-16">
      <ToastContainer />
      <Suspense fallback={<Loading />}>
        <CheckoutForm
          userId={getId}
          getProgramName={getTitle}
          getProgramId={getId}
          getAllData={getAllData}
        />
      </Suspense>
    </div>
  );
}
