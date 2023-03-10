import React from 'react';
import { Typography, Box, Stack } from '@pankod/refine-mui';
import { propertyReferralsInfo } from 'constants/index';


interface ProgressBarProps {
  title: string,
  percentage: number,
  color: string,
}

const ProgressBar = ({ title, percentage, color}: ProgressBarProps) => (
  <Box width='100%'>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
      <Typography fontSize='16px' fontWeight={500} color='cyan'>
        {title}
      </Typography>
      <Typography fontSize='16px' fontWeight={500} color='cyan'>
        {percentage}%
      </Typography>
    </Stack>

    <Box mt={2} position='relative' width='100%' height='10px' borderRadius={1} bgcolor='black'>
      <Box
        width={`${percentage}%`}
        bgcolor={color}
        position='absolute'
        height='100%'
        borderRadius={1}
      />
    </Box>
  </Box>
)

const RentalReferrals = () => {
  return (
    <Box
    p={4}
    flex={1}
    bgcolor='orangered'
    id='chart'
    display='flex'
    flexDirection='column'
    borderRadius='16px'
    minWidth={450}
  >
    <Typography fontSize={20} fontWeight={600} color='purple'>
      Rental Revenue
    </Typography>
    <Stack my='20px' direction='column' gap={4}>
      {propertyReferralsInfo.map((bar) =>
        <ProgressBar key={bar.title} {... bar} />
      )}
    </Stack>
  </Box>
  )
}

export default RentalReferrals