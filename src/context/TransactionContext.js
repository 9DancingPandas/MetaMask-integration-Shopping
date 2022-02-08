//dependencies constants.js, transactions.json (taken from Eth ABI), passed into cart.js

import React, {useState, useEffect} from 'react';
import {ethers} from 'ethers';

import { contractABI, contractAddress} from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({provider, signer, transactionContract});
}

export const TransactionProvier = ({children}) => {
    const [connectedAccount, setconnectedAccount] = useState("");

    const checkIfWalletIsConnected = async () => {
        if(!ethereum) return alert("Please install MetaMask");

        const accounts = await ethereum.request({method : 'eth_accounts'});
        console.log(accounts);
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert("Please install MetaMask");
            const accounts = await ethereum.request({method : 'eth_requestAccounts'});
            setconnectedAccount = accounts([0]);
            
        } catch (error) {
            console.log(error); 

            throw new Error("No ethereum object.")
            
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();

    }, [] )

    return (
        <TransactionContext.Provider value= {{connectWallet : connectWallet}}>
            {children}
        </TransactionContext.Provider>
    )
}