<template>
  <section class="page">
    <Hero style="flex-grow: 9">
      <div class="container flex flex-col" style="height: 100%">

        <div class="top-pad-m flex flex-col">
          <div class="title centered"><h2>The Scorecard</h2></div>
          <div class="login-modal centered justify-center shadowed">
            <Alert v-if="authenticationError" class="login-top"
                alert-message="Incorrect username or password."
                kind="error" />
            <div class="user-details flex flex-col">
              <span class="label"><label for="username">Username</label></span>
              <input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username">
              <span class="label flex flex-row justify-end">
                <label for="pwd">Password</label>
                <span class="forgot-pass right-aligned">Forgot Password</span>
              </span>
              <input
                  id="pwd"
                  type="password"
                  name="password"
                  @change="resetErrors()"
                  >

              <input
                  id="signin"
                  type="button"
                  class="button"
                  value="Sign In"
                  @click="submitAndNavigateTo"
              >
            </div>
            <div class="login-bottom-information">
              <div class="flex flex-row justify-end">
                <span class="label">Don't have an account?</span>
                <span class="label right-aligned">Sign Up</span>
              </div>
            </div>

        </div>
        </div>

      </div>
    </Hero>
  </section>
</template>

<script>
import Hero from "@/components/Hero";
import Alert from "@/components/Alert";

export default {
  name: "LoginPage",
  components: {Alert, Hero},
  data() {
    return {
      redirect: null,
      authenticationError: false
    }
  },
  created() {
    this.redirect = this.$route.query.next ? this.$route.query.next : 'home'
  },
  methods: {
    submitAndNavigateTo() {
      this.$router.push({ name: this.redirect }).catch(() => {
        this.authenticationError = true;
      });
    },
    resetErrors() {
      console.log("Resetting errors..");
      this.authenticationError = false;
    }
  }
}
</script>

<style scoped>

.page .title {
  flex-grow: 0;
  color: #ffffff;
  font-size: 1.2em;
}

.login-modal {
  border-radius: 9px;
  background: linear-gradient(to bottom right, #3f3f3f, #323232);
  flex-grow: 0;

}

.login-modal .user-details,
.login-bottom-information {
  padding: 9px 49px 32px 49px;

}

.login-modal .label {
  font-family: Tahoma, sans-serif;
  font-size: .95em;
  padding: 19px 2px 9px 2px;
}

.login-modal .label {
  color: #d4d4d4;
}

.login-modal .label .forgot-pass {
  font-weight: normal;
}

.login-modal input {
  box-sizing: border-box;
  padding: 9px 7px;
  width: 50%;
  min-width: 300px;
  border-radius: 4px;
  border: none;
}

.login-modal .button {
  background: #652efd;
  color: #dddfdf;
}
.login-modal .button:hover {
  background: linear-gradient(to bottom right, #652efd, #8156ff);
  cursor: pointer;
}
.login-modal .button:active {
  transform: translateY(2px);
}

.login-modal #signin {
  margin-top: 19px;
}

#app .login-modal .login-top.alert,
#app .login-modal .login-top.alert .error
{
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  text-align: center;
}

.login-bottom-information {
  border-top: 2px solid #292929;
  min-height: 30px;
}
.login-bottom-information #signup {
  background: #1f7285;
}
.login-bottom-information #signup:hover {
  background: linear-gradient(to bottom right, #1f7285, #11a2be);
}

</style>