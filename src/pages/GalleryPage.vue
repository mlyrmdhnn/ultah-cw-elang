<script setup>
const photos = [
    "https://picsum.photos/500?1",
    "https://picsum.photos/500?2",
    "https://picsum.photos/500?3",
    "https://picsum.photos/500?4",
    "https://picsum.photos/500?5",
    "https://picsum.photos/500?6",
]
</script>

<template>
    <div class="min-h-screen bg-[#f6c9d4] flex flex-col items-center py-16 px-4 relative overflow-hidden">

        <!-- subtle background pattern -->
        <div class="absolute inset-0 opacity-5 pointer-events-none
             bg-[radial-gradient(circle_at_20px_20px,#000_1px,transparent_1px)]
             bg-[size:40px_40px]">
        </div>

        <!-- Title -->
        <h1 class="text-4xl font-light italic text-gray-700 mb-10 relative">
            Our Memories
        </h1>

        <!-- Gallery Card -->
        <div class="relative bg-white w-full max-w-2xl rounded-3xl border border-rose-100
             shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-6">

            <div class="grid grid-cols-2 gap-4">

                <div v-for="(photo, index) in photos" :key="index" class="overflow-hidden rounded-2xl">

                    <img :src="photo" class="w-full h-48 object-cover rounded-2xl" loading="lazy" />

                </div>

            </div>

        </div>

        <!-- Back Button -->
        <div class="mt-8">
            <router-link to="/song" class="nav-pill active">
                Next
            </router-link>
        </div>

    </div>
</template>

<style scoped>
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
</style>