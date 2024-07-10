import React from "react";

export default function PricingCards() {
  return (
    <section id="pricing-cards">
      <div className="flex min-h-screen items-center justify-center px-10  bg-lilac">
        <div className="bg-white p-4 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 p-10 bg-lilac rounded-xl">
            <div className="">
              <h2 className="font-serif font-semibold text-xl mb-5 text-gray-700">Free</h2>
              <div className="flex space-x-1">
                <p className="font-semibold text-xl self-end">$</p>
                <p className="font-bold text-4xl">0</p>
              </div>
              <p className="text-xs font-semibold leading-loose text-gray-700">Free for your whole team</p>
              <p className="text-sm font-semibold text-gray-700 pt-6 pb-11">For individuals or teams looking to organize anything.</p>
              <a href="#" className="text-black bg-pastelFuschia p-4 rounded-lg w-full shadow-sm hover:bg-opacity-90 hover:shadow-lg transition hover:-translate-y-0.5 duration-150 text-sm font-semibold">Get started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
