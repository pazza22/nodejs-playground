function get_time(param) {
  var parameters = { format: param };
  $.get('/time/gettime', parameters, function (data) {
    $('#timedisplay').html(data);
  });
}

function get_users() {
  $.get('/user/getusers', function (data) {
    $('#usersdisplay').html(data);
  });
}