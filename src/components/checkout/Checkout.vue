<template>
    <div class="row">
        <div class="small-12 columns">
           <CheckoutAddressDetailsForm/>
        </div>
        <div class="small-12 columns">
            <OrderSummary/>
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
    methods:{
        placeOrder(){
            this.$router.push("/order-placed/")
        }
    }
}
</script>
