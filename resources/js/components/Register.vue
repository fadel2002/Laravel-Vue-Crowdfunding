<template>
    <v-card>
        <v-toolbar dark color="success">
            <v-btn icon dark @click.native="close">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <v-container fluid>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                    v-model="username"
                    :rules="usernameRules"
                    label="Username"
                    required
                    append-icon="mdi-account"
                ></v-text-field>
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    required
                    append-icon="mdi-account-circle"
                ></v-text-field>
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    append-icon="mdi-email"
                ></v-text-field>
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

                <div class="text-xs-center">
                    <v-btn
                        color="success lighten-1"
                        :disabled="!valid"
                        @click="submit"
                        >Register
                        <v-icon right dark>mdi-lock-open</v-icon>
                    </v-btn>
                </div>
            </v-form>
        </v-container>
    </v-card>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "register",
    data: () => ({
        valid: true,
        email: "",
        emailRules: [
            (v) => !!v || "E-mail is required",
            (v) =>
                /([a-zA-Z0-9_]{1,})(@)([a-zA-Z0-9_]{2,}).([a-zA-Z0-9_]{2,})+/.test(
                    v
                ) || "E-mail must be valid",
        ],
        showPassword: false,
        password: "",
        passwordRules: [
            (v) => !!v || "Password is required",
            (v) => (v && v.length >= 6) || "Password min 6 characters",
        ],
        username: "",
        usernameRules: [
            (v) => !!v || "Username is required",
            (v) => (v && v.length >= 3) || "Username min 3 characters",
        ],
        name: "",
        nameRules: [
            (v) => !!v || "Name is required",
            (v) => (v && v.length >= 3) || "Name min 2 characters",
        ],
    }),

    methods: {
        ...mapActions({
            setAlert: "alert/set",
        }),
        submit() {
            if (this.$refs.form.validate()) {
                let formData = {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    name: this.name,
                };
                axios
                    .post("/api/auth/register", formData)
                    .then((response) => {
                        this.setAlert({
                            status: true,
                            color: "success",
                            text: "Register success",
                        });
                        this.close();
                    })
                    .catch((err) => {
                        let responses = err.response;
                        this.setAlert({
                            status: true,
                            color: "error",
                            text: "Register failed",
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
