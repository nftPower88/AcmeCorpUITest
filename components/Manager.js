import React from 'react';
import WalletConnect from './web3wallet/WalletConnect';

const Manager = ({ className }) => {
  return (
    <div
      className={`select-none w-[100%] h-[100%] px-10 py-10 flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between text-black text-sm font-['Montserrat'] ${className}`}
    >
      <div>
        Manager
      </div>
    </div>
  );
};

export default Manager;