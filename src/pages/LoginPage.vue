<script setup>
import router from '@/router'
import { ref } from 'vue'

const pass = ref('1234')
const inputPass = ref('')
const msg = ref('')

const login = () => {
    if (inputPass.value === pass.value) {
        msg.value = ''
        router.push('/main') // ganti sesuai route kamu
    } else {
        msg.value = 'Kode kamu salah sayangku 💔'
    }
}
</script>
<template>
    <div
        class="flex justify-center items-center min-h-screen bg-gradient-to-br from-rose-200 via-pink-100 to-purple-200">

        <div
            class="bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-80 text-center transition-all duration-500 hover:scale-[1.02]">

            <h1 class="text-2xl font-bold text-rose-500 mb-6 tracking-wide">
                Enter the code
            </h1>

            <input v-model="inputPass" type="password" placeholder="Masukkan kode..."
                class="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300 text-center" />

            <button @click="login"
                class="mt-5 w-full bg-rose-500 text-white py-3 rounded-xl shadow-md hover:bg-rose-600 active:scale-95 transition-all duration-300">
                Buka 💖
            </button>

            <p v-if="msg" class="text-sm text-red-500 mt-4 animate-shake">
                {{ msg }}
            </p>

        </div>

    </div>
</template>
<style scoped>
@keyframes shake {

    0%,
    100% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-5px);
    }

    75% {
        transform: translateX(5px);
    }
}

.animate-shake {
    animation: shake 0.3s ease;
}
</style>