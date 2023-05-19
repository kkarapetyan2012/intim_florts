import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
    inputWidth: {
      width: '100%',
      maxWidth: '380px',
      [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
      },
    },      
  }));

const DynamicInput = (props) => {
    const classesNew = useStyles();
    
    const {value, handleChange, variant, label, hiddenLabel, showPassword, handleClickShowPassword, handleMouseDownPassword, type, wrapperClassName, placeholder, name, required, errors, errorClassName} = props;
    const classes = classNames(wrapperClassName, classesNew.inputWidth, JSON.stringify(errors) !== '{}' ? errorClassName : wrapperClassName);
    return (
        <TextField
            variant={variant}
            value={value}
            label={label}
            onChange={handleChange}
            hiddenLabel={hiddenLabel}
            className={classes}
            name={name}
            required={required}
            placeholder={placeholder}
            type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
            InputProps={ type === 'password' ? {
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton 
                        onClick={handleClickShowPassword}       
                        onMouseDown={handleMouseDownPassword}
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            } : {}}
        /> 
    );
};

export default DynamicInput;