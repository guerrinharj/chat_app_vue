<template>
    <div class="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
        <h2 class="text-2xl font-semibold mb-4">Login</h2>
        <form @submit.prevent="realizarLogin">
            <input v-model="loginData.login" type="text" placeholder="Email ou usuário" class="input mb-2 w-full" />
            <input v-model="loginData.password" type="password" placeholder="Senha" class="input mb-4 w-full" />
            <button class="bg-blue-500 text-white px-4 py-2 rounded w-full">Entrar</button>
        </form>
        <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const loginData = ref({
    login: '',
    password: ''
})

const error = ref(null)

const realizarLogin = async () => {
    error.value = null

    const sucesso = await store.dispatch('usuario/login', {
        login: loginData.value.login,
        password: loginData.value.password
    })

    if (sucesso) {
        router.push('/chat')
    } else {
        error.value = 'Credenciais inválidas. Tente novamente.'
    }
}
</script>
