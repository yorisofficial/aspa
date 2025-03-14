"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import emailjs from "emailjs-com";
import { Info } from "@phosphor-icons/react";
import moment from "moment";

const CheckoutForm = ({
  userId,
  getCategories,
  getProgramName,
  getProgramId,
  getAllData,
}: {
  userId: string;
  getCategories: string;
  getProgramName: string;
  getProgramId: string;
  getAllData: any;
}) => {
  const dataUrl = "https://sheetdb.io/api/v1/0c37z0pcute1t";
  const [disableButton, setDisableButton] = useState(false);
  const [form, setForm] = useState({
    id: userId,
    fullname: "",
    email: "",
    phone: "",
    program_selected: getCategories,
    session_selected: getProgramName,
    packages_selected: "",
    agreement: "",
    created_at: "",
  });

  // handle created_at
  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      created_at: moment().format("DD MMMM YYYY | hh:mm:ss A"),
    }));
  }, [form]);

  //submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisableButton(true);
    try {
      await axios.post(dataUrl, {
        uuid: form.id,
        name: form.fullname,
        phone: form.phone,
        email: form.email,
        selected_program: form.program_selected,
        selected_session: form.session_selected,
        packages_selected: form.packages_selected,
        agreement: form.agreement,
        created_at: form.created_at,
      });

      // send to email with mailjs
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_MAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_MAILJS_TEMPLATE_ID!,
        {
          uuid: form.id,
          name: form.fullname,
          phone: form.phone,
          email: form.email,
          selected_program: form.program_selected,
          selected_session: form.session_selected,
          packages_selected: form.packages_selected,
          agreement: form.agreement,
          created_at: form.created_at,
        },
        process.env.NEXT_PUBLIC_MAILJS_PUBLIC_KEY!,
      );
      toast.success("Email sent successfully!");
    } catch (error: Error | any) {
      toast.error("Failed to send email. Please try again later.");
    }

    // clear form
    setForm({
      id: "",
      fullname: "",
      email: "",
      phone: "",
      program_selected: getProgramName,
      session_selected: getProgramId,
      packages_selected: "",
      agreement: "",
      created_at: "",
    });
    setDisableButton(false);

    // router.push(`${dataSession?.url}`);
  };

  return (
    <div className="relative w-full">
      {/* <div className="absolute right-0 top-32 flex w-[400px] flex-col gap-2 bg-white p-4 drop-shadow-lg">
        <h1 className="exmple_input text-xl font-light uppercase">
          Its not error
        </h1>
        <hr />
        <div className="flex flex-col space-y-2 divide-y">
          <p className="w-full text-wrap">
            <strong>id:</strong> {form.id}
          </p>
          <p className="w-full text-wrap">
            <strong>fullname:</strong> {form.fullname}
          </p>
          <p className="w-full text-wrap">
            <strong>email</strong>: {form.email}
          </p>
          <p className="w-full text-wrap">
            <strong>phone:</strong> {form.phone}
          </p>
          <p className="w-full text-wrap">
            <strong>created_at:</strong> {form.created_at}
          </p>
          <p className="w-full text-wrap">
            <strong>agreement:</strong> {form.agreement}
          </p>
          <p className="w-full text-wrap">
            <strong>program:</strong> {form.program_selected}
          </p>
          <p className="w-full text-wrap">
            <strong>session</strong>: {form.session_selected}
          </p>
          <p className="w-full text-wrap">
            <strong>packages / details:</strong> {form.packages_selected}
          </p>
        </div>
      </div> */}
      <div className="content mx-auto mt-4 h-fit space-y-8 py-8">
        <div className="flex w-full flex-col gap-4 rounded-xl bg-white">
          <div className="mx-auto flex flex-col gap-2 text-center">
            <span>Finish your booking</span>
            <h1 className="text-3xl font-bold uppercase">ASPA Program</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-4 md:flex-row md:gap-5"
          >
            <div className="details-booking flex h-fit w-full flex-col gap-2 rounded-xl border border-bordersolid bg-foreground p-6">
              <h1 className="text-2xl font-bold">Details booking</h1>
              <label htmlFor="selected_program" className="">
                <span className="">Selected program</span>
                <input
                  type="text"
                  name="selected_program"
                  id="selected_program"
                  disabled
                  value={form.program_selected}
                  className="mt-2 h-10 w-full rounded-lg border border-bordersolid bg-black/5 px-4 font-medium capitalize outline-none focus:outline-2 focus:outline-black"
                />
              </label>
              <label htmlFor="selected_session" className="">
                <span className="">Selected session</span>
                <input
                  type="text"
                  name="selected_session"
                  id="selected_session"
                  disabled
                  value={form.session_selected || ""}
                  className="mt-2 h-10 w-full rounded-lg border border-bordersolid bg-black/5 px-4 font-medium capitalize outline-none focus:outline-2 focus:outline-black"
                />
              </label>
              {getProgramId === "c1" ? (
                <label htmlFor="select_pricing">
                  <span className="text-required">Details</span>
                  <textarea
                    name="select_pricing"
                    id="select_pricing"
                    required
                    onChange={(e) => {
                      setForm({
                        ...form,
                        packages_selected: e.target.value,
                      });
                    }}
                    minLength={100}
                    placeholder="Enter details"
                    className="mt-2 h-32 w-full rounded-lg border border-bordersolid bg-black/5 p-4 text-sm font-medium outline-none outline-1 valid:outline-green invalid:outline-red focus:outline-2 valid:focus:outline-green invalid:focus:outline-red"
                  />
                  <span>
                    <small>Min 100 characters</small>
                  </span>
                </label>
              ) : (
                <label htmlFor="select_pricing">
                  <span className="text-required">Select packages</span>
                  <select
                    name="select_pricing"
                    id="sleect_pricing"
                    required
                    onChange={(e) => {
                      setForm({
                        ...form,
                        packages_selected: e.target.value,
                      });
                    }}
                    className="mt-2 h-10 w-full rounded-lg bg-black/5 px-4 py-2"
                  >
                    <option value="" selected>
                      Select packages
                    </option>
                    {getAllData.price_list.map((item: any, index: number) => (
                      <option
                        key={index}
                        value={`${item.title}-${item.pricing.toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 })}`}
                      >
                        {item.title} -{" "}
                        {item.pricing.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        })}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              {getAllData.additional && (
                <span className="mt-4 flex items-start gap-2 text-sm">
                  <Info size={16} />
                  {getAllData.additional}
                </span>
              )}
            </div>
            <div className="flex w-full flex-col gap-2 rounded-xl border border-bordersolid bg-foreground p-6">
              <div className="details-profile flex flex-col gap-2 border-b py-2">
                <h1 className="text-2xl font-bold">Input your details</h1>
                <label
                  htmlFor="full_name"
                  className="flex w-full flex-col gap-2"
                >
                  <span className="text-required">Full name</span>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    placeholder="Ex: John Doe"
                    required
                    value={form.fullname}
                    minLength={3}
                    onChange={(e) =>
                      setForm({ ...form, fullname: e.target.value })
                    }
                    className="peer h-10 w-full rounded-lg border border-bordersolid bg-foreground px-4 outline-none focus:outline-2 focus:outline-black"
                  />
                  <small className="hidden font-normal text-red peer-invalid:block">
                    Please enter your full name
                  </small>
                </label>
                <label
                  htmlFor="phone_number"
                  className="flex w-full flex-col gap-2"
                >
                  <span className="text-required">Active phone number</span>
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    placeholder="Ex: 6285188446699"
                    required
                    inputMode="numeric"
                    value={form.phone}
                    minLength={8}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="peer h-10 w-full rounded-lg border border-bordersolid bg-foreground px-4 outline-none focus:outline-2 focus:outline-black"
                  />
                  <small className="hidden font-medium text-brand peer-valid:block">
                    This phone number will be use as emergency contact
                  </small>
                  <small className="hidden font-normal text-red peer-invalid:block">
                    Please enter valid phone number
                  </small>
                </label>
                <label
                  htmlFor="email_address"
                  className="flex w-full flex-col gap-2"
                >
                  <span className="text-required">Email address</span>
                  <input
                    type="email"
                    name="email_address"
                    id="email_address"
                    placeholder="Ex: example@example.com"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="peer h-10 w-full rounded-lg border border-bordersolid bg-foreground px-4 outline-none focus:outline-2 focus:outline-black"
                  />
                  <small className="hidden font-normal text-red peer-invalid:block">
                    Please enter valid email address
                  </small>
                </label>
              </div>
              <div className="footer-section mt-4 flex flex-col gap-4">
                <label
                  htmlFor="termservice"
                  className="flex items-center gap-1"
                >
                  <input
                    type="checkbox"
                    name="termservice"
                    id="termservice"
                    required
                    checked={form.agreement === "Yes"}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        agreement: e.target.checked ? "Yes" : "No",
                      })
                    }
                    className="peer h-4 w-4 rounded-xl accent-primary"
                  />
                  <span className="text-requiredml-2 text-xs font-light">
                    Yes, I agree terms & regulation service
                  </span>
                </label>
                <div className="w-full">
                  <button
                    type="submit"
                    disabled={disableButton}
                    aria-label="submit form"
                    className="btn-primary text-bg-foreground flex items-center justify-center gap-4 rounded bg-black px-5 py-2 text-white disabled:cursor-not-allowed disabled:bg-black/10"
                  >
                    {disableButton ? "Loading..." : "Send"}
                    {!disableButton && (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="#f2e3e3"
                          viewBox="0 0 256 256"
                        >
                          <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
