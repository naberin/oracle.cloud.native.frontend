import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from "@/pages/HomePage";
import GamesPage from "@/pages/GamesPage";
import GamePage from "@/pages/GamePage"
import LoginPage from "@/pages/LoginPage";

Vue.use(VueRouter)

const routes = [
    { path : "/", name: "home", component: HomePage},
    { path : "/login", name: "login", component: LoginPage},
    { path : "/games", name: "games", component: GamesPage},
    { path : "/games/:id", name: "game", component: GamePage}
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router