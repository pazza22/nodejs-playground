function getTime(){
    //document.getElementById('timedisplay').innerHTML = new Date().toString();
    var parameters = { format: 'short' };
    $.get( '/time/gettime', parameters, function(data) {
        $('#timedisplay').html(data);
      });
  }