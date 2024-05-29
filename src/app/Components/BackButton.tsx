"use client";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { ArrowLeft } from "@phosphor-icons/react";

const BackButton = ({
  url,
  children,
  className,
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`border-buttom w-full pb-8 ${className}`}>
      <Link href={url} className="group w-fit">
        <Button label="Back" variant="iconPrimary">
          <ArrowLeft className="duration-300 group-hover:-translate-x-1" />
          {children}
        </Button>
      </Link>
    </div>
  );
};

export default BackButton;
