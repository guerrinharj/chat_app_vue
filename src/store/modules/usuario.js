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
        login({ commit }, { user, token }) {
            commit('setUser', user);
            commit('setToken', token);
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
