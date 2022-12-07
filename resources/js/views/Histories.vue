<template>
    <div v-if="!guest">
        <v-container class="pa-0" grid-list-sm>
            <v-subheader> Campaign Histories </v-subheader>
            <v-layout wrap>
                <v-flex
                    v-for="item in campaignHistories"
                    :key="`item-` + item.id"
                    xs6
                >
                    <campaign-history-item :campaign_history="item" />
                </v-flex>
            </v-layout>
            <v-pagination
                v-model="page"
                @input="go"
                :length="lengthPage"
                :total-visible="6"
            ></v-pagination>
        </v-container>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data: () => ({
        campaignHistories: [],
        page: 0,
        lengthPage: 0,
    }),
    components: {
        CampaignHistoryItem: () => import("../components/CampaignHistoryItem"),
    },
    created() {
        this.go();
    },
    computed: {
        ...mapGetters({
            guest: "auth/guest",
            user: "auth/user",
        }),
    },
    methods: {
        go() {
            let config = {
                headers: {
                    Authorization: "Bearer" + this.user.token,
                },
            };
            let url = "api/campaign/history?page=" + this.page;
            axios
                .get(url, config)
                .then((response) => {
                    let { data } = response.data;
                    this.campaignHistories = data.campaignHistories.data;
                    this.page = data.campaignHistories.current_page;
                    this.lengthPage = data.campaignHistories.last_page;
                })
                .catch((err) => {
                    let { response } = err;
                    console.log(response);
                });
        },
    },
};
</script>
