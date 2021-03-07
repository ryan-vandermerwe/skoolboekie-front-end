<template>
  <div>
    <h1>{{ msg }}</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <br />
      <br />
      <br />
      <b-form-group id="input-group-1" label-for="input-1">
        <b-row>
          <b-col sm="4">
            <label class="label_user_pass">Username</label>
          </b-col>
          <b-col sm="5">
            <b-form-input
              id="input-1"
              size="sm"
              v-model="loginForm.username"
              type="text"
              placeholder="Enter username"
              required
            ></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-row>
          <b-col sm="4">
            <label class="label_user_pass">Password</label>
          </b-col>
          <b-col sm="5">
            <b-form-input
              type="password"
              size="sm"
              id="text-password"
              v-model="loginForm.password"
              aria-describedby="password-help-block"
            ></b-form-input>
            <b-form-text id="password-help-block">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </b-form-text>
          </b-col>
        </b-row>
      </b-form-group>
      <br />
      <b-row>
        <b-col sm="4"></b-col>
        <b-col sm="1">
          <b-button type="submit" pill variant="outline-primary" size="sm"
            >Login</b-button
          >
          <b-button type="reset" pill variant="outline-danger" size="sm"
            >Reset</b-button
          >
        </b-col>
        <b-col sm="1">
          <b-link class="register-link"><router-link to="/register">Click to register</router-link></b-link>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import { BForm } from "bootstrap-vue";

export default {
  name: "LoginForm",
  components: {
    "b-form": BForm,
  },
  data() {
    return {
      msg: "Welcome to SkoolBoekie",
      loginForm: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$http.post("user", this.loginForm).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );

      alert(JSON.stringify(this.loginForm));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.loginForm.username = "";
      this.loginForm.password = "";
    },
    getData() {
      this.$http
        .get("user")
        .then((response) => {
          return response.json();
        })
        .then((data) => console.log(data));
    },
  },
};
</script>

<style lang="scss">
.label_user_pass {
  padding-left: 520px;
  font-size: 17;
}

.register-link {
  font-size: 13px;
}
</style>
