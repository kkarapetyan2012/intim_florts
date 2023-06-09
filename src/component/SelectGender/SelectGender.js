import React from 'react';
import MyButtons from '../../UI/Buttons/Button';
import { Radio, FormControlLabel, FormControl, FormLabel, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
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
    label: {
        '&.MuiFormLabel-root': {
            fontSize: 18,
            lineHeight: '26px',
            color: '#212B36',
            fontWeight: 600,
            marginBottom: 16,
        }
    },
    mainBtn: {
        
        '&.MuiButtonBase-root': {
            width: '100%',
            fontSize: 16,
            lineHeight: '28px',
            fontWeight: 600,
            textTransform: 'capitalize',
            borderRadius: 16,
            border: '1px solid #B2B3B5',
            color: '#B2B3B5',
            padding: '9px 0',
            '&:not(:last-child)': {
                marginBottom: 10,
            },
            '&:hover': {
                color: '#fff',
                background: '#F76448',
                borderColor: '#F76448'
            }
        }
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
    red: {
        '&.MuiButtonBase-root': {
            color: '#F76448',
            borderColor: '#F76448'
        }
        
    }
}));

const SelectGender = ({ formData, updateFormData, handleNext, activeStep, steps }) => {
    const classes = useStyles();

    
  const nextBtn = classNames((activeStep !== steps.length - 1) ? '' : classes.none, classes.success);

    const { selectedGender, selectedSearch } = formData;

    const handleChange = (value, name) => {
        updateFormData({ [name]: value });
    };


    const classes1 = classNames(classes.mainBtn, selectedGender === 'female' ? classes.red : '');
    const classes3 = classNames(classes.mainBtn, selectedSearch === 'female2' ? classes.red : '');
    const classes2 = classNames(classes.mainBtn, selectedGender === 'male' ? classes.red : '');
    const classes4 = classNames(classes.mainBtn, selectedSearch === 'male2' ? classes.red : '');


    return (
        <div className={classes.stepContainer}>

            <FormControl className={classes.formControl} component="fieldset">
                <FormLabel className={classes.label} component="legend">Your gender</FormLabel>                
            
                <FormControlLabel
                    className={classes.btnVisible}
                    value="female"
                    name="selectedGender"
                    control={<Radio color="primary" />}
                    label="Female"
                    labelPlacement="end"
                    checked={selectedGender === 'female'}
                />

                <MyButtons className={classes1} variant="outlined" onClick={() => handleChange('female', 'selectedGender')} >Female</MyButtons>

                <FormControlLabel
                    className={classes.btnVisible}
                    name="selectedGender"
                    value="male"
                    control={<Radio color="primary" />}
                    label="Male"
                    labelPlacement="end"
                    checked={selectedGender === 'male'}
                />
                <MyButtons className={classes2} variant="outlined" onClick={() => handleChange('male', 'selectedGender')} >Male</MyButtons>

            </FormControl>   
                
            <FormControl className={classes.formControl} component="fieldset">
                <FormLabel className={classes.label} component="legend">You are interested in</FormLabel>
                <FormControlLabel
                    className={classes.btnVisible}
                    value="female"
                    name="selectedSearch"
                    control={<Radio color="primary" />}
                    label="Female"
                    labelPlacement="end"
                    checked={selectedSearch === 'female2'}
                />
                <MyButtons className={classes3} variant="outlined" 
                    onClick={() => handleChange('female2', 'selectedSearch')} 
                >Female</MyButtons>

                <FormControlLabel
                    className={classes.btnVisible}
                    value="male"
                    name="selectedSearch"
                    control={<Radio color="primary" />}
                    label="Male"
                    labelPlacement="end"
                    checked={selectedSearch === 'male2'}
                />
                <MyButtons className={classes4} variant="outlined" 
                    onClick={() => handleChange('male2', 'selectedSearch')} 
                > Male</MyButtons>            
            
            </FormControl>

            <Box >
                <MyButtons onClick={handleNext} className={nextBtn}  
                disabled={selectedGender === '' || selectedSearch === ''}
                >
                    {(activeStep !== steps.length - 1) && 'Next'}
                </MyButtons>
            </Box>
        </div>
    )
}

export default SelectGender;

