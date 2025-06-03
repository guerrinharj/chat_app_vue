<template>
    <form @submit.prevent="submit">
        <input
        v-model="texto"
        placeholder="Digite sua mensagem..."
        required
        />
        <button type="submit">{{ editar ? 'Atualizar' : 'Enviar' }}</button>
        <button v-if="editar" type="button" @click="cancelar">Cancelar</button>
    </form>
    </template>

<script>
    export default {
    props: {
        editar: Boolean,
        valorInicial: String
    },
    emits: ['enviar', 'cancelar'],
    data() {
        return {
        texto: this.valorInicial || ''
        };
    },
    watch: {
        valorInicial(novo) {
        this.texto = novo;
        }
    },
    methods: {
        submit() {
            if (!this.texto.trim()) return;
                this.$emit('enviar', this.texto);
                this.texto = '';
            },
        cancelar() {
            this.$emit('cancelar');
        }
    }
};
</script>
