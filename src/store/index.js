import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import { updateUserLocalStorage } from '../services/localStorage';
import {
    OPEN_LOGIN_FORM,
    CLOSE_LOGIN_FORM,
    OPEN_REGISTRATION_FORM,
    CLOSE_REGISTRATION_FORM,
    UPDATE_USER
} from './mutation-types'
import UserModel from '../models/UserModel';

const state = {
    user: {},
    windowDialogs: {
        isLoginFormDialogOpened: false,
        isRegistryFormDialogOpened: false
    }
}
const getters = {
    isLoginFormDialogOpened: (state) => state.windowDialogs.isLoginFormDialogOpened,
    isRegistryFormDialogOpened: (state) => state.windowDialogs.isRegistryFormDialogOpened,
    userName: (state) => state.user.name
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
        state.user = user
    }
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

export default store;