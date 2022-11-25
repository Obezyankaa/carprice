import { combineReducers } from 'redux';
import auctions from './auctions';
import carReduser from './carReduser';
// import themeReducer from '../Theme/slice';

export default combineReducers({
  auction: auctions,
  car: carReduser,
  // theme: themeReducer,
});
