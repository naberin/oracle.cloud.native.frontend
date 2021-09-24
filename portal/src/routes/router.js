import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from "@/pages/HomePage";
import GamesPage from "@/pages/GamesPage";
import GamePage from "@/pages/GamePage"

Vue.use(VueRouter)

const routes = [
    { path : "/", name: "home", component: HomePage},
    { path : "/games", name: "games", component: GamesPage},
    { path : "/games/:id", name: "game", component: GamePage}
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router