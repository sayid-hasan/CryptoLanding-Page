let ApiUrl =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";
async function cryptoPrice() {
  const response = await fetch(ApiUrl);
  const prices = await response.json();
  console.log(prices);
  Bitcoin.innerHTML = "$" + prices.bitcoin.usd;
  Ethereum.innerHTML = "$" + prices.ethereum.usd;
  Dogecoin.innerHTML = "$" + prices.dogecoin.usd;
}
cryptoPrice();
