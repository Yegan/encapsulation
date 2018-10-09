export class ShoppingListItem{

    private theProductName:string
    private theProductPrice: number
    private totalBought: number = 0

   constructor (productName:string, productPrice:number){
       this.theProductName = productName;
       this.theProductPrice = productPrice
   }



 buyItem(qty: number){
    this.totalBought += qty
}

 itemTotal(){
    return this.totalBought * this.theProductPrice
}

}