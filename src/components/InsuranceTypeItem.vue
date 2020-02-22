<template>
      <div class="insurance-type-block">
          <li v-for="(list,index) in insuranceTypeLists" :key="index" class="insurance-type">
            <div  class="insurance-title">{{list.name}}</div>
            <div class="insurance-image" :class="list.img"></div>
            <button class="insurance-button">Купити</button>
          </li>
      </div>
</template>

<script>
export default {
  data(){
    return{
      isModalLoginOpen: false,
      insuranceTypeLists: [
        {
          name: "Страхування авто",
          img: "auto"
        },
        {
          name: "Страхування здоров'я",
          img: "health"
        }
        
      ]
    }
  },
  methods:{
    loginForm(){
      this.isModalLoginOpen = !this.isModalLoginOpen
    }
  }
};
</script>
<style lang="less" scoped>
li {
  display: inline-block;
}
.insurance-type-block{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px
}
.insurance-type{
  position: relative;
  border: 1px solid #000000;
  border-radius: 8px;
  margin-left: 20px;
  max-width: 300px;
  width: 100%;
  height: 300px;

.insurance-image{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.insurance-image.auto{
  background-image: url("../../src/assets/auto.jpeg")
  }
  .insurance-image.health{
     background-image: url("../../src/assets/health.jpg")
  }
.insurance-title{
  position: absolute;
  color: #fff;
  bottom: 86px;
  font-size: 28px;
  width: 100%;
  background-color: rgba(0,0,0,0.1);
  text-align: center;
}
.insurance-button{
  position: absolute;
  left: 0;
  bottom: 20px;
  background-color: #09489c;
  height: 60px;
  max-width: 260px;
  width: calc(100% - 40px);
  margin: 0 20px;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
}
}
</style>