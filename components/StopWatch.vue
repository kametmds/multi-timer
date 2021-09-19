<template>
  <v-card-text class="stop-watch py-2 text-center">
    <div class="watch-time text-h2 black--text">
      <div v-if="!item.timerOn">
      {{ formatTime(item.sec) }}
      </div>
      <div v-if="item.timerOn">
      {{ formatTime(sec) }}
      </div>
    </div>
    <v-btn v-if="!item.timerOn" class="passive-btn py-1 px-3 rounded-lg" @click="start(item.id)">Start</v-btn>
    <v-btn v-if="item.timerOn" class="active-btn py-1 px-3 rounded-lg" @click="stop(item.id)">Stop</v-btn>
  </v-card-text>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
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
    count() {
      this.sec += 1
    },
    start(key) {
      const self = this;
      self.sec = this.timer(key);
      this.timerObj = setInterval(function(){
        self.count();
      }, 1000)
      this.updateTimerItem({key, sec: this.sec, timerOn: true});
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
