import React from "react";
import { MdCropDin, MdLock, MdEmail, MdCreditCard, MdApps } from "react-icons/md";

export default function Billing() {
  const menuItems = [
    { name: 'General', icon: MdCropDin, isSelected: false },
    { name: 'Password', icon: MdLock, isSelected: false  },
    { name: 'Invitations', icon: MdEmail, isSelected: false  },
    { name: 'Billing', icon: MdCreditCard, isSelected: true },
    { name: 'Apps', icon: MdApps, isSelected: false  },
  ];

  return (
    <section id="billing">
      {/* Main container */}
      <div className="flex min-h-screen items-center justify-center bg-lilac rounded-2xl py-40 px-36">


        <div className="border border-blue-500 bg-lighterlilac rounded-l-2xl relative z-10">
          {/* user info */}
          <div className="pt-8 px-10 pb-20 flex items-center justify-center">
            <img src="./images/headshot.jpg" alt="" className="rounded-xl w-24" />
            <div className="flex flex-col ml-4">
              <p className="font-bold text-2xl">Ildiko Gaspar</p>
              <p className="text-light text-2xl text-gray-400">@igaspar</p>
            </div>
          </div>

          <ul className="pl-10 text-gray-500 text-xl space-y-5">
            {menuItems.map((item, index) => (
              <li key={index} className="flex items-center space-x-4">
                <div className="h-10 w-10">
                  <item.icon className="h-full w-full" />
                </div>
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="bg-white rounded-r-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo accusantium, esse explicabo quasi numquam dolor delectus fugit reiciendis inventore quaerat assumenda. Consequuntur fuga ab accusamus officia dignissimos vel laudantium ea.
        </div> */}
      </div>
    </section>
  );
}

