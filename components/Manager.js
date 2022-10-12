import React, {useRef} from 'react';
import { addStock, ship } from '../utils/contractServices';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const Manager = ({ wallet_address, connected, className }) => {

  const stockRef = useRef();

  const AddStock = async (account) => {
    const amount =  stockRef.current.value;

    if (amount <= 0) {
      toast.warning("Please input stock amount");
      return;
    }

    if (connected) {
      await addStock(account, amount);
    } else {
      toast.warning("Please connect wallet");
    }
  }

  const Ship = async () => {
    if (connected) {
      await ship(account);
    } else {
      toast.warning("Please connect wallet");
    }
  }

  return (
    <div
      className={`select-none w-[100%] h-[100%] px-10 py-10 flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between text-black text-sm font-['Montserrat'] ${className}`}
    >
      <div className='w-full flex flex-rows gap-4 justify-center'>
        <div className='w-[300px] h-[200px] rounded px-10 py-10 shadow-md'>
          <div>Add stock</div>
          <input
            ref={stockRef}
            type="number"
            className="ring-2 ring-app-form-border text-app-form-text text-md focus:ring-gray-500 block w-full p-2.5 outline-none caret-red-500 mt-2"
            placeholder="Amount"
            required
          />
          <button
            className="w-full text-white bg-blue-700 hover:bg-blue-400 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium font-millerBanner text-base px-5 py-2.5 text-center mt-2"
            onClick={() => AddStock(wallet_address)}
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

export default connect(
    state => state
)(Manager);
