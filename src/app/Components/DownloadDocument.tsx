"use client";
import React, { useState } from "react";
import { CaretDown, CaretRight, FilePdf } from "@phosphor-icons/react";
import Link from "next/link";

const DownloadDocument = () => {
  const [isShowMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!isShowMenu);
  };

  return (
    <>
      <div className="download-file-section relative w-full py-4">
        <button
          aria-label="toggle menu file download"
          onClick={handleShowMenu}
          className={`toggle-menu ${isShowMenu && "scale-90 ring-4 ring-black ring-offset-4"} flex items-center gap-3 rounded-md bg-black px-6 py-3 font-semibold text-white duration-500`}
        >
          Download Report{" "}
          {isShowMenu ? <CaretDown size={24} /> : <CaretRight size={24} />}
        </button>
        {isShowMenu && (
          <div className="menu-dropdown absolute left-0 top-full z-30 flex w-fit flex-col gap-4 rounded-xl border border-bordersolid bg-white p-6 drop-shadow-xl">
            <span className="label flex items-center gap-2">
              <div className="anim h-[1px] w-3 bg-brand"></div>Download with
              link bellow
            </span>
            <Link
              target="_blank"
              href="/documents/Rising stop 2.pdf"
              download="Rising star report GP #1.pdf"
              className="flex items-center gap-3 transition-all duration-300 ease-in-out hover:text-brand"
            >
              <FilePdf size={24} /> REPORT ASPA RISING STAR STOP #2
            </Link>
            <Link
              target="_blank"
              href="/documents/Rising stop 3.pdf"
              download="Rising star report GP #2.pdf"
              className="flex items-center gap-3 transition-all duration-300 ease-in-out hover:text-brand"
            >
              <FilePdf size={24} /> REPORT ASPA RISING STAR STOP #3
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default DownloadDocument;
