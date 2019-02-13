function StopWatch() {
  let startTime;
  let endTime;
  let running = false;
  let duration;

  this.start = function() {
    if (running) throw new Error("The stopwatch is already running");

    running = true;

    startTime = new Date();
  };

  this.stop = function() {
    if (!running) throw new Error("The stopwatch is not running");

    running = false;

    endTime = new Date();

    let seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}

let watch = new StopWatch();

watch.start();
watch.stop();
console.log(watch.duration);
watch.reset();
console.log(watch.duration);