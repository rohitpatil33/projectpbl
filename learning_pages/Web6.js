import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

const Web1 = () => {
  return (
    <div className='abc'>
      <Box>
        <Stack>
          <Typography variant='h6'>
            <div>THE STOCK MARKET ?</div>
            <p>The stock market refers to the collection of exchanges and markets where equities, bonds, commodities, and other financial instruments are bought and sold. It's a vital component of the global economy, providing companies with access to capital and investors with opportunities to grow their wealth.
              Stock markets serve several purposes:
              1. Capital Formation: Companies issue stocks (equity) to raise capital for various purposes such as expansion, research, and development.
              2. Investment Opportunities: Investors can buy and sell stocks, bonds, and other financial instruments to potentially grow their wealth over time.
              3. Price Discovery: Prices of securities are determined by supply and demand dynamics in the market. This process helps in determining the true value of assets.
              4. Liquidity: Investors can easily buy and sell securities, facilitating quick access to cash when needed.
              5. Risk Management: Investors can diversify their portfolios to manage risk, spreading investments across different asset classes and industries.
              6. Indicator of Economic Health: Stock market performance is often considered a barometer of economic health. Bull markets (rising prices) typically coincide with economic expansion, while bear markets (falling prices) often signal economic downturns.
              The stock market can be influenced by various factors including economic indicators, geopolitical events, government policies, corporate earnings, investor sentiment, and more. Investors use various strategies and tools to analyze the market and make investment decisions, including fundamental analysis, technical analysis, and quantitative analysis.
              It's important to note that investing in the stock market carries inherent risks, and investors should conduct thorough research and consider their risk tolerance before making any investment decisions.</p>
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
        ><a href='https://youtu.be/3UF0ymVdYLA?si=Rpc0LxbFae0c0QvG'></a>
          Watch A video
        </Button>
      </Box>
    </div>
  );
};

export default Web6;

