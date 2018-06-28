<template lang="pug">
  section.hero.is-success
    .hero-head
      nav.navbar
        .navbar-brand
          .nav-item Platzi Music
        .navbar-menu
          .navbar-end
            router-link.nav-item(v-bind:to="{ name: 'search' }") Buscar
            router-link.nav-item(to="about") Nosotros
    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitlte Buscador de canciones
        pm-player
</template>

<script>
  import PmPlayer from '@/components/Player.vue'
  export default {
    components: { PmPlayer }
  }
</script>
