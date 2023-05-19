import React from 'react';
import { MenuItem, Select } from '@mui/material';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  inputWidth: {
    width: '100%',
    maxWidth: '380px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  }
}));

const DynamicSelect = ({ options, value, onChange, placeholder, wrapperClassName }) => {
  const classesNew = useStyles();
  const classes = classNames(wrapperClassName, classesNew.inputWidth);
  const menuItems = options.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.label}
    </MenuItem>
  ));

  return (
    <Select
      value={value}
      onChange={onChange}
      displayEmpty
      className={classes}
      placeholder={placeholder}
    >
      <MenuItem value="" disabled>
        {placeholder}
      </MenuItem>
      {menuItems}
    </Select>
  );
};

export default DynamicSelect;

