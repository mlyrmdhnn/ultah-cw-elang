import GalleryPage from "@/pages/GalleryPage.vue";
import HbdPage from "@/pages/HbdPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import MainPage from "@/pages/MainPage.vue";
import SongPage from "@/pages/SongPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { component: LoginPage, path: "/" },
    { component: MainPage, path: "/main" },
    { component: GalleryPage, path: "/gallery" },
    { component: SongPage, path: "/song" },
    { component: HbdPage, path: "/birthday" },
  ],
});

export default router;
