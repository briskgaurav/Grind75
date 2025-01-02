var maxProfit = function (prices) {

    let maxProfit = 0;
    let minProfit = Infinity;

    for (let i = 0; i < prices.length; i++) {

        if (minProfit > prices[i]) {
            minProfit = prices[i];
        }
        let profit = prices[i] - minProfit;
        if (profit > maxProfit) {
            maxProfit = profit;
        }

    }
    return maxProfit;
};