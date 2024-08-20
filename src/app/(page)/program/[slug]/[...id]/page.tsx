"use client";
import React, { useEffect, useState } from "react";
import BackButton from "@/app/Components/BackButton";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { AspaProgram } from "@/app/Components/home/Hero/HeroSection2";
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

  // get data
  const getData = AspaProgram.find(
    (item) => item.id.toString() === params.slug,
  );

  const dataSession = getData?.session.find(
    (item) => item.title === getSession,
  );

  const [form, setForm] = useState({
    id: "",
    fullname: "",
    email: "",
    phone: "",
    program_selected: getData?.title,
    session_selected: "",
    agreement: "",
    created_at: "",
  });
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    form.id = Math.random().toString(36).substring(2, 14);
    form.created_at = new Date().toLocaleString();
  }, [form]);

  const handleSession = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, session_selected: e.target.value });
    router.replace(`${pathName}?session=${e.target.value}`);
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
    setDisableButton(false);

    router.push(`${dataSession?.url}`);
  };

  return (
    <ContainerContent url="">
      <BackButton url="" back={true}>
        Back to before
      </BackButton>
      <div className="content mx-auto mt-4 h-fit space-y-8 xl:w-[600px]">
        <div className="fixed bottom-0 left-0 z-40 h-fit w-fit">
          {form.id} | {form.created_at}
        </div>
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
                <span className="">Selected program</span>
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
                <span className="">Select session</span>
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
            <div className="details-profile flex flex-col gap-2 border-y py-2">
              <h1 className="text-2xl font-bold">Input your details</h1>
              <label htmlFor="full_name" className="flex w-full flex-col gap-2">
                <span className="">Full name</span>
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
                <span className="">Active phone number</span>
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
                <span className="">Email address</span>
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
            <div className="footer-section flex flex-col gap-4">
              <div className="flex flex-col border-b py-2">
                <span>Total price</span>
                <div className="flex items-end justify-start gap-3">
                  <h1 className="text-2xl font-bold">
                    {dataSession?.pricing || "IDR 0"}
                  </h1>
                  {form.session_selected !== "" && <small>/ Person</small>}
                </div>
              </div>
              <label htmlFor="termservice" className="flex items-center">
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
                <span className="ml-2 text-xs font-light">
                  Yes, I agree terms & regulation service
                </span>
              </label>
              <div className="w-full">
                <button
                  type="submit"
                  disabled={disableButton}
                  aria-label="submit form"
                  className="btn-primary text-bg-foreground rounded bg-black px-5 py-2 text-white disabled:cursor-not-allowed disabled:bg-black/10"
                >
                  {disableButton
                    ? "Loading..."
                    : "Send and continue to payment"}
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
