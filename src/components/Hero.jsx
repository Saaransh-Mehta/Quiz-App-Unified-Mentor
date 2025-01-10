import React from "react";

const Hero = () => {
  return (
    <>
      <div className="h-screen bg-[#F5EDE1]">
        <div className="grid grid-cols-1 ">
          <div className="heading grid place-content-center place-items-center">
            <h1 className="text-7xl mt-10 font-semibold bebas-neue tracking-wide cursor-pointer text-[#1E4F57]">
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-3">
            <div
              href="#"
              class="block max-w-sm p-6 bg-[#1E4F57] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#F5EDE1] dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-[#f9ae65] dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>

            <div
              href="#"
              class="block max-w-sm p-6 bg-[#1E4F57] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>

            <div
              href="#"
              class="block max-w-sm p-6 bg-[#1E4F57] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
