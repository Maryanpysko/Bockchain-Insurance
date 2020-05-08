<template>
    <div class="insuranse-menu">
        <div v-for="(insurancePrice, index) in insurancePricing" :key="index" class="block">
            <div class="block-item name">{{insurancePrice.name}}</div>
            <div class="block-item price">{{insurancePrice.price}}  Ethereum</div>
            <button class="block-item button" @click="modalEntered(insurancePrice,index)">Купити</button>
        </div>
        <BuyInsurance v-if="isBuyInsuranceDialogOpened" @buyPolice="buyPolice" :insurancePrice="insurancePrice"/>
    </div>
</template>

<script>
import { ethers } from "ethers";
import Web3 from 'web3'
import BuyInsurance from '..//Modals/BuyInsurance';
import { contract, provider, parseUnits } from "../../services/ContractServices";
import { mapGetters } from 'vuex';
import { getItem, setItem } from '../../services/localStorage';
export default {
    data(){
        return{
            termId: '',
            insurancePrice: {}
        }
    },
    computed: {
        ...mapGetters(["isBuyInsuranceDialogOpened"])
    },
    props:{
        insurancePricing: Array
    },
    components: {
        BuyInsurance
    },
    methods: {
        modalEntered(insurancePrice,index) {
            this.insurancePrice = insurancePrice
            console.log(index)
            this.termId = index;
            this.$store.dispatch('openBuyInsurance');
        },
        async buyPolice(obj) {
            const  wallet = new ethers.Wallet(obj.privateKey, provider);
            const contractWithSigner =  contract.connect(wallet);
            let productName = obj.carBrand + ' ' + obj.regNumber
            let price = this.insurancePrice.price.toString()
            const weiValue = Web3.utils.toWei(price, 'ether');
            let ovverides = {
                value: parseUnits(weiValue)
            };
            let tx = await contractWithSigner.buyPolice(productName, this.termId, ovverides);
            obj.hash = tx.hash;
            obj.validity = this.insurancePrice.name
            obj.url = "https://ropsten.etherscan.io/tx/" + tx.hash
            let userName = getItem('userName')
            setItem(userName,obj)
            this.$store.dispatch('transactionHash',obj)
            window.open("https://ropsten.etherscan.io/tx/" + tx.hash);
        }
    }
    
}
</script>

<style lang="less" scoped>
.insuranse-menu{
    max-width: 500px;
    width: 100%;
    height: 200px;
    background-color: #ffffff;
    border: 2px solid rgb(78, 74, 74);
    border-radius: 4px;
    @media(max-width: 850px){
        max-width: 700px;
    }
}
.block{
    line-height: 60px;
    border-bottom: 1px solid  rgb(78, 74, 74);
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    padding-top: 20px;
}
.block-item.name{
    padding-left: 30px;
    font-size: 28px
}
.block-item.price{
    font-size: 20px
}
.block-item.button{
    margin-right: 20px;
    border-radius:4px;
    border: none ;
    background-color: #09489c;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
    font-size: 18px

}
</style>