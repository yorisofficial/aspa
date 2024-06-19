"use client"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Props = {
  id: number
  title: string
  at_date: string
  url: string
}

const ButtonBooking = ({data, invert}: {data: Props[]; invert: boolean}) => {
  return (
    <>
      <div className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger
            className={`px-6 py-3 font-black rounded-xl ${invert ? "bg-white text-primary" : "bg-primary text-white"}`}
          >
            Book now
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-4">
            <DropdownMenuLabel className="text-2xl">Select Session</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {data.map((item) => (
              <DropdownMenuItem key={item.id} className="px-6">
                <Link target="_blank" key={item.id} href={item.url} className="py-2 group">
                  <span className="group-hover:underline underline-offset-4 font-black">
                    #{item.title}
                  </span>
                  <br /> <span className="text-sm">Start at : {item.at_date}</span>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}

export default ButtonBooking
