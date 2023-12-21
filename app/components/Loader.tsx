import React from "react";

function Loader() {
  return (
    <>
      <div className="flex h-full w-full text-black justify-center flex-col gap-8 items-center bg-[#fff7]">
      <span className="loading loading-dots loading-lg"></span>
        {/* <div className="text-4xl font-semibold">Object Hunt</div> */}
        {/* <span className="loading loading-lg text-warning"></span> */}
        {/* <span className="loading loading-bars loading-lg"></span> */}
        {/* <span className="loading loading-spinner loading-lg text-primary"></span> */}
      </div>
    </>
  );
}

export default Loader;
