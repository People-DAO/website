import { ethers } from 'ethers';

import store from '../../store/index'
import { setAccount, setWalletConnect } from '../../store/actionCreators';

var testChainInfo = {
    chainId: '0x4',
    chainName: 'Rinkeby',
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    rpcUrls: ['https://rinkey.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://rinkey.etherscan.io']
};

var mainChainInfo = {
    chainId: '0x1',
    chainName: 'Mainnet',
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    rpcUrls: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://etherscan.io']
};

const PEOPLE_TOKEN_ADDRESS = "0x7a58c0be72be218b41c608b7fe7c5bb630736c71"

const chainInfo = mainChainInfo
var ethereum = {}


const isWalletInstalled = () => {
    const isBrowser = typeof window !== "undefined"
    if (!isBrowser) {
        return isBrowser
    }
    const { ethereum } = window
    //console.log('MetaMask', ethereum.isMetaMask)
    return Boolean(ethereum)
}


async function getAccounts() {
    console.log("getAccounts : start")
    try {
        await ethereum.request({
            method: 'eth_requestAccounts'
        })
        const newAccounts = await ethereum.request({
            method: 'eth_accounts',
        })
        store.dispatch(setAccount(newAccounts[0]))
        store.dispatch(setWalletConnect(true))
        // await getBalance(newAccounts[0])
    } catch (err) {
        console.error('Error on init when getting accounts', err)
    }
}

async function handleNewChain(chainId) {
    console.log("handleNewChain : start")
    if (chainId === chainInfo.chainId) {
        console.log("handleNewChain : no switch")
        await getAccounts()
        // if (account !== '') {
        //     getBalance(account)
        // } else {
        //     await getAccounts()
        // }

    } else {
        console.log("handleNewChain : switch")
        alert("please change to ETH MainNet!")
        // switchToBinanceSmartChain()
    }
}

async function getNetworkAndChainId() {
    try {
        const chainId = await ethereum.request({
            method: 'eth_chainId',
        })
        await handleNewChain(chainId)
        const networkId = await ethereum.request({
            method: 'net_version',
        })
        console.log("network id", networkId)
    } catch (err) {
        console.error(err)
    }
}

// async function switchToBinanceSmartChain() {
//     try {
//         await ethereum.request({
//             method: 'wallet_addEthereumChain',
//             params: [{
//                 chainId: chainInfo.chainId, //'0x38', 
//                 chainName: chainInfo.name,  //Rinkeby
//                 nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
//                 rpcUrls: chainInfo.rpcUrls,  //https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161, https://rinkey.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161
//                 blockExplorerUrls: chainInfo.blockExplorerUrls //https://etherscan.io, https://rinkey.etherscan.io
//             }]
//         })
//         window.location.reload()
//     } catch (err) {
//         console.error(err)
//     }
// }

async function loadContracts() {
    const peopleFile = () => import("../../../static/assets/contracts/Tickets.json")
    const peopleAbi = (await peopleFile())['abi']
    global.peopleContract = new ethers.Contract(PEOPLE_TOKEN_ADDRESS, peopleAbi, global.provider)
}




export async function setUpContracts() {
    console.log("setUpContracts loading start")
    if (isWalletInstalled()) {

        global.provider = new ethers.providers.Web3Provider(window.ethereum)
        global.signer = global.provider.getSigner()
    }
    else {
        global.provider = new ethers.providers.JsonRpcProvider(chainInfo.rpcUrls[0]);

    }
    // load local contract
    await loadContracts();
    await getNetworkAndChainId();

}