<template>
  <div id="timer">
    <div class="timer">
      <div class="time">
        {{ formatTime }}
      </div>
      <div class="btn-area">
        <button v-if="!timerOn" class="passive-btn" @click="start">Start</button>
        <button v-if="timerOn" class="active-btn" @click="stop">Stop</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  data() {
    return {
      min: 60,
      sec: 0,
      timerOn: false,
      timerObj: null,
    }
  },
  computed: {
    formatTime() {
      const timeStrings = [
        this.min.toString(),
        this.sec.toString()
      ].map(function(str) {
        if (str.length < 2) {
          return "0" + str
        } else {
          return str
        }
      })
      return timeStrings[0] + ":" + timeStrings[1]
    }
  },
  methods: {
    count() {
      if (this.sec <= 0 && this.min >= 1) {
        this.min --;
        this.sec = 59;
      } else if(this.sec <= 0 && this.min <= 0) {
        this.complete();
      } else {
        this.sec --;
      }
    },

    start() {
      const self = this;
      this.timerObj = setInterval(function() {self.count()}, 1000)
      this.timerOn = true; // timerがONであることを状態として保持
    },

    stop() {
      clearInterval(this.timerObj);
      this.timerOn = false; // timerがOFFであることを状態として保持
    },

    complete() {
      clearInterval(this.timerObj)
    }
  }
}
</script>

<style scoped>
#timer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgb(220, 225, 243);
}

.time {
  font-size: 100px;
  margin-top: 42px;
}

button {
  padding: 12px 24px;
  border-radius: 10px;
  border: 2px solid #000;
  background: #fff;
  cursor: pointer;
}

button:hover {
  color: #fff;
  background: #000;
}

.passive-btn {
  background-color: rgb(255, 255, 255);
}

.active-btn {
  background-color: rgb(180, 180, 180);
}

.btn-area {
  text-align: center;
}

</style>
