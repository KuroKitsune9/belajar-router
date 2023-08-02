<template>
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Kategori</h1>
        <br>
        <div class="grid md:grid-cols-3 gap-8">
            <div v-for="Kategori in data" :key="Kategori.id"
                class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="p-8 rounded-t-lg" :src="Kategori.img_kategori" alt="product image" />
                </a>
                <div class="px-5 pb-5">
                    <router-link :to="{ name: 'Detail2', params: { id_kategori: Kategori.id } }">
                        <a href="#">
                            <h4>{{ Kategori.nama }}</h4>
                        </a>
                    </router-link>
                    <br>
                    <div class="flex items-center justify-between">
                        <a href="#"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add lihat</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { Kategori } from '../assets/Kategori'

export default {
    setup(props, context) {
        const data = reactive(Kategori.Kategori)

        onMounted(() => {
            context.emit("id-menu", 5);
        })

        return {
            data
        }
    }
}
</script>

<style scoped></style>