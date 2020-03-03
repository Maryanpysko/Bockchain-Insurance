<template>
        <div  class="insurans-type">
            <div class="insuranse-title">{{insuranceName.name}}
                <button class="insuranse-button" @click="insuranceMenu">+</button>
            </div>
            <InsurenseMenu v-if="isMenuOpen" :insurancePricing="insuranceName.pricing"/>
        </div>
</template>

<script>
import InsurenseMenu from './InsurenseMenuInfo'
export default {
    data(){
        return{
            isMenuOpen: false
        }
    },
    props:{
        insuranceName: Object
    },
    components:{
    InsurenseMenu
    },
    methods: {
        insuranceMenu(){
           this.isMenuOpen = !this.isMenuOpen
        }
    }
    
}
</script>

<style lang="less" scoped>
.insurans-type{
    position: relative;
    max-width: 500px;
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    margin-left: 40px;
    border: 2px solid rgb(78, 74, 74);
    border-radius: 4px ;
    @media(max-width: 850px) {
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 20px;
        max-width: 700;
        
    }
}
.insuranse-title{
    line-height: 60px;
    font-size: 28px;
    color: rgba(14, 12, 12, 0.616);
    margin-left: 30px;
    @media(max-width: 500px){
        font-size: 20px;
    }
}
.insuranse-button{
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border: 1px solid hsla(0,0%,50.2%,0);
    font-size: 30px;
    border-radius: 10px;
    -webkit-box-shadow: 0 8px 13px 0 rgba(0,0,0,.3);
    box-shadow: 0 8px 13px 0 rgba(0,0,0,.3);
    right: 15px;
    margin-top: 10px;
}
.insuranse-menu{
    max-width: 500px;
    width: 100%;
    height: 300px;
    background-color: #ffffff
}
</style>