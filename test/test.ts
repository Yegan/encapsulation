import {ShoppingListItem} from '../index'
import assert from 'assert'

describe('Shopping List Item', function (){
    assert.equal(1,1)
});

it('Should buy a product', function(){
    let shop = new ShoppingListItem('Albany', 12.00)
    shop.buyItem(3)
    assert.equal(shop.itemTotal(), 36.00)
})