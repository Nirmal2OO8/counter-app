let count = 0;

function update() {
  document.getElementById("count").innerText = count;
}

function increase() {
  count++;
  update();
}

function decrease() {
  count--;
  update();
}

function reset() {
  count = 0;
  update();
}