import React from "react"

const DownloadDocument = () => {
  return (
    <>
      <a
        href="/documents/ASPA X GP.pdf"
        download="ASPA X GP.pdf"
        className="underline hover:text-brand underline-offset-4 duration-300 transition-all ease-in-out"
      >
        Download PDF
      </a>
    </>
  )
}

export default DownloadDocument
