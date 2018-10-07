<template>
    <div>
        <div class="row">
            <div class="small-12 columns">
                <h2>Order Summary</h2>
            </div>
            <Cart :cartItems="cartItems" context="billing"/>
        </div>
    </div>
</template>


<script>
import Cart from '@/components/home/HomeComponents/Cart'
export default {
    components:{Cart},
    data(){
        return{
            cartItems:[]
        }
    },
    mounted(){
        this.cartItems = JSON.parse(localStorage.cart)
    },
    methods:{
        goToBilling(){
            if(this.getTotalPriceOfOrders()>200){
                localStorage.cart = JSON.stringify(this.cartItems)
                this.$router.push("/checkout")
            }
            else{
                alert("Minimum orders of 200 Rupees need to be made in order to avail delivery.")
            }
            
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