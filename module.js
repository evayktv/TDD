// module.js
function sum(a, b) {
    return a + b;
  }


// module.js
function div (a, b){
    return a / b;
  }
  
  function containsNumbers(text){
    for (let i = 0; i < text.length; i++) {
     if (!isNaN(text.charAt(i)))
      return true;
    }
    return false;
  }


  class ShareSaleException extends Error {
    constructor() {
      super('Attempt to sell too many shares.');
      this.name = 'ShareSaleException';
    }
  }

  class StockPortfolio {
    constructor() {
      this.stocks = {}; // An object to store ticker symbols and shares
    }

    isEmpty() {
        return Object.keys(this.stocks).length === 0;
      }
  
    // Method to add shares to the portfolio
    buy(ticker, shares) {
      if (this.stocks[ticker]) {
        this.stocks[ticker] += shares;
      } else {
        this.stocks[ticker] = shares;
      }
    }

    sell(ticker, shares) {
        if (this.stocks[ticker] >= shares) {
          this.stocks[ticker] -= shares;
          if (this.stocks[ticker] <= 0) {
            delete this.stocks[ticker];
          }
        } else {
          throw new ShareSaleException();
        }
      }
  
    // Method to count unique ticker symbols
    countUniqueTickerSymbols() {
      return Object.keys(this.stocks).length;
    }

    getShares(ticker) {
        return this.stocks[ticker] || 0;
    }

    getOwnedSymbols() {
        return Object.keys(this.stocks);
      }
  }
  
  export { StockPortfolio, ShareSaleException};
// last line of module.js
export default { sum, div, containsNumbers};