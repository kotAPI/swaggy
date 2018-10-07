<template>
    <div>
        <div v-for="categoryItem in menu">
            <h4 style="padding-left:20px;color:orange;">{{categoryItem.category}}</h4>
            <div class="row">
                <div class="small-12 columns">
                    <div class="food-item-container">
                        <div class="row" v-for="foodItem in categoryItem.menuItems">
                            <div class="small-5 columns">
                                <div class="menu-item-image" :style="applyBackground(foodItem)"></div>
    
                            </div>
                            <div class="small-7 columns">
                                <div class="row">
                                    <div class="small-6 columns">
                                        <div class="menu-item" style="text-align:center;font-size:0.9em;font-weight:600;">{{foodItem.name}}</div>
                                        
                                    </div>
                                    <div class="small-6 columns">
                                        <div class="food-item-price-text "> {{foodItem.price}} /-</div>
                                    </div>
                                    <div class="small-12 columns">
                                        <div class="small-6 columns" @click="addFoodItemToCart(foodItem)">
                                            <div class="increment-add-remove-button">Add</div>
                                        </div>
                                        <div class="small-6 columns" @click="removeFoodItem(foodItem)">
                                            <div class="increment-add-remove-button" style="border-color:red;">Remove</div>
                                        </div>
                                    </div>
    
    
    
                                </div>
    
    
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
        methods: {
            addFoodItemToCart(item) {
                this.$emit("FOOD_ITEM_ADDED_TO_CART", item)
            },
            removeFoodItem(item) {
                this.$emit("FOOD_ITEM_REMOVED_FROM_CART", item)
            },
            applyBackground(item) {
                console.log()
                return "background-image:url(" + item.image + ");"
            }
        }
    }
</script>


<style>
    .menu-item-image {
        width: 120px;
        margin: auto;
        height: 120px;
        background-size: cover;
        border-radius: 10%;
        background-repeat: no-repeat;
        background-position: center center;
        margin-bottom:20px;
    }
    
    .menu-item {
        font-family: 'Poppins';
        font-weight: 400;
        padding-top: 10px;
        padding-bottom: 40px;
    }
    
    .food-item-container {
        width: 80%;
        margin: auto;
    }
    
    .food-item-price-text {
        text-align: center;
    }
    
    .increment-add-remove-button {
        user-select: none;
        padding: 3px;
        border-radius: 4px;
        border: 1px solid orange;
        text-align: center;
        width: 80%;
        margin: auto;
        margin-bottom: 10px;
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 0.8em;
        cursor: pointer;
    }
    
    .increment-add-remove-button:hover {
        border-color: black !important;
    }
</style>
