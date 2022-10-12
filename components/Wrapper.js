import React from 'react';

const Wrapper = ({ className, children, ...rest }) => {
  return (
    <div
      {...rest}
      className={`grid content-center w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
