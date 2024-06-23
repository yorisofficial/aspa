import React from "react";
import BackToBefore from "./Components/BackToBefore";

const NotFound = () => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-black">
        404 | <span className="font-light lowercase">Page not found</span>
      </h1>
      <p className="w-1/2 text-center text-lg">
        Unfortunately, the page you are looking for could not be found. Please
        return to the homepage.
      </p>
      <div className="">
        <BackToBefore />
      </div>
    </div>
  );
};

export default NotFound;
