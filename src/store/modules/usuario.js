import axios from 'axios';

export default {
    namespaced: true,
    state: {
        currentUser: null,
        token: null
    },
    mutations: {
        setUser(state, user) {
            state.currentUser = user;
        },
        setToken(state, token) {
            state.token = token;
        },
        logout(state) {
            state.currentUser = null;
            state.token = null;
        }
    },
    actions: {
        async login({ commit }, { login, password }) {
            try {
                const response = await axios.post('http://localhost:3000/api/v1/login', {
                    login,
                    password
                });

                const { usuario, token } = response.data;

                commit('setUser', usuario);
                commit('setToken', token);

                return true; // sucesso
            } catch (error) {
                console.error('Erro no login:', error.response?.data || error.message);
                return false; // falhou
            }
        },

        logout({ commit }) {
            commit('logout');
        }
    },
    getters: {
        isAuthenticated: state => !!state.token,
        getUser: state => state.currentUser,
        getToken: state => state.token
    }
};
