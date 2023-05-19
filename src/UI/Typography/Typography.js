import React from 'react';
import Typography from '@mui/material/Typography';

const MyTypography = ({variant, title, className}) => {
    return (
        <Typography className={className} variant={variant}>{title}</Typography>
    );
};

export default MyTypography;