export default {
    namespaced: true,
    state: {
        user: {},
    },
    mutations: {
        set: (state, payload) => {
            state.user = payload;
        },
    },
    actions: {
        set: ({ commit }, payload) => {
            commit("set", payload);
        },
        checkToken: ({ commit }, payload) => {
            let config = {
                headers: {
                    Authorization: "Bearer" + payload.token,
                },
            };

            axios
                .post("/api/auth/check-token", {}, config)
                .then((responses) => {
                    commit("set", payload);
                })
                .catch((err) => {
                    commit("set", {});
                });
        },
    },
    getters: {
        user: (state) => state.user, // return state.user
        guest: (state) => Object.keys(state.user).length === 0,
    },
};
