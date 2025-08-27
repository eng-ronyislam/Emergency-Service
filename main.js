console.log("Hello World");
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
let hertCount = 0;
const hartCounter = getElement("hart-counter");
const coinCounter = getElement("coin-counter");
const copyCounter = getElement("copy-countrer");
let coinCount = Number(coinCounter.innerText);
let copyCount = Number(copyCounter.innerText);

getElement("cards-box").addEventListener("click", function (e) {
  if (e.target.className.includes("hert-btn")) {
    hertCount++;
    hartCounter.innerText = hertCount;
  } else if (e.target.className.includes("call-btn")) {
    const cartBtn = e.target;
    const title =
      cartBtn.parentNode.parentNode.children[1].children[0].innerText;

    const number =
      cartBtn.parentNode.parentNode.children[2].children[0].innerText;

    coinCount = coinCount - 20;
    if (coinCount >= 0) {
      coinCounter.innerText = coinCount;
      alert(
        "আপনি {number} নম্বরে কল করতে যাচ্ছেন।".replace("{number}", number)
      );
      const cartContainer = getElement("cart-container");
      const newCart = document.createElement("div");
      newCart.innerHTML = `
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
            <div class="flex justify-between items-center mb-2">
              <h3 class="text-lg">${title}</h3>
              <span class="text-gray-500">10:30 AM</span>
            </div>
            <p class="text-2xl font-bold">${number}</p>
            
          </div>
    `;
      cartContainer.appendChild(newCart);
    } else {
      alert("আপনার কয়েন শেষ।");
      return;
    }
  } else if (e.target.className.includes("copy-btn")) {
    const copyBtn = e.target;
    // console.log("copy btn clicked");
    // alert("Number Copied");
    copyCount++;
    copyCounter.innerText = copyCount;
    const number = copyBtn.parentNode.parentNode.children[2].children[0].innerText;

    navigator.clipboard.writeText(number)
        .then(() => {
          alert(`${number} copied to clipboard!`);
        })
        .catch(err => {
          console.error("Failed to copy Number: ", err);
        });
  }
});

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("cart-container").innerHTML = "";
});
