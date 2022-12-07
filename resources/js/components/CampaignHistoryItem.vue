<template>
    <div>
        <v-card
            :to="'/history/' + campaign_history.id"
            style="text-decoration: none; color: inherit"
        >
            <v-img
                :src="campaign_history.campaign.image"
                class="white--text"
                height="200px"
            >
                <v-card-title
                    class="fill-height align-end"
                    v-text="campaign_history.campaign.title"
                >
                </v-card-title>
            </v-img>

            <v-card-actions>
                <v-icon>mdi-cash</v-icon>
                <span>
                    Rp {{ campaign_history.donation.toLocaleString("id-ID") }}
                </span>
                <v-spacer></v-spacer>
                <span> {{ campaign_history.created_at }} </span>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "campaign-history-item",
    props: ["campaign_history"],
};
</script>
