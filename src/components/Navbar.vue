<template>
    <!-- component -->
    <!-- follow me on twitter @asad_codes -->

    <div class="">
            <!-- navbar -->
            <nav class="flex justify-between bg-gray-900 text-white w-screen">
                <div class="px-5 xl:px-12 py-6 flex w-full items-center">
                    <a class="text-3xl font-bold font-heading" href="#">
                        <!-- <img class="h-9" src="logo.png" alt="logo"> -->
                        KuroKitsune
                    </a>
                    <!-- Nav Links -->
                    <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                        <li><router-link :class="{ active: rl_1 }" to="/">Beranda</router-link></li>
                        <li><router-link :class="{ active: rl_2 }" to="/Contact">Kontak</router-link></li>
                        <li><router-link :class="{ active: rl_3 }" to="/About">Tentang</router-link></li>
                        <li><router-link :class="{ active: rl_4 }" to="/produk">Produk</router-link></li>
                        <li><router-link :class="{ active: rl_5 }" to="/Kategori">Kategori</router-link></li>
                    </ul>
                    <!-- Header Icons -->
                    <div class="hidden xl:flex items-center space-x-5 items-center">
                        <a class="hover:text-gray-200" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </a>
                        <a class="flex items-center hover:text-gray-200" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span class="flex absolute -mt-5 ml-4">
                                <span
                                    class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                </span>
                            </span>
                        </a>
                        <!-- Sign In / Register      -->
                        <a class="flex items-center hover:text-gray-200" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <!-- Responsive navbar -->
                <a class="xl:hidden flex mr-6 items-center" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span class="flex absolute -mt-5 ml-4">
                        <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                        </span>
                    </span>
                </a>
                <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </a>
            </nav>
    </div>
    <!-- Does this resource worth a follow? -->
</template>
<script>
import { ref } from "vue";
export default {
    props: {
        idMenu: Number,
    },
    setup(props) {
        const rl_1 = ref(false);
        const rl_2 = ref(false);
        const rl_3 = ref(false);
        const rl_4 = ref(false);
        const rl_5 = ref(false);
        const rl_6 = ref(false);
        const rl_7 = ref(false);

        if (props.idMenu == 1) {
            rl_1.value = true;
            rl_2.value = false;
            rl_3.value = false;
            rl_4.value = false;
            rl_5.value = false;
            rl_6.value = false;
            rl_7.value = false;
        } else if (props.idMenu == 2) {
            rl_1.value = false;
            rl_2.value = true;
            rl_3.value = false;
            rl_4.value = false;
            rl_5.value = false;
            rl_6.value = false;
            rl_7.value = false;
        } else if (props.idMenu == 3) {
            rl_1.value = false;
            rl_2.value = false;
            rl_3.value = true;
            rl_4.value = false;
            rl_5.value = false;
            rl_6.value = false;
            rl_7.value = false
        } else if (props.idMenu == 4) {
            rl_1.value = false;
            rl_2.value = false;
            rl_3.value = false;
            rl_4.value = true;
            rl_5.value = false;
            rl_6.value = false;
            rl_7.value = false;
        } else if (props.idMenu == 5) {
            rl_1.value = false;
            rl_2.value = false;
            rl_3.value = false;
            rl_4.value = false;
            rl_5.value = true;
            rl_6.value = false;
            rl_7.value = false;
        } else if (props.idMenu == 6) {
            rl_1.value = false;
            rl_2.value = false;
            rl_3.value = false;
            rl_4.value = false;
            rl_5.value = false;
            rl_6.value = true;
            rl_7.value = false;
        } else if (props.idMenu == 7) {
            rl_1.value = false;
            rl_2.value = false;
            rl_3.value = false;
            rl_4.value = false;
            rl_5.value = false;
            rl_7.value = true;
        }

        return {
            rl_1,   
            rl_2,
            rl_3,
            rl_4,
            rl_5,
            rl_6,
            rl_7
        };
    },
};
</script>
<style scoped>
</style>
