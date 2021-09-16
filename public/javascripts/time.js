function getTime(){
    //document.getElementById('timedisplay').innerHTML = new Date().toString();
    $.get( '/time/gettime', function(data) {
        $('#timedisplay').html(data);
      });
  }