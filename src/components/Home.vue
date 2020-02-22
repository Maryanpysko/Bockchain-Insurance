<template>
  <div class="container">
    <div class="header-block">
      <div class="selector-block">
        <ul class="">
          <li class="selector">Головна / Страхування для вас</li>
        </ul>
      </div>
      <div class="selector-block">
        <ul>
          <li class="selector" @click="loginForm">Вхід</li>
          <li class="selector">Реєстрація</li>
        </ul>
      </div>
    </div>
    <div class="insurance-block">
      <InsuranceTypeItem/>
    </div>
    <loginModal v-if="isModalLoginOpen" @loginForm="loginForm"/>
  </div>
</template>

<script>
import InsuranceTypeItem from './InsuranceTypeItem'
import loginModal from './loginModal'
export default {
  data(){
    return{
      isModalLoginOpen: false,
    }
  },
  components:{
    InsuranceTypeItem,
    loginModal
  },
  methods:{
    loginForm(modalClose){
      this.isModalLoginOpen = !this.isModalLoginOpen
      this.isModalLoginOpen = modalClose
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
@media(max-width: 500px){
  display: none
}
.selector-block{
  display: flex;
  margin-right: 10px
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
  background-color: gray;
  width: 100%;
  height: 80%;
}

</style>
