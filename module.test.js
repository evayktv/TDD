import mut from './module.js'; // MUT = Module Under Test
import { StockPortfolio, ShareSaleException } from './module.js'; // Import only the StockPortfolio class

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('A new stock portfolio is empty', () => {
  const portfolio = new StockPortfolio(); // Create a new StockPortfolio object
  expect(portfolio.isEmpty()).toBe(true);
});

test('Count unique ticker symbols in the portfolio', () => {
    const portfolio = new StockPortfolio();
    portfolio.buy('GME', 5);
    portfolio.buy('RBLX', 10);
    portfolio.buy('GME', 2); // Buying more GME shares
    expect(portfolio.countUniqueTickerSymbols()).toBe(2);
  });

test('Make a purchase updates the portfolio', () => {
  const portfolio = new StockPortfolio();
  portfolio.buy('AAPL', 5); // Buy 5 shares of AAPL
  expect(portfolio.getShares('AAPL')).toBe(5); // Check if AAPL shares are updated
});


test('Make a sale updates the portfolio', () => {
    const portfolio = new StockPortfolio();
    portfolio.buy('AAPL', 10); // Buy 10 shares of AAPL
    portfolio.sell('AAPL', 5); // Sell 5 shares of AAPL
    expect(portfolio.getShares('AAPL')).toBe(5); // Check if AAPL shares are updated
  });

  test('Get the number of shares for a given symbol', () => {
    const portfolio = new StockPortfolio();
    portfolio.buy('AAPL', 10); // Buy 10 shares of AAPL
    expect(portfolio.getShares('AAPL')).toBe(10); // Check the number of shares for AAPL
  });

  test('Portfolio keeps only owned symbols', () => {
    const portfolio = new StockPortfolio();
    portfolio.buy('AAPL', 10); // Buy 10 shares of AAPL
    portfolio.buy('GOOG', 5); // Buy 5 shares of GOOG
    portfolio.sell('AAPL', 5); // Sell 5 shares of AAPL
    expect(portfolio.getOwnedSymbols()).toEqual(['AAPL', 'GOOG']); // Check for owned symbols
  });

  test('Attempt to sell too many shares raises ShareSaleException', () => {
    const portfolio = new StockPortfolio();
    portfolio.buy('AAPL', 10); // Buy 10 shares of AAPL
    expect(() => portfolio.sell('AAPL', 15)).toThrow(ShareSaleException); // Attempt to sell more shares than owned
  });
