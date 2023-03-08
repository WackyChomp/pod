import ReactApexChart from 'react-apexcharts';
import { Box, Typography, Stack } from '@pankod/refine-mui';
import { ArrowCircleUpRounded } from '@mui/icons-material';
import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config';   // mock data

const TotalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor='gold'
      id='chart'
      display='flex'
      flexDirection='column'
      borderRadius='16px'
    >
      <Typography fontSize={20} fontWeight={600} color='purple'>
        Total Revenue
      </Typography>

      <Stack my={20} direction='row' gap={4} flexWrap='wrap'>
        <Typography fontSize={30} fontWeight={700} color='green'>
          $741,902
        </Typography>
        <Stack direction='row' alignItems='center' gap={1}>
          <ArrowCircleUpRounded sx={{ fontSize:'25px', color:'blue'}}/>
          <Stack>
            <Typography fontSize={15} color='red'>
              0.7%
            </Typography>
            <Typography fontSize={15} color='red'>
              Than Last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <ReactApexChart 
        series={TotalRevenueSeries}
        type='bar'
        height={320}
        options={TotalRevenueOptions}
      />
    </Box>
  )
}

export default TotalRevenue