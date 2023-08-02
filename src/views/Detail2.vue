<template>
<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Detail {{ Detail2.nama }}</h1>
    <div class="py-8"></div>
    <div class="flex_container">
        <div v-for="produk in dataProduk" :key="produk.id" class="card">
            <router-link class="container" :to="{ name: 'Detail', params:{id_produk: produk.id} }">
                <h2>{{ produk.nama }}</h2>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
    import { Kategori } from '/src/assets/Kategori'
    import { produk } from '/src/assets/Produk'

    export default {
        props: [
            "id_kategori"
        ],
        setup(props){
            const Detail2 = Kategori.Kategori.find((item) => {return item.id == props.id_kategori });
            const dataProduk = produk.produk.filter(e=> {return Detail2.id == e.id_kategori});
            return{
                Detail2,
                dataProduk
            }
        }
    }
</script>

<style scoped>
.flex-container {
    display: flex;
}
.card {
    /* add shadow to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgb(0,0,0,0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
}

/* on mouse-over, add a depper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* add some padding inside the card container */
.container {
    padding: 2px 16px;
}
</style>