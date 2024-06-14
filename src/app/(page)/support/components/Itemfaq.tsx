"use client"
import {CaretDown, CaretRight} from "@phosphor-icons/react"
import React, {useState} from "react"

interface Props {
  title: string
  desc: string
}

const ItemFaq = ({title, desc}: Props) => {
  const [isShow, setShow] = useState(false)
  const handleShow = () => {
    setShow(!isShow)
  }

  return (
    <div className="relative w-full h-fit border-buttom">
      <button
        onClick={handleShow}
        className={`flex w-full items-start justify-between py-4 text-start ${isShow ? "h-fit" : "h-full"}`}
      >
        {title}
        {isShow ? (
          <CaretDown size={24} className="ml-4 flex-shrink-0" />
        ) : (
          <CaretRight size={24} className="ml-4 flex-shrink-0" />
        )}
      </button>
      {isShow && (
        <div className={`w-full h-full pb-2`}>
          <p className="text-base font-light">{desc}</p>
        </div>
      )}
    </div>
  )
}

export default ItemFaq
