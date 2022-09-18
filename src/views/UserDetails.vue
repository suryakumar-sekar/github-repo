<template>
  <div>
    <div class="back-wrapper">
      <router-link to="/">
        <img src="../../src/assets/back.png" />
      </router-link>
    </div>
    <div class="image-wrapper">
      <img :src="getUserDetails.avatar_url" />
    </div>
    <h1>{{getUserDetails.name}}</h1>
    <div>
      <div v-for="(repo,index) of getRepoList" :key="repo.id" class="repo-wrapper">
        <div>
          <a :href="repo.clone_url" target="_blank">Repo {{index}}</a>
        </div>
        <div class="count-wrapper">
          <div class="watcher">
            <img src="../../src/assets/watcher.png" />
            <span> {{repo.watchers}}</span>
          </div>
          <div class="watcher">
            <img src="../../src/assets/star.png" />
            <span> {{repo.stargazers_count}}</span>
          </div>
        </div>

    </div>
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


export default {
  name: 'userDetails',
  data() {
    return {
      username: ''
    }
  },
  computed: {
    ...mapGetters(['getUserDetails', 'getRepoList'])
  },
  created() {
    this.setUserPage(true)
  },
  mounted() {
    this.username = this.$route.params.username;
    this.fetchUserDetails(this.username)
    this.fetchRepos(this.username)
  },
  methods: {
    ...mapActions(['fetchUserDetails', 'fetchRepos','setUserPage'])
  },
  beforeDestroy() {
    this.setUserPage(false)
  },

}
</script>
<style scoped>
.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #54A3FF;
  margin: 0 auto;
  margin-top: 100px;
}

.image-wrapper img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.btn {
  background-color: black;
  color: white;
  cursor: pointer;
}

.repo-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 60%;
}
.count-wrapper{
  display: flex;
  align-items: center;
  gap: 50px;
}
a{
  color: black;
  text-decoration: none;
}
a:hover{
  color: #54A3FF;
  text-decoration: underline;
}
.watcher{
  width: 70px;
}
.back-wrapper{
  margin: 20px 110px;
}
</style>
