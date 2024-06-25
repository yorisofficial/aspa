"use client";

import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react";

const BackToBefore = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <Button
        onClick={handleBack}
        variant="iconPrimary"
        label="back to main page"
        className="group"
      >
        <ArrowLeft className="duration-300 group-hover:-translate-x-1" />
        Back to before
      </Button>
    </div>
  );
};

export default BackToBefore;
