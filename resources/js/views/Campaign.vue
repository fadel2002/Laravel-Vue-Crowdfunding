<template>
    <div>
        <script
            type="application/javascript"
            src="https://app.sandbox.midtrans.com/snap/snap.js"
            data-client-key="SB-Mid-client-00jE0oDfZFrSffjU"
            defer
        ></script>
        <v-card v-if="campaign.id">
            <v-img :src="campaign.image" class="white--text" height="200px">
                <v-card-title
                    class="fill-height align-end"
                    v-text="campaign.title"
                >
                </v-card-title>
            </v-img>

            <v-card-text>
                <v-simple-table dense>
                    <tbody>
                        <tr>
                            <td><v-icon>mdi-home-city</v-icon> Alamat</td>
                            <td>{{ campaign.address }}</td>
                        </tr>
                        <tr>
                            <td><v-icon>mdi-hand-heart</v-icon> Terkumpul</td>
                            <td class="blue--text">
                                Rp
                                {{ campaign.collected.toLocaleString("id-ID") }}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <v-icon>mdi-cash-multiple</v-icon> Dibutuhkan
                            </td>
                            <td class="orange--text">
                                Rp
                                {{ campaign.required.toLocaleString("id-ID") }}
                            </td>
                        </tr>
                        <tr>
                            <td><v-icon>mdi-cash</v-icon> Harga per lembar</td>
                            <td class="red--text">
                                Rp
                                {{
                                    campaign.price_per_sheet?.toLocaleString(
                                        "id-ID"
                                    )
                                }}
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
                Description: <br />
                {{ campaign.description }}
            </v-card-text>
            <v-card-text class="text-center">
                <input
                    type="number"
                    @input="input($event.target.value, campaign)"
                    style="text-align: center; outline-color: green"
                    v-model="sheet"
                />
            </v-card-text>
            <v-card-text class="text-center">
                <v-btn
                    x-small
                    class="green--text"
                    @click="incDecSheet(-10, campaign)"
                >
                    -10
                </v-btn>
                &nbsp;
                <v-btn
                    x-small
                    class="green--text"
                    @click="incDecSheet(-5, campaign)"
                >
                    -5
                </v-btn>
                &nbsp;
                <v-btn
                    x-small
                    class="green--text"
                    @click="incDecSheet(-1, campaign)"
                >
                    -1
                </v-btn>
                <v-btn
                    x-small
                    class="green--text"
                    @click="incDecSheet(1, campaign)"
                    :disabled="countValidDonate(1, campaign)"
                >
                    +1
                </v-btn>
                &nbsp;
                <v-btn
                    x-small
                    class="green--text"
                    @click="incDecSheet(5, campaign)"
                    :disabled="countValidDonate(5, campaign)"
                >
                    +5
                </v-btn>
                &nbsp;
                <v-btn
                    x-small
                    class="green--text"
                    @click="incDecSheet(10, campaign)"
                    :disabled="countValidDonate(10, campaign)"
                >
                    +10
                </v-btn>
            </v-card-text>

            <v-card-text class="text-center">
                {{ total_donation }}
            </v-card-text>

            <v-card-actions>
                <v-btn
                    block
                    color="primary"
                    @click="paymentHanlde(campaign)"
                    :disabled="
                        campaign.collected >= campaign.required ||
                        guest ||
                        !total_donation
                    "
                >
                    Donate
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
    data: () => ({
        campaign: {},
        sheet: 0,
        total_donation: 0,
    }),
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
            let { id } = this.$route.params;
            let url = "/api/campaign/" + id;
            axios
                .get(url)
                .then((response) => {
                    let { data } = response.data;
                    this.campaign = data.campaign;
                })
                .catch((err) => {
                    let { response } = err;
                    console.log(response);
                });
        },
        ...mapMutations({
            addTransaction: "transaction/insert",
        }),
        ...mapActions({
            setAlert: "alert/set",
        }),
        paymentHanlde(campaign) {
            var timeNow = new Date();
            var data_midtrans = {
                transaction_details: {
                    order_id: "order-" + timeNow.getTime(),
                    gross_amount: this.total_donation,
                },
                customer_details: {
                    name: this.user.username,
                    email: this.user.email,
                },
            };
            axios
                .post("/api/generate", { data: data_midtrans })
                .then((response) => {
                    window.snap.pay(response.data.data.token);
                    this.donate(campaign);
                })
                .catch((err) => {
                    console.log("error" + err);
                });
        },
        donate(campaign) {
            // this.addTransaction();
            let data = {
                collected: campaign.collected + this.total_donation,
            };
            let config = {
                headers: {
                    Authorization: "Bearer" + this.user.token,
                },
            };
            let url = "/api/campaign/update-fund/" + campaign.id;
            axios
                .post(url, data, config)
                .then((responses) => {
                    this.campaign = responses.data.data.campaign;
                    this.clear();
                    this.setAlert({
                        status: true,
                        color: "success",
                        text: "Transaksi berhasil",
                    });
                })
                .catch((err) => {
                    this.setAlert({
                        status: true,
                        text: "Transaksi gagal",
                        color: "error",
                    });
                });
        },
        countValidDonate(sheet_number, campaign) {
            let bool =
                sheet_number * campaign.price_per_sheet +
                    campaign.collected +
                    this.total_donation >
                campaign.required;
            return bool;
        },
        incDecSheet(sheet_number, campaign) {
            if (sheet_number > 0) this.sheet += parseInt(sheet_number);
            else {
                if (this.sheet + sheet_number < 0) {
                    this.sheet = 0;
                } else {
                    this.sheet += sheet_number;
                }
            }
            this.total_donation = campaign.price_per_sheet * this.sheet;
        },
        input(val, campaign) {
            if (val > 0) {
                this.sheet = parseInt(val);
                this.total_donation = campaign.price_per_sheet * this.sheet;
                if (
                    this.total_donation + campaign.collected >
                    campaign.required
                ) {
                    this.total_donation =
                        campaign.required - campaign.collected;
                    this.sheet = this.total_donation / campaign.price_per_sheet;
                }
            } else {
                this.sheet = 0;
                this.total_donation = campaign.price_per_sheet * this.sheet;
            }
        },
        clear() {
            this.sheet = 0;
            this.total_donation = 0;
        },

        // ...mapMutations({
        //     donate: "transaction/insert",
        // }),
        // donate() {
        //     this.$store.commit("insert");
        //     // this.$store.dispatch("insert"); //jika menggunakan actions
        // },
    },
};
</script>
