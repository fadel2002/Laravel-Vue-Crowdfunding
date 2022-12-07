<template>
    <div>
        <v-card v-if="blog.id">
            <v-img :src="blog.image" class="white--text" height="200px">
                <v-card-title class="fill-height align-end" v-text="blog.title">
                </v-card-title>
            </v-img>

            <v-card-text>
                <v-simple-table dense>
                    <tbody>
                        <tr>
                            <td><v-icon>mdi-home-city</v-icon> Alamat</td>
                            <td>{{ blog.address }}</td>
                        </tr>
                        <tr>
                            <td>
                                <v-icon>mdi-calendar-clock</v-icon> Tanggal
                                posting
                            </td>
                            <td class="black--text">
                                {{ blog.created_at }}
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
                Description: <br />
                {{ blog.description }}
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
    data: () => ({
        blog: {},
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
            let url = "/api/blog/" + id;
            axios
                .get(url)
                .then((response) => {
                    let { data } = response.data;
                    this.blog = data.blog;
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
