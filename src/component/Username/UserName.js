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

const UserName = ({ formData, updateFormData, activeStep, steps, setActiveStep, isStepSkipped, setSkipped, skipped, handleNext, setFormData }) => {

  const classes = useStyles();

  const [isValid, setIsValid] = useState(true);

  const nextBtn = classNames((activeStep !== steps.length - 1) ? '' : classes.none, classes.success);

  const { userName } = formData;

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
    
    const regex = /([a-zA-Z0-9_]){3,12}/g; 
    setIsValid(!!userName.match(regex)?.length);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
              autoComplete='off'
              error={!isValid}
              helperText={!isValid && 'Please enter a valid username (alphanumeric and underscore, 3 to 12 characters).'}
            />
          </FormControl>
          <Box >
              <MyButtons onClick={handleNext} className={nextBtn} 
              disabled = {userName === '' && !!isValid}
              >
                {(activeStep !== steps.length - 1) && 'Next'}
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

export default UserName;

