<template>
<div class="modal">
    <div class="registration-block">
      <div class="registry-block">
        <button class="button-close-modal" @click="closeModal"></button>
        <form class="registry-form" @submit.prevent="registry" >
          <h1>Registry</h1>
          <input v-model="userName" placeholder="User name"  required />
          <input v-model="password" type="password"  placeholder="Password" required />
          <input v-model="repeatPassword" type="password"  placeholder="Repeat password" required />
          <button class="submit-button" >Зареєструватись</button>
          <a class="login-ref" @click="loginForm">Login</a>
        </form>
    </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
      return{
        userName: '',
        password: '',
        repeatPassword: ''
      }
    },
    methods: {
      closeModal() {
        this.$store.dispatch('closeRegistryForm');
      },
      loginForm() {
        this.$store.dispatch('closeRegistryForm');
        this.$store.dispatch('openLoginForm');
      },
      registry() {
         this.$store.dispatch('registerNewUser',{
          name: this.userName,
          password: this.password
        });
         this.$router.push({ name: 'dashboard' });
         this.$store.dispatch('closeRegistryForm');
      }
    }
}
</script>
<style lang="less" scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.541);
  display: block;
}
.registration-block{
  padding-top: 70px; 
  position: relative;
}
.registry-block {
  position: relative;
  margin: 0 auto;
  max-width: 450px;
  border-radius: 8px;
  border: 1px rgba(202, 202, 202, 0.5) solid;
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.15);
  padding: 40px;
  font-size: 20px;
  text-align: center;
  background-color: #ffffff
}
.registry-form h1 {
  font-weight: 400;
  font-size: 48px;
  margin-bottom: 0;
}
.registry-form input {
  margin-top: 40px;
  width: calc(100% - 40px);
  padding: 10px;
}
.registry-form p {
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
  cursor: pointer;
}
.login-ref {
  margin-top: 20px;
  text-decoration: underline;
  cursor: pointer;
}

.button-close-modal{
    position: absolute;
    right: 20px;
    background-color: #ffffff;
    border: none;
    cursor: pointer;
    background-image: url("../../../src/assets/close.svg");
    width: 15px;
    height: 15px;

}
</style>