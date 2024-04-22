import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

const Web1 = () => {
  return (
    <div className='abc'>
      <Box>
        <Stack>
          <Typography variant='h6'>
            <div>WHAT IS PENNY STOCK ?</div>
            <p>In India, a penny stock is typically referred to as a "penny scrip" or "penny share." While there isn't a specific price threshold defining a penny stock like in some other markets, they generally refer to stocks of small companies trading at low prices.
Here are some key points about penny stocks in India:
1. Low Price: Penny stocks in India usually have low prices, often trading at a few rupees per share or even less. However, the price alone doesn't determine whether a stock is considered a penny stock.
2. High Volatility: Similar to penny stocks in other markets, penny stocks in India tend to be highly volatile. Their prices can fluctuate significantly in a short period, presenting both opportunities and risks for investors.
3.Limited Liquidity: Penny stocks in India may have lower trading volumes compared to larger stocks listed on major exchanges like the National Stock Exchange (NSE) or the Bombay Stock Exchange (BSE). Limited liquidity can make it challenging to buy or sell large quantities of penny stocks without affecting their prices.
4. Higher Risk: Investing in penny stocks in India carries higher risks due to factors such as limited operating histories, uncertain prospects, and higher probabilities of financial distress or bankruptcy. Additionally, penny stocks may be more susceptible to market manipulation and fraud.
5. Less Regulation: Penny stocks in India may be listed on smaller exchanges or traded on the Over-the-Counter (OTC) market, which are subject to less stringent regulatory requirements compared to major exchanges. This can increase the risk of fraudulent activities and misinformation.
6. Speculative Nature: Many investors in India are attracted to penny stocks due to the potential for significant returns in a short period. However, it's essential to recognize the speculative nature of these investments and conduct thorough research before investing in penny stocks.
Investing in penny stocks in India requires careful consideration of the risks involved and thorough due diligence. Investors should research the companies, analyze their financials, consider their growth prospects, and assess their management team before investing. Diversification and risk management strategies are also crucial when investing in penny stocks. As always, consulting with a qualified financial advisor can provide valuable guidance and help investors make informed decisions.</p>
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
        > <a href='https://youtu.be/r95poMue0Fw?si=EZ7QLTdJUglo0MVQ'></a>
          Watch A Video
        </Button>
      </Box>
    </div>
  );
};

export default Web;



