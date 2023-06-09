import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { styled } from "@mui/material";
import logo  from '../../assets/images/logo/logo.png';

const Keyframes = styled("div")({
    "@keyframes maskAnimation": {
      from: {
        transform: 'translateX(-15em) skewX(-18deg)',
      },
      to: {
        transform: 'translateX(30em) skewX(-18deg)',
      }
    },
    overflow: 'hidden',
    position: 'absolute',
    "&:before": {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        width: 16,
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        transform: 'translateX(-5em) skewX(-18deg)',
        animation: 'maskAnimation 1.5s infinite',
        zIndex: 2,
    },
    
  });

const useStyles = makeStyles((theme) => ({
    backDrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 2,
        background: 'rgba(0, 0, 0, .3)',
        
    },
    modalContainer: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: 12,
        background: '#fff',
        width: '96%',
        maxWidth: 400,
        height: 320,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
}));

const Loading = () => {
    const classes = useStyles();  
    return (
        <Box className={classes.backDrop} >
            <Box className={classes.modalContainer}>
                <Keyframes>
                    <img src={logo} alt="intim-florts"  />
                </Keyframes>
            </Box>
        </Box>
    );
};

export default Loading;