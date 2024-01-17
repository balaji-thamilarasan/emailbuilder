import React, { useState } from "react";
import HtmlFile from "./htmlFile";

const Homepage = () => {
  const [bannerUrl, setBannerUrl] = useState("");
  const [promoUrl, setPromoUrl] = useState("");
  console.log(bannerUrl);

  return (
    <div className="container lg:mx-auto px-4 lg:px-40">
      <div className="mt-5 text-center">Pepperfry HTML email</div>
      <div className="flex flex-wrap mt-4 gap-2">
        <div className="basis1/2">
          <div class="w-72">
            <div class="relative h-10 w-full min-w-[200px] ">
              <input
                type="text"
                placeholder="Banner Image"
                onChange={(e) => setBannerUrl(e.target.value)}
                class="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2"
              />
            </div>
          </div>
        </div>
        <div className="basis1/2">
          <div class="w-72">
            <div class="relative w-full min-w-[200px] h-10">
              <input
                type="text"
                placeholder="Promo URL"
                onChange={(e) => setPromoUrl(e.target.value)}
                class="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2"
              />
            </div>
          </div>
        </div>
      </div>

      <HtmlFile props={{ bannerUrl, promoUrl }} />
    </div>
  );
};

export default Homepage;
