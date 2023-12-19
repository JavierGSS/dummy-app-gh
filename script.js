let number = Math.floor(Math.random() * 10);
let header = document.getElementById("root");

function main(x) {
  var y = blue(x);
  return y;
}

function blue(x) {
  var y = red(x);
  return y;
}

function red(x) {
  return x + 1;
}

header.innerHTML = `${main(number)} is the successor of ${number}.`;
