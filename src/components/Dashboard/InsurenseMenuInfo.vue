<template>
    <div class="insuranse-menu">
        <div v-for="(insurancePrice, index) in insurancePricing" :key="index" class="block">
            <div class="block-item name">{{insurancePrice.name}}</div>
            <div class="block-item price">{{insurancePrice.price}}  Ethereum/ETH</div>
            <button class="block-item button">Купити</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        insurancePricing: Object
    },
    methods: {
       
    }
    
}
</script>

<style lang="less" scoped>
.insuranse-menu{
    max-width: 500px;
    width: 100%;
    height: 300px;
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