let count = 0;

const countElement = document.getElementById("count");

function updateCounter() {
  countElement.textContent = count;
}

function increase() {
  count++;
  updateCounter();
}

function decrease() {
  count--;
  updateCounter();
}

function reset() {
  count = 0;
  updateCounter();
}