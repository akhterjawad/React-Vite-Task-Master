import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, TextField, Button, Stack } from '@mui/material';
import { Block } from '@mui/icons-material';

const Inputs_img = () => {
  return (
    <>

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
            fontSize: '0.8rem',
            padding: '0.7rem',
            width: '12rem',
            borderRadius: '8px',
            color: 'white',
            backgroundColor: 'black',
            '&:hover': { backgroundColor: '#4B5563' }, // hover:bg-gray-800
            transition: 'background-color 0.13s',
          }}
        >
          <MessageIcon />  VIA SUPPORT CHAT
        </Button>

        {/* VIA CALL Button */}
        <Button
          sx={{
            fontWeight: '600',
            marginLeft: '1.25rem',
            marginRight: '1.25rem',
            marginTop: '2.5rem',
            fontSize: '0.8rem',
            padding: '0.5rem 2rem',
            width: '12rem',
            borderRadius: '8px',
            color: 'white',
            backgroundColor: 'black',
            '&:hover': { backgroundColor: '#4B5563' }, // hover:bg-gray-800
            transition: 'background-color 0.13s',
          }}
        >
          <PhoneIcon /> VIA CALL
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
          padding: '0.5rem',
          width: { xs: '23rem', sm: '25rem' },
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
        <MessageIcon /> VIA EMAIL FORM
      </Button>


      {/* TextField Form */}

      {/* Input Form */}
      {/* <Box
        // component="form"
        sx={{
          display: 'flex',
          marginTop: '20px',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '300px',
          '& .MuiTextField-root': { marginBottom: '1.5rem' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="E-Mail" variant="outlined" fullWidth />
        <TextField
          label="TEXT"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: 'black',
            color: 'white',
            '&:hover': { backgroundColor: '#333' },
            padding: '10px',
          }}
        >
          SUBMIT
        </Button>
      </Box> */}
    </>
  )
}

export default Inputs_img

// startIcon={<MessageIcon />}