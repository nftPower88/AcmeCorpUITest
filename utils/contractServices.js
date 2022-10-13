import { CONTRACT_ADDRESS } from "./constants";
import ContractABI from "../contracts/WidgetsFactory.json";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
export const addStock = async (account, amount) => {
    const contract = new window.web3.eth.Contract(ContractABI.abi, CONTRACT_ADDRESS);
    
    try {
        const gasAmount = await contract.methods.InventoryManagement(account, amount).estimateGas({from: account});
        await contract.methods.InventoryManagement(account, amount).send({from: account, gas: String(gasAmount)})
    } catch(e) {
        console.log(e)
    }
}

export const order = async (account, amount) => {
    const contract = new window.web3.eth.Contract(ContractABI.abi, CONTRACT_ADDRESS);

    try {  
        const price = Number(100000000000000000) * amount;        
        const gasAmount = await contract.methods.OrderPurchase(account, amount).estimateGas({from: account, value: price});
        await contract.methods.OrderPurchase(account, amount).send({from: account, value: price, gas: String(gasAmount)})
        await contract.OrderPurchase(account, amount);
    } catch(e) {
        // console.log(e)
        toast.error(e.message);
    }
}


export const ship = async (account) => {
    const contract = new window.web3.eth.Contract(ContractABI.abi, CONTRACT_ADDRESS);

    try {
        const gasAmount = await contract.methods.OrderShip().estimateGas({from: account});
        await contract.methods.OrderShip().send({from: account, gas: String(gasAmount)})
    } catch(e) {
        console.log(e)
    }
}

export const getParmas = async (account) => {
    const contract = new window.web3.eth.Contract(ContractABI.abi, CONTRACT_ADDRESS);

    try {
        const stockamount = await contract.methods._getAmount().call();
        const lastid = await contract.methods._lastShipedOrder().call();
        const currid = await contract.methods._currentOrderId().call();

        return {stockamount, currid, lastid};
    } catch(e) {
        console.log(e)
        return null;
    }
}