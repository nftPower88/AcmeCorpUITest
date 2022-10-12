import React from 'react';

const Manager = ({ className }) => {
  const AddStock = () => {

  }

  return (
    <div
      className={`select-none w-[100%] h-[100%] px-10 py-10 flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between text-black text-sm font-['Montserrat'] ${className}`}
    >
      <div className='w-full flex flex-rows gap-4 justify-center'>
        <div className='w-[300px] h-[200px] rounded px-10 py-10 shadow-md'>
          <div>Add stock</div>
          <input
            id="amount"
            type="text"
            className="ring-2 ring-app-form-border text-app-form-text text-md focus:ring-gray-500 block w-full p-2.5 outline-none caret-red-500 mt-2"
            placeholder="Amount"
            required
          />
          <button
            className="w-full text-white bg-blue-700 hover:bg-blue-400 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium font-millerBanner text-base px-5 py-2.5 text-center mt-2"
            onClick={() => AddStock()}
          >
            Add Stock
          </button>
        </div>
        <div className='w-[300px] h-[200px] rounded px-10 py-10 shadow-md'>
          <div>Ship accepted order</div>
          <button
            className="w-full text-white bg-blue-700 hover:bg-blue-400 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium font-millerBanner text-base px-5 py-2.5 text-center mt-2"
            onClick={() => Ship()}
          >
            Ship
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manager;
