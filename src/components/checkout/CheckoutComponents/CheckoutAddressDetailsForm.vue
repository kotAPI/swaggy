<template>
    <div class="checkout-form-container">
         <!--  -->
           <div class="row">
               <div class="small-12 columns">
                   <h2>Checkout</h2>
               </div>
               <div class="small-12 columns">
                   <div class="row">
                       <div class="small-4 columns">
                            <div class="input-form-text">First Name   <span class="form-error-text" v-if="formValidationStates.first_name===false">Invalid First Name</span></div> 
                            <input type="text" class="input-form-textbox" v-model="formData.first_name">
                       </div>
                       <div class="small-4 columns">
                            <div class="input-form-text">First Name <span class="form-error-text" v-if="formValidationStates.last_name===false">Invalid Last Name</span></div>
                            <input type="text" class="input-form-textbox" v-model="formData.last_name">
                       </div>
                       
                   </div>
                   <!--  -->
                   <div class="row">
                       <div class="small-8 columns">
                            <div class="input-form-text">Address 1 <span class="form-error-text" v-if="formValidationStates.address1===false">Invalid Address Field</span></div>
                            <input type="text" class="input-form-textbox" style="width:95%;" v-model="formData.address1">
                       </div>
                       <div class="small-8 columns">
                            <div class="input-form-text">Address 2 <span class="form-error-text" v-if="formValidationStates.address2===false">Invalid Address Field</span></div>
                            <input type="text" class="input-form-textbox" style="width:95%;" v-model="formData.address2">
                       </div>
                   </div>
                   <!--  -->
                   <div class="row">
                       <div class="small-4 columns">
                            <div class="input-form-text">City <span class="form-error-text" v-if="formValidationStates.city===false">Please Enter a valid City</span></div>
                            <input type="text" class="input-form-textbox" v-model="formData.city">
                       </div>
                       <div class="small-4 columns">
                            <div class="input-form-text">State <span class="form-error-text" v-if="formValidationStates.state===false">Please Enter a valid State</span></div>
                            <input type="text" class="input-form-textbox" v-model="formData.state">
                       </div>
                        <div class="small-4 columns">
                            <div class="input-form-text">PIN <span class="form-error-text" v-if="formValidationStates.pin===false">Invalid PIN, needs to be six digits</span></div>
                            <input type="number" class="input-form-textbox" v-model="formData.pin">
                       </div>
                       
                   </div>
                   <!--  -->
                    <div class="row">
                       <div class="small-4 columns">
                            <div class="input-form-text">Phone Number <span class="form-error-text" v-if="formValidationStates.phone_number===false">Invalid Phone Number, needs to be ten digits</span></div>
                            <input type="number" class="input-form-textbox" style="width:90%;" v-model="formData.phone_number">
                       </div>
                    </div>
                   
               </div>
           </div>
           <!--  -->
    </div>
</template>


<script>
export default {
    props:['formData'],
    data(){
        return{
            formValidationStates:{
                first_name:undefined,
                last_name:undefined,
                address1:undefined,
                address2:undefined,
                city:undefined,
                state:undefined,
                pin:undefined,
                phone_number:undefined
            }
        }
    },
    methods:{
        resetForm(){
            this.formValidationStates={
                first_name:undefined,
                last_name:undefined,
                address1:undefined,
                address2:undefined,
                city:undefined,
                state:undefined,
                pin:undefined,
                phone_number:undefined
            }
        },
        generateOrderID(length, chars) {
            var result = '';
            for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
            return result;
        },

        
        validateForm(){
            this.resetForm()

            if(this.formData.first_name.length<=2){
                this.formValidationStates.first_name=false
                return false
            }
             if(this.formData.last_name.length<=2){
                this.formValidationStates.last_name=false
                return false
            }
            if(this.formData.address1.length<10){
                this.formValidationStates.address1=false
                return false
            }
            if(this.formData.address2.length<10){
                this.formValidationStates.address2=false
                return false
            }
            if(this.formData.city.length<2){
                this.formValidationStates.city=false
                return false
            }
             if(this.formData.state.length<2){
                this.formValidationStates.state=false
                return false
            }
            if(this.formData.pin.length!=6){
                this.formValidationStates.pin=false
                return false
            }
             if(this.formData.phone_number.length!=10){
                this.formValidationStates.phone_number=false
                return false
            }
            localStorage.formdata = JSON.stringify( this.formData)
            localStorage.orderid = this.generateOrderID(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
            return true
        }
    }
}
</script>



<style>
.form-error-text{
    color:red;
    font-size:0.8em;
    padding-left:5px;
}
.input-form-textbox{
    width:90%;
}
.input-form-text{
    padding-bottom:10px;
    margin-top:4px;
    font-size:1em;
    font-weight:500;
}
.checkout-form-container{
    max-width:900px;
    width:100%;
    margin:auto;
    
}
</style>
