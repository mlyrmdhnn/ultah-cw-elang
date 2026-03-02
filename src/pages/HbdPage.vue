<script setup>
import { ref, onMounted } from "vue"

const showContent = ref(false)
const showBase = ref(false)
const showMiddle = ref(false)
const showTop = ref(false)

onMounted(() => {
    setTimeout(() => showContent.value = true, 300)
    setTimeout(() => showBase.value = true, 800)
    setTimeout(() => showMiddle.value = true, 1400)
    setTimeout(() => showTop.value = true, 2000)
})
</script>

<template>
    <div class="min-h-screen bg-[#f6c9d4] flex flex-col items-center justify-center px-4 relative overflow-hidden">

        <!-- pattern -->
        <div class="absolute inset-0 opacity-5 pointer-events-none
             bg-[radial-gradient(circle_at_20px_20px,#000_1px,transparent_1px)]
             bg-[size:40px_40px]">
        </div>

        <transition name="fade-up">
            <div v-if="showContent" class="relative bg-[#7e4c5b] w-full max-w-md rounded-3xl
                       shadow-[0_20px_45px_rgba(0,0,0,0.15)]
                       p-8 text-white text-center">

                <h1 class="text-3xl font-light italic mb-10">
                    Happy Birthday, My Love
                </h1>

                <!-- Cake Container -->
                <div class="flex flex-col items-center h-64 justify-end relative">

                    <!-- Top -->
                    <div v-if="showTop" class="cake-layer top relative">

                        <!-- Candle -->
                        <div class="absolute -top-12 left-1/2 -translate-x-1/2">
                            <div class="w-2 h-10 bg-white rounded"></div>
                            <div class="flame"></div>
                        </div>

                    </div>

                    <!-- Middle -->
                    <div v-if="showMiddle" class="cake-layer middle"></div>

                    <!-- Base -->
                    <div v-if="showBase" class="cake-layer base"></div>

                </div>

                <p class="text-sm leading-relaxed opacity-90 mt-10">
                    May your day be filled with warmth,
                    laughter, and everything beautiful.
                </p>

            </div>
        </transition>
    </div>
</template>

<style scoped>
/* Fade card */
.fade-up-enter-active {
    transition: all 0.8s ease;
}

.fade-up-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

/* Cake layers */
.cake-layer {
    animation: drop 0.8s cubic-bezier(.22, 1.4, .36, 1);
    margin-top: -8px;
}

.base {
    width: 180px;
    height: 70px;
    background: #fbcfe8;
    border-radius: 0 0 20px 20px;
}

.middle {
    width: 150px;
    height: 60px;
    background: #f9a8d4;
    border-radius: 20px;
}

.top {
    width: 120px;
    height: 55px;
    background: #f472b6;
    border-radius: 20px 20px 10px 10px;
}

/* Drop animation */
@keyframes drop {
    0% {
        transform: translateY(-250px);
        opacity: 0;
    }

    70% {
        transform: translateY(15px);
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Candle flame */
.flame {
    width: 12px;
    height: 18px;
    background: radial-gradient(circle at 50% 30%, #fff7ae, #ff9e00);
    border-radius: 50%;
    position: absolute;
    top: -18px;
    left: -5px;
    animation: flicker 1s infinite ease-in-out;
}

@keyframes flicker {
    0% {
        transform: scale(1) rotate(-1deg);
        opacity: 0.9;
    }

    50% {
        transform: scale(1.1) rotate(1deg);
        opacity: 1;
    }

    100% {
        transform: scale(1) rotate(-1deg);
        opacity: 0.9;
    }
}
</style>