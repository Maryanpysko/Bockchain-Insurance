<template>
    <table class="table">
        <thead>
            <th v-for="(key,index) in columns" :key='index'>{{key}}</th>
        </thead>
    <tbody>
        <GridItems v-for="(transactionmodel,index) in transactions" :key="index" :transactionmodel="transactionmodel"/> 
    </tbody>
    
   </table>
  
</template>

<script>
import GridItems from './TransactionGridItems'
import { mapGetters } from 'vuex';
export default {
    data(){
        return{
            columns:['Імя та Прізвище','Параметри стахування','Термін дії','Транзакція']
     }
    },
    components:{
        GridItems
    },
    computed: {
        ...mapGetters(["transactions"])
    }
}
</script>

<style lang="less" scoped>
th {
    line-height: 54px;
    padding-right: 50px;
    border: 1px black solid;
}

thead {
    color: rgba(6, 15, 91, 0.5);
    font-size: 12px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-weight: normal;
    text-align: center;
    
}
table{
    border-spacing: 0;
    margin: 0 auto;
}
.table{background-color: white;}



</style>