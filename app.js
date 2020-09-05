function digitalClock() {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let amrpm = hrs>=12 ? 'pm' : 'am';

    // before 10, it will be 1 digit so time shrsould be 01,02...
    hrs = (hrs < 10) ? ("0" + hrs) : hrs;
    mins  = (mins < 10) ? ("0" + mins) : mins;
    secs = (secs < 10) ? ("0" + secs) : secs;

  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = mins;
  document.getElementById("seconds").innerHTML = secs;
  document.getElementById("amorpm").innerHTML = amrpm;

  setTimeout(digitalClock,1000);

}

digitalClock();