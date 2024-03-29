import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import BrandList from "./components/BrandList.vue";
import Cart from "./components/Cart.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Logout from "./components/Logout.vue";
import OrderList from "./components/OrderList.vue";
const routes = [
{
path: "/",
name: "Home",
component: Home,
},
{
path: "/brands",
name: "Brands",
component: BrandList,
},

{
path: "/cart",
name: "cart",
component: Cart,
},
{
    path: "/orders",
    name: "orders",
    component: OrderList
},
{
    path: "/register",
    name: "Register",
    component: Register,
},
{
    path: "/login",
    name: "login",
    component: Login
},
{
    path: "/logout",
    name: "logout",
    component: Logout
},

];
const router = createRouter({
history: createWebHistory(),
routes,
});
export default router;

router.beforeEach((to, from, next) => {
    const publicPages = ["/login", "/register", "/logout",];
    const authRequired = !publicPages.includes(to.path);
    if (authRequired && !sessionStorage.getItem("customer")) {
        next({
            name:'login',
        });
    } else {
        next();
    }
});

