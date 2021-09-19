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

<style>
div {
  display: flex;
  flex-direction: column;
}

.body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
}
</style>
