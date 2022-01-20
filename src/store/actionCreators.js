import {  SET_LAST_PRICE
    , SET_MARKET_CAP, SET_TOTAL_CIRCULATING, SET_ACCOUNT, SET_WALLET_CONNECT } from './actionTypes';
  
  
  export const setLastPrice = (value) => ({
    type: SET_LAST_PRICE,
    value
  });
  
  export const setMarketCap = (value) => ({
    type: SET_MARKET_CAP,
    value
  });

  export const setTotalCirculating = (value) => ({
    type: SET_TOTAL_CIRCULATING,
    value
  });

  export const setAccount = (value) => ({
    type: SET_ACCOUNT,
    value
  });

  export const setWalletConnect = (value) => ({
    type: SET_WALLET_CONNECT,
    value
  });

  