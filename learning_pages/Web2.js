import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

const Web2 = () => {
  return (
    <div className='abc'>
      <Box>
        <Stack>
          <Typography variant='h6'>
            <div>INVESTING VS TRADING ?</div>
            <p>Investing and trading are both strategies used in financial markets, but they differ significantly in terms of objectives, time horizon, and approach:
1. Investing: - Objective: Investing typically involves buying assets with the expectation of holding them for the long term to generate wealth generally have a higher tolerance for market fluctuations and are willing to withstand short-term volatility in pursuit of long-term gains.
- Examples: Buying and holding stocks, bonds, mutual funds, real estate, and other assets for the long term.
2. Trading: - Objective: Trading involves buying and selling financial instruments with the aim of profiting from short-term price fluctuations.
- Time Horizon: Traders focus on short-term movements in prices, often holding assets for minutes, hours, days, or weeks.
- Approach: Traders use technical analysis, chart patterns, and market indicators to identify short-term trading opportunities based on price movements and market trends.
- Risk Tolerance: Traders typically have a lower tolerance for risk and aim to capitalize on short-term market inefficiencies, often using leverage to amplify potential returns.
- Examples: Day trading, swing trading, options trading, forex trading, and other short-term trading strategies.
Key Differences: - Time Horizon: Investing is focused on the long term, while trading is focused on the short term.
- Objective: Investors seek long-term wealth accumulation, while traders aim to profit from short-term market movements.
- Approach: Investors analyze fundamental factors, while traders rely more on technical analysis and market timing.
- Risk Tolerance: Investors generally have a higher tolerance for risk than traders, who often use risk management techniques to limit potential losses.
Both investing and trading can be profitable strategies, but they require different skill sets, risk tolerances, and time commitments. It's essential for individuals to understand their financial goals, risk tolerance, and time horizon before choosing between investing and trading. Additionally, some investors may use a combination of both strategies to diversify their portfolios and achieve their financial objectives.</p>
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
        ><a href='https://youtu.be/mixBWOHQZNw?si=3YvbUBvl8J3rUlEG'></a>
          Watch A Video
        </Button>
      </Box>
    </div>
  );
};

export default Web2;