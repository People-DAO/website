import {  SET_LAST_PRICE
    , SET_MARKET_CAP, SET_TOTAL_CIRCULATING } from './actionTypes';
  
  
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

  