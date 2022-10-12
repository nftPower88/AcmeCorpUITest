import React from 'react';
import Link from 'next/link';

const Footer = ({ className }) => {
  return (
    <div
      className={`select-none w-[100%] h-[100%] px-10 py-10 flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between text-sm font-['Montserrat'] ${className}`}
    >
      <div>
        <Link href={'https://acme.com'}>
          <a className="mx-[0.5rem] font-bold transition text-[#6b6b6b] hover:text-black hover: font-normal">AcmeFactoryTest © 2022</a>
        </Link>
      </div>
      <div className="mt-[1rem] md:mt-0 lg:mt-0">        
        <Link href={'https://www.facebook.com/acme'}>
          <a className="mx-[0.5rem] font-bold transition text-[#6b6b6b] hover:text-black hover: font-normal">DISCORD</a>
        </Link>    
        <Link href={'https://www.facebook.com/acme'}>
          <a className="mx-[0.5rem] font-bold transition text-[#6b6b6b] hover:text-black hover: font-normal">EMAIL</a>
        </Link>    
        <Link href={'https://www.facebook.com/acme'}>
          <a className="mx-[0.5rem] font-bold transition text-[#6b6b6b] hover:text-black hover: font-normal">MEDIUM</a>
        </Link>    
        <Link href={'https://www.twitter.com/acme'}>
          <a className="mx-[0.5rem] font-bold transition text-[#6b6b6b] hover:text-black hover: font-normal">TWITTER</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
