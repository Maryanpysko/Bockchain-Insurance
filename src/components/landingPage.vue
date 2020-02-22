<template>
  <div class="container">
    <div class="header-block">
      <div class="selector-block-title">
        <ul >
          <li class="selector">Головна / Страхування для вас</li>
        </ul>
      </div>
      <div class="selector-block">
        <ul>
          <li class="selector" @click="loginForm">Вхід</li>
          <li class="selector" @click="registryForm">Реєстрація</li>
        </ul>
      </div>
    </div>
    <div class="insurance-block">
      <div class="header-title">Blokchain Insuranse</div>
      <InsuranceTypeItem/>
    </div>
    <loginModal v-if="isLoginFormDialogOpened" />
    <Registration v-if="isRegistryFormDialogOpened"/>
  </div>
</template>

<script>
import InsuranceTypeItem from './InsuranceTypeItem';
import loginModal from './Modals/loginModal';
import Registration from './Modals/Registration'
import { mapGetters } from 'vuex'
export default {
  data(){
    return{
     
    }
  },
  computed:{
    ...mapGetters(["isLoginFormDialogOpened", "isRegistryFormDialogOpened"])
  },
  components:{
    InsuranceTypeItem,
    loginModal,
    Registration
  },
  methods:{
    loginForm(){
      this.$store.dispatch('openLoginForm')
    },
    registryForm(){
      this.$store.dispatch('openRegistryForm')
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
  background-color: gray;
  .header-title{
    padding: 50px 0;
    font-size: 36px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
}
}

</style>
