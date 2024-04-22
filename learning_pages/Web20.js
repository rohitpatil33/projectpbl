import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'react';

const Web10 = () => {
  return (
    <div className='abc'>
      <Box>
        <Stack>
          <Typography variant='h6'>
            <div>WHAT IS INSIDER TRADING, AND HOW DOES IT DIFFER FROM LEGAL TRADING ACTIVITIES? WHAT MEASURES ARE IN PLACE TO PREVENT AND REGULATE INSIDER TRADING?</div>
            <p>insider trading refers to the buying or selling of a security by someone who has access to material, non-public information about that security. this information is considered "inside" information because it is not available to the general public. insider trading is illegal because it gives the trader an unfair advantage over other investors and can undermine the integrity of the market.

            legal trading activities, on the other hand, involve buying or selling securities based on publicly available information. these transactions are made in compliance with securities laws and regulations and do not involve using private, undisclosed information to gain an unfair advantage in the market.

            measures in place to prevent and regulate insider trading include:

            1. securities laws: governments have enacted laws and regulations that prohibit insider trading and establish penalties for violators. for example, in the united states, the securities and exchange commission (sec) enforces the provisions of the securities exchange act of 1934, which includes prohibitions against insider trading.

            2. corporate policies: many companies have internal policies and procedures in place to prevent insider trading among their employees and insiders. these policies often include blackout periods during which insiders are prohibited from trading company stock.

            3. insider trading surveillance: regulators and stock exchanges conduct surveillance to detect suspicious trading activity that may indicate insider trading. they use advanced algorithms and data analytics to monitor trading patterns and identify potential violations.

            4. reporting requirements: insiders, such as corporate executives and directors, are required to report their trading activity to regulators and the public. this increases transparency and helps detect potential insider trading violations.

            5. enforcement actions: regulators have the authority to investigate suspected insider trading violations and take enforcement actions against perpetrators. these actions may include civil penalties, criminal prosecutions, and disgorgement of ill-gotten profits.

            overall, the goal of these measures is to ensure the fairness and integrity of the financial markets by deterring and punishing insider trading activities.
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
        ><Link></Link>
          Watch A Video
        </Button>
      </Box>
    </div>
  );
};

export default Web20;

