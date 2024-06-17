"use client"
import React from "react"
import Button from "./Button"
import {ArrowLeft} from "@phosphor-icons/react"
import {useRouter} from "next/navigation"

const BackButton = ({
  url,
  children,
  className,
}: {
  url: string
  children: React.ReactNode
  className?: string
}) => {
  const Router = useRouter()
  const handleBack = () => {
    Router.push(url)
  }
  return (
    <div className={`border-buttom w-full pb-8 ${className}`}>
      <Button onClick={handleBack} label="Back" variant="iconPrimary" className="group">
        <ArrowLeft className="duration-300 group-hover:-translate-x-1" />
        {children}
      </Button>
    </div>
  )
}

export default BackButton
