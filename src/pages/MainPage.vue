<script setup>
import { ref } from "vue"

const showLetter = ref(false)

const toggleLetter = () => {
    showLetter.value = !showLetter.value
}
</script>

<template>
    <div class="min-h-screen bg-[#f6c9d4] flex flex-col items-center py-20 px-4 relative overflow-hidden">

        <!-- subtle background pattern -->
        <div
            class="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_20px_20px,#000_1px,transparent_1px)] bg-[size:40px_40px]">
        </div>


        <!-- Letter Card -->
        <div
            class="relative bg-white max-w-2xl w-full rounded-3xl border border-rose-100 shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-8 transition-all duration-500">

            <!-- Header -->
            <div class="flex justify-between items-start cursor-pointer select-none" @click="toggleLetter">

                <div>
                    <h2 class="text-gray-600 font-medium text-lg">
                        My Dearest
                    </h2>
                    <p class="text-rose-400 italic text-2xl font-semibold mt-1">
                        A Letter for You
                    </p>
                </div>

                <span class="text-sm text-gray-400 mt-2 transition-all duration-300"
                    :class="showLetter ? 'opacity-60' : ''">
                    Click to {{ showLetter ? 'close' : 'open' }}
                </span>
            </div>

            <!-- Divider -->
            <div class="h-px bg-rose-100 mt-5"></div>

            <!-- Expand Content -->
            <transition name="smooth">
                <div v-if="showLetter" class="mt-6 text-gray-600 leading-relaxed text-[15px] space-y-4">

                    <p>
                        My love,
                    </p>

                    <p>
                        Every day with you feels like a beautiful dream I never want to wake up from.
                        Your smile brightens my darkest days, and your laughter is my favorite melody.
                    </p>

                    <p>
                        I cherish every moment we spend together, from our quiet conversations
                        to the memories we continue to build.
                    </p>

                    <p class="font-medium text-rose-400">
                        Forever yours.
                    </p>

                </div>
            </transition>

        </div>
        <div class="flex gap-5 mb-10 relative mt-4">
            <routerLink to="/gallery" class="nav-pill active">Next</routerLink>
        </div>

    </div>
</template>

<style scoped>
/* Navigation pill */
.nav-pill {
    background: white;
    padding: 9px 22px;
    border-radius: 9999px;
    font-size: 14px;
    color: #555;
    border: 1px solid #f3c3cf;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    transition: all 0.35s ease;
}

.nav-pill:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.nav-pill.active {
    background: #fff;
    color: #e88aa0;
    font-weight: 600;
}

/* Smooth Expand Animation */
.smooth-enter-active,
.smooth-leave-active {
    transition: all 0.45s ease;
    overflow: hidden;
}

.smooth-enter-from {
    opacity: 0;
    transform: translateY(-12px);
}

.smooth-leave-to {
    opacity: 0;
    transform: translateY(-12px);
}
</style>