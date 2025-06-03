<template>
    <div class="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
        <h2 class="text-2xl font-semibold mb-4">Registrar</h2>
        <form @submit.prevent="register">
            <input v-model="form.nome" type="text" placeholder="Nome" class="input mb-2 w-full" />
            <input v-model="form.username" type="text" placeholder="Username" class="input mb-2 w-full" />
            <input v-model="form.email" type="email" placeholder="Email" class="input mb-2 w-full" />
            <input v-model="form.password" type="password" placeholder="Senha" class="input mb-2 w-full" />
            <input v-model="form.password_confirmation" type="password" placeholder="Confirmar senha" class="input mb-4 w-full" />
            <button class="bg-green-500 text-white px-4 py-2 rounded w-full">Registrar</button>
        </form>
        <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const form = ref({
    nome: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const error = ref(null)
const router = useRouter()

const register = async () => {
    try {
        await axios.post('http://localhost:3000/api/v1/usuarios', { usuario: form.value })
        router.push('/login')
    } catch (err) {
        error.value = err.response?.data?.errors?.join(', ') || 'Erro ao registrar'
    }
}
</script>
