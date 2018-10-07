<template>
    <div style="margin-top:10px;margin-bottom:50px;">
         <div v-for="(cartItem,idx) in cartItems" :key="idx" >
                <div class="row cart-item" >
                    <div class="small-4 columns">
                        <div class="cart-item-name">{{cartItem.name}}</div>
                    </div>
                    <div class="small-4 columns cart-item-name" style="text-align:center;"> 
                       <span class="button-increment-decrement" v-if="context==='cart'" @click="decrementItem(cartItem)">-</span> {{cartItem.quantity}} <span class="button-increment-decrement" v-if="context==='cart'" @click="incrementItem(cartItem)">+</span>
                    </div>
                    <div class="small-4 columns cart-item-name">{{cartItem.price * cartItem.quantity}}</div>
                </div>
            </div>
        <div class="row " v-if="cartItems.length>0">
            <div class="divider"></div>
            <div class="small-4 columns cart-item-name">Total Items</div>
            <div class="small-4 columns cart-item-name" style="text-align:center;">{{getTotalNumberOfItemsInCart()}}</div>
            <div class="small-4 columns cart-item-name">{{getTotalPriceOfOrders()}}</div>
        </div>

        
    </div>
</template>


<script>
export default {
    props:['cartItems',"context"],
    methods:{
       decrementItem(item){
           this.$emit("ITEM_REMOVED",item)
       },
       incrementItem(item){
           this.$emit("ITEM_ADDED",item)
       },
        getTotalNumberOfItemsInCart(){
            var items = 0;
            for(var i=0;i<this.cartItems.length;i++){
                items += this.cartItems[i].quantity
            }
            return items
        },
        getTotalPriceOfOrders(){
            var price = 0;
            for(var i=0;i<this.cartItems.length;i++){
                price += this.cartItems[i].price * this.cartItems[i].quantity;
            }
            return price
        }
    }
}
</script>


<style>
.divider{
    margin-top:10px;
    margin-bottom:10px;
    border:1px solid grey;
    width:100%;
}
.cart-item{
    margin-bottom:20px;
}
.cart-item-name{
    font-family: 'Poppins';
    font-weight:900;
    font-size:0.8em;
}
.button-increment-decrement{
    padding:2px 12px;
    border-radius:2px;
    border:1px solid grey;
    font-weight: 500;
    font-family: 'Poppins';
    margin-left:4px;
    margin-right:4px;
    user-select: none;
    cursor: pointer;
}
.button-increment-decrement:hover{
    background-color:#ff9800;
    color:white;
}
</style>
