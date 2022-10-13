import { CONNECT_SUCCESS, DISCONNECTING, OPEN_MINT, CLOSE_MINT, UPDATE_ROLE, DELETE_ROLE, UPDATE_PARAMS, DELETE_PARAMS } from '../constants';
import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
  connected: false,
  wallet_address: null,
  wallet_balance: 0,
  open_mint: false,
  action: null,
  from: null,
  connecting: false,
  role: '',
  stockamount: 0,
  lastid: 0,
  currid: 0,
}

export const walletManager = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
        return {
            ...state,
            ...action.payload
        }
    case CONNECT_SUCCESS:      
        return {
            ...state,
            connecting: action.result.connecting,
            connected: action.result.connect,
            wallet_address: action.result.address,
            wallet_balance: action.result.balance,
            action: 'connect_success',
            from: action.from
        }
    case DISCONNECTING:
        return {
            ...state,
            connecting: false,
            connected: false,
            wallet_address: null,
            wallet_balance: 0,
            action: 'disconnecting',
            from: action.from
        }
    case OPEN_MINT:
        return {
            ...state,
            open_mint: true,
            action: 'opening_mint',
            from: action.from
        }
    case CLOSE_MINT:
        return {
            ...state,
            open_mint: false,
            action: 'closing_mint',
            from: action.from
        }
    case UPDATE_ROLE:
        return {
            ...state,
            role: action.result,
            action: 'update_role',
            from: action.from
        }
    case DELETE_ROLE:
        return {
            ...state,
            role: '',
            action: 'delete_role',
            from: action.from
        }
    case UPDATE_PARAMS:
        return {
            ...state,
            stockamount: action.result.stockamount,
            lastid: action.result.lastid,
            currid: action.result.currid,
            action: 'update_params',
            from: action.from
        }
    case DELETE_PARAMS:
        return {
            ...state,
            role: '',
            stockamount: 0,
            lastid: 0,
            currid: 0,
            action: 'delete_params',
            from: action.from
        }
    default:
        return {...state}
  }
}
