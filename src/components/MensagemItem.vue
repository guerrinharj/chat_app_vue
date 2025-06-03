<template>
    <div class="mensagem">
        <strong>{{ mensagem.usuario.username }}</strong>: {{ mensagem.texto }}
        <span class="timestamp">{{ mensagem.created_at }}</span>
        <div v-if="isMine" class="actions">
            <button @click="$emit('editar', mensagem)">✏️</button>
            <button @click="$emit('remover', mensagem)">🗑️</button>
        </div>
    </div>
    </template>

    <script>
    export default {
    props: {
        mensagem: Object,
        usuarioAtualId: Number
    },
    computed: {
        isMine() {
        return this.mensagem.usuario.id === this.usuarioAtualId;
        }
    }
    };
</script>
