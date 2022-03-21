import Redux from 'react-redux';
import stockReducer from "../reducers/stockReducer";

export const store = Redux.createStore(stockReducer);