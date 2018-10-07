<template>
    <div class="row">
        <div class="small-12 medium-7 columns">
            <div class="row">
                <div class="small-12 columns">
                    <h3>Menu</h3>
                </div>
                <div class="small-12 columns">
                     <div>
                        <FoodSection @FOOD_ITEM_ADDED_TO_CART="addItemToCardHandler" @FOOD_ITEM_REMOVED_FROM_CART="removeItemHandler" :menu="menu"/>
                    </div>
                </div>
            </div>
           
        </div>
        <div class="small-12 medium-5 columns">
           <Cart :cartItems="cartItems" ref="cart" context="cart" @ITEM_ADDED="addItemToCardHandler" @ITEM_REMOVED="removeItemHandler"/>
           <div class="row">
            <div class="small-12 columns">
                <button @click="goToBilling">Checkout</button>
            </div>
        </div>
        </div>
    </div>
</template>


<script>
import FoodSection from '@/components/home/HomeComponents/FoodSection'
import Cart from '@/components/home/HomeComponents/Cart'
export default {
    components:{FoodSection,Cart},
    data(){
        return{
            menu:[
                {
                    category:"South Indian",
                    menuItems:[
                        {
                            name:"Chicken Biryani (Single)",
                            price:120,
                        },
                        {
                            name:"Chicken Pot Biryani",
                            price:150,
                        },
                        {
                            name:"Chicken Dum Biryani",
                            price:220,
                        },
                        {
                            name:"Chicken Dum Biryani(Family Pack)",
                            price:620,
                        }
                    ]
                }
            ],
            cartItems:[]
        }
    },
    mounted(){
        
    },
    methods:{
         goToBilling(){
            if(this.$refs.cart.getTotalPriceOfOrders()>200){
                localStorage.cart = JSON.stringify(this.cartItems)
                this.$router.push("/checkout")
            }
            else{
                alert("Minimum orders of 200 Rupees need to be made in order to avail delivery.")
            }
            
        },
        addItemToCardHandler(item){
            console.log(item)
            var found = false
            for(var i=0;i<this.cartItems.length;i++){
                if(this.cartItems[i].name===item.name){
                    this.cartItems[i].quantity++
                    found = true;
                    
                }
            }
            if(found===false){
                this.cartItems.push({name:item.name,price:item.price,quantity:1})
            }
            
        },
        removeItemHandler(item){
             console.log(item)
            var found = false
            var index = undefined
            for(var i=0;i<this.cartItems.length;i++){
                if(this.cartItems[i].name===item.name){
                    this.cartItems[i].quantity--
                    found = true;
                    index = i
                    
                }
            }
            if(this.cartItems[index].quantity===0){
                this.cartItems.splice(index,1)
            }
        }
        
    }
}
</script>
