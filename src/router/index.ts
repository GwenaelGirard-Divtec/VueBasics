import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PageAccueil from "../views/PageAccueil.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "pageAccueil",
        component: PageAccueil,
    },

    // AJOUT D'UNE ROUTE DE MANIÈRE LÉGÈRE
    //   {
    //     path: '/[ROUTE]]',
    //     name: '[NOM]]',
    //     component: () => import(/* webpackChunkName: "[NOM]]" */ '[CHEMIN ACCES]')
    //   }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
