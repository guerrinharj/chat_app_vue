<template>
    <div class="chat">
        <MensagemFiltro @filtrar="filtrarMensagens" />

        <div class="mensagens">
            <MensagemItem
                v-for="msg in mensagensFiltradas"
                :key="msg.id"
                :mensagem="msg"
                :usuarioAtualId="usuario.id"
                @editar="prepararEdicao"
                @remover="removerMensagem"
            />
        </div>

        <MensagemForm
            :editar="editando"
            :valorInicial="mensagemEditando?.texto"
            @enviar="enviarMensagem"
            @cancelar="cancelarEdicao"
        />
    </div>
</template>

<script>
    import MensagemItem from '../components/MensagemItem.vue';
    import MensagemForm from '../components/MensagemForm.vue';
    import MensagemFiltro from '../components/MensagemFiltro.vue';

    export default {
    components: { MensagemItem, MensagemForm, MensagemFiltro },
    data() {
        return {
            mensagens: [],
            mensagemEditando: null,
            filtro: { texto: '', autor: '' },
            usuario: { id: 1 }
        };
    },
    computed: {
        mensagensFiltradas() {
        return [...this.mensagens]
            .reverse()
            .filter(m => m.texto.includes(this.filtro.texto))
            .filter(m => m.usuario.username.includes(this.filtro.autor));
        },
        editando() {
        return !!this.mensagemEditando;
        }
    },
    methods: {
        filtrarMensagens(payload) {
            this.filtro = payload;
        },
        prepararEdicao(mensagem) {
            this.mensagemEditando = mensagem;
        },
        cancelarEdicao() {
            this.mensagemEditando = null;
        },
        enviarMensagem(texto) {
            if (this.editando) {
                // Chamada API para PUT
                this.mensagemEditando.texto = texto;
                this.mensagemEditando = null;
            } else {
                // WebSocket ou POST para nova mensagem
                const nova = {
                id: Date.now(),
                texto,
                usuario: { id: this.usuario.id, username: this.usuario.username },
                created_at: new Date().toLocaleTimeString()
                };
                this.mensagens.push(nova);
            }
        },
        removerMensagem(mensagem) {
        // chamada DELETE à API
        this.mensagens = this.mensagens.filter(m => m.id !== mensagem.id);
        }
    }
};
</script>
