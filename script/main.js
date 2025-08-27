function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
let hertCount = 0;
const hartCounter = getElement("hart-counter");
getElement("cards-box").addEventListener("click", function (e) {
  if (e.target.className.includes("hert-btn")) {
    hertCount++;
    hartCounter.innerText = hertCount;
  }

})