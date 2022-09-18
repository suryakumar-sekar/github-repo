<template>
  <div class="home">
    <list-data></list-data>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue';

export default {
  name: 'HomeView',
  components: {
    ListData: List
  }
}
</script>
