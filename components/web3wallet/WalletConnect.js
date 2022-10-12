import React from 'react';
import { connecting, disconnecting } from '../../controller/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const ButtonConnect = ({
  className = '',
  onClick,
  children,
}) => {
  let rootClass = 'py-2 px-5 my-5 bg-gray-300 text-center font-bold w-[160px] rounded-xl ';
  return (
    <button onClick={onClick} className={rootClass}>
      {children}
    </button>
  );
};

const WalletConnect = ({
  toggleMenu,
  wallet_address,
  wallet_balance,
  connected,
  open_mint,
  from,
  action,
  actions: {
      connecting,
      disconnecting
  },
  className
}) => {
  return (
    <div
      className={`select-none`}
    >
      {!connected && <ButtonConnect onClick={() => connecting()}>Connect</ButtonConnect>}
      {connected && <ButtonConnect onClick={() => disconnecting()}>Disconnect</ButtonConnect>}
    </div>
  );
};

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators({ connecting, disconnecting }, dispatch) })
)(WalletConnect);