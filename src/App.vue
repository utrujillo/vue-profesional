<template lang="pug">
  #app
    img(src="./assets/logo.png")
    p
      input(v-model="name")
    p {{ name }}

    p
      a(v-bind:href="url" target="_blank") link
      br
      a(:href="url" target="_blank") usando un shortHand
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      url: 'https://www.google.com.mx'
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
