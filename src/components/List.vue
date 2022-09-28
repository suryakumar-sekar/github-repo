<template>
    <div>
        <h1>Top Users</h1>
        <div class="list-item-wrapper" v-if="temporaryList.length">
            <div v-for="user of temporaryList" :key="user.id" class="item-inner">
                <div class="image-wrapper">
                    <img :src="user.avatar_url ? user.avatar_url : require('@/assets/duck.png')" class="avatar-img" />
                </div>
                <span class="inner-username" @click="moveToUser(user.login)">{{user.login}}</span>
                <div class="link">
                    <img src="../assets/Vector.jpg" />
                    <a :href="user.url" class="github" target="_blank">github</a>
                </div>
            </div>
        </div>
        <div v-else>
            <h4>Users not found</h4>
        </div>
    </div>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex';


export default {
    name: 'list-data',
    mounted() {
        this.getList();
    },
    computed: {
        ...mapGetters(['temporaryList'])
    },
    methods: {
        ...mapActions(['getList']),
        moveToUser(login) {
            this.$router.push({ name: 'userdetails', params: { username: login } })
        }
    }

}
</script>
<style>
h1 {
    color: black;
    text-align: center;
}

.avatar-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.list-item-wrapper {
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 88px;
    text-align: center;
}

.github {
    color: #54A3FF;
    text-decoration: none;
}

.link {
    display: flex;
    gap: 5px;
    justify-content: center;
}

.link span {
    font-size: 12px;
}

.link img {
    width: 15px;
    height: 15px;
}

h4 {
    margin-top: 100px;
    text-align: center;
}

.item-inner {
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.inner-username {
    cursor: pointer;
    font-weight: 800;
    font-size: 20px;

}

.image-wrapper {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: flex;
  justify-content: center;
  align-items: center;
    background-color: #54A3FF;
}
</style>

  