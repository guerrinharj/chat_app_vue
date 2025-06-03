<template>
    <nav class="bg-gray-800 text-white p-4 flex justify-between items-center">
        <router-link to="/" class="font-bold text-lg">ChatApp</router-link>

        <div class="flex items-center gap-4">
            <span v-if="isAuthenticated">Olá, {{ user?.username }}</span>

            <router-link
                v-if="!isAuthenticated"
                to="/login"
                class="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
            >
                Entrar
            </router-link>

            <button
                v-if="isAuthenticated"
                @click="logout"
                class="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
                Sair
            </button>
        </div>
    </nav>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const isAuthenticated = computed(() => store.getters['usuario/isAuthenticated'])
const user = computed(() => store.getters['usuario/getUser'])

const logout = () => {
    store.dispatch('usuario/logout')
    router.push('/login')
}
</script>
