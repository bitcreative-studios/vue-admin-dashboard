<template>
  <div
    class="wrapper"
    :class="{
      'light-background': !isDarkMode,
      'dark-background': isDarkMode,
    }"
  >
    <div class="container">
      <div
        class="request"
        :class="{ 'light-request': isDarkMode, 'dark-request': !isDarkMode }"
      >
        Don't have a Design+Code HQ account?
        <router-link to="/request">Request an account</router-link>
      </div>
      <div class="login">
        <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
        <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
        <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
          Sign into Design+Code HQ
        </h4>
        <input
          type="email"
          placeholder="Email"
          class="form-input form-input_control"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        />
        <input
          type="password"
          placeholder="Password"
          class="form-input form-input_control"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        />
        <input class="input-form btn" type="submit" value="Sign In" />
        <router-link
          to="/recover"
          :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
          >Forgot your password?</router-link
        >
        <button class="btn" @click="toggleDarkMode">Toggle</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return { isDarkMode: true };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.light-background {
  background-color: $light-gray;
}

.dark-background {
  background-color: $dark-blue;
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.light-request {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: white;
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.3);

  a {
    color: $black;
  }
}

.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}

.wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.request {
  position: absolute;
  top: 40px;
  right: 40px;
}
.container {
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login {
  width: 400px;
}

h4 {
  margin: 0;
  line-height: 34px;
  font-size: 24px;
  text-align: center;
  color: #fff;
}

.form-input {
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 20px;
  margin-top: 20px;
  padding-left: 20px;
  color: white;
}
.btn {
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 20px;
  margin-top: 20px;
  color: white;

  background: #56ccf2;
  border: none;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
}
a {
  line-height: 25px;
  text-align: center;
  text-decoration: none;
}
</style>
