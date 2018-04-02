<template lang="pug">
  #app
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
          p
            small {{ searchMessage }}

      .container.results
        .columns
          .column(v-for="track in tracks") {{track.name}} {{track.artist}}

</template>

<script>
const TRACKS = [
  {name: 'I don\'t want a miss a thing', artist: 'Aerosmith'},
  {name: 'Tomorrow', artist: 'Cranberrires'},
  {name: 'Chispa adecuada', artist: 'Heroes del silencio'},
  {name: 'Luz de día', artist: 'Enanitos verdes'},
  {name: 'Scar Tissue', artist: 'Red hot chilli pepers'}
]

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },

  computed: {
    searchMessage () {
      return `Canciones encontradas: ${this.tracks.length}`
    }
  },

  methods: {
    search () {
      this.tracks = TRACKS
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
