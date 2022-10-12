import React, {useRef} from 'react';
import {order} from '../utils/contractServices';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const Customer = ({ wallet_address, connected, className }) => {
  const orderRef = useRef();

  const Order = async (account) => {
    const amount =  orderRef.current.value;
    
    if (amount <= 0) {
      toast.warning("Please input order amount");
      return;
    }

    if (connected) {
      await order(account, amount);
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
          <div>Order</div>
          <input
            ref={orderRef}
            id="amount"
            type="number"
            className="ring-2 ring-app-form-border text-app-form-text text-md focus:ring-gray-500 block w-full p-2.5 outline-none caret-red-500 mt-2"
            placeholder="Amount"
            required
          />
          <button
            className="w-full text-white bg-blue-700 hover:bg-blue-400 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium font-millerBanner text-base px-5 py-2.5 text-center mt-2"
            onClick={() => Order(wallet_address)}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(
    state => state
)(Customer);
