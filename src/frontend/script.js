var bgColors = [
    "linear-gradient(to right, #F7931A, #FDE8D0)", // bitcoin
    "linear-gradient(to right, #00b09b, #807CD8)", // solana
    "linear-gradient(to right, #8C8C8C, #393939)", // ethereum
    "linear-gradient(to right, #F26822, #4D4D4D)", // monero
  ],
  i = 0;

document.getElementById("buy-bitcoin").addEventListener("click", function () {
  buy(1, "Bitcoin");
});

document.getElementById("buy-solana").addEventListener("click", function () {
  buy(1, "Solana");
});

document.getElementById("buy-ethereum").addEventListener("click", function () {
  buy(1, "Ethereum");
});

document.getElementById("buy-monero").addEventListener("click", function () {
  buy(1, "Monero");
});

function buy(quantity, currency) {
  const url = `http://localhost:8080/?quantity=${quantity}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // display toast
      console.log(data);
      Toastify({
        text: `Bought ${quantity} ${currency} for $${data.price}`,
        duration: 3000,
        close: i % 3 ? true : false,
        style: {
          background: bgColors[i % 4],
        },
      }).showToast();
      i++;
    }
  );
}


