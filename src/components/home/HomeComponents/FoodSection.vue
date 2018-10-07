<template>
    <div>
        <div v-for="categoryItem in menu">
            <h6>{{categoryItem.category}}</h6>
            <div class="row">
                <div class="small-12 columns">
                    <div class="food-item-container">
                        <div class="row" v-for="foodItem in categoryItem.menuItems">
                            <div class="small-5 columns">
                                {{foodItem.name}}
                            </div>
                            <div class="small-3 columns">
                               <div class="food-item-price-text"> {{foodItem.price}}</div>
                            </div>
                            <div class="small-2 columns" @click="addFoodItemToCart(foodItem)">
                                Add
                            </div>
                            <div class="small-2 columns" @click="removeFoodItem(foodItem)">
                                Remove
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        props: ["menu"],
        methods:{
            addFoodItemToCart(item){
                this.$emit("FOOD_ITEM_ADDED_TO_CART",item)
            },
            removeFoodItem(item){
                this.$emit("FOOD_ITEM_REMOVED_FROM_CART",item)
            }
        }
    }
</script>


<style>
.food-item-container{
    width:80%;
    margin:auto;
}
.food-item-price-text{
    text-align: center;
}
</style>
