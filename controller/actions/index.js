import { CONNECT_SUCCESS, DISCONNECTING, OPEN_MINT, CLOSE_MINT, UPDATE_ROLE, DELETE_ROLE, UPDATE_PARAMS, DELETE_PARAMS } from '../constants';
import Web3 from "web3";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getParmas } from "../../utils/contractServices";

toast.configure();
export const connecting = (isServer) => {
    return dispatch => {      
        dispatch(connect_success({connecting: true, connect: false, address: null}, isServer));
        if (typeof window.web3 !== 'undefined') {
            window.web3 = new Web3(window.ethereum);     
        } else {
            toast.warning("No Ethereum interface injected into browser. Read-only access");
        }

        window.ethereum.enable().then(function (accounts) {
            window.web3.eth.net.getNetworkType().then(async (network) => {
                if(network != "goerli"){
                  toast.warning("You are on " + network+ " network. Change network to goerli or you won't be able to do anything here");
                  dispatch(connect_success({connecting: false, connect: false, address: null}, isServer));
                  return;
                } 
                let wallet = accounts[0];                 
                web3.eth.getBalance(wallet).then((res) => {
                  console.log(res);
                  dispatch(connect_success({connecting: false, connect: true, address: wallet, balance: res}, isServer));
                });   
                
                const params = await getParmas();
                if (params) {
                  dispatch(update_params(isServer, params));
                }
            }).catch(function (err) {
                console.log(err);
            });  
        }).catch(function (error) {
            // Handle error. Likely the user rejected the login
            console.error(error)
        })
    }
}

export const connect_success = (result, isServer) => {
    return dispatch => {
      dispatch({
        type: CONNECT_SUCCESS,
        result: result, 
        from: isServer ? 'server' : 'client'
      })
    }
}

export const disconnecting = (isServer) => {
  return dispatch => {
    dispatch({
      type: DISCONNECTING,
      result: null,
      from: isServer ? 'server' : 'client'
    })
  }
}

export const opening_mint = (isServer) => {
  return dispatch => {
    dispatch({
      type: OPEN_MINT,
      result: null,
      from: isServer ? 'server' : 'client'
    })
  }
}

export const closing_mint = (isServer) => {
  return dispatch => {
    dispatch({
      type: CLOSE_MINT,
      result: null,
      from: isServer ? 'server' : 'client'
    })
  }
}

export const update_role = (isServer, role) => {
  return dispatch => {
    dispatch({
      type: UPDATE_ROLE,
      result: role,
      from: isServer ? 'server' : 'client'
    })
  }
}

export const delete_role = (isServer) => {
  return dispatch => {
    dispatch({
      type: DELETE_ROLE,
      result: '',
      from: isServer ? 'server' : 'client'
    })
  }
}


export const update_params = (isServer, params) => {
  return dispatch => {
    dispatch({
      type: UPDATE_PARAMS,
      result: params,
      from: isServer ? 'server' : 'client'
    })
  }
}

export const delete_params = (isServer) => {
  return dispatch => {
    dispatch({
      type: DELETE_PARAMS,
      result: '',
      from: isServer ? 'server' : 'client'
    })
  }
}

