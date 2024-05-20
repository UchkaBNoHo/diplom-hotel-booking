// eslint-disable-next-line no-unused-vars
import React from "react";

const SideCard = () => {
  return (
    <>
      <div className="w-[30%] rounded-[12px] p-2 h-fit bg-gray-100 max-lg:hidden">
        <div className="bg-white rounded-[8px] p-4 py-6">
          <div className="flex flex-col mb-5">
            <label htmlFor="city" className="text-gray-400 mb-2">
              Location
            </label>
            <input
              type="text"
              id="city"
              value="Jakarta, IND"
              readOnly
              className="text-[15px] w-[100%] rounded-[32px] px-3 py-[10px] border-[1px] border-gray-300"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="date" className="text-gray-400 mb-2">
              Select Days
            </label>
            <input
              type="date"
              id="date"
              className="text-[15px] w-[100%] rounded-[32px] px-3 py-[10px] border-[1px] border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="text-gray-400 mb-2">
              Breakfast
            </label>
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <span>Breakfast included</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[8px] p-4 mt-3">
          <div className="flex justify-between items-center mb-2">
            <p className="font-medium text-[15px]">Pricing per night</p>
            <span>$ 200</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-medium text-[15px]">Pricing for breakfast</p>
            <span>$ 20</span>
          </div>
        </div>
        <div className="w-full mt-3 text-center rounded-[32px] bg-black py-2">
          <a href="#" className="text-white text-[14px]">
            Reverse
          </a>
        </div>
      </div>
      <div className="mt-3 text-center rounded-[32px] bg-black py-3 px-12 fixed top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <button
          className="text-white text-[14px]"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Reverse
        </button>
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div className="bg-white rounded-[8px] p-4 py-6">
            <div className="flex flex-col mb-5">
              <label htmlFor="city" className="text-gray-400 mb-2">
                Location
              </label>
              <input
                type="text"
                id="city"
                value="Jakarta, IND"
                readOnly
                className="text-[15px] w-[100%] rounded-[32px] px-3 py-[10px] border-[1px] border-gray-300"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="date" className="text-gray-400 mb-2">
                Select Days
              </label>
              <input
                type="date"
                id="date"
                className="text-[15px] w-[100%] rounded-[32px] px-3 py-[10px] border-[1px] border-gray-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="date" className="text-gray-400 mb-2">
                Breakfast
              </label>
              <div className="flex gap-3 items-center">
                <input type="checkbox" />
                <span>Breakfast included</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[8px] p-4 mt-3">
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-[15px]">Pricing per night</p>
              <span>$ 200</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium text-[15px]">Pricing for breakfast</p>
              <span>$ 20</span>
            </div>
          </div>
          <div className="w-full mt-3 text-center rounded-[32px] bg-black py-2">
            <a href="#" className="text-white text-[14px]">
              Reverse
            </a>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default SideCard;
