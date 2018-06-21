<template lang="pug">
  #app
    pm-header
    pm-notification(v-show="showNotification")
      p(slot="body") No se encontraron resultados

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
            pm-track(
              v-bind:class="{ 'is-active': track.id === selectedTrack }",
              v-bind:track="track", 
              v-on:select="setSelectedTrack"
            )

    pm-footer
</template>

<script>
import tarckService from '@/services/track.js'
import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: ''
    }
  },

  components: { PmFooter, PmHeader, PmTrack, PmLoader, PmNotification },

  computed: {
    searchMessage () {
      return `Canciones encontradas: ${this.tracks.length}`
    }
  },

  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      this.showNotification = false
      tarckService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (trackID) {
      this.selectedTrack = trackID
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  .results{
    margin-top: 50px
  }
  .is-active{
    border: 3px #23d160 solid;
  }
</style>
