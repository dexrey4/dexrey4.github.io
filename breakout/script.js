var locks = [
    { numb:0},
    { numb:0},
    { numb:0},
    { numb:0}
];
function inc(num) {

  var lock = document.getElementById("b" + num);
 
  locknum = locks[num-1].numb
  locknum += 1
  if (locknum >= 10) {
    locknum = 0
  }
  locks[num-1].numb = locknum
  lock.innerHTML = locknum
}
function dec(num) {

  var lock = document.getElementById("b" + num);
 
  locknum = locks[num-1].numb
  locknum -= 1
  if (locknum <= 0) {
    locknum = 9
  }
  locks[num-1].numb = locknum
  lock.innerHTML = locknum
}

