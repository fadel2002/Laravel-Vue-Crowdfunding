<template>
    <div>
        <v-card
            :to="'/blog/' + blog.id"
            style="text-decoration: none; color: inherit"
        >
            <v-img :src="blog.image" class="white--text" height="200px">
                <v-card-title class="fill-height align-end" v-text="blog.title">
                </v-card-title>
            </v-img>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "blog-item",
    props: ["blog"],
};
</script>
