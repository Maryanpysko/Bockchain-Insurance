<template>
<div class="modal">
    <div class="login-block">
        <form class="login-form" @submit.prevent="login">
            <button class="button-close-modal" @click="modalClose"></button>
            <h3>Login</h3>
            <input v-model="userName" placeholder="Login"  required />
            <div v-if="isUserNoRegistry" class="wrong-user-name">Цей користувач незареєстрований</div>
            <input v-model="userPassword" type="password" placeholder="Password" required />
            <button class="submit-button" @click="login">Ввійти</button>
            <a class="registry" @click="registryForm">Реєстрація</a>
      </form>
    </div>
</div>
</template>

<script>
import { getItem, setItem } from "../../services/localStorage";
export default {
  data(){
    return{
      userName: '',
      userPassword: '',
      isUserNoRegistry: false
    }
  },
  methods:{
    modalClose(){
      this.$store.dispatch("closeLoginForm");
    },
    registryForm(){
      this.$store.dispatch("closeLoginForm");
      this.$store.dispatch('openRegistryForm');
    },
    login(){
      let user = getItem(this.userName);
      if (!user) {
        return this.isUserNoRegistry = true;
      }
      setItem('userName', this.userName);
      this.$store.dispatch("loginUser", user);
      this.$router.push({ name: 'dashboard' });
      this.$store.dispatch("closeLoginForm");
    },
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
  background-color: rgba(0, 0, 0, 0.555);
  display: block;
}

.login-block {
  position: relative;
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
  width: calc(100% - 40px);
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
  cursor: pointer;
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
    background-image: url("../../../src/assets/close.svg");
    width: 15px;
    height: 15px;

}
.wrong-user-name{
  margin: 5px 0;
  text-align: center;
  font-size: 12px;
  color: red;
}

</style>