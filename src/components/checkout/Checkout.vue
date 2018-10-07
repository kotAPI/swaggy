<template>
    <div class="row">
        <div class="small-12 columns">
           <CheckoutAddressDetailsForm :formData="billDetails" ref="orderForm"/>
        </div>
        <div class="small-12 columns">
            <OrderSummary ref="summary"/>
            <div class="row">
                <div class="small-12 columns">
                    <button @click="placeOrder">Confirm Order</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import CheckoutAddressDetailsForm from '@/components/checkout/CheckoutComponents/CheckoutAddressDetailsForm'
import OrderSummary from '@/components/checkout/CheckoutComponents/OrderSummary'
export default {
    components:{CheckoutAddressDetailsForm,OrderSummary},
    data(){
        return{
            billDetails:{
                first_name:"",
                last_name:"",
                address1:"",
                address2:"",
                city:"",
                state:"",
                pin:undefined,
                phone_number:undefined
            }
        }
    },
    mounted(){
        if(localStorage.cart===undefined){
            this.$router.push("/")
        }
    },
    methods:{
        placeOrder(){
            if(this.$refs.orderForm.validateForm()){
                localStorage.finalprice = this.$refs.summary.getTotalPriceOfOrders()
                this.$router.push("/order-placed/")
            }
            
        }
    }
}
</script>
