<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
const DARK_BACKGROUND = "#212C4F";
const LIGHT_BACKGROUND = "F0F3F5";

export default {
  name: "App",
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode
      ? DARK_BACKGROUND
      : LIGHT_BACKGROUND;
  },
};
</script>
<style lang="scss">
h1 {
  @include heading-1;
}
#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
