<template>
  <div id="stop_watch_area" class="">
    <v-btn elevation="2" tile class="light-blue lighten-4 rounded-lg" text @click="addTimer()">追加</v-btn>
    <StopWatchCard />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      addTimerItem: 'StopWatch/add',
    }),
    addTimer () {
      this.addTimerItem();
    },
  }
}
</script>

<style>
#stop_watch_area {
  width: 30vw;
  height: 100vh;
  max-height: 100vh;
  box-sizing: border-box;
  padding: 76px 12px;
}
</style>
