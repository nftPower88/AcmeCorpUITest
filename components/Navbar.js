import React from 'react';
import WalletConnect from './web3wallet/WalletConnect';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';

toast.configure();
const Navbar = ({ 
  role,
  className 
}) => {
  return (
    <div
      className={`select-none w-[100%] h-[100%] px-10 py-10 flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between text-black text-sm font-['Montserrat'] ${className}`}
    >
      <div>
        AcmeFactoryTest
      </div>
      <div>
        <WalletConnect/>
      </div>
    </div>
  );
};

export default connect(
    state => state
)(Navbar);
