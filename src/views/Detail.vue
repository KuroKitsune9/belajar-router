<template>
<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16" v-if="detail">
    <center>
    <img :src="detail.img_produk" alt="">
</center>
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Detail {{ detail.nama }}</h1>
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Harga : {{ detail.harga }}</h1>
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Deskripsi: {{ detail.Deskripsi }}</h1>
</div>
<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16" v-else>
    <center>
    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWJkNDVtZ3V3YXBpZWlldWdnaHI4azNxZTMxZnRtYTF0cWFmOHZmbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Qxkf4LQ1xIbXpH8z0I/giphy.gif" alt="ini gif">
</center>
</div>
</template>

<script>
    import { produk } from '/src/assets/Produk'

    export default {
        props: [
            "id_produk"
        ],
        setup(props){
            const detail = produk.produk.find((item) => {
                return item.id == props.id_produk
            });
            return{
                detail
            }
        }
    }
</script>