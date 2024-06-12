"use client"
import React from "react"
import Button from "./Button"
import Link from "next/link"
import {useRouter} from "next/navigation"

const ButtonBooking = ({
  title,
  disable,
  variant,
  url,
}: {
  title: string
  disable: boolean
  variant: any
  url: string
}) => {
  const router = useRouter()
  const handleBooking = () => {
    router.push(url)
  }
  return (
    <>
      {url && (
        <Button
          onClick={handleBooking}
          label="Book now"
          variant={variant}
          className={disable ? "cursor-not-allowed" : ""}
        >
          {title}
        </Button>
      )}
    </>
  )
}

export default ButtonBooking
