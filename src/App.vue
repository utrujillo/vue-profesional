<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h1 {{ msg }}
    p(v-show="showValue") {{ value }}
    p(v-if="showValue") {{ value }}
    p(v-else-if="false") {{ 'algo más' }}
    p(v-else) {{ 'Ya estuvo' }}

    ul
      li(v-for="i in items") {{ i }}

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola Mundo Vue.js App',

      showValue: false,
      value: 'Algo',
      items: [ 1, 2, 3, 4, 5, 6, 7 ]
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
