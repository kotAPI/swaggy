<template>
    <div class="row">
        <div class="small-12 medium-7 columns">
            <div class="row" style="position:relative;">
                <div class="small-12 columns">
                    <h1 style="padding-left:20px;
                        padding-bottom:2px;margin:0">Menu</h1>
                </div>
                <div class="small-12 columns">
                    <div class="food-container">
                        <FoodSection @FOOD_ITEM_ADDED_TO_CART="addItemToCardHandler" @FOOD_ITEM_REMOVED_FROM_CART="removeItemHandler" :menu="menu" />
                    </div>
                </div>
            </div>
    
        </div>
        <div class="small-12 medium-5 columns" style="padding-left:40px;margin-top:40px;">
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
                                "image": "https://parulkirecipes.com/wp-content/uploads/2017/05/shahi-paneer.jpg"
                            },
                            {
                                "name": "Paneer Butter masala",
                                "price": 210,
                                "image": "https://i0.wp.com/mypullzone-9vexd6dl53at.netdna-ssl.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?resize=750%2C563&ssl=1"
                            },
                            {
                                "name": "Matar Paneer",
                                "price": 230,
                                "image": "https://140721-408454-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/04/Restaurant-style-Matar-Paneer.jpg"
                            },
                            {
                                "name": "Mushroom Palak",
                                "price": 230,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2013/07/palak-mushroom-recipe-3-1-500x500.jpg"
                            },
                            {
                                "name": "Navaratan Kurma",
                                "price": 230,
                                "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2012/03/navratan-korma-recipe1.jpg"
                            },
                            {
                                "name": "Veg Shahi Kurma",
                                "price": 150,
                                "image": "https://s3.amazonaws.com/images.chefinyou.com/main/vegetable-veg-kurma-kuruma-recipe/main-img1.JPG"
                            },
                            {
                                "name": "Kaju Masala",
                                "price": 250,
                                "image": "http://cdn2.foodviva.com/static-content/food-images/curry-recipes/kaju-curry/kaju-curry.jpg"
                            }
                        ]
                    },
                    {
                        "category": "Chinese",
                        "menuItems": [{
                                "name": "Veg Fried rice",
                                "price": 120,
                                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/08/veg-fried-rice-500x375.jpg"
                            },
                            {
                                "name": "Egg Fried rice",
                                "price": 130,
                                "image": "https://themarinade.in/wp-content/uploads/2017/11/DSC_1332.jpg"
                            },
                            {
                                "name": "Chicken Fried rice",
                                "price": 150,
                                "image": "https://www.averiecooks.com/wp-content/uploads/2016/01/chickenfriedrice-2-650x975.jpg"
                            },
                            {
                                "name": "Veg Schezwan fried rice",
                                "price": 130,
                                "image": "http://www.tasty-indian-recipes.com/wp-content/uploads/2015/03/Veg-Schezwan-Fried-Rice-Recipe-Step-11.jpg"
                            },
                            {
                                "name": "Egg Schezwan fried rice",
                                "price": 140,
                                "image": "https://c2.staticflickr.com/6/5587/30874402705_3b27b13f8e_o.jpg"
                            },
                            {
                                "name": "Chicken Schezwan Fried rice",
                                "price": 160,
                                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/05/schezwan-chicken-fried-rice-recipe-swasthi.jpg"
                            },
                            {
                                "name": "Veg Manchurian",
                                "price": 100,
                                "image": "https://i0.wp.com/mypullzone-9vexd6dl53at.netdna-ssl.com/wp-content/uploads/2017/03/veg-manchurian-dry-recipe-step-by-step-instructions-10.jpg?fit=750%2C604&ssl=1"
                            },
                            {
                                "name": "Chicken Manchurian",
                                "price": 130,
                                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/07/chicken-manchurian-1.jpg"
                            },
                            {
                                "name": "Chicken 65",
                                "price": 150,
                                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/chicken-65-recipe.jpg"
                            },
                            {
                                "name": "Chilli Ckicken",
                                "price": 150,
                                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/chilli-chicken-recipe-500x500.jpg"
                            },
                            {
                                "name": "Chilli Apollo Fish",
                                "price": 200,
                                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/08/apollo-fish.jpg"
                            }
                        ]
                    },
                    {
                        "category": "Biryanis",
                        "menuItems": [{
                                "name": "Chicken Biryani",
                                "price": 200,
                                "image": "https://s4.scoopwhoop.com/anj/sw/5ccb34ef-e9b2-40d1-8050-45b4d54c7be5.jpg"
                            },
                            {
                                "name": "Mutton Birayni",
                                "price": 250,
                                "image": "https://i.ytimg.com/vi/HI2-u2zu8Ss/maxresdefault.jpg"
                            },
                            {
                                "name": "Chicken Fried Piece biryani",
                                "price": 260,
                                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/chicken-fry-biryani-recipe-21.jpg"
                            },
                            {
                                "name": "Mutton Keema Biryani",
                                "price": 230,
                                "image": "https://i2.wp.com/media.hungryforever.com/wp-content/uploads/2017/09/06130724/keema-biryani.jpg?ssl=1?w=356&strip=all&quality=80"
                            },
                            {
                                "name": "Paneer Biryani",
                                "price": 180,
                                "image": "https://pull-revisfoodography.netdna-ssl.com/wp-content/uploads/2017/01/paneer-biryani-1.jpg"
                            },
                            {
                                "name": "Mughlai Mutton Biryani",
                                "price": 260,
                                "image": "https://i.ytimg.com/vi/HI2-u2zu8Ss/maxresdefault.jpg"
                            },
                            {
                                "name": "Prawns Biryani",
                                "price": 250,
                                "image": "https://www.ndtv.com/cooks/images/prawn-biryani-new.jpg"
                            },
                            {
                                "name": "Fish Biryani",
                                "price": 270,
                                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/08/fish-biryani-500x500.jpg"
                            }
                        ]
                    },
                    {
                        "category": "Indian Breads",
                        "menuItems": [{
                                "name": "Roti",
                                "price": 20,
                                "image": "https://img.werecipes.com/wp/wp-content/uploads/2015/04/phulka-roti-chappati-recipe.jpg"
                            },
                            {
                                "name": "Tawa Roti",
                                "price": 15,
                                "image": "http://foodmela.co.uk/wp-content/uploads/2015/10/chapati-roti-rotli-how-to.jpg"
                            },
                            {
                                "name": "Plain Naan",
                                "price": 25,
                                "image": "http://thecurrypalace.com/wp-content/uploads/2018/02/PANEER-NAAN.jpg"
                            },
                            {
                                "name": "Butter Naan",
                                "price": 30,
                                "image": "https://www.cookwithmanali.com/wp-content/uploads/2014/11/Homemade-Naan.jpg"
                            },
                            {
                                "name": "Ghee Tawa roti",
                                "price": 20,
                                "image": "https://www.watscooking.com/images/dish/large/Tawa_Roti_Ghee.jpg"
                            },
                            {
                                "name": "Kerala Parota",
                                "price": 20,
                                "image": "https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2016/08/12102441/south-indian-thali-bangalore8.jpg?ssl=1?w=356&strip=all&quality=80"
                            },
                            {
                                "name": "Luccha Parantha",
                                "price": 40,
                                "image": "https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2016/08/12102441/south-indian-thali-bangalore8.jpg?ssl=1?w=356&strip=all&quality=80"
                            },
                            {
                                "name": "Plain Parantha",
                                "price": 20,
                                "image": "http://cdn2.foodviva.com/static-content/food-images/roti-paratha-recipes/paratha-recipe/paratha-recipe.jpg"
                            }
                        ]
                    },
                    {
                        "category": "Meals",
                        "menuItems": [{
                                "name": "South Indian Meals",
                                "price": 80,
                                "image": "https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2016/08/12102441/south-indian-thali-bangalore8.jpg?ssl=1?w=356&strip=all&quality=80"
                            },
                            {
                                "name": "North Indian Meals",
                                "price": 100,
                                "image": "https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2016/08/12102441/south-indian-thali-bangalore8.jpg?ssl=1?w=356&strip=all&quality=80"
                            },
                            {
                                "name": "South Indian Special Meals",
                                "price": 130,
                                "image": "https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2016/08/12102441/south-indian-thali-bangalore8.jpg?ssl=1?w=356&strip=all&quality=80"
                            },
                            {
                                "name": "North Indian Special Meals",
                                "price": 150,
                                "image": "https://media-cdn.tripadvisor.com/media/photo-s/10/47/db/f6/north-indian-thali-meal.jpg"
                            }
                        ]
                    },
                    {
                        "category": "Desserts",
                        "menuItems": [{
                                "name": "Vanilla Ice cream",
                                "price": 40,
                                "image": "https://d2gk7xgygi98cy.cloudfront.net/4163-3-large.jpg"
                            },
                            {
                                "name": "Strawberry Ice cream",
                                "price": 50,
                                "image": "https://www.savingdessert.com/wp-content/uploads/2017/05/Strawberry-Ice-Cream-1-800x1200.jpg"
                            },
                            {
                                "name": "Dry fruit cream",
                                "price": 60,
                                "image": "https://4.imimg.com/data4/SL/YN/MY-11166769/dry-fruit-ice-cream-250x250.jpg"
                            },
                            {
                                "name": "Special Malai Kulfi",
                                "price": 40,
                                "image": "https://new-img.patrika.com/upload/images/2017/05/15/malai-kulfi-1494836569_835x547.jpg"
                            },
                            {
                                "name": "Gulab Jamun (1 Piece)",
                                "price": 20,
                                "image": "https://5.imimg.com/data5/VO/NJ/GLADMIN-5940560/gulab-jamun-500x500.jpg"
                            }
                        ]
                    },
                    {
                        "category": "Beverages",
                        "menuItems": [{
                                "name": "Tea",
                                "price": 10,
                                "image": "http://studenthangovercures.com/wp-content/uploads/2015/11/tea.jpg"
                            },
                            {
                                "name": "Coffee",
                                "price": 10,
                                "image": "https://i.guim.co.uk/img/media/3eb709d3ba0e7b1e121ac0efd934c9128eeec873/0_330_3854_2313/master/3854.jpg?width=300&quality=85&auto=format&fit=max&s=f84df48a85c12e4f6bf8b647b9c7b5fd"
                            },
                            {
                                "name": "Badam milk",
                                "price": 20,
                                "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/badam-milk-recipe.jpg"
                            },
                            {
                                "name": "Lemon Tea",
                                "price": 15,
                                "image": "http://cdn2.foodviva.com/static-content/food-images/curry-recipes/palak-paneer-recipe/palak-paneer-recipe.jpg"
                            },
                            {
                                "name": "Ginger Tea",
                                "price": 20,
                                "image": "https://static.toiimg.com/photo/msid-27716213/27716213.jpg?20274"
                            },
                            {
                                "name": "Bournvita",
                                "price": 40,
                                "image": "https://i.ytimg.com/vi/Y0YmddQqBxM/maxresdefault.jpg"
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
    .food-container {
        height: calc(100vh - 180px);
        overflow-y: scroll;
        padding: 20px;
    }
</style>
