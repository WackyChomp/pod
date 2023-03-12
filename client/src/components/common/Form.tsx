import React from 'react';
import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button} from '@pankod/refine-mui'

import { FormProps } from 'interfaces/common';
import CustomButton from './CustomButton';

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, rentalImage }: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color='orange'>
        {type} a Rental
      </Typography>
    </Box>
  )
}

export default Form