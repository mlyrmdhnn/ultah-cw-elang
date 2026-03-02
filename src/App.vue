<script setup>
import { ref } from "vue"

const isLoggedIn = ref(false)
const activeMenu = ref("cover")
const showLetter = ref(false)
const password = ref("")
const correctPassword = "1234" // ganti sesuai mau kamu

const login = () => {
  if (password.value === correctPassword) {
    isLoggedIn.value = true
  } else {
    alert("Kode salah 🙂")
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-rose-200 via-pink-100 to-purple-200">

    <!-- LOGIN PAGE -->
    <div v-if="!isLoggedIn" class="flex items-center justify-center min-h-screen">
      <div class="bg-white p-10 rounded-3xl shadow-xl text-center w-80">
        <h1 class="text-2xl font-bold text-rose-500 mb-4">Masukkan Kode Rahasia 💌</h1>
        <input v-model="password" type="password" placeholder="Kode..."
          class="w-full p-3 rounded-xl border mb-4 focus:outline-none focus:ring-2 focus:ring-rose-300" />
        <button @click="login" class="w-full bg-rose-500 text-white py-2 rounded-xl hover:bg-rose-600 transition">
          Masuk
        </button>
      </div>
    </div>

    <!-- MAIN CONTENT -->
    <div v-else>

      <!-- NAVBAR -->
      <nav class="flex justify-center gap-6 py-6 font-semibold text-rose-600">
        <button @click="activeMenu = 'cover'" :class="activeMenu === 'cover' ? 'underline' : ''">Cover Letter</button>
        <button @click="activeMenu = 'music'" :class="activeMenu === 'music' ? 'underline' : ''">Music</button>
        <button @click="activeMenu = 'notes'" :class="activeMenu === 'notes' ? 'underline' : ''">Notes</button>
        <button @click="activeMenu = 'gallery'" :class="activeMenu === 'gallery' ? 'underline' : ''">Gallery</button>
      </nav>

      <!-- COVER LETTER -->
      <section v-if="activeMenu === 'cover'" class="flex justify-center px-6 mt-10">
        <div class="bg-white max-w-xl w-full rounded-3xl shadow-xl p-8 text-center">
          <h2 class="text-3xl font-bold text-rose-500 cursor-pointer" @click="showLetter = !showLetter">
            Untuk Kamu ❤️ (klik untuk buka)
          </h2>

          <transition name="drop">
            <div v-if="showLetter" class="mt-6 text-gray-700 leading-relaxed">
              <p>
                Terima kasih sudah jadi bagian paling indah dalam hidupku.
              </p>
              <p class="mt-4">
                Semoga tahun ini penuh kebahagiaan, kesehatan, dan semua mimpi yang kamu kejar tercapai.
              </p>
              <p class="mt-4 font-semibold text-rose-500">
                I will always choose you.
              </p>
            </div>
          </transition>
        </div>
      </section>

      <!-- MUSIC -->
      <section v-if="activeMenu === 'music'" class="text-center mt-16">
        <h2 class="text-3xl font-bold text-rose-500 mb-6">Our Song 🎵</h2>
        <audio controls class="mx-auto">
          <!-- <source src="/music.mp3" type="audio/mpeg" />
          Browser kamu tidak support audio. -->
        </audio>
      </section>

      <!-- NOTES -->
      <section v-if="activeMenu === 'notes'" class="flex justify-center mt-16 px-6">
        <div class="bg-white p-8 rounded-3xl shadow-xl max-w-xl w-full">
          <h2 class="text-2xl font-bold text-rose-500 mb-4">Catatan Kecil 💭</h2>
          <ul class="space-y-3 text-gray-700">
            <li>• Jangan lupa makan tepat waktu.</li>
            <li>• Jangan terlalu keras sama diri sendiri.</li>
            <li>• Aku selalu bangga sama kamu.</li>
          </ul>
        </div>
      </section>

      <!-- GALLERY -->
      <section v-if="activeMenu === 'gallery'" class="px-10 mt-16 pb-16">
        <h2 class="text-3xl font-bold text-center text-rose-500 mb-8">Kenangan Kita 📸</h2>
        <div class="grid grid-cols-3 gap-4">
          <img src="https://picsum.photos/300?1" class="rounded-xl shadow-md hover:scale-105 transition" />
          <img src="https://picsum.photos/300?2" class="rounded-xl shadow-md hover:scale-105 transition" />
          <img src="https://picsum.photos/300?3" class="rounded-xl shadow-md hover:scale-105 transition" />
          <img src="https://picsum.photos/300?4" class="rounded-xl shadow-md hover:scale-105 transition" />
          <img src="https://picsum.photos/300?5" class="rounded-xl shadow-md hover:scale-105 transition" />
          <img src="https://picsum.photos/300?6" class="rounded-xl shadow-md hover:scale-105 transition" />
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
.drop-enter-active,
.drop-leave-active {
  transition: all 0.5s ease;
}

.drop-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.drop-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>