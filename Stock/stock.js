
const input = prompt("Enter stock prices for several days :");
const prices = input.split(" ").map(Number);


function maxProfit(prices) {
    let max = prices[0];
    let min = prices[0];

    for (const price of prices) {
        if (price > max) {
            max = price;
        }

        if (price < min) {
            min = price;
        }
    }

    console.log("Maximum price is:", max);
    console.log("Minimum price is:", min);

    const profit = max - min;
    return profit;
}


console.log("Max profit is:", maxProfit(prices));