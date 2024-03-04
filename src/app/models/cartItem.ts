import IItem from "./item";

// export default interface ICartItem{
//     item:ICartItemDetails
//     itemDetails:IItem
// }

// interface ICartItemDetails{
//     amount:number
// }
export default interface ICartItem extends IItem {
    amount: number
}