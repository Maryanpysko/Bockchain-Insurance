<template>
<div class="modal">
  <div class="container">
      <div class="insuranse-block">
          <div class="insurance">Insurance Auto</div>
          <div class="insurance">Price:{{insurancePrice.price}} Ethereum</div>
          <div class="insurance">Validity:{{insurancePrice.name}} </div>
      </div>
      <div class="input-block">
          <div class="title">First Name:</div>
          <input v-model="firstName" class="input-name" type="text" placeholder="Please enter a first name">
      </div>
      <div class="input-block">
          <div class="title">Last Name:</div>
          <input v-model="lastName" class="input-name" type="text" placeholder="Please enter a last name">
      </div>
      <div class="input-block">
          <div class="title">Car brand:</div>
          <input v-model="carBrand" class="input-name" type="text" placeholder="Car brand">
      </div>
      <div class="input-block">
          <div class="title">Registration numbers:</div>
          <input  v-model="regNumber" class="input-name" type="text" placeholder="Example BC0007BA">
      </div>
      <div class="input-block">
          <div class="title">Private key Ethereum wallet:</div>
          <input  v-model="privateKey" class="input-name" type="text" placeholder="Private Key">
      </div>
      <button class="buy-poilice"  @click="buyPolice()">Buy Polices</button>
  </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            lastName: '',
            firstName: '',
            carBrand: '',
            regNumber: '',
            privateKey: '',
        }
    },
    props: {
        insurancePrice: Object
    },
    methods: {
        buyPolice() {
            if(this.privateKey !== ''){
            let obj = {
                lastName: this.lastName,
                firstName: this.firstName,
                carBrand: this.carBrand,
                regNumber: this.regNumber,
                privateKey: this.privateKey
            }
            this.$emit('buyPolice',obj)
            this.$store.dispatch('closeBuyInsurance');
        }
       }
    },
}
</script>

<style lang="less" scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.555);
  display: block;
}
.container{
    margin: 100px auto;
    max-width: 400px;
    background-color: white;
    box-shadow: 0 6px 14px 0 rgba(6,28,54,.05);
    border-radius: 4px;
    padding: 15px;
}
.insuranse-block{
    display: flex;
    line-height: 20px;
    margin-bottom: 15px;
    justify-content: center;
}
.insurance{
    color: black;
    font-size: 14px;
    font-weight: 700;
    margin-right: 10px;
}
.input-block{
    margin-bottom: 15px;
}
.title{
    line-height: 14px;
    font-weight: 700;
    font-size: 12px;
    color: #8b91a3;
    margin-bottom: 10px;
    
}
.input-name {   
    width: calc(100% - 14px);
    height: 38px;
    border: 1px solid #e3e5f5;
    border-radius: 2px;
    padding-left: 12px;
}
::placeholder{
    color: #8b91a3
}
.buy-poilice{
    height: 40px;
    width: 100%;
    border-radius: 4px;
    border: none;
    background-color: #047cd2;
    color: white;
}
</style>