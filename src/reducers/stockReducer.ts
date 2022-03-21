import {
    ADD_STOCK_ITEM,
    REMOVE_STOCK_ITEM
} from '../domain/constants';
import { initialState } from "./initialState";

function stockReducer(state = initialState, action: any) {
    switch (action.type) {
        case ADD_STOCK_ITEM:
            const currentStock = [...state];
            if (currentStock.length > 0) {
                currentStock.forEach(stockItem => {
                    if (action.payload.id == stockItem.id) {
                        return state;
                    }
                });
            }
            return [...state, action.payload];
        case REMOVE_STOCK_ITEM:
            const deletedStock = state.filter(stockItem => JSON.stringify(action.payload) != JSON.stringify(stockItem));
            return deletedStock;
        default:
            return state;
    }
}

export default stockReducer;