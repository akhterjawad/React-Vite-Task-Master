import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, TextField, Button, Stack } from '@mui/material';
import { Block } from '@mui/icons-material';
import Center_img from '../assets/Service 24_7-pana 1.svg'

const Inputs_img = () => {
  return (
    <>
      <div className='flex justify-between items-center flex-wrap-reverse'>
        <div>
          <div>
            <Stack spacing={2} direction="row" justifyContent="start" sx={{
              marginTop: '2rem',
              marginLeft: { xs: '1.25rem', sm: '13rem' }
            }}>
              {/* VIA SUPPORT CHAT Button */}
              <Button
                sx={{
                  fontWeight: '600',
                  marginLeft: '14rem',
                  marginTop: '2.5rem',
                  fontSize: { xs: '0.7rem', sm: '0.8rem' },
                  padding: '0.7rem',
                  width: { xs: '10rem', sm: '12rem' },
                  borderRadius: '8px',
                  color: 'white',
                  backgroundColor: 'black',
                  '&:hover': { backgroundColor: '#4B5563' }, // hover:bg-gray-800
                  transition: 'background-color 0.13s',
                }}
              >
                <MessageIcon sx={{
                  fontSize: { xs: '0.8rem', sm: '1rem' },
                  marginRight: '4px',
                }} />  VIA SUPPORT CHAT
              </Button>

              {/* VIA CALL Button */}
              <Button
                sx={{
                  fontWeight: '600',
                  marginLeft: '1.25rem',
                  marginRight: '1.25rem',
                  marginTop: '2.5rem',
                  fontSize: { xs: '0.7rem', sm: '0.8rem' },
                  padding: '0.5rem 2rem',
                  width: { xs: '10rem', sm: '12rem' },
                  borderRadius: '8px',
                  color: 'white',
                  backgroundColor: 'black',
                  '&:hover': { backgroundColor: '#4B5563' }, // hover:bg-gray-800
                  transition: 'background-color 0.13s',
                }}
              >
                <PhoneIcon sx={{
                  fontSize: { xs: '0.8rem', sm: '1rem' },
                  marginRight: '4px',
                }} /> VIA CALL
              </Button>
            </Stack>

            {/* VIA EMAIL CHAT Button */}
            <Button
              variant="contained"
              type="submit"
              sx={{
                display: 'block',
                fontWeight: '600',
                marginLeft: { xs: '1.25rem', sm: '13rem' },
                marginTop: '0.5rem',
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
                padding: '0.5rem',
                width: { xs: '21rem', sm: '25rem' },
                borderRadius: '8px',
                border: '1px solid black',
                backgroundColor: 'white',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#000', // hover:bg-gray-800
                  color: 'white',
                },
                transition: 'all 0.13s',
              }}
            >
              <MessageIcon sx={{
                fontSize: { xs: '0.8rem', sm: '1rem' },
                marginRight: '4px',
              }} /> VIA EMAIL FORM
            </Button>
          </div>


          {/* TextField Form */}

          {/* Input Form */}
          <div>
            <Box
              // component="form"
              sx={{
                display: 'flex',
                marginTop: '20px',
                marginLeft: { xs: '1.5rem', sm: '13rem' },
                flexDirection: 'column',
                width: '100%',
                maxWidth: '300px',
                '& .MuiTextField-root': { marginBottom: '1.5rem' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField sx={{
                width: { xs: '21rem', sm: '25rem' },
              }} label="Name" variant="outlined" fullWidth />
              <TextField sx={{
                width: { xs: '21rem', sm: '25rem' },
              }} label="E-Mail" variant="outlined" fullWidth />
              <TextField sx={{
                width: { xs: '21rem', sm: '25rem' },
              }}
                label="TEXT"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
              />
            </Box>
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: 'black',
                color: 'white',
                marginBottom: '10px',
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
                width: '12rem',
                marginLeft: { xs: '1.5rem', sm: '26rem' },
                '&:hover': { backgroundColor: '#333' },
                padding: '10px',
              }}
            >
              SUBMIT
            </Button>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img className='w-[70%] sm:w-[90%]' src={Center_img} alt="no img" />
        </div>
      </div>
    </>
  )
}

export default Inputs_img

// startIcon={<MessageIcon />}