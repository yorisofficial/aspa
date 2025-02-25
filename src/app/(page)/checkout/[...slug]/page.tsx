import CheckoutForm from "@/app/Components/CheckoutForm";
import { DataBooking } from "@/app/lib/program/academy/DataBooking";
import { redirect } from "next/navigation";
import React from "react";
import { ToastContainer } from "react-toastify";

export default function CheckoutPage({ params }: { params: { slug: string } }) {
  const getTitle =
    DataBooking.find((item) => item.id == params.slug[0])?.resource || "";
  const getId =
    DataBooking.find((item) => item.id == params.slug[0])?.title || "";

  const getAllData = DataBooking.find((item) => item.id == params.slug[0]);

  return (
    <div className="w-full px-4 md:px-16">
      <ToastContainer />
      <CheckoutForm
        userId={getId}
        getProgramName={getTitle}
        getProgramId={getId}
        getAllData={getAllData}
      />
    </div>
  );
}
