import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

//DEFINE ROUTE
const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            alias: "/home",
            component: () => import("./views/Home.vue"),
        },
        {
            path: "/donations",
            name: "donations",
            component: () => import("./views/Donations.vue"),
        },
        {
            path: "/blogs",
            name: "blogs",
            component: () => import("./views/Blogs.vue"),
        },
        {
            path: "/blog/:id",
            name: "blog",
            component: () => import("./views/Blog.vue"),
        },
        {
            path: "/campaigns",
            name: "campaigns",
            component: () => import("./views/Campaigns.vue"),
        },
        {
            path: "/campaign/:id",
            name: "campaign",
            component: () => import("./views/Campaign.vue"),
        },
        {
            path: "/auth/social/:provider/callback",
            name: "social",
            component: () => import("./views/Social.vue"),
        },
        {
            path: "/histories",
            name: "histories",
            component: () => import("./views/Histories.vue"),
        },
        {
            path: "/history/:id",
            name: "history",
            component: () => import("./views/History.vue"),
        },
        {
            path: "",
            redirect: "/",
        },
    ],
});

export default router;
