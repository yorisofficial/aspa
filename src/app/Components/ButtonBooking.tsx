"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  id: number;
  title: string;
  at_date: string;
  url: string;
};

const ButtonBooking = ({
  data,
  invert,
}: {
  data: Props[];
  invert: boolean;
}) => {
  return (
    <>
      <div className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger
            className={`relative rounded-xl px-6 py-3 font-black ${invert ? "bg-white text-primary" : "bg-primary text-white"}`}
          >
            Book now
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-4">
            <DropdownMenuLabel className="text-2xl">
              Select Session
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {data.map((item) => (
              <DropdownMenuItem key={item.id} className="px-6">
                <Link
                  target="_blank"
                  key={item.id}
                  href={item.url}
                  className="group py-2"
                >
                  <span className="font-black underline-offset-4 group-hover:underline">
                    #{item.title}
                  </span>
                  <br />{" "}
                  <span className="text-sm">Start at : {item.at_date}</span>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default ButtonBooking;
