"use client";
import { usePathname } from "next/navigation";
import React from "react";

const ContainerContent = ({
  children,
  className,
  url,
}: {
  children: React.ReactNode;
  className?: string;
  url: string;
}) => {
  const pathName = usePathname();
  const pathUse = `${pathName.includes(url) ? "pt-4 px-4 md:px-10 xl:px-0" : ""}`;

  return (
    <div className={`container mx-auto max-w-5xl ${pathUse} ${className}`}>
      {children}
    </div>
  );
};

export default ContainerContent;
