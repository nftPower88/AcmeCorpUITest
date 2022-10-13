import React, {useRef} from 'react';
import { addStock, order, ship } from '../utils/contractServices';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const Dashboard = ({ wallet_address, stockamount, lastid, currid, connected, className }) => {

  // const stockRef = useRef();
  // const orderRef = useRef();

  console.log(stockamount, lastid, currid);

  const AddStock = async (account) => {
    // const amount =  stockRef.current.value;

    // if (amount <= 0) {
    //   toast.warning("Please input stock amount");
    //   return;
    // }

    if (connected) {
      await addStock(account, 10);
    } else {
      toast.warning("Please connect wallet");
    }
  }

  const Order = async (account) => {
    // const amount =  orderRef.current.value;
    
    // if (amount <= 0) {
    //   toast.warning("Please input order amount");
    //   return;
    // }

    if (connected) {
      await order(account, 1);
    } else {
      toast.warning("Please connect wallet");
    }
  }

  const Ship = async () => {
    if (connected) {
      await ship(wallet_address);
    } else {
      toast.warning("Please connect wallet");
    }
  }

  return (
    <div
      className={`select-none w-[100%] h-[100%] px-10 py-10 text-black text-sm font-['Montserrat'] ${className}`}
    >      
      {/* <div>
        <div>Stock Amount: {stockamount}</div>
        <div>Accepted Order: {currid - lastid}</div>
      </div> */}
      <div className='w-full flex flex-rows gap-4 justify-center'>
        <div className='w-[300px] h-[200px] rounded px-10 py-10 shadow-md'>
          <div>Add 10 stock</div>
          {/* <input
            ref={stockRef}
            type="number"
            className="ring-2 ring-app-form-border text-app-form-text text-md focus:ring-gray-500 block w-full p-2.5 outline-none caret-red-500 mt-2"
            placeholder="Amount"
            required
          /> */}
          <button
            className="w-full text-white bg-blue-700 hover:bg-blue-400 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium font-millerBanner text-base px-5 py-2.5 text-center mt-2"
            onClick={() => AddStock(wallet_address)}
          >
            Add Stock
          </button>
        </div>
        <div className='w-[300px] h-[200px] rounded px-10 py-10 shadow-md'>
          <div>Order 1 widgets</div>
          {/* <input
            ref={orderRef}
            id="amount"
            type="number"
            className="ring-2 ring-app-form-border text-app-form-text text-md focus:ring-gray-500 block w-full p-2.5 outline-none caret-red-500 mt-2"
            placeholder="Amount"
            required
          /> */}
          <button
            className="w-full text-white bg-blue-700 hover:bg-blue-400 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium font-millerBanner text-base px-5 py-2.5 text-center mt-2"
            onClick={() => Order(wallet_address)}
          >
            Order
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
)(Dashboard);
