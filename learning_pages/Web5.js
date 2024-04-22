import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

const Web1 = () => {
  return (
    <div className='abc'>
      <Box>
        <Stack>
          <Typography variant='h6'>
            <div>BASICS OF ORDER TYPES ? </div>
            <p>Order types are instructions given to a brokerage firm or stock exchange to execute a trade on behalf of an investor. Each order type specifies various parameters, such as the price at which the trade should be executed and the duration for which the order remains active in the market. Here are some of the basic order types used in stocks:
              1. Market Order:
              - A market order is an instruction to buy or sell a security at the best available price in the market.
              - Market orders are executed immediately at the current market price.
              - Market orders guarantee execution but do not guarantee a specific price, and the actual execution price may differ from the quoted price at the time the order is placed.
              2. Limit Order:
              - A limit order is an instruction to buy or sell a security at a specific price or better.
              - Buy limit orders are executed at the limit price or lower, while sell limit orders are executed at the limit price or higher.
              - Limit orders provide price protection but do not guarantee execution if the market does not reach the specified limit price.
              3. Stop Order (Stop-Loss Order):
              - A stop order becomes a market order to buy or sell a security once the price reaches a specified trigger price, known as the stop price.
              - Buy stop orders are typically placed above the current market price, while sell stop orders are placed below the current market price.
              - Stop orders are used to limit potential losses or to initiate a trade once a certain price level is reached.
              4. Stop-Limit Order: - A stop-limit order combines features of both stop and limit orders. - It specifies a stop price to trigger the order and a limit price at which the trade should be executed. - Once the stop price is reached, the order becomes a limit order, and the trade is executed at the specified limit price or better. 5. Market on Close (MOC) Order: - A market on close order is an instruction to buy or sell a security at the closing price of the trading day. - MOC orders are executed at the closing auction price, which is determined based on the supply and demand imbalance at the end of the trading day. 6. Market on Open (MOO) Order: - A market on open order is an instruction to buy or sell a security at the opening price of the trading day. - MOO orders are executed at the opening auction price, which is determined based on the supply and demand imbalance at the beginning of the trading day. These are some of the basic order types used in stock trading. Depending on the brokerage platform and market regulations, there may be additional order types available to investors. It's important for investors to understand the characteristics and implications of each order type before placing trades to ensure they meet their trading objectives and risk tolerance.</p>
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
        ><a href='https://youtu.be/8Qb24s6oWHs?si=NkYpxDg5XCngU5Ya'></a>
          Watch A Video
        </Button>
      </Box>
    </div>
  );
};

export default Web5;

