const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    const loss = (initial - current) * quantity;
    const lossPercentage = (loss / initial) * 100;

    showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`);
  } else if (current > initial) {
    const profit = (current - initial) * quantity;
    const profitPercentage = (profit / initial) * 100;
    showOutput(
      `Hey the profit is ${profit} and the percent is ${profitPercentage}%`
    );
  } else {
    showOutput(`no pain no gain, no gain no pain`);
  }
}

function submitHandler() {
  let ip = initialPrice.value;
  let cp = currentPrice.value;
  let qty = stocksQuantity.value;

  if (ip === "" || cp === "" || qty === "") {
    showOutput("Please fill in all fields.");
    return;
  }

  ip = Number(ip);
  cp = Number(cp);
  qty = Number(qty);
  calculateProfitAndLoss(ip, qty, cp);
}

submitBtn.addEventListener("click", submitHandler);

function showOutput(message) {
  outputBox.innerText = message;
}
