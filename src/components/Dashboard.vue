<template>
  <div class="container">
    <div class="header-block">
      <div class="selector-block-title">
        <ul >
        <li class="selector" @click="$router.push({ name: 'landingPage' })">Головна</li>
          <li class="selector" @click="$router.push({ name: 'dashboard' })">Dashboard</li>
        </ul>
      </div>
      <div class="selector-block">
        <ul>
          <li class="selector" >{{userName}}</li>
        </ul>
      </div>
    </div>
    <div class="insurance-block">
        <div class="header-title">Виберіть страхування</div>
        <div class="insurance-info">
          <InsuranceInfo :insuranceName="insuranceTypes[0]"/>
          <InsuranceInfo :insuranceName="insuranceTypes[1]"/>
        </div>
    </div>
    
  </div>
</template>
<script>

import {mapGetters} from 'vuex'
import InsuranceInfo from './Dashboard/InsuranceInfo.vue'
export default {
  data(){
  return{
    insuranceTypes: [{
      name: "Страхування авто",
      pricing: [{
        name:"1 Місяць",
        price: 0.02
      },
      {
        name:"6 Місяців",
        price: 0.04
      },
      {
        name:"12 Місяців",
        price: 0.09
      }]
    },
    {
      name:"Cтрахування здоров'я",
      pricing: [{
        name:"1 Місяць",
        price: 0.01
      },
      {
        name:"6 Місяців",
        price: 0.03
      },
      {
        name:"12 Місяців",
        price: 0.07
      }]
    }],
  }
  },
    computed:{
        ...mapGetters(["userName"])
    },
    components: {
      InsuranceInfo
    }
}
</script>
<style lang="less" scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0
}
li {
  display: inline-block;
}
.header-block{
width: 100%;
height: 72px;
display: flex;
background-color: #000000;
justify-content: space-between;

.selector-block-title{
   display: flex;
   margin-right: 10px;
}
.selector-block{
  display: flex;
  margin-right: 10px;
  @media(max-width: 500px) {
    display: none
  }
}
.selector{ 
 color: #ffffff;
 line-height: 72px;
 margin-left: 10px;
 padding-right: 10px;
 padding-left: 10px;
 cursor: pointer;
}
.selector:hover{
  background-color: #2c4156
}
}
.insurance-block{
  background-color: rgba(110, 101, 101, 0.459);
  height: 800px;
  .header-title{
    padding: 50px 0;
    font-size: 36px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
}
}
.insurance-info{
  display: flex;
  justify-content: center;
}
</style>
