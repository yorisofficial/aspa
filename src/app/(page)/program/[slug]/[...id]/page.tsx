"use client";
import React, { useEffect, useState } from "react";
import BackButton from "@/app/Components/BackButton";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { AspaProgram } from "@/app/lib/program/academy/AspaAcademy";
import ContainerContent from "@/app/Components/Container";
import axios from "axios";

const BookingSession = ({
  params,
}: {
  params: { slug: string; id: string };
}) => {
  //initial needs
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  // get session
  const getSession = searchParams.get("session");
  const getUserId = searchParams.get("user");

  // get data
  const getData = AspaProgram.find(
    (item) => item.id.toString() === params.slug,
  );

  const dataSession = getData?.session.find(
    (item) => item.title === getSession,
  );

  const [form, setForm] = useState({
    id: getUserId,
    fullname: "",
    email: "",
    phone: "",
    program_selected: getData?.title,
    session_selected: getSession,
    agreement: "",
    created_at: "",
  });

  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    getData ?? redirect("/not-found");
    form.created_at = new Date().toString();
  }, [getData, form]);

  const handleSession = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, session_selected: e.target.value });
    router.replace(`${pathName}?user=${getUserId}&session=${e.target.value}`);
  };

  const dataUrl = "https://sheetdb.io/api/v1/0c37z0pcute1t";

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
        agreement: form.agreement,
        created_at: form.created_at,
      });
      alert("Your form was submit, let's finish the payment");
    } catch (error: Error | any) {
      alert("Data Not Submitted:" + error.message);
    }
    setForm({
      id: getUserId,
      fullname: "",
      email: "",
      phone: "",
      program_selected: getData?.title,
      session_selected: getSession,
      agreement: "",
      created_at: "",
    });
    setDisableButton(false);

    router.push(`${dataSession?.url}`);
  };

  return (
    <ContainerContent url="">
      <BackButton url="" back={true}>
        Back to before
      </BackButton>

      <div className="content mx-auto mt-4 h-fit space-y-8 xl:w-[600px]">
        <div className="flex flex-col gap-4 rounded-xl border border-bordersolid bg-foreground p-6 drop-shadow-xl">
          <div className="mx-auto flex flex-col gap-2 text-center">
            <span>Finish your booking</span>
            <h1 className="text-3xl font-bold uppercase">ASPA Program</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="details-booking flex flex-col gap-2 border-t py-2">
              <h1 className="text-2xl font-bold">Details booking</h1>
              <label
                htmlFor="selected_program"
                className="flex w-full flex-col gap-4"
              >
                <span className="text-required">Selected program</span>
                <input
                  type="text"
                  name="selected_program"
                  id="selected_program"
                  disabled
                  value={getData?.title}
                  className="peer w-full rounded-lg border border-bordersolid bg-foreground px-4 py-2 font-medium capitalize outline-none focus:outline-2 focus:outline-black"
                />
              </label>
              <label htmlFor="session" className="flex w-full flex-col gap-2">
                <span className="text-required">Select session</span>
                <select
                  name="session"
                  required
                  id="session"
                  onChange={handleSession}
                  className="peer w-full rounded-lg border border-bordersolid bg-foreground px-4 py-2 font-medium capitalize outline-none focus:outline-2 focus:outline-black"
                >
                  <option value="">-- select session</option>
                  <option value="private">Private</option>
                  <option value="group">Group</option>
                </select>
                <small className="hidden font-normal text-red peer-invalid:block">
                  Please select session
                </small>
              </label>
            </div>
            <div className="details-profile flex flex-col gap-2 border-b py-2">
              <h1 className="text-2xl font-bold">Input your details</h1>
              <label htmlFor="full_name" className="flex w-full flex-col gap-2">
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
                  className="peer w-full rounded-lg border border-bordersolid bg-foreground px-4 py-2 outline-none focus:outline-2 focus:outline-black"
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
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="peer w-full rounded-lg border border-bordersolid bg-foreground px-4 py-2 outline-none focus:outline-2 focus:outline-black"
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
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="peer w-full rounded-lg border border-bordersolid bg-foreground px-4 py-2 outline-none focus:outline-2 focus:outline-black"
                />
                <small className="hidden font-normal text-red peer-invalid:block">
                  Please enter valid email address
                </small>
              </label>
            </div>
            <div className="footer-section mt-4 flex flex-col gap-4">
              <label htmlFor="termservice" className="flex items-center gap-1">
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
          </form>
        </div>
      </div>
    </ContainerContent>
  );
};

export default BookingSession;
