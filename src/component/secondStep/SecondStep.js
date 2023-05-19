import React from 'react';
import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const optionsDay = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' },
    { value: '16', label: '16' },
    { value: '17', label: '17' },
    { value: '18', label: '18' },
    { value: '19', label: '19' },
    { value: '20', label: '20' },
    { value: '21', label: '21' },
    { value: '22', label: '22' },
    { value: '23', label: '23' },
    { value: '24', label: '24' },
    { value: '24', label: '24' },
    { value: '25', label: '25' },
    { value: '26', label: '26' },
    { value: '27', label: '27' },
    { value: '28', label: '28' },
    { value: '29', label: '29' },
    { value: '30', label: '30' },
    { value: '31', label: '31' },
];

const optionsMonth = [
    { label: 'january', value: 'January' },
    { label: 'february', value: 'February' },
    { label: 'march', value: 'March' },
    { label: 'april', value: 'April' },
    { label: 'may', value: 'May' },
    { label: 'june', value: 'June' },
    { label: 'july', value: 'July' },
    { label: 'august', value: 'August' },
    { label: 'september', value: 'September' },
    { label: 'october', value: 'October' },
    { label: 'november', value: 'November' },
    { label: 'december', value: 'December' },
];

const optionsYear = [
    { label: '1', value: '1990' },
    { label: '2', value: '1991' },
    { label: '3', value: '1992' },
    { label: '4', value: '1993' },
    { label: '5', value: '1994' },
    { label: '6', value: '1995' },
    { label: '7', value: '1996' },
    { label: '8', value: '1997' },
    { label: '9', value: '1998' },
    { label: '10', value: '1999' },
    { label: '11', value: '2000' },
    { label: '12', value: '2001' },
    { label: '13', value: '2002' }
]

const useStyles = makeStyles((theme) => ({
    stepContainer: {
        marginTop: 40,
    },
    dateContaner: {
        display: 'flex',
        justifyContent: 'space-between',
        '@media screen and (max-width: 568px)': {
            display: 'block',
        }
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
    desc: {
        '&.MuiTypography-root': {
            fontSize: 16,
            lineHeight: '24px',
            color: '#B2B3B5',
            fontWeight: 400,
            marginBottom: 16,
        }
    },
    inputOption: {
        '& .MuiInputBase-root': {
            borderRadius: 16,
        },
        '&:first-child': {
            width: '100%',
            maxWidth: 133,
            '@media screen and (max-width: 568px)': {
                maxWidth: '100%',
                marginBottom: 16,
            }
        },
        '&:nth-child(2)': {
            width: '100%',
            maxWidth: 193,
            '@media screen and (max-width: 568px)': {
                maxWidth: '100%',
                marginBottom: 16,
            }
        },
        '&:nth-child(3)': {
            width: '100%',
            maxWidth: 156,
            '@media screen and (max-width: 568px)': {
                maxWidth: '100%',
            }
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

const SecondStep = ({ formData, updateFormData}) => {

    const classes = useStyles();

    const { day, month, year } = formData;

    console.log(day, month, year)

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value });
    };

    return (
        <div className={classes.stepContainer}>
            <Typography className={classes.title} variant="h3">Your age</Typography>
            <Typography className={classes.desc} variant="body2">You must be at least 18 years old to use Intim Flort</Typography>
            <div className={classes.dateContaner}>

                <FormControl className={classes.inputOption}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name='day'
                        displayEmpty={true}
    renderValue={value => value?.length ? Array.isArray(value) ? value.join(', ') : value : 'Day'}
                        onChange={handleChange}
                    >   
                        {optionsDay.map(item => 
                        <MenuItem key={item.label} value={item.value}>{item.value}</MenuItem> 
                        )}
                    </Select>
                </FormControl>

                <FormControl className={classes.inputOption}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name='month'
                        displayEmpty={true}
    renderValue={value => value?.length ? Array.isArray(value) ? value.join(', ') : value : 'Month'}
                        onChange={handleChange}
                    >   
                        {optionsMonth.map(item => 
                        <MenuItem key={item.label} value={item.value}>{item.value}</MenuItem> 
                        )}
                    </Select>
                </FormControl>

                <FormControl className={classes.inputOption}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name='year'
                        displayEmpty={true}
    renderValue={value => value?.length ? Array.isArray(value) ? value.join(', ') : value : 'Year'}
 
                        onChange={handleChange}
                    >   
                        {optionsYear.map(item => 
                        <MenuItem key={item.label} value={item.value}>{item.value}</MenuItem> 
                        )}
                    </Select>
                </FormControl>
                
            </div>
        </div>
    )
}

export default SecondStep;

