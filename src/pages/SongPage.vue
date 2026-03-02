<script setup>
const songs = [
    { title: "Love Story", artist: "Artist Name", duration: "03:55" },
    { title: "My Love Mine All Mine", artist: "Artist Name", duration: "02:17" },
    { title: "Mine", artist: "Artist Name", duration: "03:51" },
]
</script>

<template>
    <div class="min-h-screen bg-[#f6c9d4] flex flex-col items-center py-16 px-4 relative overflow-hidden">

        <!-- subtle pattern -->
        <div class="absolute inset-0 opacity-5 pointer-events-none
             bg-[radial-gradient(circle_at_20px_20px,#000_1px,transparent_1px)]
             bg-[size:40px_40px]">
        </div>

        <!-- Title -->
        <h1 class="text-4xl font-light italic text-gray-700 mb-10 relative">
            Our Playlist
        </h1>

        <!-- Player Card -->
        <div class="relative bg-[#7e4c5b] w-full max-w-2xl rounded-3xl
             shadow-[0_20px_45px_rgba(0,0,0,0.15)] p-6 text-white">

            <!-- Top Section -->
            <div class="flex items-center gap-6">

                <!-- Cover -->
                <div class="w-28 h-28 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://picsum.photos/300" class="w-full h-full object-cover" />
                </div>

                <!-- Info -->
                <div>
                    <h2 class="text-2xl font-semibold">For You</h2>
                    <p class="text-sm opacity-80 mt-1">Your Special Playlist</p>

                    <!-- Controls -->
                    <div class="flex items-center gap-4 mt-4">
                        <button class="control-btn">⏮</button>
                        <button class="play-btn">▶</button>
                        <button class="control-btn">⏭</button>
                    </div>
                </div>
            </div>

            <!-- Divider -->
            <div class="h-px bg-white/20 my-6"></div>

            <!-- Song List -->
            <div class="space-y-4">
                <div v-for="(song, index) in songs" :key="index" class="flex justify-between items-center
                            bg-white/10 px-4 py-3 rounded-xl
                            hover:bg-white/20 transition">

                    <div>
                        <p class="font-medium text-sm">{{ song.title }}</p>
                        <p class="text-xs opacity-70">{{ song.artist }}</p>
                    </div>

                    <span class="text-xs opacity-70">
                        {{ song.duration }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Back Button -->
        <div class="mt-8">
            <router-link to="/" class="nav-pill active">
                Back
            </router-link>
        </div>

    </div>
</template>

<style scoped>
.play-btn {
    background: white;
    color: #7e4c5b;
    width: 42px;
    height: 42px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    transition: 0.3s ease;
}

.play-btn:hover {
    transform: scale(1.1);
}

.control-btn {
    font-size: 14px;
    opacity: 0.8;
    transition: 0.3s ease;
}

.control-btn:hover {
    opacity: 1;
}

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
    color: #e88aa0;
    font-weight: 600;
}
</style>