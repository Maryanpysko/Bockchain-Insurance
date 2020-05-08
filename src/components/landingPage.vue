<template>
  <div class="container">
    <div class="header-block">
      <div class="selector-block-title">
        <ul >
          <li class="selector">Головна</li>
        </ul>
      </div>
      <div class="selector-block" @click="a">
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
<script src="https://cdn.ethers.io/scripts/ethers-v4.min.js"
        charset="utf-8"
        type="text/javascript">
</script>
<script>
import InsuranceTypeItem from './InsuranceTypeItem';
import loginModal from './Modals/loginModal';
import Registration from './Modals/Registration'
import { mapGetters } from 'vuex';
import { ethers } from 'ethers';
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
      this.$store.dispatch('openLoginForm');
    },
    registryForm(){
      this.$store.dispatch('openRegistryForm');
    },
     a(){
      
     }
  },
  mounted(){
 /*let provider = ethers.getDefaultProvider('ropsten');
 let abi = [
    "function buyPolice(string productName, uint price) public payable ",
    "function getPoliciesCount() public view returns(uint count)",
    "function getTermsCount() public view returns(uint count)",
	"function fund() public view returns (uint prize)",
	"function terms(uint term) public view returns (uint terms) "
];
let contractAddress = "0x156d98fddc1e8d0e541f6c4740dd65c9d8b90363";
let contract = new ethers.Contract(contractAddress, abi, provider);
let tokenPrice
console.log(contract)
async function initialization() {
	let getTerms = await contract.getTermsCount()
	console.log(Number.parseInt(getTerms))

	let balance = await contract.fund()
	console.log(Number.parseInt(balance))
	let terms = await contract.terms(0)
	console.log(terms)
}
initialization()
async function buyPolice() {
    let privateKey = 'C445E9B3D1025BF0BD7FF86141ABF58D7D806A68FCCF02C083258C13C65FB7F9';
    let wallet = new ethers.Wallet(privateKey, provider);
    console.log(wallet)
    let contractWithSigner = await contract.connect(wallet);
	console.log(contractWithSigner)
	let ovverides = {
		value: ethers.utils.parseUnits('100000000000000000', 'wei'),
    }
    let tx = await contractWithSigner.buyPolice('bmw','0',ovverides);
    console.log(tx);
};
buyPolice()*/
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
