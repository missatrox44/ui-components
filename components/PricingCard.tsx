import React from "react";

export default function PricingCard() {


  return (
    <section id="pricing-card">
      {/* Main container */}
      <div className="flex  min-h-screen items-center justify-center bg-superLightBlue">
        <div className="flex flex-col">
       <div className="flex rounded-2xl">
        <div className="rounded-t-2xl bg-deepNavyBlue p-5 flex items-center justify-between">
          <img className="w-32" src="./images/photoshop-logo.png" alt="" />
          <p>Photoshop</p>
        </div>
       </div>
       <div className="flex flex-col rounded-b-2xl bg-white p5">
        <h3>NOK 200.99/mo</h3>
        <p>Create beautiful graphics, photos, and art on desktop and iPad. Comes with Adobe Fresco for drawing and painting</p>
        <a href="#">Plan & pricing details</a>
        <button>Buy now</button>
       </div>
       </div>
      </div>
    </section>
  );
}
