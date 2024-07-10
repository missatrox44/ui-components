import React from "react";
import { pricingCardsData } from "./pricingCardsData";
import classNames from "classnames";
import styles from "./styles.module.css";

const buttonColorClasses: Record<string, string> = {
  pastelFuschia: 'bg-pastelFuschia',
  pastelBlue: 'bg-pastelBlue',
  pastelOrange: 'bg-pastelOrange',
};

export default function PricingCards() {
  return (
    <section id="pricing-cards">
      <div className="flex min-h-screen items-center justify-center px-10 bg-lilac">
        <div className="bg-white p-4 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 p-10 bg-amber-50 rounded-xl gap-x-6 gap-y-6">
            {pricingCardsData.map((card) => (
              <div key={card.id} className="flex flex-col p-6 ">
                <h2 className="font-serif font-semibold text-xl mb-5 text-gray-700">{card.title}</h2>
                <div className="flex space-x-1">
                  <p className="font-semibold text-xl self-end">$</p>
                  <p className="font-bold text-4xl">{card.price}</p>
                </div>
                <p className="text-xs font-semibold leading-loose text-gray-700">{card.subText}</p>
                <p className="text-sm font-semibold text-gray-700 pt-6 pb-11 flex-grow">{card.description}</p>
                <a
                  href="#"
                  className={classNames(
                    "text-black p-4 rounded-lg w-full shadow-sm hover:bg-opacity-90 hover:shadow-lg transition hover:-translate-y-0.5 duration-150 text-sm font-semibold mt-auto text-center",
                    buttonColorClasses[card.buttonColor]
                  )}
                >
                  {card.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
