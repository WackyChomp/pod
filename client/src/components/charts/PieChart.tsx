import ReactApexChart from 'react-apexcharts';
import { Box, Typography, Stack } from '@pankod/refine-mui';
import { PieChartProps } from 'interfaces/home'

const PieChart = ({ title, value, series, colors }: PieChartProps ) => {
  return (
    <Box
      id='chart'
      flex={1}
      display='flex'
      bgcolor='gray'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      pl={3.5}
      py={2}
      gap={2}
      borderRadius='16px'
      minHeight='120px'
      width='fit-content'
    >
      <Stack direction='column'>
        <Typography fontSize={15} color='blue'>
          {title}
        </Typography>
        <Typography fontSize={25} color='magenta'>
          {value}
        </Typography>
      </Stack>

      <ReactApexChart 
        options={{
          chart: { type:'donut'},
          colors,
          legend: { show: false },
          dataLabels: { enabled: false }
        }}
        series={series}
        type='donut'
        width='120px'
      />

    </Box>
  )
}

export default PieChart