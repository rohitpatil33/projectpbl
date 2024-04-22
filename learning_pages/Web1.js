import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

const Web1 = () => {
  return (
    <div className='abc'>
      <Box>
        <Stack>
          <Typography variant='h6'>
            <div>WHEN TO SELL STOCK ?</div>
            <p>Gradually. - Time Horizon: Investors focus on long-term growth and wealth accumulation, often holding assets for years or even decades.
- Approach: Investors analyze fundamental factors such as a company's financial health, competitive position, and growth prospects to identify undervalued assets with the potential for long-term
- Risk Tolerance: Investors Deciding when to sell a stock can be a complex decision influenced by various factors such as your investment goals, risk tolerance, market conditions, and the specific characteristics of the stock you own. Here are some common situations when you might consider selling a stock:
1. Achievement of Investment Goals: If the stock has reached your target price or has provided the expected returns, you might consider selling to lock in profits and rebalance your portfolio.
2. Change in Fundamentals: If there is a significant change in the company's fundamentals, such as declining revenue, loss of market share, or management issues, it may be wise to sell the stock.
3. Overvaluation: If the stock becomes overvalued based on its price-to-earnings ratio, price-to-book ratio, or other valuation metrics, it might be a good time to sell, especially if there are no fundamental reasons to justify the high valuation.
4. Loss of Confidence: If you lose confidence in the company's future prospects due to changes in industry trends, competitive pressures, or regulatory issues, it might be prudent to sell the stock.
5. Diversification Needs: If the stock becomes too large a portion of your portfolio and exposes you to excessive risk, you might consider selling to diversify your holdings.
6. Market Conditions: During bear markets or periods of high volatility, you might sell stocks to reduce risk or raise cash for potential buying opportunities.
7. Tax Considerations: Selling a stock can have tax implications, so you might consider selling to take advantage of tax-loss harvesting strategies or to manage your tax liabilities.
8. Rebalancing: Periodically rebalancing your portfolio involves selling winners and buying losers to maintain your desired asset allocation, which can help manage risk over the long term.
Ultimately, the decision to sell a stock should be based on a thorough analysis of the company's fundamentals, market conditions, and your own investment objectives. It's essential to have a clear investment strategy and to regularly review your portfolio to ensure it remains aligned with your goals and risk tolerance.</p>
</Typography>
        </Stack>
        <Button
          sx={{
            width : '200px',
            justifyContent : 'center',
            alignItems : 'center',
            color: '#fff',
            background: '#D43725',
            fontSize: '0.9rem!important',
            padding: '0.5rem 2rem',
            '&:hover': {
              background: '#D43725',
              opacity: 0.8,
            },
          }}
        ><a href='https://youtu.be/nGszy-K4jLE?si=-YpHbd2oU8iSnPF6'></a>
          Watch A Video
        </Button>
      </Box>
    </div>
  );
};

export default Web1;

