import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'react';

const Web10 = () => {
  return (
    <div className='abc'>
      <Box>
        <Stack>
          <Typography variant='h6'>
            <div>WHAT OWMING A STOCK MEANS ?</div>
            <p>Owning a stock means that you possess a share of ownership in a company. When you buy a stock, you're purchasing a small piece of that company, making you a shareholder. As a shareholder, you have certain rights and benefits:
              1. Ownership: Each share of stock represents a proportional ownership stake in the company. Shareholders have the right to vote on corporate matters such as the election of the board of directors and major corporate decisions.
              2. Dividends: Some companies distribute a portion of their profits to shareholders in the form of dividends. Dividends are typically paid quarterly and represent a share of the company's earnings. Not all companies pay dividends, and the decision to do so is made by the company's board of directors.
              3. Capital Appreciation: As a shareholder, you have the potential to profit from the appreciation in the value of the stock. If the company performs well and its stock price increases, the value of your investment grows.
              4.Residual Claims: Shareholders have a residual claim on the company's assets and earnings. This means that, in the event of liquidation or bankruptcy, shareholders are entitled to receive remaining assets after creditors, bondholders, and preferred shareholders have been paid.
              5.Limited Liability: One of the benefits of owning stock in a company is limited liability. Shareholders are not personally liable for the debts or obligations of the company beyond the amount invested in the stock. In other words, your liability is limited to the value of your investment.
              6.Transferability: Shares of stock are easily transferable, allowing shareholders to buy and sell their investments on the stock market. This liquidity provides flexibility for investors to adjust their portfolios as needed.
              Overall, owning a stock represents a financial interest in a company and entitles shareholders to certain rights, benefits, and risks associated with ownership. It's important for investors to conduct thorough research and consider their investment objectives, risk tolerance, and time horizon before purchasing stocks."</p>
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
        ><a href='https://youtu.be/dfBDudPNNVM?si=-_DW7BOVJwDZZpSg'></a>
          Watch A Video
        </Button>
      </Box>
    </div>
  );
};

export default Web10;

