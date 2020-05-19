<template>
  <div>
    <div>{{ list }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    }
  },

  async mounted() {
    this.list = await this.$get('/list')
    console.log(this.list,'this.list') 
  },

  methods: {
    
  },
}
</script>

<style scoped>

</style>