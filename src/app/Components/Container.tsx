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
  const pathUse = `${pathName.includes(url) ? "pt-4 " : ""}`;

  return (
    <div className={`container-content px-4 md:px-16 ${pathUse} ${className}`}>
      {children}
    </div>
  );
};

export default ContainerContent;
