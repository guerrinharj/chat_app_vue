<template>
    <div class="chat-page">
        <h2>Bem-vindo, {{ username }}!</h2>
        <MensagemForm />
        <div class="mensagens">
            <MensagemItem
                v-for="mensagem in mensagens"
                :key="mensagem.id"
                :mensagem="mensagem"
            />
        </div>
    </div>
</template>

<script>
import MensagemForm from '@/components/MensagemForm.vue';
import MensagemItem from '@/components/MensagemItem.vue';
import { mapGetters } from 'vuex';

export default {
    components: { MensagemForm, MensagemItem },
    computed: {
        ...mapGetters('mensagens', ['mensagensOrdenadas']),
        ...mapGetters('usuario', ['isAuthenticated', 'getToken', 'getUser']),
        mensagens() {
            return this.mensagensOrdenadas;
        },
        username() {
            return this.getUser?.username 
            
        }
    },
    watch: {
        getToken(newToken) {
            if (newToken) {
                this.$store.dispatch('mensagens/conectarWebSocket');
            }
        }
    },
    mounted() {
        if (this.isAuthenticated && this.getToken) {
            this.$store.dispatch('mensagens/conectarWebSocket');
        }
    },
    beforeUnmount() {
        this.$store.dispatch('mensagens/desconectarWebSocket');
    }
};
</script>
