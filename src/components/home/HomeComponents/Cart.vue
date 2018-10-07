<template>
    <div>
         <div v-for="(cartItem,idx) in cartItems" :key="idx">
                <div class="row">
                    <div class="small-4 columns">{{cartItem.name}}</div>
                    <div class="small-4 columns"> 
                       <span v-if="context==='cart'" @click="decrementItem(cartItem)">-</span> {{cartItem.quantity}} <span v-if="context==='cart'" @click="incrementItem(cartItem)">+</span>
                    </div>
                    <div class="small-4 columns">{{cartItem.price * cartItem.quantity}}</div>
                </div>
            </div>
        <div class="row">
            <div class="small-4 columns">Total Items</div>
            <div class="small-4 columns">{{getTotalNumberOfItemsInCart()}}</div>
            <div class="small-4 columns">{{getTotalPriceOfOrders()}}</div>
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
