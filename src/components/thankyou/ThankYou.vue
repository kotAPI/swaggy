<template>
    <div>
        <div class="row">
            <div class="small-12 columns">
                Thank you {{userDetails.first_name}} {{userDetails.last_name}}
            </div>
            <div class="small-12 columns">
                We have reviewed your order {{orderID}} for rupees {{finalPrice}}
            </div>
            <div class="small-12 columns">
                <div>We will deliver your order to the following address</div>
                <div>{{userDetails.address1}}</div>
                <div>{{userDetails.address2}}</div>
                <div>{{userDetails.city}}</div>
                <div>{{userDetails.state}}</div>
                <div>{{userDetails.pin}}</div>
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
        this.orderID = (localStorage.orderid+"").toUpperCase()
        this.finalPrice = localStorage.finalprice
       this.userDetails = JSON.parse(localStorage.formdata)

        localStorage.clear()
      
   }
}
</script>
