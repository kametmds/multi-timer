import Vue from 'vue'

Vue.mixin({
  methods: {
    SecToTime(rawsec){
      let sec = String((rawsec % 60)%60)
      if (sec.length === 1){sec = "0" + sec}
      let min = String(Math.floor(rawsec / 60) % 60)
      if (min.length === 1){min = "0" + min}
      let hour = String(Math.floor(rawsec / 3600))
      if (hour.length === 1){hour = "0" + hour}
      const time = hour + ":" + min + ":" + sec
      return time
    },
  },
})
