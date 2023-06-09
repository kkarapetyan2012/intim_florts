import React, { useState } from 'react';
import { Typography, TextField, FormControl, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MyButtons from '../../UI/Buttons/Button';
import classNames from 'classnames';

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
  btnVisible: {
    position: 'absolute',
    opacity: 0,
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
  desc: {
    '&.MuiTypography-root': {
      fontSize: 16,
      lineHeight: '24px',
      color: '#B2B3B5',
      fontWeight: 400,
      marginBottom: 16,
    }
  },
  dateContaner: {
    display: 'flex',
    justifyContent: 'space-between'
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
  success: {
    '&.MuiButtonBase-root': {
      '&.Mui-disabled': {
        background: 'rgba(111,111,111, .5)',
      },
      background: '#F76448',
      color: 'white',
      borderRadius: 16,
      fontSize: 18,
      lineHeight: '26px',
      fontWeight: 500,
      width: '100%',
      marginBottom: 5,
      marginTop: 24,
      padding: '11px 0',
      textTransform: 'capitalize',
      '&:hover': {
        background: '#F76448',
        color: 'white',
      }
    }
  },
  backBtn: {
    '&.MuiButtonBase-root': {
      background: '#fff',
      color: '#212B36',
      borderRadius: 16,
      fontSize: 18,
      lineHeight: '26px',
      fontWeight: 500,
      width: '100%',
      padding: '11px 0',
      textTransform: 'capitalize',
      '&:hover': {
        background: '#F76448',
        color: 'white',
      }
    }
  },
  red: {
    '&.MuiButtonBase-root': {
      color: '#F76448',
      borderColor: '#F76448'
    }
  }
}));

const CreatePassword = ({ formData, updateFormData, activeStep, steps, handleSubmit, setActiveStep }) => {

  const classes = useStyles();
  const [isValid, setIsValid] = useState(true);

  const { password } = formData;

  const completeBtn = classNames((activeStep === steps.length - 1) ? '' : classes.none, classes.success);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
    const regex = /([a-zA-Z0-9]){6,16}/g;

    setIsValid(!!password.match(regex)?.length);
  };
  
    return (
      <div className={classes.stepContainer}>
        <Typography className={classes.title} variant='h3'>Create a password</Typography>
        <FormControl className={classes.inputOption} sx={{ width: 1 }}>
          <TextField
            type="password"
            placeholder='Password'
            name='password'
            value={password}
            onChange={handleChange}
            autoComplete="current-password"
            error={!isValid}
            helperText={!isValid && 'Password should be 6 to 16 characters long and contain at least one number.'}
          />
        </FormControl>
        <Box >
          <MyButtons onClick={handleSubmit} 
            className={completeBtn}         
            disabled={password === '' && !!isValid}
          >
            {(activeStep === steps.length - 1) && 'Complete' }
          </MyButtons>
          <MyButtons
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.backBtn}
          >
            Back
          </MyButtons>
        </Box>
      </div>
    )
}

export default CreatePassword;

