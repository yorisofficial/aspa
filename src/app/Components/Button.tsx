"use client"
import React from "react"

interface Props {
  label: string
  children: React.ReactNode
  onClick?: () => void
  variant: "primary" | "invert" | "border" | "iconPrimary"
  className?: string
}

const Button: React.FC<Props> = ({className, label, children, onClick, variant}) => {
  const buttonStyle = {
    primary:
      "px-4 text-sm md:text-base rounded-xl hover:bg-slate-600 font-semibold md:px-6 py-3 border-2 hover:scale-105 duration-300 border-primary bg-primary text-white",
    invert:
      "px-4 text-sm md:text-base rounded-xl font-semibold md:px-6 py-3 border-2 hover:scale-105 duration-300 border-white bg-white text-primary",
    border:
      "px-4 text-sm md:text-base rounded-xl font-semibold md:px-6 py-3 border-2 hover:scale-105 duration-300 border-primary bg-primary text-primary",
    link: "text-base underlined",
    iconPrimary:
      "flex justify-center rounded-xl hover:bg-slate-600 items-center gap-3 pl-3 pr-6 py-3 bg-primary text-white",
  }

  const buttonClass = `${buttonStyle[variant]} ${className}`

  return (
    <>
      <button aria-label={label} onClick={onClick} className={buttonClass}>
        {children}
      </button>
    </>
  )
}

export default Button
