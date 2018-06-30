<template lang="pug">
  main
    pm-notification(v-show="objNotification.class",v-bind:objNotification="objNotification")
      p(slot="body") {{ searchMessage }}

    pm-loader(v-show="isLoading")

    section.section(v-show="!isLoading")
      nav.nav.has-shadow
        .container
          .field.has-addons
            .control.is-expanded
              input.input.is-large(
                type="text",
                placeholder="Buscar cancion...",
                v-model="searchQuery",
                v-on:keyup.enter="search"
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
</template>

<script>
import trackService from '@/services/track.js'
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
      objNotification: {
        show: false,
        class: ''
      },
      selectedTrack: ''
    }
  },

  components: { PmTrack, PmLoader, PmNotification },

  computed: {
    searchMessage () {
      return (this.tracks.total === 0) ? ('No se encontraron resultados...') : (`Canciones encontradas: ${this.tracks.length}`)
    }
  },

  watch: {
    objNotification: {
      handler () {
        setTimeout(() => {
          this.resetObjNotification()
        }, 3000)
      },
      deep: true
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      this.resetObjNotification()
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          this.isLoading = false
          if (res.tracks.total === 0) {
            this.objNotification.show = false
            this.objNotification.class = 'is-danger'
          } else {
            this.objNotification.show = true
            this.objNotification.class = 'is-success'
          }
        })
    },
    setSelectedTrack (trackID) {
      this.selectedTrack = trackID
    },
    resetObjNotification () {
      this.objNotification.show = false
      this.objNotification.class = ''
    }
  }
}
</script>

<style lang="scss">
  .results{
    margin-top: 50px
  }
  .is-active{
    border: 3px #23d160 solid;
  }
</style>
