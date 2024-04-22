import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'react';

const Web10 = () => {
  return (
    <div className='abc'>
      <Box>
        <Stack>
          <Typography variant='h6'>
            <div>WHAT ARE SOME COMMON QUANTITATIVE TECHNIQUES USED IN STOCK MARKET ANALYSIS?</div>
            <p>Quantitative techniques involve the use of mathematical and statistical models to analyze stock market data. Some common techniques include:
            Technical Analysis: Analyzing historical price and volume data to identify patterns and trends that may indicate future price movements.
            Fundamental Analysis: Evaluating a company's financial statements, earnings, growth prospects, and other qualitative factors to determine its intrinsic value.
            Quantitative Trading Strategies: Using algorithms and mathematical models to execute trades based on predefined criteria, such as statistical arbitrage, trend following, or mean reversion.
            Machine Learning and Data Mining: Applying advanced statistical techniques and algorithms to analyze large datasets for patterns and insights that can inform investment decisions.
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
        ><a href='https://youtu.be/XEYE34l2V1c?si=Uiw9lqNHxYHPbE50'></a>
          Watch A Video
        </Button>
      </Box>
    </div>
  );
};

export default Web10;

