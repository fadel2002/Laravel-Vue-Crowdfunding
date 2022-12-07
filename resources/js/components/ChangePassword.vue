<template>
    <v-card>
        <v-toolbar dark color="success">
            <v-btn icon dark @click.native="close">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Change Password</v-toolbar-title>
        </v-toolbar>

        <v-container fluid>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                    v-model="password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="passwordRules"
                    :type="showPassword ? 'text' : 'password'"
                    label="Password"
                    hint="At least 6 characters"
                    counter
                    @click:append="showPassword = !showPassword"
                ></v-text-field>
                <v-text-field
                    v-model="passwordConf"
                    append-icon="mdi-eye-off"
                    :rules="passwordRules"
                    type="password"
                    label="Password Confirmation"
                    hint="At least 6 characters"
                    counter
                ></v-text-field>

                <div class="text-xs-center">
                    <v-btn
                        color="success lighten-1"
                        :disabled="!valid"
                        @click="submit"
                        >Update
                        <v-icon right dark>mdi-lock-open</v-icon>
                    </v-btn>
                </div>
            </v-form>
        </v-container>
    </v-card>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import auth from "../stores/auth";
export default {
    name: "register",
    data: () => ({
        valid: true,
        showPassword: false,
        password: "",
        passwordRules: [
            (v) => !!v || "Password is required",
            (v) => (v && v.length >= 6) || "Password min 6 characters",
        ],
        passwordConf: "",
    }),
    computed: {
        ...mapGetters({
            user: "auth/user",
        }),
    },
    methods: {
        ...mapActions({
            setAlert: "alert/set",
        }),
        submit() {
            if (this.$refs.form.validate()) {
                let formData = {
                    email: this.user.user.email,
                    password: this.password,
                    password_confirmation: this.passwordConf,
                };
                axios
                    .post("/api/auth/update-password", formData)
                    .then((response) => {
                        this.setAlert({
                            status: true,
                            color: "success",
                            text: "Password updated",
                        });
                        this.close();
                    })
                    .catch((err) => {
                        let responses = err.response;
                        this.setAlert({
                            status: true,
                            color: "error",
                            text: "Update Password failed",
                        });
                    });
            }
        },
        close() {
            this.$emit("closed", false);
        },
    },
};
</script>
