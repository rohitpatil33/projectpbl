import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'react';

const Web10 = () => {
  return (
    <div className='abc'>
      <Box>
        <Stack>
          <Typography variant='h6'>
            <div>WHAT ARE DERIVATIVES, AND HOW ARE THEY USED IN THE STOCK MARKET?</div>
            <p>Derivatives are financial instruments whose value is derived from the value of an underlying asset, such as stocks, bonds, commodities, or currencies.
                 Common types of derivatives include options, futures, forwards, and swaps. Derivatives are used for various purposes in the stock market, including hedging, speculation, and arbitrage. For example, investors can use options to hedge against downside risk or to speculate on the future price movements of a stock. Futures contracts allow investors to buy or sell assets at a predetermined price on a future date, providing opportunities for hedging and speculation.
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
        ><a href='https://youtu.be/vN-IuTnwLOo?si=tfWu3tXimAU4KDYU'></a>
          Watch A Video
        </Button>
      </Box>
    </div>
  );
};

export default Web13;

