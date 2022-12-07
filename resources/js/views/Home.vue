<template>
    <div>
        <v-container class="pa-0" grid-list-sm>
            <div class="text-right">
                <v-btn
                    small
                    text
                    to="/campaigns"
                    class="blue--text"
                    style="text-decoration: none; color: inherit"
                >
                    All Campaigns<v-icon>mdi-chevron-right</v-icon>
                </v-btn>
            </div>
            <v-layout wrap>
                <v-flex
                    v-for="(campaign, index) in campaigns"
                    :key="`campaign-` + campaign.id"
                    xs6
                >
                    <campaign-item :campaign="campaign" />
                </v-flex>
            </v-layout>

            <div class="text-right">
                <v-btn
                    small
                    text
                    to="/blogs"
                    class="blue--text"
                    style="text-decoration: none; color: inherit"
                >
                    All Blogs <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
            </div>
            <v-layout wrap>
                <v-carousel hide-delimiters height="250px">
                    <v-carousel-item
                        v-for="(blog, index) in blogs"
                        :key="`blog-` + blog.id"
                        xs6
                    >
                        <blog-item :blog="blog" />
                    </v-carousel-item>
                </v-carousel>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
    data: () => ({
        campaigns: [],
        blogs: [],
    }),
    components: {
        CampaignItem: () => import("../components/CampaignItem"),
        BlogItem: () => import("../components/BlogItem"),
    },
    created() {
        axios
            .get("api/campaign/random/2")
            .then((response) => {
                let { data } = response.data;
                this.campaigns = data.campaigns;
            })
            .catch((err) => {
                let { response } = err;
                console.log(response);
            });

        axios
            .get("api/blog/random/2")
            .then((response) => {
                let { data } = response.data;
                this.blogs = data.blogs;
            })
            .catch((err) => {
                let { response } = err;
                console.log(response);
            });
    },
};
</script>
