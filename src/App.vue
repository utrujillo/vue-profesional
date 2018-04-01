<template lang="pug">
  #app
    img(src="./assets/logo.png")
    p
      input(v-model="name")
      input(v-model="lastName")
    p {{ fullName }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      lastName: '',
      url: 'https://www.google.com.mx'
    }
  },

  computed: {
    fullName () {
      return `${this.name} ${this.lastName}`
    }
  },
  watch: {
    name (newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
