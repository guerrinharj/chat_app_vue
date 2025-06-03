<template>
    <div class="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
        <h2 class="text-2xl font-semibold mb-4">Login</h2>
        <form @submit.prevent="login">
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
import axios from 'axios'

const store = useStore()
const router = useRouter()
const loginData = ref({ login: '', password: '' })
const error = ref(null)

const login = async () => {
    try {
        const res = await axios.post('http://localhost:3000/api/v1/login', loginData.value)
        store.commit('setUser', res.data)
        router.push('/chat')
    } catch (err) {
        error.value = err.response?.data?.error || 'Erro ao fazer login'
    }
}
</script>
