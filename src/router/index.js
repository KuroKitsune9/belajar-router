import { createWebHistory, createRouter } from "vue-router";
import Home from "/src/views/Home.vue";
import About from "/src/views/About.vue";
import Contact from "/src/views/Contact.vue";
import Produk from "/src/views/Produk.vue";
import Detail from "/src/views/Detail.vue";
import Kategori from "/src/views/Kategori.vue"; 
import Detail2 from "/src/views/Detail2.vue";
import Login from "/src/views/Login.vue";
import Register from "/src/views/Register.vue"
import PageNotFound from "/src/views/PagenNotFound.vue";



const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
        beforeEnter: (to, from, next) => {
            const loggedInUser = user.find((user) => user.loggedInUser == true);
            if (loggedInUser) {
                next("/produk");
            } else {
                next("/login")
            }
        }
    },
    {
        path: "/detail/:id_produk",
        name: "Detail",
        component: Detail,
        props: true,
    },
    {
        path: "/Kategori",
        name: "Kategori",
        component: Kategori
    },
    {
        path: "/detail2/:id_kategori",
        name: "Detail2",
        component: Detail2,
        props: true,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        props: true
    },
    {
        path: "/Register",
        name: "Register",
        component: Register
    },

    { path: "/:pathMatch(.*)*", component: PageNotFound }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;