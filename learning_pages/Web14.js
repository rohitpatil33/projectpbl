import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'react';

const Web10 = () => {
  return (
    <div className='abc'>
      <Box>
        <Stack>
          <Typography variant='h6'>
            <div>WHAT ARE SOME COMMON RISK MANAGEMENT TECHNIQUES USED BY INSTITUTIONAL INVESTORS IN THE STOCK MARKET?</div>
            <p>institutional investors employ various risk management techniques to mitigate potential losses and protect their portfolios. Some common techniques include:

            Diversification: Spreading investments across different asset classes, sectors, regions, and investment styles to reduce exposure to any single risk factor.
            Portfolio Optimization: Using mathematical models to allocate assets in a way that maximizes returns for a given level of risk or minimizes risk for a given level of return.
            Value at Risk (VaR) Analysis: Quantifying the maximum potential loss of a portfolio over a specific time horizon at a given confidence level.
            Stress Testing: Assessing the impact of adverse market scenarios or extreme events on a portfolio's performance.
            Risk Monitoring and Reporting: Implementing systems to monitor portfolio risk metrics in real-time and generate reports for stakeholders.
            These techniques help institutional investors manage risk and achieve their investment objectives in the dynamic and often unpredictable stock market environment.</p>
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
        ><Link></Link>
          Watch A Video
        </Button>
      </Box>
    </div>
  );
};

export default Web14;

