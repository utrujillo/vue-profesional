<template lang="pug">
  #app
    pm-header

    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar cancion...",
            v-model="searchQuery"
          )
          a.button.is-info.is-large(v-on:click="search") Buscar
          a.button.is-danger.is-large &times;

      .container
        p
          small {{ searchMessage }}

      .container.results
        .columns
          .column(v-for="track in tracks")
            | {{track.name}} {{track.artists[0].name}}

    pm-footer
</template>

<script>
import tarckService from './services/track.js'
import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },

  components: { PmFooter, PmHeader },

  computed: {
    searchMessage () {
      return `Canciones encontradas: ${this.tracks.length}`
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) { return }
      tarckService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
        })
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  .results{
    margin-top: 50px
  }
</style>
