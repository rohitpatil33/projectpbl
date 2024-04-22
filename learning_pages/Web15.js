import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'react';

const Web10 = () => {
  return (
    <div className='abc'>
      <Box>
        <Stack>
          <Typography variant='h6'>
            <div>HOW DO STOCK MARKET CRASHES AND CORRECTIONS DIFFER, AND WHAT ARE SOME HISTORICAL EXAMPLES OF SIGNIFICANT MARKET DOWNTURNS AND THEIR CAUSES?</div>
            <p>Stock market crashes and corrections differ primarily in their severity and duration. A crash is a sudden and severe decline in stock prices, typically resulting in panic selling and a significant drop in market indices, often exceeding 10% or more in a short period, such as days or weeks. Crashes are usually driven by major economic or financial crises, investor panic, or sudden shocks to the market.

On the other hand, a correction is a more moderate decline in stock prices, typically ranging from 10% to 20% from recent highs. Corrections are a natural part of market cycles and often occur as a result of investors reassessing valuations, profit-taking, or changes in economic conditions. Unlike crashes, corrections may take place over several weeks or months and are not usually associated with widespread panic.

Historical examples of significant market downturns include:

1. **The Great Depression (1929)**: One of the most severe stock market crashes in history, triggered by the Wall Street Crash of 1929. It led to a prolonged economic downturn, with stock prices plummeting, banks failing, and widespread unemployment.

2. **Black Monday (1987)**: A sudden and severe stock market crash on October 19, 1987, when the Dow Jones Industrial Average (DJIA) dropped by over 22% in a single day. The crash was attributed to factors such as program trading, overvaluation, and investor panic.

3. **Dot-com Bubble Burst (2000)**: After a period of rapid growth in internet-related stocks, the dot-com bubble burst in the early 2000s, leading to a significant market correction. Many internet companies with inflated valuations went bankrupt, causing widespread losses for investors.

4. **Global Financial Crisis (2008)**: Triggered by the collapse of the subprime mortgage market in the United States, the global financial crisis led to a severe stock market crash and economic recession. Major financial institutions collapsed, credit markets froze, and stock prices plummeted worldwide.

Each of these downturns had different causes, ranging from speculative bubbles and excessive leverage to financial system failures and economic recessions. Despite their differences, they all resulted in significant losses for investors and had far-reaching impacts on the global economy. 
</p></Typography>
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
        ><a href='https://youtu.be/KUnvyEJJ-fA?si=ujiDwXLlLwWo4ME7'></a>
          Watch A Video
        </Button>
      </Box>
    </div>
  );
};

export default Web15;

