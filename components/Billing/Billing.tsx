import React from "react";
import { MdCropDin, MdLock, MdEmail, MdCreditCard, MdApps, MdLogout } from "react-icons/md";

export default function Billing() {
  const menuItems = [
    { menuName: 'General', icon: MdCropDin, isSelected: false },
    { menuName: 'Password', icon: MdLock, isSelected: false },
    { menuName: 'Invitations', icon: MdEmail, isSelected: false },
    { menuName: 'Billing', icon: MdCreditCard, isSelected: true },
    { menuName: 'Apps', icon: MdApps, isSelected: false },
  ];

  return (
    <section id="billing">
      {/* Main container */}
      <div className="flex min-h-screen items-center justify-center bg-lilac rounded-2xl py-40 px-36 relative">

        {/* Background rectangle */}
        <div className="absolute bg-orangeish w-[300px] h-[1000px] left-[25%] top-[10%] z-0 rounded-2xl"></div>

        <div className="border border-blue-500 bg-lighterlilac rounded-l-2xl z-10">
          {/* user info */}
          <div className="pt-8 px-10 pb-20 flex items-center justify-center">
            <img src="./images/headshot.jpg" alt="" className="rounded-xl w-24" />
            <div className="flex flex-col ml-4">
              <p className="font-bold text-2xl">Ildiko Gaspar</p>
              <p className="font-light text-2xl text-gray-400">@igaspar</p>
            </div>
          </div>

          <ul className="pl-2 text-gray-500 text-lg space-y-7 font-light mb-72">
            {menuItems.map(({ isSelected, icon: Icon, menuName }, index) => (
              <li
                key={index}
                className={`flex items-center space-x-4 pl-8  ${isSelected ? 'border-l border-l-orangeish border-l-[6px] ' : ''}`}
              >
                <div className={`h-10 w-10  ${isSelected ? 'ml-[-5px]' : ''}`}>
                  <Icon className="h-full w-full" />
                </div>
                <p>{menuName}</p>
              </li>
            ))}
          </ul>
          <div className="flex items-center text-gray-500 space-x-4 pl-10 mb-10">
            <div className="h-10 w-10">
              <MdLogout className="h-full w-full" />
            </div>
            <p className="font-light text-lg">Log out</p>
          </div>
        </div>
        {/* <div className="bg-white rounded-r-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo accusantium, esse explicabo quasi numquam dolor delectus fugit reiciendis inventore quaerat assumenda. Consequuntur fuga ab accusamus officia dignissimos vel laudantium ea.
        </div> */}
      </div>
    </section>
  );
}

