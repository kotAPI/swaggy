<template>
    <div>
        <div v-for="categoryItem in menu">
            <h4>{{categoryItem.category}}</h4>
            <div class="row">
                <div class="small-12 columns">
                    <div class="food-item-container">
                        <div class="row" v-for="foodItem in categoryItem.menuItems">
                            <div class="small-5 columns">
                                <div class="menu-item">{{foodItem.name}}</div>
                            </div>
                            <div class="small-3 columns">
                               <div class="food-item-price-text menu-item"> {{foodItem.price}}</div>
                            </div>
                            <div class="small-2 columns" @click="addFoodItemToCart(foodItem)">
                                <div class="increment-add-remove-button">Add</div>
                            </div>
                            <div class="small-2 columns" @click="removeFoodItem(foodItem)">
                                <div class="increment-add-remove-button" style="border-color:red;">Remove</div>
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
.menu-item{
    font-family: 'Poppins';
    font-weight: 400;
}
.food-item-container{
    width:80%;
    margin:auto;
}
.food-item-price-text{
    text-align: center;
}
.increment-add-remove-button{
    user-select: none;
    padding:3px;
    border-radius:4px;
    border:1px solid orange;
    text-align: center;
    width:80%;
    margin:auto;
    margin-bottom:10px;
    font-family: 'Poppins';
    font-weight:600;
    font-size: 0.8em;
    cursor: pointer;

}
.increment-add-remove-button:hover{
    border-color:black !important;
}
</style>
