import CheckoutForm from "@/app/Components/CheckoutForm";
import { DataBooking } from "@/app/lib/program/academy/DataBooking";
import Loading from "@/app/loading";
import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";

export default function CheckoutPage({ params }: { params: { slug: string } }) {
  const getCategories =
    DataBooking.find((item) => item.id == params.slug[0])?.resource || "";
  const getName =
    DataBooking.find((item) => item.id == params.slug[0])?.title || "";
  const getId = DataBooking.find((item) => item.id == params.slug[0])?.id || "";

  const getAllData = DataBooking.find((item) => item.id == params.slug[0]);

  return (
    <div className="w-full px-4 md:px-16">
      <ToastContainer />
      <Suspense fallback={<Loading />}>
        <CheckoutForm
          userId={getId}
          getCategories={getCategories}
          getProgramName={getName}
          getProgramId={getId}
          getAllData={getAllData}
        />
      </Suspense>
    </div>
  );
}
