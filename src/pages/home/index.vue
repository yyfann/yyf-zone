<template>
  <div>
    <h1>主页 </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },

  async mounted() {
    const res = await this.$get('/')
    console.log(res.data,'res.data')
  },

  methods: {
    
  },
}
</script>

<style scoped>

</style>