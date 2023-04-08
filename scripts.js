'use strict'

class Clock {

  nowDate = new Date();
  DOMElement = document.querySelector('.time');

  start() {
    
    this.nowDate = new Date();
    this.DOMElement.innerHTML = this.hours + ':' + this.minutes + ':' + this.seconds;
    setTimeout(() => this.start(), 1000)

  }

  get hours() { return Clock.formatted(this.nowDate.getHours()) }
  get minutes() { return Clock.formatted(this.nowDate.getMinutes()) }
  get seconds() { return Clock.formatted(this.nowDate.getSeconds()) }

  static formatted(time) {
    return time < 10 ? '0' + time : '' + time;
  }
}


let clock = new Clock();

clock.start()