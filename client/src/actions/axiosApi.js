/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { GET_ZAPROS, GET_POISK } from '../constants/actions';

const getZaprosData = (payload) => ({ type: GET_ZAPROS, payload });
const getOneCar = (payload) => ({ type: GET_POISK, payload });
const getCarId = (payload) => ({ type: GET_CAR_ID, payload });

const getZaprosDataThunk = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/api/filterAuctions');
  if (response.ok) {
    const data = await response.json();
    const dispatchApi = dispatch(getZaprosData(data.auctions));
  }
};

const getOneCarThunk = (string) => async (dispatch) => {
  const response = await fetch(`http://localhost:3000/api/filterAuctions?search=${string}`);
  if (response.ok) {
    const data = await response.json();
    const dispatchApi = dispatch(getZaprosData(data.auctions));
    console.log('dispatchApi -->', dispatchApi);
  }
};

const getOneCarIdThunk = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3000/api/auction/${id}`);
  if (response.ok) {
    const data = await response.json();
    const dispatchApi = dispatch(getZaprosData(data.auctions));
    console.log('dispatchApi -->', dispatchApi);
  }
};

export {
  getZaprosData,
  getZaprosDataThunk,
  getOneCar,
  getOneCarThunk,
  getCarId,
  getOneCarIdThunk
};
