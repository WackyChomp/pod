import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, Typography, Stack } from '@pankod/refine-mui';
import { PieChartProps } from 'interfaces/home'

const PieChart = ({ title, value, series, colors }: PieChartProps ) => {
  return (
    <Box>
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