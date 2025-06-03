<template>
    <form @submit.prevent="enviar">
        <input v-model="texto" placeholder="Digite sua mensagem..." />
        <button type="submit">Enviar</button>
    </form>
</template>

<script>
export default {
    data() {
        return { texto: '' };
    },
    methods: {
        enviar() {
            if (this.texto.trim()) {
                this.$store.dispatch('mensagens/enviarMensagem', this.texto);
                this.texto = '';
            }
        }
    }
};
</script>
