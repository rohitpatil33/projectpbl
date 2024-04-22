import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'react';

const Web10 = () => {
  return (
    <div className='abc'>
      <Box>
        <Stack>
          <Typography variant='h6'>
            <div>WHAT ARE THE KEY DIFFERENCES BETWEEN THE PRIMARY MARKET AND THE SECONDARY MARKET IN THE STOCK MARKET?</div>
            <p>The primary market and the secondary market in the stock market serve different functions and involve different types of transactions. Here are the key differences between them:

1. **Primary Market**:
   - The primary market is where newly issued securities, such as stocks and bonds, are bought and sold for the first time by issuers directly to investors.
   - Companies use the primary market to raise capital by issuing new shares of stock or bonds through processes like initial public offerings (IPOs) or rights issues.
   - Investors in the primary market purchase securities directly from the issuing company, and the proceeds from these sales go to the issuer.
   - Transactions in the primary market determine the initial price of securities and provide capital for companies to fund their operations, investments, or growth strategies.

2. **Secondary Market**:
   - The secondary market is where previously issued securities are bought and sold among investors, without involvement from the issuing company.
   - Stock exchanges and over-the-counter markets facilitate trading in the secondary market, where investors can buy and sell securities that are already in circulation.
   - Prices in the secondary market are determined by supply and demand dynamics, investor sentiment, and other market factors rather than by the issuing company.
   - The secondary market provides liquidity to investors by allowing them to buy and sell securities after the initial issuance, providing an avenue for investors to enter or exit their positions.

In summary, the primary market is where new securities are issued and sold for the first time by companies to raise capital, while the secondary market is where previously issued securities are bought and sold among investors. The primary market facilitates capital formation for companies, while the secondary market provides liquidity and a platform for investors to trade existing securities.
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
        ><a href='https://youtu.be/HMDFkyJPYdo?si=pAT3HDoKn2FcQP15'></a>
          Watch A Video
        </Button>
      </Box>
    </div>
  );
};

export default Web17;

