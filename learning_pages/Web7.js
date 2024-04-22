import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

const Web2 = () => {
  return (
    <div className='abc'>
      <Box>
        <Stack>
          <Typography variant='h6'>
            <div>HOW DOES STOCK MARKET WORK ?</div>
            <p>The stock market operates as a platform where buyers and sellers come together to trade shares of publicly listed companies and other financial instruments. Here's a basic overview of how the stock market works:
1. Companies Issue Shares: When a company wants to raise capital, it can issue shares of ownership to the public through an initial public offering (IPO) or subsequent offerings. Each share represents a fractional ownership in the company.
2. Listed on Exchanges: Shares of publicly traded companies are listed on stock exchanges such as the New York Stock Exchange (NYSE), NASDAQ, London Stock Exchange, etc. Exchanges provide the infrastructure and regulations necessary for trading to occur.
3. Buyers and Sellers: Investors who want to buy or sell shares can place orders through brokers or electronic trading platforms. Buyers place bids indicating the maximum price they are willing to pay, while sellers offer their shares at an asking price.
4. Matching Buyers and Sellers: The stock exchange matches buy and sell orders based on price and time priority. When the bid price matches the ask price, a trade occurs, and the shares change hands between the buyer and the seller.
5. Price Determination: Prices of stocks are determined by supply and demand dynamics. If there are more buyers than sellers, the price tends to rise, and vice versa. Various factors such as company performance, economic conditions, investor sentiment, and news events influence supply and demand.
6. Market Participants: Apart from individual investors, various other participants are active in the stock market, including institutional investors (like mutual funds, pension funds, and hedge funds), market makers (who provide liquidity by continuously buying and selling securities), and high-frequency traders (who use algorithms to execute trades rapidly).
7. Market Indices: Stock market indices, such as the S&P 500, Dow Jones Industrial Average, and NASDAQ Composite, track the performance of a basket of stocks. They provide benchmarks for investors to gauge the overall market movement.
8. Regulation and Oversight: Stock markets are regulated by government agencies to ensure fairness, transparency, and investor protection. Regulations vary by country but generally include rules for listing requirements, disclosure of information, and prevention of fraudulent activities.
Overall, the stock market provides a mechanism for companies to raise capital and for investors to buy and sell securities, thereby facilitating investment, wealth creation, and economic growth.</p>
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
        ><a href='https://youtu.be/p7HKvqRI_Bo?si=TfOIvOnImscJe4pv'></a>
          Watch A Video
        </Button>
      </Box>
    </div>
  );
};

export default Web7;