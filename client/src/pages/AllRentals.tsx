import { Add } from '@mui/icons-material';
import { useList } from '@pankod/refine-core';
import { Typography, Box, Stack } from '@pankod/refine-mui';
import { useNavigate } from '@pankod/refine-react-router-v6';

import { RentalCard, CustomButton } from 'components';

const AllRentals = () => {
  const navigate = useNavigate();     // used for handleClick site navigation

  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography fontSize={25} fontWeight={700} color='palevioletred'>
          Rental Spaces
        </Typography>
        <CustomButton 
          handleClick={() => {} }
          title='Add Rental Here!!!'
          backgroundColor='green'
          color='gold'
          icon={<Add />}
        />
      </Stack>
    </Box>
  )
}

export default AllRentals