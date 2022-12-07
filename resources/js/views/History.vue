<template>
    <div>
        <v-card v-if="campaignHistory.id">
            <v-img
                :src="campaignHistory.campaign.image"
                class="white--text"
                height="200px"
            >
                <v-card-title
                    class="fill-height align-end"
                    v-text="campaignHistory.campaign.title"
                >
                </v-card-title>
            </v-img>

            <v-card-text>
                <v-simple-table dense>
                    <tbody>
                        <tr>
                            <td><v-icon>mdi-home-city</v-icon> Alamat</td>
                            <td>{{ campaignHistory.campaign.address }}</td>
                        </tr>
                        <tr>
                            <td><v-icon>mdi-hand-heart</v-icon> Terkumpul</td>
                            <td class="black--text">
                                Rp
                                {{
                                    campaignHistory.campaign.collected.toLocaleString(
                                        "id-ID"
                                    )
                                }}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <v-icon>mdi-cash-multiple</v-icon> Dibutuhkan
                            </td>
                            <td class="black--text">
                                Rp
                                {{
                                    campaignHistory.campaign.required.toLocaleString(
                                        "id-ID"
                                    )
                                }}
                            </td>
                        </tr>
                        <tr>
                            <td><v-icon>mdi-cash</v-icon> Harga per lembar</td>
                            <td class="black--text">
                                Rp
                                {{
                                    campaignHistory.campaign.price_per_sheet.toLocaleString(
                                        "id-ID"
                                    )
                                }}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <v-icon>mdi-import</v-icon> Didonasikan sebesar
                            </td>
                            <td class="black--text">
                                Rp
                                {{
                                    campaignHistory.donation.toLocaleString(
                                        "id-ID"
                                    )
                                }}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <v-icon>mdi-counter</v-icon> Banyak lembaran
                            </td>
                            <td class="black--text">
                                {{ campaignHistory.sheets }} Lembar
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <v-icon>mdi-calendar-clock</v-icon> Tanggal
                                donasi
                            </td>
                            <td class="black--text">
                                {{ campaignHistory.created_at }}
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
                Description: <br />
                {{ campaignHistory.campaign.description }}
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import { config } from "process";
import { mapMutations, mapActions, mapGetters } from "vuex";
import CampaignItemVue from "../components/CampaignItem.vue";
export default {
    data: () => ({
        campaignHistory: {},
    }),
    created() {
        this.go();
    },
    computed: {
        ...mapGetters({
            guest: "auth/guest",
        }),
    },
    methods: {
        go() {
            let { id } = this.$route.params;
            let url = "/api/campaign/history/" + id;
            axios
                .get(url)
                .then((response) => {
                    let { data } = response.data;
                    this.campaignHistory = data.campaignHistory;
                    console.log(this.campaignHistory);
                })
                .catch((err) => {
                    let { response } = err;
                    console.log(response);
                });
        },
        ...mapActions({
            setAlert: "alert/set",
        }),
    },
};
</script>
