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
        </div>
        <div class="grid">
            <TransactioGrid/>
        </div>
        <InsurancePolicy/>
    </div>
  </div>
</template>
<script>
import TransactioGrid from './Dashboard/TransactionGrid/TransactionGrid'
import InsuranceInfo from './Dashboard/InsuranceInfo.vue';
import { getItem } from "../services/localStorage";
export default {
  data(){
  return{
    insuranceTypes: [{
      name: "Страхування авто",
      pricing: [{
        name:"1 Місяць",
        price: 0.05,
        termId: 0
      },
      {
        name:"12 Місяців",
        price: 0.2,
        termId: 0
      }]
    }],
    userName:  ''
  }
  },
  components: {
    InsuranceInfo,
    TransactioGrid
  },
  mounted(){
      this.userName = getItem('userName')
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
  @media(max-width: 850px){
    display: block
  }
}
.grid{
  margin-top: 200px;
  display: flex;
  justify-content: center;
}
</style>
