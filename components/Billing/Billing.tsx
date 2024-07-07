import React from "react";

export default function Billing() {
  return (
    <section id="billing">
      {/* Main container */}
      <div className="flex min-h-screen items-center justify-center bg-lilac rounded-2xl py-[160px] px-[140px] ">
     
        
        <div className="border border-blue-500 bg-lighterlilac rounded-l-2xl relative z-10">
          {/* user info */}
          <div className="pt-8 px-10 pb-20 flex items-center justify-center">
            <img src="./images/headshot.jpg" alt="" className="rounded-xl w-24" />
          <div className="flex flex-col ml-4">
            <p className="font-bold text-2xl">Ildiko Gaspar</p>
            <p className="text-light text-2xl text-gray-400">@igaspar</p>
          </div>
          </div>
          {/* <div className="absolute bg-orangeish z-0">test</div> */}
        </div>
        {/* <div className="bg-white rounded-r-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo accusantium, esse explicabo quasi numquam dolor delectus fugit reiciendis inventore quaerat assumenda. Consequuntur fuga ab accusamus officia dignissimos vel laudantium ea.
        </div> */}
      </div>
    </section>
  );
}

