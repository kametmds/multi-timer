<template>
  <div>
    <v-card v-for="(item, key) in timers" id="stop_watch_card" :key="item.id" class="my-1 rounded-lg d-flex flex-column" outlined tile >
      <v-card-title>タイマーNo.{{item.id}}</v-card-title>
      <!-- <StopWatch :item="item"/> -->
      <v-card-text class="stop-watch py-2 text-center">
        <div class="watch-time text-h2 black--text">
          <div v-if="!item.timerOn">
          {{ formatTime(item.sec) }}
          </div>
          <div v-if="item.timerOn">
          {{ formatTime(sec) }}
          </div>
        </div>
      </v-card-text>
      <v-card-actions class="">
        <v-btn v-if="!item.timerOn" class="passive-btn py-1 px-3 rounded-lg" @click="start(key, item)">Start</v-btn>
        <v-btn v-if="item.timerOn" class="active-btn py-1 px-3 rounded-lg" @click="stop(key)">Stop</v-btn>
        <v-btn icon class="delete-btn" @click="deleteTimer(key)">
          <font-awesome-icon :icon="['fas','trash']" />
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import StopWatch from './StopWatch.vue'

export default {
  // components: {
  //   StopWatch
  // },
  data() {
    return {
      sec: 0,
      timerObj: null,
    };
  },
  computed: {
    ...mapGetters({
      timers: 'StopWatch/timerList',
      timer: 'StopWatch/getTimerById'
    }),
  },
  methods: {
    ...mapActions({
      updateTimerItem: 'StopWatch/update',
      deleteTimerItem: 'StopWatch/delete'
    }),
    deleteTimer (key) {
      this.deleteTimerItem(key);
    },
    start(key) {
      this.updateTimerItem({key, sec: this.sec, timerOn: true});
      this.sec = this.timer(key).sec;
      clearInterval(this.timerObj);
      this.timerObj = setInterval(() => {
        this.sec += 1;
      }, 1000)
    },
    stop(key) {
      this.updateTimerItem({key, sec: this.sec, timerOn: false});
      this.sec = 0
      clearInterval(this.timerObj);
      this.timerOn = false;
    },
    formatTime(sec) {
      return this.SecToTime(sec)
    },
  }
}
</script>

<style scoped>
</style>
