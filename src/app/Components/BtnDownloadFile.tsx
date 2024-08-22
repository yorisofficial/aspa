import React from "react";

const BtnDownloadFile = ({
  src,
  docName,
  title,
}: {
  src: string;
  docName: string;
  title: string;
}) => {
  return (
    <>
      <a
        href={src}
        target="_blank"
        download={docName}
        className="text-sm underline underline-offset-4"
      >
        {title}
      </a>
    </>
  );
};

export default BtnDownloadFile;
