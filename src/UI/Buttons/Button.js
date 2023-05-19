import React from 'react';
import { Button } from '@mui/material';

const MyButtons = ({ variant, className, children, onClick, disabled }) => {
    return (
        <Button disabled={disabled} className={className} variant={variant} onClick={onClick}>{children}</Button>
    )
}

export default MyButtons;