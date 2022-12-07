export default {
    namespaced: true,
    state: {
        status: false,
        component: "search", // search, login, dll
    },
    mutations: {
        setStatus: (state, status) => {
            state.status = status;
        },
        setComponent: (state, component) => {
            state.component = component;
        },
    },
    actions: {
        setStatus: ({ commit }, status) => {
            commit("setStatus", status);
        },
        setComponent: ({ commit }, component) => {
            commit("setComponent", component);
            commit("setStatus", true);
        },
    },
    getters: {
        status: (state) => state.status, // return state.status
        component: (state) => state.component, // return state.component
    },
};
