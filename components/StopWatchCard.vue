<template>
  <div>
    <draggable v-model="timers" :options="{ animation: 600, delay: 0 }">
      <v-card v-for="(item, key) in timers" id="stop_watch_card" :key="item.id" class="my-1 rounded-lg d-flex flex-column" elevation="1" outlined tile >
        <v-card-title class="pt-3 pb-1 text-center">
            <v-text-field outlined :value="item.name" elevation="1" @input="changeName(key, $event)"></v-text-field>
        </v-card-title>
        <v-card-text class="py-1 text-center">
          <div class="watch-time text-h2 black--text">
            <div v-if="!item.timerOn">
            {{ formatTime(item.sec) }}
            </div>
            <div v-if="item.timerOn">
            {{ formatTime(sec) }}
            </div>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="d-flex justify-space-around">
          <v-btn v-if="!item.timerOn" class="rounded-lg col-10" elevation="1" @click="start(key, item)">Start</v-btn>
          <v-btn v-if="item.timerOn" class="rounded-lg col-10" color="primary" elevation="1" @click="stop(key)">Stop</v-btn>
          <v-btn icon class="rounded-lg" @click="deleteTimer(key)">
            <font-awesome-icon :icon="['fas','trash']" />
          </v-btn>
        </v-card-actions>
      </v-card>
    </draggable>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import draggable from 'vuedraggable'

export default {
  components: { draggable },
  data() {
    return {
      sec: 0,
      timerObj: null,
    };
  },
  computed: {
    ...mapGetters({
      // timers: 'StopWatch/timerList',
      timer: 'StopWatch/getTimerById'
    }),
    timers: {
      get() {
        return this.$store.state.StopWatch.timers;
      },
      set(value) {
        this.$store.commit('StopWatch/updateList', value)
      }
    },
  },
  methods: {
    ...mapActions({
      deleteTimerItem: 'StopWatch/deleteItem',
      updateTimerItem: 'StopWatch/updateItem',
      changeTimerName: 'StopWatch/changeName',
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
    changeName(key, name) {
      this.changeTimerName({key, name});
    }
  }
}
</script>

<style scoped>
</style>
