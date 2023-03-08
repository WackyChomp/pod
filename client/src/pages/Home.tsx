import React from 'react'
import { useList } from '@pankod/refine-core';    // refine hooks
import { Typography, Box, Stack } from '@pankod/refine-mui';
import { PieChart, RentalCard, RentalReferrals, TopAgent, TotalRevenue } from 'components';


const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color='orange'>
        Dashboard :O
      </Typography>

      <Box mt='20px' display='flex' flexWrap='wrap' gap={4}>
        <PieChart 
          title='Rental spaces on sale'
          value={737}
          series={[75, 25]}
          colors={['lightgreen', 'red']}
        />
        <PieChart 
          title='Properties available'
          value={485}
          series={[75, 25]}
          colors={['blue', 'orange']}
        />
        <PieChart 
          title='Total customers'
          value={3712}
          series={[75, 25]}
          colors={['magenta', 'green']}
        />
        <PieChart 
          title='Properties for cities'
          value={81}
          series={[75, 25]}
          colors={['brown', 'purple']}
        />
        <PieChart 
          title='Total Agents'
          value={612}
          series={[75, 25]}
          colors={['crimson', 'gold']}
        />
      </Box>

      <Stack
        mt='25px' width='100%'
        direction={{ xs:'column', lg:'row' }}
      >
        <TotalRevenue />
        <RentalReferrals />
      </Stack>
    </Box>
  )
}

export default Home