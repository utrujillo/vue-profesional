<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h1 {{ msg }}
    p {{ 1 + 1 }}
    p {{ 'hola' + ' mundo' }}
    p {{ person.name.toUpperCase() +' '+ person.lastName }}
    p {{ JSON.stringify( person ) }}
    p {{ true ? 'true' : 'false' }}

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola Mundo Vue.js App',

      person: {
        name: 'Uziel',
        lastName: 'Trujillo'
      }
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
