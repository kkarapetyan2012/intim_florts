/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@mui/styles';
import logo  from '../../assets/images/logo/logo.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    
    footerBlock: {
        padding: '40px 0 28px',
        background: '#fff',
        width: '100%',
    },
    logo: {
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        '@media screen and (max-width: 480px)': {
            maxWidth: 202,
        }
    },
    footerMenu_list: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 32,
        paddingBottom: 40,
        borderBottom: '2px solid #E5E8EB',
    },
    footerMenu_item: {
        position: 'relative',
      '&:not(:first-child)': {
        marginLeft: 8,
      },
      '&:not(:last-child)': {
        paddingRight: 8,
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '20%',
            right: 0,
            height: '60%',
            width: 1,
            backgroundColor: theme.palette.primary.main,
        }
      }
    },
    footerMenu_link: {
        fontSize: 16,
        lineHeight: '28px',
        position: 'relative',
        fontFamily: 'Regular',
        fontWeight: 400,
        color: '#212B36',
      
    },
    copyRight: {
      textAlign: 'center',
      marginTop: 24,
      fontSize: 14,
      lineHeight: '24px',
      color: '#B2B3B5',
      fontWeight: 400,
      fontFamily: 'Regular',
    },
  }));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footerBlock}>
            <Link className={classes.logo} to="/"><img src={logo} alt="intim-florts"  /></Link>
            <nav>
                <ul className={classes.footerMenu_list}>
                    <li className={classes.footerMenu_item}>
                        <a className={classes.footerMenu_link} href="">Terms</a>
                    </li>
                    <li className={classes.footerMenu_item}>
                        <a className={classes.footerMenu_link} href="">
                        Policy</a>
                    </li>
                    <li className={classes.footerMenu_item}>
                        <a className={classes.footerMenu_link} href="">Cookie Policy</a>
                    </li>
                    <li className={classes.footerMenu_item}>
                        <a className={classes.footerMenu_link} href="">
                        Help Center
                        </a>
                    </li>
                </ul>
            </nav>
            <p className={classes.copyRight}>{new Date().getFullYear()} Intim Florts | All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;