<template>
    <div class="row">
        <div class="small-12 medium-7 columns">
            <div class="row" style="position:relative;">
                <div class="small-12 columns">
                    <h3>Menu</h3>
                </div>
                <div class="small-12 columns">
                    <div class="food-container">
                        <FoodSection @FOOD_ITEM_ADDED_TO_CART="addItemToCardHandler" @FOOD_ITEM_REMOVED_FROM_CART="removeItemHandler" :menu="menu" />
                    </div>
                </div>
            </div>
    
        </div>
        <div class="small-12 medium-5 columns"  style="padding-left:40px;margin-top:40px;">
            <Cart :cartItems="cartItems" ref="cart" context="cart" @ITEM_ADDED="addItemToCardHandler" @ITEM_REMOVED="removeItemHandler" />
            <div class="row">
                <div class="small-12 columns" style="text-align:center;">
                    <button @click="goToBilling" class="button-green">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import FoodSection from '@/components/home/HomeComponents/FoodSection'
    import Cart from '@/components/home/HomeComponents/Cart'
    export default {
        components: {
            FoodSection,
            Cart
        },
        data() {
            return {
                "menu": [{
                        "category": "South Indian",
                        "menuItems": [{
                                "name": "Idly",
                                "price": 35,
                                "image": "https://cdn.shopify.com/s/files/1/0013/7704/2476/products/IDLY_1_NO_x700.jpg?v=1526355540"
                            },
                            {
                                "name": "Idly Vada",
                                "price": 65,
                                "image": "https://previews.123rf.com/images/csstockimages/csstockimages1710/csstockimages171004014/87896959-idli-sambar-vada-and-coconut-chutney-south-indian-breakfast.jpg"
                            },
                            {
                                "name": "Rava Idly",
                                "price": 40,
                                "image": "http://cdn3.foodviva.com/static-content/food-images/breakfast-recipes/rava-idli-recipe/rava-idli-recipe.jpg"
                            },
                            {
                                "name": "Plain dosa",
                                "price": 50,
                                "image": "http://betterbutterbucket.s3-website-ap-southeast-1.amazonaws.com/386x386/swapna-sunil20170514220412868.jpg"
                            },
                            {
                                "name": "Masala dosa",
                                "price": 60,
                                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/06/masala-dosa-recipe-1.jpg"
                            },
                            {
                                "name": "Set dosa",
                                "price": 50,
                                "image": "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Breakfast_Tiffins/Karanataka_Style_Set_Dosa_Recipe_Thick_Pancakes_Indian_Vegetarian_Archanas_Kitchen-1.jpg"
                            },
                            {
                                "name": "Poori",
                                "price": 60,
                                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/03/poori-masala-recipe.jpg"
                            },
                            {
                                "name": "Pongal",
                                "price": 50,
                                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/ven-pongal-recipe-500x500.jpg"
                            }
    
                        ]
                    },
                    {
                        "category": "North Indian",
                        "menuItems": [{
                                "name": "Dal Fry",
                                "price": 120,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Dal Makhani",
                                "price": 130,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Kadai paneer",
                                "price": 190,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Palak paneer",
                                "price": 200,
                                "image": "http://cdn2.foodviva.com/static-content/food-images/curry-recipes/palak-paneer-recipe/palak-paneer-recipe.jpg"
                            },
                            {
                                "name": "Shahi paneer",
                                "price": 190,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Paneer Butter masala",
                                "price": 210,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Matar Paneer",
                                "price": 230,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Mushroom Palak",
                                "price": 230,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Naaratan Kurma",
                                "price": 230,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Veg Shahi Kurma",
                                "price": 150,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Kaju Masala",
                                "price": 250,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            }
                        ]
                    },
                    {
                        "category": "Chinese",
                        "menuItems": [{
                                "name": "Veg Fried rice",
                                "price": 120,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Egg Fried rice",
                                "price": 130,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Chicken Fried rice",
                                "price": 150,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Veg Schezwan fried rice",
                                "price": 130,
                                "image": "http://cdn2.foodviva.com/static-content/food-images/curry-recipes/palak-paneer-recipe/palak-paneer-recipe.jpg"
                            },
                            {
                                "name": "Egg Schezwan fried rice",
                                "price": 140,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Chicken Schezwan Fried rice",
                                "price": 160,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Veg Manchurian",
                                "price": 100,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Chicken Manchurian",
                                "price": 130,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Chicken 65",
                                "price": 150,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Chilli Ckicken",
                                "price": 150,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Chilli Apollo Fish",
                                "price": 200,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            }
                        ]
                    },
                    {
                        "category": "Biryanis",
                        "menuItems": [{
                                "name": "Chicken Biryani",
                                "price": 120,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Mutton Birayni",
                                "price": 130,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Chicken Fried Piece biryani",
                                "price": 150,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Mutton Keema Biryani",
                                "price": 130,
                                "image": "http://cdn2.foodviva.com/static-content/food-images/curry-recipes/palak-paneer-recipe/palak-paneer-recipe.jpg"
                            },
                            {
                                "name": "Paneer Biryani",
                                "price": 140,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Mughlai Mutton Biryani",
                                "price": 160,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Prawns Biryani",
                                "price": 100,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Fish Biryani",
                                "price": 130,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            }
                        ]
                    },
                    {
                        "category": "Indian Breads",
                        "menuItems": [{
                                "name": "Roti",
                                "price": 20,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Tawa Roti",
                                "price": 15,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Plain Naan",
                                "price": 25,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Butter Naan",
                                "price": 30,
                                "image": "http://cdn2.foodviva.com/static-content/food-images/curry-recipes/palak-paneer-recipe/palak-paneer-recipe.jpg"
                            },
                            {
                                "name": "Ghee Tawa roti",
                                "price": 20,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Kerala Parota",
                                "price": 20,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Luccha Parantha",
                                "price": 40,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "Plain Parantha",
                                "price": 20,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            }
                        ]
                    },
                    {
                        "category": "Meals",
                        "menuItems": [{
                                "name": "South Indian Meals",
                                "price": 80,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "North Indian Meals",
                                "price": 100,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "South Indian Special Meals",
                                "price": 130,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "North Indian Special Meals",
                                "price": 150,
                                "image": "http://cdn2.foodviva.com/static-content/food-images/curry-recipes/palak-paneer-recipe/palak-paneer-recipe.jpg"
                            }
                        ]
                    },
                    {
                        "category": "Desserts",
                        "menuItems": [{
                                "name": "South Indian Meals",
                                "price": 80,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "North Indian Meals",
                                "price": 100,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "South Indian Special Meals",
                                "price": 130,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/dal-fry-recipe-500x500.jpg"
                            },
                            {
                                "name": "North Indian Special Meals",
                                "price": 150,
                                "image": "http://cdn2.foodviva.com/static-content/food-images/curry-recipes/palak-paneer-recipe/palak-paneer-recipe.jpg"
                            }
                        ]
                    }
                ],
                cartItems: []
            }
        },
        mounted() {
    
        },
        methods: {
            goToBilling() {
                if (this.$refs.cart.getTotalPriceOfOrders() > 200) {
                    localStorage.cart = JSON.stringify(this.cartItems)
                    this.$router.push("/checkout")
                } else {
                    alert("Minimum orders of 200 Rupees need to be made in order to avail delivery.")
                }
    
            },
            addItemToCardHandler(item) {
                console.log(item)
                var found = false
                for (var i = 0; i < this.cartItems.length; i++) {
                    if (this.cartItems[i].name === item.name) {
                        this.cartItems[i].quantity++
                            found = true;
    
                    }
                }
                if (found === false) {
                    this.cartItems.push({
                        name: item.name,
                        price: item.price,
                        quantity: 1
                    })
                }
    
            },
            removeItemHandler(item) {
                console.log(item)
                var found = false
                var index = undefined
                for (var i = 0; i < this.cartItems.length; i++) {
                    if (this.cartItems[i].name === item.name) {
                        this.cartItems[i].quantity--
                            found = true;
                        index = i
    
                    }
                }
                if (this.cartItems[index].quantity === 0) {
                    this.cartItems.splice(index, 1)
                }
            }
    
        }
    }
</script>


<style>
.food-container{
    height:400px;
    overflow-y:scroll;
    padding:20px;
}
</style>
