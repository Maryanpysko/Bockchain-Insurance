import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import { updateUserLocalStorage} from '../services/localStorage';
import {
    OPEN_LOGIN_FORM,
    CLOSE_LOGIN_FORM,
    OPEN_REGISTRATION_FORM,
    CLOSE_REGISTRATION_FORM,
    UPDATE_USER,
    CLOSE_BUY_INSURANCE,
    OPEN_BUY_INSURANCE,
    TRANSACTION_HASH
} from './mutation-types'
import UserModel from '../models/UserModel';

const state = {
    user: {
        transactions: []
    },
    windowDialogs: {
        isLoginFormDialogOpened: false,
        isRegistryFormDialogOpened: false,
        isBuyInsuranceDialogOpened: false
    }
}
const getters = {
    isLoginFormDialogOpened: (state) => state.windowDialogs.isLoginFormDialogOpened,
    isRegistryFormDialogOpened: (state) => state.windowDialogs.isRegistryFormDialogOpened,
    userName: (state) => state.user.name,
    isBuyInsuranceDialogOpened: (state) => state.windowDialogs.isBuyInsuranceDialogOpened,
    transactions: (state) => state.user.transactions
}
const actions = {
    loginUser({commit}, user) {
        let userUpdate =  new UserModel(user)
        commit(UPDATE_USER, userUpdate)
    },
    registerNewUser({commit}, user) {
        let newUser = new UserModel(user);
        updateUserLocalStorage(newUser);
        commit(UPDATE_USER, newUser);
    },
    openLoginForm({commit}) {
        commit(OPEN_LOGIN_FORM);
    },
    closeLoginForm({commit}) {
        commit(CLOSE_LOGIN_FORM);
    },
    openRegistryForm({commit}) {
        commit(OPEN_REGISTRATION_FORM);
    },
    closeRegistryForm({commit}) {
        commit(CLOSE_REGISTRATION_FORM);
    },
    openBuyInsurance({commit}) {
        commit(OPEN_BUY_INSURANCE);
    },
    closeBuyInsurance({commit}) {
        commit(CLOSE_BUY_INSURANCE);
    },
    transactionHash({commit},data) {
        commit(TRANSACTION_HASH, data)
    }
}
const mutations = {
    [OPEN_LOGIN_FORM](state) {
        state.windowDialogs.isLoginFormDialogOpened = true;
    },
    [CLOSE_LOGIN_FORM](state) {
        state.windowDialogs.isLoginFormDialogOpened = false;
    },
    [OPEN_REGISTRATION_FORM](state) {
        state.windowDialogs.isRegistryFormDialogOpened = true;
    },
    [CLOSE_REGISTRATION_FORM](state) {
        state.windowDialogs.isRegistryFormDialogOpened = false;
    },
    [UPDATE_USER](state, user) {
        if (user.transactions === undefined){
            state.user = user;
        }
        else {
            state.transactions = user.transactions[0];
        }
        state.user = user;
    },
    [OPEN_BUY_INSURANCE] (state) {
        state.windowDialogs.isBuyInsuranceDialogOpened = true;
    },
    [CLOSE_BUY_INSURANCE] () {
        state.windowDialogs.isBuyInsuranceDialogOpened = false;
    },
    [TRANSACTION_HASH] (state,data) {
        state.user.transactions.push(data)
        updateUserLocalStorage(state.user)
    }
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

export default store;