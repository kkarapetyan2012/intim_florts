import React,  { lazy, Suspense, useState } from 'react';
import { Grid, Box } from "@mui/material";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Person, LocationOn } from '@mui/icons-material';
import CakeIcon from '@mui/icons-material/Cake'
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import { Link } from 'react-router-dom';
import MyButtons from '../../UI/Buttons/Button';
import bgImg from '../../assets/images/bg.png';
import logo  from '../../assets/images/logo/logo.png';
import { registerUser } from '../../api/api';
import { v4 as uuidv4 } from 'uuid';
import Loading from '../Loading/Loading';
import { styled } from "@mui/material";
// import Footer from '../Footer/Footer';

const SelectGender = lazy(() => import('../SelectGender/SelectGender'));
const SelectLookingFor = lazy(() => import('../SelectLookingFor/SelectLookingFor'));
const SelectLocation = lazy(() => import('../SelectLocation/SelectLocation'));
const UserName = lazy(() => import('../Username/UserName'));
const CreatePassword = lazy(() => import('../Password/Password'));
const InformationBlock = lazy(() => import('../InformationBlock/InformationBlock'));

const steps = [
    <WcOutlinedIcon />,
    <CakeIcon />,
    <LocationOn />,
    <Person />,
    <EnhancedEncryptionIcon />
];

const KeyframesBlock = styled("div")({
  "@keyframes moving": {
    from: {
      opacity: "0.5",
      transform: "translateY(-100%)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    }
  },
  animation: "moving 1.25s linear",
}); 

const useStyles = makeStyles((theme) => ({
  centerContainer: {
    '&.MuiGrid-root': {
      display: 'flex',
      justifyContent: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
  },
  block: {
    width: '100%',
    maxWidth: 712,
    margin: '60px auto 0',
    background: '#fff',
    borderRadius:  12,
    padding: '32px 89px',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.08)',

    '@media screen and (max-width: 768px)': {
      margin: '80px auto 0',
      padding: '24px 16px',
      maxWidth: 'calc(100% - 32px)',
    }
  },
  logoBloock: {
    textAlign: 'center',
  },
  logo: {
    '@media screen and (max-width: 480px)': {
      maxWidth: 202,
    }
  },
  stepBlock: {
    marginTop: 64,
  },
  customStep: {
    position: 'relative',
    justifyContent: 'space-between'
  },
  stepContainer: {
    '&+ .MuiStepConnector-horizontal': {
      position: 'absolute',
      bottom: '-10px',
      width: '100%',
    },
    '&> .MuiStepLabel-horizontal': {
      '&> .MuiStepLabel-iconContainer': {
        '&:first-child': {
          display: 'none'
        }
      }
      
    },
    '& .MuiStepLabel-label.Mui-disabled': {
      color: '#E5E8EB'
    },
    '& .MuiStepLabel-label.Mui-completed': {
      color: '#FFDC22'
    },
    '& .MuiStepLabel-label.Mui-active': {
      color: '#F76448'
    },
    '& .MuiStepConnector-line': {
      borderTopWidth: 2,
    }
  },
  none: {
    '&.MuiButtonBase-root': {
      display: 'none'
    }
  },
  success: {
    '&.MuiButtonBase-root': {
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
  backBtn: {
    '&.MuiButtonBase-root': {
      background: '#fff',
      color: '#212B36',
      borderRadius: 16,
      fontSize: 18,
      lineHeight: '26px',
      fontWeight: 500,
      width: '100%',
      padding: '11px 0',
      textTransform: 'capitalize',
      '&:hover': {
        background: '#F76448',
        color: 'white',
      }
    }
  },
  completedStep: {
    width: 12,
    height: 4,
    position: 'absolute',
    background: '#FFDC22',
    bottom: '-11px',
    borderRadius: 2,
  }
}));

const Layout = () => {
  const classes = useStyles();  
  
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const initialState = {
    selectedGender: '',
    selectedSearch: '',
    day: '',
    month: '',
    year: '',
    location: '',
    userName: '',
    password: '',
    user_id: uuidv4(),
}

  const [formData, setFormData] = useState(initialState);

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    registerUser(formData);
  };

  const updateFormData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

    return (
      <Suspense fallback={<Loading />}>
        <Grid container className={classes.centerContainer}
          style={{backgroundImage: `url(${bgImg})`}}>
          <Box sx={{width: 1}}>
          
            <Grid item xs={12} >
              <KeyframesBlock className={classes.block} >
                <div className={classes.logoBloock}>
                    <Link className={classes.logo} to="/"><img src={logo} alt="intim-florts"  /></Link>
                </div> 

                <div className={classes.stepBlock}>
                  <Stepper activeStep={activeStep} className={classes.customStep}>
                    
                    {steps.map((icon, index) => {
                      const stepProps = {};
                      const labelProps = {};
                      if (isStepSkipped(index)) {
                        stepProps.completed = false;
                      }
                      return (
                        <Step key={index} {...stepProps} className={classes.stepContainer}>
                          <StepLabel  {...labelProps}>{icon}</StepLabel>
                        </Step>
                      );
                    })}
                    <>
                    {activeStep === 0 && <Box className={classes.completedStep}></Box> }
                    {activeStep === 1 && <Box className={classes.completedStep} sx={{ width: 1/4 }}></Box>}
                    {activeStep === 2 && <Box className={classes.completedStep} sx={{ width: 1/2 }}></Box>}
                    {activeStep === 3 && <Box className={classes.completedStep} sx={{ width: '75%' }}></Box>}
                    {activeStep === 4 && <Box className={classes.completedStep} sx={{ width: 1 }}></Box>}
                    </>
                  </Stepper>
                  {activeStep === steps.length ? (
                    <React.Fragment>
                      <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <MyButtons >Reset</MyButtons>
                      </Box>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {activeStep === 0 && <SelectGender 
                      formData={formData} 
                      updateFormData={updateFormData} handleNext={handleNext} activeStep={activeStep} steps={steps} handleSubmit={handleSubmit} />}
                      {activeStep === 1 && <SelectLookingFor 
                      formData={formData} 
                      updateFormData={updateFormData} handleNext={handleNext} activeStep={activeStep} steps={steps} handleSubmit={handleSubmit} setActiveStep={setActiveStep} setFormData={setFormData} /> }

                      {activeStep === 2 && <SelectLocation 
                      formData={formData} 
                      updateFormData={updateFormData} handleNext={handleNext} activeStep={activeStep} steps={steps} handleSubmit={handleSubmit} setActiveStep={setActiveStep} />}

                      {activeStep === 3 && <UserName 
                      formData={formData} 
                      updateFormData={updateFormData} handleNext={handleNext} activeStep={activeStep} steps={steps} handleSubmit={handleSubmit} setActiveStep={setActiveStep} setFormData={setFormData} />}

                      {activeStep === 4 && <CreatePassword 
                      formData={formData} 
                      updateFormData={updateFormData} handleNext={handleNext} activeStep={activeStep} steps={steps} handleSubmit={handleSubmit} setActiveStep={setActiveStep} skipped={skipped} setSkipped={setSkipped} isStepSkipped={isStepSkipped}  />}
                    </React.Fragment>
                  )}

                </div>
              </KeyframesBlock>
                
            </Grid>
            <InformationBlock />
          </Box>
          
          {/* <Footer /> */}
        </Grid>
        </Suspense>
    );
};

export default Layout;