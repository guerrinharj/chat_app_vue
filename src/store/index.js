import { createStore } from 'vuex'

export default createStore({
    state: {
        user: null,
        token: null,
        mensagens: []
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload.usuario
            state.token = payload.token
        },
        logout(state) {
            state.user = null
            state.token = null
        },
        setMensagens(state, mensagens) {
            state.mensagens = mensagens
        },
        addMensagem(state, mensagem) {
            state.mensagens.unshift(mensagem)
        }
    },
    actions: {
        login({ commit }, payload) {
        // chamada API aqui
        },
        logout({ commit }) {
        commit('logout')
        }
    }
})
