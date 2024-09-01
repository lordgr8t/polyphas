var timeString = getCurrentTime()
var maxIterations = 8
iterationTime = "01:30"
timeToFall = "00:15"

$('.banner input').val(timeString)
getCycles()


// получаем текущее время
function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var timeString = hours + ':' + minutes;
    // console.log(timeString);
    return timeString;
}

// складываем время в формате "01:30" + "00:15"
function addTimes(time1, time2) {
    var parts1 = time1.split(':');
    var parts2 = time2.split(':');
    var hours1 = parseInt(parts1[0], 10);
    var minutes1 = parseInt(parts1[1], 10);
    var hours2 = parseInt(parts2[0], 10);
    var minutes2 = parseInt(parts2[1], 10);
    var totalMinutes = minutes1 + minutes2;
    var totalHours = hours1 + hours2 + Math.floor(totalMinutes / 60);
    totalMinutes = totalMinutes % 60;
    totalHours = totalHours % 24;
    return `${totalHours.toString().padStart(2, '0')}:${totalMinutes.toString().padStart(2, '0')}`;
}



function getCycles() {
    $('.cycles').html('')
   let nowIterations = 1
   let nowTime = timeString
   let endTime

   $('.cycles').append('<div class="cycle jcsb aic"><div class="df"><div class="num">0</div> <div class="main"> <div class="num_text">Время засыпания</div> <div class="num_time"> <span>' + nowTime +'</span> <span> - </span> <span>' + addTimes(nowTime, timeToFall) +'</span> </div> </div></div><div class="wake">' + addTimes(nowTime, timeToFall) +'</div> </div>')


   nowTime = addTimes(nowTime, timeToFall)

   while (nowIterations < maxIterations) {
    endTime =  addTimes(nowTime, iterationTime)
    $('.cycles').append('<div class="cycle jcsb aic"><div class="df"><div class="num">' + nowIterations +'</div> <div class="main"> <div class="num_text">#' + nowIterations +' цикл</div> <div class="num_time"> <span>' + nowTime +'</span> <span> - </span> <span>' + endTime +'</span> </div> </div></div><div class="wake">' + endTime +'</div> </div>')

    nowTime = endTime
    nowIterations++;
}
}



$('.banner input').on('input', function() {
   getCycles()
   timeString = $('.banner input').val()
});