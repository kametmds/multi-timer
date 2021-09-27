<template>
  <v-app>
    <TheHeader />
    <div class="body">
      <nuxt />
    </div>
  </v-app>
</template>

<script>
import TheHeader from '~/components/Header';
export default {
  components: {
    TheHeader
  }
}
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
}
</style>
