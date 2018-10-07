<template>
    <div>
        <div class="row thankyou-container">
            <div class="small-12 columns">
                <div class="thankyou-line">
                    Thank you <strong>{{userDetails.first_name}} </strong> <strong> {{userDetails.last_name}}</strong>
                </div>
            </div>
            <div class="small-12 columns">
                <div class="thankyou-line">
                    We have reviewed your order <strong>{{orderID}}</strong> for rupees <strong>{{finalPrice}}</strong>
                </div>
            </div>
            <div class="small-12 columns">
                <div class="thankyou-line">We will deliver your order to the following address</div>
                <div class="thankyou-line">{{userDetails.address1}} </div>
                <div class="thankyou-line">{{userDetails.address2}}</div>
                <div class="thankyou-line">{{userDetails.city}}</div>
                <div class="thankyou-line">{{userDetails.state}}</div>
                <div class="thankyou-line">{{userDetails.pin}}</div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            userDetails:{},
            orderID:undefined,
            finalPrice:undefined
        }
    },
   mounted(){
       if(localStorage.formdata===undefined){
           this.$router.push("/")
       }
        this.orderID = (localStorage.orderid+"").toUpperCase()
        this.finalPrice = localStorage.finalprice
       this.userDetails = JSON.parse(localStorage.formdata)

        localStorage.clear()
      
   }
}
</script>


<style>
.thankyou-container{
    font-family: 'Poppins' !important;
    text-align: center;
}
.thankyou-line{
    font-family: 'Poppins' !important;
    padding-bottom:12px;
}
</style>
