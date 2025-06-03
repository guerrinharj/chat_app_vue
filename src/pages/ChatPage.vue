<template>
    <div class="chat-page">
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
        mensagens() {
            return this.mensagensOrdenadas;
        }
    },
    mounted() {
        this.$store.dispatch('mensagens/conectarWebSocket');
    },
    beforeUnmount() {
        this.$store.dispatch('mensagens/desconectarWebSocket');
    }
};
</script>
