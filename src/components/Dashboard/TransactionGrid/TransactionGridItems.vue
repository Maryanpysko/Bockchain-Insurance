<template>
    <tr >
        <td>{{ transactionmodel.firstName + ' '}}{{ transactionmodel.lastName}}</td>
        <td>{{ transactionmodel.carBrand + ' '}}{{transactionmodel.regNumber}}</td>
        <td>{{ transactionmodel.validity }}</td>
        <td><a target="_blank" :href="transactionmodel.url" >{{ transactionmodel.hash }}</a></td>
    </tr>
      
</template>

<script>
export default {
    data() {
        return{

        }
    },
    props:{
        transactionmodel: Object
    },
    
}
</script>
<style lang="less" scoped>
td {
    vertical-align: baseline;
    border: 1px solid black;
}
tr{
}
</style>