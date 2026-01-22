function updateClock(){
  let now = new Date();
  
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ms = now.getMilliseconds();

  let ampm = h <= 12 ? "AM" : "PM";
  h = h % 12 || 12; 

  let time = `${h.toString().padStart(2,0)}:${m.toString().padStart(2,0)}:${s.toString().padStart(2,0)} ${ampm}`
  let options = {weekday:'long', month:'short', year:'numeric', day:'numeric'}
  let date = now.toLocaleDateString(undefined, options);

  document.getElementById("clock").innerText = time;
  document.getElementById("date").innerText = date;

}
setInterval(updateClock, 100);
updateClock()

/** lernings ---->
 
  Date() : gets today details including date, day, time, year, month... (date.getHours, getMinutes, getSeconds, )
  toString() : converts something to strings
  padStart() : adds '0' to left of anything until the length of the string matches.. padStart(2, 0)
  toLocaleDateString() : customize the date formats. Thu - Thursday, Jan - January, 
  setIntervar(fun, time) : helps run a callback on every time interval.. 

**/
