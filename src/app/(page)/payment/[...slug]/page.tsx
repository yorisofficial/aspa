import React from "react";
import { NewAcademyDataPrice } from "@/app/lib/program/academy/NewDataPrograms";
import { redirect } from "next/navigation";

const PaymentPage = ({ params }: { params: { slug: string } }) => {
  const getId =
    NewAcademyDataPrice.find((item) => item.slug == params.slug)?.paymentUrl ||
    "";
  return redirect(getId);
};

export default PaymentPage;
