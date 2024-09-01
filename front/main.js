var timeString = getCurrentTime()

function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    // Добавляем ведущие нули, если необходимо
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var timeString = hours + ':' + minutes;
    console.log(timeString);
    return timeString;
}


$('#start').click(function() {
	
	alert(timeString)


    
	let timeToWake = $('#input-time-to-wake').val()

    let maxIterations = 7
    let nowIterations = 1


    while (nowIterations < maxIterations) {


      $('.cycles').append('<div class="num">' + nowIterations + '</div>')

      nowIterations++;
  }


})