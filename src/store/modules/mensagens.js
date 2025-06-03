import { connectCable, disconnectCable } from '@/utils/cable';

export default {
    namespaced: true,
    state: {
        mensagens: [],
        cable: null,
        subscription: null
    },
    mutations: {
        setMensagens(state, mensagens) {
            state.mensagens = mensagens;
        },
        addMensagem(state, mensagem) {
            state.mensagens.unshift(mensagem);
        },
        setSubscription(state, subscription) {
            state.subscription = subscription;
        }
    },
    actions: {
        conectarWebSocket({ commit, rootState }) {
            const token = rootState.usuario.token;

            const cable = connectCable(token);
            const subscription = cable.subscriptions.create(
                { channel: 'ChatChannel' },
                {
                    received(data) {
                        commit('addMensagem', data);
                    },
                    connected() {
                        console.log('✅ Conectado ao ChatChannel');
                    },
                    disconnected() {
                        console.log('🔌 Desconectado do ChatChannel');
                    }
                }
            );
            commit('setSubscription', subscription);
        },

        enviarMensagem({ state }, texto) {
            if (state.subscription) {
                state.subscription.send({ action: 'speak', texto });
            }
        },

        desconectarWebSocket({ commit }) {
            disconnectCable();
            commit('setSubscription', null);
        }
    },
    getters: {
        mensagensOrdenadas(state) {
            return [...state.mensagens].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        }
    }
};
