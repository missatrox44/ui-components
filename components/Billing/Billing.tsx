import React from "react";
import {
  MdCropDin,
  MdLock,
  MdEmail,
  MdCreditCard,
  MdApps,
  MdLogout,
} from "react-icons/md";

export default function Billing() {
  const menuItems = [
    { menuName: "General", icon: MdCropDin, isSelected: false },
    { menuName: "Password", icon: MdLock, isSelected: false },
    { menuName: "Invitations", icon: MdEmail, isSelected: false },
    { menuName: "Billing", icon: MdCreditCard, isSelected: true },
    { menuName: "Apps", icon: MdApps, isSelected: false },
  ];

  return (
    <section id="billing">
      {/* Main container */}
      <div className="flex min-h-screen items-center justify-center bg-lilac rounded-2xl py-40 px-36 relative">
        {/* Background rectangle */}
        <div className="absolute bg-orangeish w-[300px] h-[1000px] left-[25%] top-[10%] z-0 rounded-2xl"></div>

        <div className=" bg-lighterlilac rounded-l-2xl z-10 min-w-72 ">
          {/* user info */}
          <div className="pt-8 px-10 pb-20 flex items-center justify-center">
            <img
              src="./images/headshot.jpg"
              alt=""
              className="rounded-xl w-24"
            />
            <div className="flex flex-col ml-4">
              <p className="font-bold text-2xl">Ildiko Gaspar</p>
              <p className="font-light text-2xl text-gray-400">@igaspar</p>
            </div>
          </div>

          <ul className="pl-2 text-gray-500 text-lg space-y-7 font-light mb-72">
            {menuItems.map(({ isSelected, icon: Icon, menuName }, index) => (
              <li
                key={index}
                className={`flex items-center space-x-4 pl-8  ${
                  isSelected ? "border-l-[6px] border-l-orangeish" : ""
                }`}
              >
                <div className={`h-10 w-10  ${isSelected ? "ml-[-5px]" : ""}`}>
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
        <div className="z-10 bg-white rounded-r-2xl py-14 px-10 min-w-[900px]">
          <h1 className="font-bold text-3xl mb-8">Billing</h1>
          <div className="flex space-x-10">
            <div className="flex flex-col">
              <p className="font-bold">Order History</p>
              <p className="font-light text-sm mb-4">
                Manage billing information and view receipts
              </p>
              <table className="">
                <thead>
                  <tr className="text-xs text-gray-400 font-light text-left">
                    <th>Date</th>
                    <th>Type</th>
                    <th>Receipt</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-semibold">
                  <tr className="">
                    <td className="py-4 pr-20">Oct. 21, 2025</td>
                    <td className="py-4 pr-20">Pro Annual</td>
                    <td className="py-4 pr-16">
                      <button className="px-3 py-2 rounded-lg border-2 border-gray-300">
                        Download
                      </button>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="py-4 pr-20">Oct. 21, 2025</td>
                    <td className="py-4 pr-20">Pro Annual</td>
                    <td className="py-4 pr-16">
                      <button className="px-3 py-2 rounded-lg border-2 border-gray-300">
                        Download
                      </button>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="py-4 pr-20">Oct. 21, 2025</td>
                    <td className="py-4 pr-20">Pro Annual</td>
                    <td className="py-4 pr-16">
                      <button className="px-3 py-2 rounded-lg border-2 border-gray-300">
                        Download
                      </button>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="py-4 pr-20">Oct. 21, 2025</td>
                    <td className="py-4 pr-20">Pro Annual</td>
                    <td className="py-4 pr-16">
                      <button className="px-3 py-2 rounded-lg border-2 border-gray-300">
                        Download
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <a href="#" className="text-orangeish hover:underline">Load more</a>
            </div>
            <div className="flex flex-col bg-orangeish text-white p-6 rounded-2xl h-fit">
              <p className="text-sm font-light mb-3">Your plan</p>
              <p className="font-bold mb-2">Pro Annual</p>
              <p className="text-xs font-light mb-4">Renews on Nov, 2025</p>
              <button className="border border-white p-2 rounded-xl text-sm">
                Cancel subscription
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
