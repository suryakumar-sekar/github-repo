<template>
  <div id="app">
    <nav>
      <div class="header-first">
        <img src="../src/assets/github.png" />
        <h3>GitHub Userboard</h3>
      </div>
      <input-data v-if="!isUserPage"></input-data>
    </nav>
    <router-view />
    <footer>
      <div><img src="../src/assets/github.png" /></div>
      <div>
        <p>&#169; All rights reserved,2022</p>
      </div>
    </footer>
  </div>
</template>
<script>
// @ is an alias to /src
import Input from '@/components/Input.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {
    InputData: Input
  },
  computed: {
    ...mapGetters(['isUserPage'])
  }
}
</script>
<style>
html,
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 140px;
}

nav h3 {
  color: white;
}

.header-first img {
  width: 30px;
  height: 30px;
}

nav {
  padding: 10px 30px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-first {
  display: flex;
  align-items: center;
  gap: 15px;
}


footer {
  background-color: black;
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  padding: 15px;
}
footer p {
  margin: 0;
  margin-top: 20px;
}
</style>
