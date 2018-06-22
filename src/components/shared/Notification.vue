<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification(v-bind:class="objNotification.class")
          slot(name="body") No hay resultados
</template>

<style lang="scss" scoped>
  .notification{
    margin: 10px;
  }
</style>

<script>
  export default {
    props: {
      objNotification: { type: Object, required: true }
    }
  }
</script>
