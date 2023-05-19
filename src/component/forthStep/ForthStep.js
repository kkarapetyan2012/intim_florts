import React from 'react';
import { Typography, TextField, FormControl } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  stepContainer: {
    marginTop: 40,
  },
  formControl: {
    width: '100%',
    '&:not(:first-child)': {
        marginTop: 24,
    }
  },
  title: {
    '&.MuiTypography-root': {
      fontSize: 18,
      lineHeight: '26px',
      color: '#212B36',
      fontWeight: 600,
      marginBottom: 16,
    }
  },
  inputOption: {
    '& .MuiInputBase-root': {
        borderRadius: 16,
    },
    '& fieldset': {
      borderColor: '#F76448',
    },
    '&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
      borderColor: '#F76448',
    },
    '&:hover fieldset.MuiOutlinedInput-notchedOutline': {
      borderColor: '#F76448',
    },
    '& .Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
      borderColor: '#F76448',
    },
  },
  red: {
    '&.MuiButtonBase-root': {
        color: '#F76448',
        borderColor: '#F76448'
    }
  }
}));

const ForthStep = ({ formData, updateFormData }) => {

  const classes = useStyles();

  const { userName } = formData;

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };
   
    return (
      <div className={classes.stepContainer}>
          <Typography className={classes.title} variant='h3'>Create a username</Typography>
          <FormControl className={classes.inputOption} sx={{ width: 1 }}>
            <TextField
              placeholder="User Name"
              name="userName"
              value={userName}
              onChange={handleChange}
            />
          </FormControl>
      </div>
    )
}

export default ForthStep;

