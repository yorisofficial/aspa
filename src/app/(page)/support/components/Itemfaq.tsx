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
    <div className={`relative w-full h-fit duration-300 ease-in-out bg-gray-200 border-buttom`}>
      <button
        onClick={handleShow}
        className={`flex w-full font-black items-start justify-between py-4 text-start ${isShow ? "h-fit text-brand" : "h-full"}`}
      >
        {title}
        {isShow ? (
          <CaretDown size={24} className="ml-4 flex-shrink-0" />
        ) : (
          <CaretRight size={24} className="ml-4 flex-shrink-0" />
        )}
      </button>
      <div className={`pb-2 ${isShow ? "scale-y-100" : "scale-y-0 hidden"}`}>
        <p className={`text-base font-light`}>{desc}</p>
      </div>
    </div>
  )
}

export default ItemFaq
