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
      <div className="flex min-h-screen items-center justify-center bg-lilac">
        <h2 className="lg:hidden text-center font-bold text-3xl px-10">
          This component is only optimized for Desktop. Please enlarge your
          window.
        </h2>
        <div className=" shadow-2xl rounded-2xl relative hidden lg:flex">
          {/* background rectangle */}

          <div className="absolute bg-orangeish w-[300px] h-full left-[-1.25rem] top-[-1.25rem] z-0 rounded-2xl"></div>
          <div className="z-20 bg-lighterlilac rounded-l-2xl w-fit py-8 ">
            {/* user info */}
            <div className=" px-10 pb-20 flex items-center justify-center">
              <img
                src="./images/headshot.jpg"
                alt="headshot"
                className="rounded-xl w-24"
              />
              <div className="flex flex-col ml-4">
                <p className="font-bold text-2xl">Ildiko Gaspar</p>
                <p className="font-light text-2xl text-gray-400">@igaspar</p>
              </div>
            </div>

            <ul className="pl-2 text-gray-500 text-lg space-y-7 font-light mb-44">
              {menuItems.map(({ isSelected, icon: Icon, menuName }, index) => (
                <li
                  key={index}
                  className={`flex items-center space-x-4 pl-8  ${
                    isSelected ? "border-l-[6px] border-l-orangeish" : ""
                  }`}
                >
                  <div
                    className={`h-10 w-10  ${isSelected ? "ml-[-5px]" : ""}`}
                  >
                    <Icon className="h-full w-full" />
                  </div>
                  <p>{menuName}</p>
                </li>
              ))}
            </ul>
            <div className="flex items-center text-gray-500 space-x-4 pl-10 ">
              <div className="h-10 w-10">
                <MdLogout className="h-full w-full" />
              </div>
              <p className="font-light text-lg">Log out</p>
            </div>
          </div>
          <div className="z-10 bg-white rounded-r-2xl py-14 px-10 ">
            <h1 className="font-bold text-3xl mb-8 pl-4">Billing</h1>
            <div className="flex space-x-20">
              <div className="flex flex-col">
                <p className="font-bold pl-4">Order History</p>
                <p className="font-light text-sm mb-4 pl-4">
                  Manage billing information and view receipts
                </p>
                <table className="">
                  <thead>
                    <tr className="text-sm text-gray-400 font-light text-left">
                      <th className="pl-4">Date</th>
                      <th>Type</th>
                      <th>Receipt</th>
                    </tr>
                  </thead>
                  <tbody className="font-semibold">
                    <tr className="hover:shadow-xl rounded-2xl">
                      <td className="py-3 pr-20 pl-4">Oct. 21, 2024</td>
                      <td className="py-3 pr-20 ">Pro Annual</td>
                      <td className="py-3 pr-4 ">
                        <button className="px-3 py-2 rounded-lg border-2 border-gray-300 focus:bg-orangeish focus:text-white">
                          Download
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:shadow-xl rounded-2xl">
                      <td className="py-3 pr-20 pl-4">Oct. 21, 2024</td>
                      <td className="py-3 pr-20 ">Pro Annual</td>
                      <td className="py-3 pr-4 ">
                        <button className="px-3 py-2 rounded-lg border-2 border-gray-300 focus:bg-orangeish focus:text-white">
                          Download
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:shadow-xl rounded-2xl">
                      <td className="py-3 pr-20 pl-4">Oct. 21, 2024</td>
                      <td className="py-3 pr-20 ">Pro Annual</td>
                      <td className="py-3 pr-4 ">
                        <button className="px-3 py-2 rounded-lg border-2 border-gray-300 focus:bg-orangeish focus:text-white">
                          Download
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:shadow-xl rounded-2xl">
                      <td className="py-3 pr-20 pl-4">Oct. 21, 2024</td>
                      <td className="py-3 pr-20 ">Pro Annual</td>
                      <td className="py-3 pr-4 ">
                        <button className="px-3 py-2 rounded-lg border-2 border-gray-300 focus:bg-orangeish focus:text-white">
                          Download
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <a href="#" className="text-orangeish hover:underline pl-4">
                  Load more
                </a>

                <div className="mt-20">
                  <p className="font-bold pl-4">Payment Method</p>
                  <p className="font-light text-sm mb-4 pl-4">
                    Lorem ipsum dolor sit adipiscing elit
                  </p>

                  <div className="pl-4 flex items-center">
                    <div className="bg-white w-20 border p-2 rounded mr-4">
                      <img
                        className="w-full"
                        src="/images/visa-logo.png"
                        alt="visa logo"
                      />
                    </div>
                    <p className="font-semibold mr-20">Visa ending in 2255</p>
                    <button className="px-3 py-2 rounded-lg border-2 border-gray-300 focus:bg-orangeish focus:text-white justify-end">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-orangeish text-white p-6 rounded-2xl h-fit">
                <p className="text-sm font-light mb-3">Your plan</p>
                <p className="font-bold mb-2">Pro Annual</p>
                <p className="text-xs font-light mb-4">Renews on Nov, 2025</p>
                <button className="border border-white p-2 rounded-xl text-sm focus:text-black focus:border-black">
                  Cancel subscription
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
