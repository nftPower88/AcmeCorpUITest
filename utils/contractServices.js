import { CONTRACT_ADDRESS } from "./constants";
import ContractABI from "../contracts/WidgetsFactory.json";

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
        console.log(e)
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