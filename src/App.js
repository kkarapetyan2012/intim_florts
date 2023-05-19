import { BrowserRouter, Link } from "react-router-dom";
import React, { lazy, Suspense, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Grid, Box, useTheme } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Person, LocationOn } from '@mui/icons-material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import CakeIcon from '@mui/icons-material/Cake'
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import logo  from './assets/images/logo/logo.png';
import MyButtons from "./UI/Buttons/Button";
import bgImg from './assets/images/bg.png' 
import Footer from "./component/footer/Footer";
import InformationBlock from "./component/informationBlock/InformationBlock";
import classNames from 'classnames';
import './App.css';

const FirstStep = lazy(() => import('./component/fistStep/FirstStep'));
const SecondStep = lazy(() => import('./component/secondStep/SecondStep'));
const ThirdStep = lazy(() => import('./component/thirdStep/ThirdStep'));
const ForthStep = lazy(() => import('./component/forthStep/ForthStep'));
const FifthStep = lazy(() => import('./component/fifthStep/FifthStep'));

const steps = [
  <WcOutlinedIcon />,
  <CakeIcon />,
  <LocationOn />,
  <Person />,
  <EnhancedEncryptionIcon />
];

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

function App() {
  const classes = useStyles();  

  const theme = useTheme();
  
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [formData, setFormData] = useState({
      selectedGender: '',
      selectedSearch: '',
      day: '',
      month: '',
      year: '',
      location: '',
      userName: '',
      password: '',
  });

  const nextBtn = classNames((activeStep !== steps.length - 1) ? '' : classes.none, classes.success);
  const completeBtn = classNames((activeStep === steps.length - 1) ? '' : classes.none, classes.success);

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

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async (event) => {
    if (activeStep === 0 && !validateStep1()) {
      return;
    }
    if (activeStep === 1 && !validateStep2()) {
      return;
    }
    if (activeStep === 2 && !validateStep3()) {
      return;
    }

    if (activeStep === 3 && !validateStep4()) {
      return;
    }

    if (activeStep === 4 && !validateStep5()) {
      return;
    }

    console.log('Form submitted!');

    event.preventDefault();

    const registrationData = {
      selectedGender: formData.selectedGender,
      selectedSearch: formData.selectedSearch,
      day: formData.day,
      month: formData.month,
      year: formData.year,
      location: formData.location,
      userName: formData.userName,
      password: formData.password,
    };

    try {
      const response = await fetch('https://iconnect247.net/api/v2/registration/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      setFormData(registrationData)

      if (response.ok) {
        // Registration successful
        console.log('Registration successful!');
      } else {
        // Registration failed
        console.log('Registration failed.');
      }
    } catch (error) {
      console.error('An error occurred during registration:', error);
    }

  //   const data = {
  //     selectedGender: formData.selectedGender,
  //     selectedSearch: formData.selectedSearch,
  //     birthDay: formData.birthDay,
  //     location: formData.location,
  //     userName: formData.userName,
  //     password: formData.password,
  //   };

  //   try {
  //     await axios.post('https://iconnect247.net/api/v2/registration/start', data);

  //     console.log('Registration successful');
  //     // Handle successful registration
  //   } catch (error) {
  //     console.error('Error during registration:', error);
  //     // Handle error
  //   }
  };

  const validateStep1 = () => {
    // Perform step 1 validation
    const { selectedGender, selectedSearch } = formData;
    if (!selectedGender || !selectedSearch) {
      console.log('selectGender and selectSearch is required');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    // Perform step 2 validation
    const { day, month, year } = formData;
    if (!day || !month || !year) {
      console.log('Birthday is requres');
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    // Perform step 3 validation
    const { location } = formData;
    if (!location) {
      console.log('City is required');
      return false;
    }
    return true;
  };

  const validateStep4 = () => {
    // Perform step 3 validation
    const { userName } = formData;
    if (!userName) {
      console.log('user name is required');
      return false;
    }
    return true;
  };

  const validateStep5 = () => {
    // Perform step 2 validation
    const { password } = formData;
    if (!password) {
      console.log('password is required');
      return false;
    }
    return true;
  };

  const updateFormData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const data = {
  //     name: name,
  //     email: email
  //   };

  //   try {
  //     const response = await axios.post('https://iconnect247.net/api/v2/registration/start', data);

  //     console.log('Registration successful');
  //     // Handle successful registration
  //   } catch (error) {
  //     console.error('Error during registration:', error);
  //     // Handle error
  //   }
  // };
  
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Grid container className={classes.centerContainer}
          style={{backgroundImage: `url(${bgImg})`}}>
          <Box sx={{width: 1}}>
          
            <Grid item xs={12} >
              <div className={classes.block} >
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
                      {activeStep === 0 && <FirstStep formData={formData} updateFormData={updateFormData} />}
                      {activeStep === 1 && <SecondStep formData={formData} updateFormData={updateFormData} />}
                      {activeStep === 2 && <ThirdStep formData={formData} updateFormData={updateFormData} />}
                      {activeStep === 3 && <ForthStep formData={formData} updateFormData={updateFormData} />}
                      {activeStep === 4 && <FifthStep formData={formData} updateFormData={updateFormData} />}
                      <Box >
                        <MyButtons onClick={handleNext} className={nextBtn}>
                          {(activeStep !== steps.length - 1) && 'Next'}
                        </MyButtons>
                        <MyButtons onClick={handleSubmit} className={completeBtn}>
                          {(activeStep === steps.length - 1) && 'Complete' }
                        </MyButtons>
                        <MyButtons
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.backBtn}
                        >
                          Back
                        </MyButtons>
                      </Box>
                    </React.Fragment>
                  )}

                </div>
              </div>
                
            </Grid>
            <InformationBlock />
          </Box>
          
          <Footer />
        </Grid>
      </BrowserRouter>
    </Suspense>
  </ThemeProvider>
  );
}

export default App;



