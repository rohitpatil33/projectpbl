import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'react';

const Web10 = () => {
  return (
    <div className='abc'>
      <Box>
        <Stack>
          <Typography variant='h6'>
            <div>HOW DO STOCK SPLITS AND REVERSE STOCK SPLITS IMPACT A COMPANY'S STOCK PRICE AND MARKET CAPITALIZATION?</div>
            <p>Stock splits and reverse stock splits both impact a company's stock price and market capitalization, but in opposite directions.

1. **Stock Splits**:
   - In a stock split, a company increases the number of its outstanding shares by dividing existing shares into multiple shares. For example, in a 2-for-1 stock split, each existing share is split into two shares.
   - As a result of the split, the price per share decreases proportionally to maintain the same total market value of the company. For instance, if a company's stock is trading at $100 per share and it undergoes a 2-for-1 split, the price per share will halve to $50 per share.
   - However, the number of outstanding shares increases, leading to greater liquidity and potentially attracting more investors due to the lower share price.
   - The company's market capitalization remains unchanged after a stock split since the total value of all outstanding shares remains the same.

2. **Reverse Stock Splits**:
   - In contrast, a reverse stock split involves reducing the number of outstanding shares by consolidating existing shares. For example, in a 1-for-10 reverse stock split, every 10 existing shares are combined into one share.
   - As a result, the price per share increases proportionally to maintain the same total market value of the company. For instance, if a company's stock is trading at $1 per share and it undergoes a 1-for-10 reverse split, the price per share will increase to $10 per share.
   - The number of outstanding shares decreases, which may improve the perception of the company's stock among investors. However, it can also signal financial distress or a lack of confidence in the company's prospects.
   - Similar to stock splits, the market capitalization of the company remains unchanged after a reverse stock split since the total value of all outstanding shares remains the same.

In summary, stock splits and reverse stock splits primarily affect the price per share and the number of outstanding shares, but they do not directly impact a company's overall market capitalization. They are often used to adjust the stock price to a more desirable range or to signal confidence or distress in the company's performance.
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
        ><a href='https://youtu.be/m-vR2Ty1z5A?si=h0I48quy8dhcbYQN'></a>
          Watch A Video
        </Button>
      </Box>
    </div>
  );
};

export default Web16;

