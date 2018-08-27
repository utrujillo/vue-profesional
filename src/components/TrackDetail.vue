<template lang="pug">
  .container
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image
            img(v-bind:src="track.album.images[0].url")
          p
            a.button.is-primary.is-large
              span.icon(v-on:click="selectTrack") &#9658;
      .column.is-8
        .panel
          .panel-heading
            h1.title {{ track.name }}
          .panel-block
            article.media
              .media-content
                .content
                  ul(v-for="(value,key) in track")
                    li
                      strong {{ key }}:&nbsp;
                      span {{ value }}
              nav.level
                .level-left
                  a.level-item

</template>

<script>
  import trackMixin from '@/mixins/track.js'
  import trackService from '@/services/track.js'

  export default {
    mixins: [ trackMixin ],
    data () {
      return {
        track: {}
      }
    },

    created () {
      const id = this.$route.params.id
      trackService.getById(id)
        .then(res => {
          this.track = res
        })
    }
  }
</script>

<style lang="scss">
  .columns{
    margin: 20px;
  }
</style>
