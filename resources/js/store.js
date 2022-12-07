import Vue from "vue";
import Vuex from "vuex";
import transaction from "./stores/transaction.js";
import alert from "./stores/alert.js";
import auth from "./stores/auth.js";
import dialog from "./stores/dialog.js";
import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist({
    key: "my-app",
    storage: localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [vuexPersist.plugin],
    modules: {
        transaction,
        alert,
        auth,
        dialog,
    },
});
