import StockItem from "../domain/interfaces/stockItem";

class GetStock {
    
    items: StockItem[] = [];
    
    constructor() {
        this.items = this.getItemsFromData();
    }

    showItems = () => {
        return this.items;
    }

    private getItemsFromData = () => {
        throw new Error("Function not implemented.");
    }
}

export default GetStock;

