var bgColors = [
    "linear-gradient(to right, #F7931A, #FDE8D0)", // bitcoin
    "linear-gradient(to right, #00b09b, #807CD8)", // solana
    "linear-gradient(to right, #8C8C8C, #393939)", // ethereum
    "linear-gradient(to right, #F26822, #4D4D4D)", // monero
  ],
  i = 0;

document.getElementById("buy-bitcoin").addEventListener("click", function () {
  Toastify({
    text: "Bought Bitcoin",
    duration: 3000,
    close: i % 3 ? true : false,
    style: {
      background: bgColors[0],
    },
  }).showToast();
  i++;
});

document.getElementById("buy-solana").addEventListener("click", function () {
  Toastify({
    text: "Bought Solana",
    duration: 3000,
    close: i % 3 ? true : false,
    style: {
      background: bgColors[1],
    },
  }).showToast();
  i++;
});

document.getElementById("buy-ethereum").addEventListener("click", function () {
  Toastify({
    text: "Bought Ethereum",
    duration: 3000,
    close: i % 3 ? true : false,
    style: {
      background: bgColors[2],
    },
  }).showToast();
  i++;
});

document.getElementById("buy-monero").addEventListener("click", function () {
  Toastify({
    text: "Bought Monero",
    duration: 3000,
    close: i % 3 ? true : false,
    style: {
      background: bgColors[3],
    },
  }).showToast();
  i++;
});
