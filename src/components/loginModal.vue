<template>
<div class="modal">
    <div class="login-block">
        <form class="login-form" >
            <button class="button-close-modal" @click="modalClose()"></button>
            <h3>Login</h3>
            <input placeholder="Login"  required />
            <input type="password" placeholder="Password" required />
            <button class="submit-button">Ввійти</button>
            <a class="registry" >Реєстрація</a>
      </form>
    </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{
   modalClose(){
      this.$emit ('loginForm', false)
    }
  }
};
</script>
<style lang="less" scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.16);
  display: block;
}
.login-block {
  position: relative;
  display: flex;
  justify-content: center;
}

.login-block {
  margin: 100px auto;
  max-width: 400px;
  border-radius: 8px;
  border: 1px solid grey;
  background-color: #ffffff;
  padding: 40px;
  font-size: 20px;
  text-align: center;
}
.login-form h3 {
  font-size: 30px;
  margin-bottom: 0;
}
.login-form input {
  margin-top: 40px;
  width: 100%;
  padding: 10px;
}
.login-form p {
  color: grey;
}
.submit-button {
  display: block;
  margin: 40px auto 20px auto;
  font-size: 24px;
  height: 50px;
  border: 1px solid grey;
  border-radius: 4px;
  max-width: 250px;
  width: 100%;
  color: white;
  background-color: #09489c;
}
.registry {
  text-decoration: underline;
  cursor: pointer;
}
.button-close-modal{
    position: absolute;
    right: 20px;
    background-color: #ffffff;
    border: none;
    cursor: pointer;
    background-image: url("../../src/assets/close.svg");
    width: 15px;
    height: 15px;

}

</style>