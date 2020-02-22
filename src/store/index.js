import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import {
    OPEN_LOGIN_FORM,
    CLOSE_LOGIN_FORM,
    OPEN_REGISTRATION_FORM,
    CLOSE_REGISTRATION_FORM
} from './mutation-types'

const state = {
    windowDialogs: {
        isLoginFormDialogOpened: false,
        isRegistryFormDialogOpened: false
    }
}
const getters = {
    isLoginFormDialogOpened: (state) => state.windowDialogs.isLoginFormDialogOpened,
    isRegistryFormDialogOpened: (state) => state.windowDialogs.isRegistryFormDialogOpened
}
const actions = {
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
    }
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

export default store;