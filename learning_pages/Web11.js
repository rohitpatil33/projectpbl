import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'react';

const Web10 = () => {
  return (
    <div className='abc'>
      <Box>
        <Stack>
          <Typography variant='h6'>
            <div>WHAT IS THE EFFICIENT MARKET HYPOTHESIS (EMH), AND WHAT ARE ITS IMPLICATIONS FOR INVESTORS?</div>
            <p>The Efficient Market Hypothesis suggests that asset prices reflect all available information, making it impossible to consistently outperform the market through active trading or stock picking. There are three forms of EMH: weak, semi-strong, and strong. The weak form states that past price and volume data cannot be used to predict future stock prices. The semi-strong form includes public information such as earnings reports and economic data, suggesting that even this information is quickly reflected in stock prices. The strong form asserts that all information, public and private, is already reflected in stock prices. The implications for investors are that it's challenging to beat the market consistently, leading many to opt for passive investment strategies such as index investing.</p>

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
        ><a href='https://youtu.be/sq5L53BLlnM?si=S4yOW5IDCfr-7eDj'></a>
          Watch A Video
        </Button>
      </Box>
    </div>
  );
};

export default Web11;

