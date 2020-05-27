<template>
    <div class="container">
        <div class="block-icons">
            <div class="icons"></div>
        </div>
        <div class="title-block">
            <h1>We're not serving ... yet</h1>
        </div>
        <div class="text">Currently we're not serving your country. We hope to serve more countries
            in the future though, so please check back in the future.
        </div>
        <div class="footer">Here's a <a>list of supported countries, if you"d like to take a look.</a></div>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.container{
    position: relative;
    margin-top: 100px;
    width: 470px;
    height: 360px;
    background-color: white;
    padding: 30px;
    text-align: center;
    font-size: 19px;
    border-radius: 4px;
}
.block-icons{
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: white;
    top: -40px;
    left: 210px;
    padding-top: 15px;
}
.title-block{
    padding-top: 50px;
    margin-bottom: 40px;
}
.footer{
    padding-top: 70px;
}
.icons{
    width: 60px;
    height: 60px;
    display: inline-block;
    background-repeat: no-repeat;
     background-image: url("../../src/assets/warning.svg")
}

</style>