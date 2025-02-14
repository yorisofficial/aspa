"use client";
import { CaretUp, Translate } from "@phosphor-icons/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const ButtonUp = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [lang, setLang] = useState<Boolean>(false);
  const handleUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChangeLanguage = () => {
    setLang(!lang);
    router.replace(`/term-regulation/${lang ? "en" : "id"}`, {
      scroll: false,
    });
  };

  return (
    <div className="fixed bottom-[15%] right-[5%] z-10 flex flex-col items-end justify-end gap-4">
      <motion.button
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.2 }}
        onClick={handleUp}
        aria-label="Back to top"
        className="h-fit w-fit rounded-xl bg-black p-2 text-white"
      >
        <CaretUp size={32} />
      </motion.button>
      {pathName.includes("term-regulation") && (
        <motion.button
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          aria-label="Back to top"
          type="button"
          title="Set language"
          onClick={handleChangeLanguage}
          className="rounded-xl bg-black p-2 text-white"
        >
          <Translate size={32} className="" />
        </motion.button>
      )}
    </div>
  );
};

export default ButtonUp;
