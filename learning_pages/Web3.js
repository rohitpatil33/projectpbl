import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

const Web2 = () => {
  return (
    <div className='abc'>
      <Box>
        <Stack>
          <Typography variant='h6'>
            <div>INCOME VALUE AND GROWTH STOCKS ?</div>
            <p>Income, value, and growth stocks are three different types of stocks that investors can consider based on their investment goals, risk tolerance, and financial objectives:
1. Income Stocks:
- Objective: Income stocks are typically chosen by investors seeking regular income in the form of dividends.
- Characteristics: These stocks are usually issued by well-established companies with stable cash flows and a history of paying dividends.
- Dividends: Income stocks pay relatively high dividends compared to other types of stocks, making them attractive to investors who prioritize income generation.
- Examples: Utilities, consumer staples, real estate investment trusts (REITs), and some financial companies often fall into this category.
2. Value Stocks:
- Objective: Value stocks are chosen by investors seeking undervalued stocks trading below their intrinsic value.
- Characteristics: These stocks typically have low price-to-earnings (P/E) ratios, low price-to-book (P/B) ratios, or other valuation metrics indicating that they may be trading at a discount relative to their fundamentals.
- Investment Approach: Value investors seek out companies with solid fundamentals that the market has overlooked or undervalued, expecting the market to eventually recognize their true worth.
- Examples: Companies in mature industries, cyclical sectors, or those experiencing temporary setbacks may be considered value stocks.
3. Growth Stocks:
- Objective: Growth stocks are chosen by investors seeking capital appreciation through the potential for rapid earnings or revenue growth.
- Characteristics: These stocks typically have high price-to-earnings (P/E) ratios or high price-to-book (P/B) ratios, reflecting investors' expectations of future growth.
- Investment Approach: Growth investors focus on companies with strong growth prospects, innovative products or services, expanding markets, or disruptive technologies.
- Risk and Volatility: Growth stocks may be more volatile than income or value stocks due to higher expectations and uncertainty surrounding future growth.
- Examples: Technology companies, biotech firms, and companies in emerging industries often fall into this category.
It's essential to note that these categories are not mutually exclusive, and many stocks can exhibit characteristics of more than one category. Additionally, investors may choose to diversify their portfolios by including a mix of income, value, and growth stocks to balance risk and potential returns according to their investment objectives.</p>
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
        ><a href='https://youtu.be/wFDXc9-vEmQ?si=lig8rCUV86H-7FfM'></a>
          Watch A Video
        </Button>
      </Box>
    </div>
  );
};

export default Web3;