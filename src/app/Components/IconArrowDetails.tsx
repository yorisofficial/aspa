"use client"
import {ArrowUpRight} from "@phosphor-icons/react"
import React from "react"

const IconArrowDetails = ({className}: {className?: string}) => {
  return (
    <>
      <div className={`absolute right-2 top-2 ${className}`}>
        <ArrowUpRight size={16} />
      </div>
    </>
  )
}

export default IconArrowDetails
