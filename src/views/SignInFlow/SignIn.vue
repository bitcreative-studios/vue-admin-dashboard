<template>
  <div class="wrapper">
    <div class="container">
      <div class="request">
        Don't have a Design+Code HQ account?
        <router-link to="/request">Request an account</router-link>
      </div>
      <div class="login">
        <img src="@/assets/DCHQ.svg" alt="" />
        <h4>Sign into Design+Code HQ</h4>
        <form action="">
          <input
            class="form-input form-input_control"
            type="email"
            placeholder="Email"
          /><input
            type="password"
            class="form-input form-input_control"
            placeholder="Password"
          />
          <input
            class="form-input form-input_submit"
            type="submit"
            value="Sign In"
          />
        </form>
        <router-link to="/recover">Forgot your password?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn"
};
</script>

<style lang="scss" scoped>
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
  color: rgba(255, 255, 255, 0.3);

  a {
    color: white;
  }
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
  color: white;

  &_control {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding-left: 20px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
  }

  &_submit {
    background: #56ccf2;
    border: none;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    margin-bottom: 40px;
  }
}

a {
  line-height: 25px;
  text-align: center;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
}
</style>