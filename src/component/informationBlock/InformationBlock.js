import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import i1 from '../../assets/images/i1.png';
import i2 from '../../assets/images/i2.png';
import i3 from '../../assets/images/i3.png';
import i4 from '../../assets/images/i4.png';

const informationList = [
    {
        img: i1,
        title: 'Exchange meaningful conversation',
        link: 'l1',
        id: 1,
    },
    {
        img: i2,
        title: 'Singles revealing their true self through detailed profiles',
        link: 'l2',
        id: 2,
    },
    {
        img: i3,
        title: 'A powerful search tool with detailed filtration',
        link: 'l3',
        id: 3,
    },
    {
        img: i4,
        title: 'Themed events that create exciting dating occasions',
        link: 'l4',
        id: 4,
    },
]

const useStyles = makeStyles((theme) => ({
    informationList: {
        width: '100%',
        maxWidth: '1250px',
        margin: '100px auto 80px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '@media screen and (max-width: 480px)': {
            margin: '48px auto',
        }
    },
    informationLink: {
        '@media screen and (max-width: 480px)': {
            '&:nth-child(2)': {
                order: 2
            },
            '&:nth-child(4)': {
                order: 3
            },
        }
    },
    informationItem: {
        '&.MuiPaper-root': {
            background: 'transparent',
            boxShadow: 'none',
            maxWidth: 254,
            '@media screen and (max-width: 480px)': {
                maxWidth: 164,
                '& .MuiCardMedia-root': {
                    width: 52,
                    height: 52,
                }
            }
        }
       
    },
    cardContent: {
        '&.MuiCardContent-root': {
            padding: 0,
            marginTop: 24,
            '@media screen and (max-width: 480px)': {
                marginTop: 12,
            }
        }
    },
    title: {
        '&.MuiTypography-body1': {
            textAlign: 'center',
            fontSize: 18,
            lineHeight: '26px',
            fontWeight: 400,
            fontFamily: 'Regular',
            color: '#212B36',
            '@media screen and (max-width: 480px)': {
                fontSize: 14,
                lineHeight: '24px',
            }
        }
    }
}));
  

const InformationBlock = () => {
    const classes = useStyles();
    return (
        <div className={classes.informationList}>
            {informationList.map(item => 
                <a key={item.id} href={item.link} className={classes.informationLink}>
                    <Card className={classes.informationItem}>
                        <CardMedia
                            sx={{ width: 64, height: 64, margin: 'auto' }}
                            image={item.img}
                            title={item.title}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.title} gutterBottom variant="body1" component="div">
                                {item.title}
                            </Typography>
                        </CardContent>
                </Card>
              </a>
            )}
        </div>
    );
};

export default InformationBlock;