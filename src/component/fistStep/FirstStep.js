import React, { useState } from 'react';
import MyButtons from '../../UI/Buttons/Button';
import { Radio, FormControlLabel, FormControl, FormLabel } from '@mui/material';
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
    red: {
        '&.MuiButtonBase-root': {
            color: '#F76448',
            borderColor: '#F76448'
        }
        
    }
}));

const FirstStep = ({ formData, updateFormData }) => {
    const classes = useStyles();
    const [selectedValueGender, setSelectedValueGender] = useState('');
    const [selectedValueSearch, setSelectedValueSearch] = useState('');

    const { selectedGender, selectedSearch } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData({ ...formData, [name]: value });
    };

    const handleButtonClick = (value) => {
        setSelectedValueGender(value);
        console.log('value', value)
    };

    const handleButtonClick1 = (value) => {
        setSelectedValueSearch(value);
        console.log('value', value)
    };

    const classes1 = classNames(classes.mainBtn, selectedValueGender === 'female' ? classes.red : '');
    const classes3 = classNames(classes.mainBtn, selectedValueSearch === 'female2' ? classes.red : '');
    const classes2 = classNames(classes.mainBtn, selectedValueGender === 'male' ? classes.red : '');
    const classes4 = classNames(classes.mainBtn, selectedValueSearch === 'male2' ? classes.red : '');

    return (
        <div className={classes.stepContainer}>

            <FormControl className={classes.formControl} component="fieldset">
                <FormLabel className={classes.label} component="legend">Your gender</FormLabel>                
            
                <FormControlLabel
                    className={classes.btnVisible}
                    name="female"
                    value={selectedGender}
                    control={<Radio color="primary" />}
                    label="Female"
                    labelPlacement="end"
                    onChange={handleChange}
                    checked={selectedValueGender === 'female'}
                />
                <MyButtons className={classes1} variant="outlined" onClick={() => handleButtonClick('female')} >Female</MyButtons>

                <FormControlLabel
                    className={classes.btnVisible}
                    name="male"
                    value={selectedGender}
                    control={<Radio color="primary" />}
                    label="Male"
                    labelPlacement="end"
                    onChange={handleChange}
                    checked={selectedValueGender === 'male'}
                />
                <MyButtons className={classes2} variant="outlined" onClick={() => handleButtonClick('male')} >Male</MyButtons>

            </FormControl>   
                
            <FormControl className={classes.formControl} component="fieldset">
                <FormLabel className={classes.label} component="legend">You are interested in</FormLabel>
                <FormControlLabel
                    className={classes.btnVisible}
                    name="female"
                    value={selectedSearch}
                    control={<Radio color="primary" />}
                    label="Female2"
                    labelPlacement="end"
                    onChange={handleChange}
                    checked={selectedValueSearch === 'female2'}
                />
                <MyButtons className={classes3} variant="outlined" onClick={() => handleButtonClick1('female2')} >Female</MyButtons>

                <FormControlLabel
                    className={classes.btnVisible}
                    name="male"
                    value={selectedSearch}
                    control={<Radio color="primary" />}
                    label="Male2"
                    labelPlacement="end"
                    onChange={handleChange}
                    checked={selectedValueSearch === 'male2'}
                />
                <MyButtons className={classes4} variant="outlined" onClick={() => handleButtonClick1('male2')} > Male</MyButtons>
            
            
            </FormControl>
        </div>
    )
}

export default FirstStep;

