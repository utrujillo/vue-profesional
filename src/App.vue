<template lang="pug">
  #app
    pm-header
    
    pm-loader(v-show="isLoading")

    section.section(v-show="!isLoading")
      nav.nav.has-shadow
        .container
          .field.has-addons
            .control.is-expanded
              input.input.is-large(
                type="text",
                placeholder="Buscar cancion...",
                v-model="searchQuery"
              )
            .control
              a.button.is-info.is-large(v-on:click="search") Buscar
              a.button.is-danger.is-large &times;
      
      .container
        p
          small {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="track in tracks")
            pm-track(v-bind:track="track")

    pm-footer
</template>

<script>
import tarckService from '@/services/track.js'
import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false
    }
  },

  components: { PmFooter, PmHeader, PmTrack, PmLoader },

  computed: {
    searchMessage () {
      return `Canciones encontradas: ${this.tracks.length}`
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      tarckService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          this.isLoading = false
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
