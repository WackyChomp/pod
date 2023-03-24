import React from 'react';
import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button, fontWeight} from '@pankod/refine-mui'

import { FormProps } from 'interfaces/common';
import CustomButton from './CustomButton';

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, rentalImage }: FormProps) => {
  return (
    <Box>
      {/* Title */}
      <Typography fontSize={25} fontWeight={700} color='orange'>
        {type} a Rental Space
      </Typography>
      
      {/* Form Container */}
      <Box mt={2.5} borderRadius='15px' padding='20px' bgcolor='pink'>
        <form
          style={{ marginTop:'20px', width:'100%', display:'flex', flexDirection:'column', gap:'20px' }}
          onSubmit={handleSubmit(onFinishHandler)}
        >

          {/* Rental Name */}
          <FormControl>
            <FormHelperText sx={{ fontWeight:500, margin:'10px 0', fontSize:'16px', color:'crimson' }}>
              Enter rental name
            </FormHelperText>
            <TextField 
              fullWidth
              required
              id='outline-basic'
              color='info'
              variant='outlined'
              {...register('title', {requred: true})}
            />
          </FormControl>

          {/* Rental Description */}
          <FormControl>
            <FormHelperText sx={{ fontWeight:500, margin:'10px 0', fontSize:'16px', color:'crimson' }}>
              Enter description
            </FormHelperText>
            <TextareaAutosize 
              minRows={5}
              required
              placeholder='Write a description'
              color='info'
              style={{
                width:'100%',
                background:'transparent',
                fontSize:'16px',
                borderColor:'rgba(0,0,0,0.23)',
                borderRadius: 6,
                padding: 10,
              }}         
              {...register('description', {requred: true})}
            />
          </FormControl>

          {/* Rental Type */}
          <Stack direction='row' gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{ fontWeight:500, margin:'10px 0', fontSize:16, color:'crimson' }}>
                Select a rental type
              </FormHelperText>
              <Select
                variant='outlined'
                color='info'
                displayEmpty
                required
                inputProps={{ 'aria-label': 'Without label'}}
                defaultValue='apartment'
                {...register('rentalType', {requred: true})}
              >
                <MenuItem value='apartment'>
                  Apartment
                </MenuItem>
                <MenuItem value='cavern'>
                  Cavern
                </MenuItem>
                <MenuItem value='chalet'>
                  Chalet
                </MenuItem>
                <MenuItem value='condo'>
                  Condo
                </MenuItem>
                <MenuItem value='duplex'>
                  Duplex
                </MenuItem>
                <MenuItem value='farmhouse'>
                  Farmhouse
                </MenuItem>
                <MenuItem value='manor'>
                  Manor
                </MenuItem>
                <MenuItem value='studio'>
                  Studio
                </MenuItem>
                <MenuItem value='townhouse'>
                  Townhouse
                </MenuItem>
                <MenuItem value=''>

                </MenuItem>
                <MenuItem value=''>

                </MenuItem>
              </Select>
            </FormControl>


          {/* Rental Price */}
            <FormControl>
              <FormHelperText sx={{ fontWeight:500, margin:'10px 0', fontSize:'16px', color:'crimson' }}>
                Enter rental price
              </FormHelperText>
              <TextField 
                fullWidth
                required
                id='outline-basic'
                color='info'
                type='number'
                variant='outlined'
                {...register('price', {requred: true})}
              />
            </FormControl>
           
          </Stack>


          {/* Rental Location */}
          <FormControl>
            <FormHelperText sx={{ fontWeight:500, margin:'10px 0', fontSize:'16px', color:'crimson' }}>
              Enter location
            </FormHelperText>
            <TextField 
              fullWidth
              required
              id='outline-basic'
              color='info'
              variant='outlined'
              {...register('location', {requred: true})}
            />
          </FormControl>


          {/* Rental Photo */}
          <Stack direction='column' gap={1} justifyContent='center' mb={2}>
            <Stack direction='row' gap={2}>
              <Typography color='purple' fontSize={16} fontWeight={500} my='10px'>
                Rental Photo
              </Typography>
              <Button 
                component='label'
                sx={{ width:'fit-content', color:'orange', textTransform:'capitalize', fontSize:16 }}
              >
                Upload *
                <input 
                  hidden
                  accept='image/*'
                  type='file'
                  onChange={(e) => { 
                  //@ts-ignore
                    handleImageChange(e.target.files[0])
                  }}
                />
              </Button>
            </Stack>

            <Typography fontSize={14} color='yellow' sx={{ wordBreak:'break-all' }}>
              {rentalImage?.name}
            </Typography>
          </Stack>


          {/* Submission */}
          <CustomButton 
            type='submit'
            title={ formLoading ? 'Submitting...' : 'Submit'}
            backgroundColor='green'
            color='gold'          
          />

        </form>
      </Box>
    </Box>
  )
}

export default Form