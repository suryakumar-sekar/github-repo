<template>
    <input type="text" v-model="searchText" required @input="filterList" />
</template>
<script>
import { mapActions } from 'vuex';


export default {
    name: 'input-data',
    data() {
        return {
            searchText: ''
        }
    },
    methods: {
        ...mapActions(['filterResult']),
        filterList() {
            this.filterResult(this.searchText)
        }
    }

}
</script>
<style>
input {
    width: 300px;
    height: 30px;
    border-radius: 10px;
}
</style>
  