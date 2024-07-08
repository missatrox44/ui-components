import React from "react";


export default function PricingCard() {


  return (
    <section id="pricing-card">
      {/* Main container */}
      <div className="flex min-h-screen items-center justify-center bg-superLightBlue px-10">
        <div className="flex flex-col max-w-xs">
          <div className="flex rounded-2xl">
            <div className="rounded-t-2xl bg-deepNavyBlue flex items-center justify-between flex-1 py-5">
              <img className="w-32" src="./images/photoshop-logo.png" alt="" />
              <p className="text-white text-sm font-semibold pr-5 self-end tracking-wider">Photoshop</p>
            </div>
          </div>
          <div className="flex flex-col rounded-b-2xl bg-white p-5 space-y-3">
            <h3 className="text-zinc-900 text-xl">NOK 200.99/mo</h3>
            <p className="text-sm text-zinc-600">Create beautiful graphics, photos, and art on desktop and iPad. Comes with Adobe Fresco for drawing and painting.</p>
            <a className="text-sky-700 hover:underline text-sm pb-5" href="#">Plan & pricing details</a>
            <button className="text-white bg-deepNavyBlue py-3 rounded-full w-full ">Buy now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
