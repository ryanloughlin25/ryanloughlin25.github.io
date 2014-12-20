require_relative "stopwatch"
watch = Stopwatch.new
p watch.time == 0
p watch.status == :stopped
watch.start
sleep(1)
p watch.status == :running
watch.start #nothing should change if started while running
p watch.status == :running
time_first_running = watch.time
p time_first_running > 0
sleep(1)
watch.stop
p watch.status == :stopped
watch.stop #nothing should change if stopped while not running
p watch.status == :stopped
time_first_stop = watch.time
p time_first_running < time_first_stop
watch.start
sleep(1)
time_second_running = watch.time
p time_first_stop < time_second_running
p watch.status == :running
sleep(1)
watch.stop
p watch.status == :stopped
time_second_stop = watch.time
p time_first_stop < time_second_stop
sleep(1)
watch.reset
p watch.status == :stopped
p watch.time == 0
watch.start
sleep(1)
p watch.status == :running
sleep(1)
watch.reset
p watch.status == :stopped
p watch.time == 0
sleep(1)
watch.stop
p watch.status == :stopped
p watch.time == 0