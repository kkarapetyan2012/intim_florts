import React from "react";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MyButtons from "../../UI/Buttons/Button";
import classNames from "classnames";

const optionsMonth = [
  { label: "january", value: "January" },
  { label: "february", value: "February" },
  { label: "march", value: "March" },
  { label: "april", value: "April" },
  { label: "may", value: "May" },
  { label: "june", value: "June" },
  { label: "july", value: "July" },
  { label: "august", value: "August" },
  { label: "september", value: "September" },
  { label: "october", value: "October" },
  { label: "november", value: "November" },
  { label: "december", value: "December" },
];

const optionsYear = [
  { label: "1", value: "1990" },
  { label: "2", value: "1991" },
  { label: "3", value: "1992" },
  { label: "4", value: "1993" },
  { label: "5", value: "1994" },
  { label: "6", value: "1995" },
  { label: "7", value: "1996" },
  { label: "8", value: "1997" },
  { label: "9", value: "1998" },
  { label: "10", value: "1999" },
  { label: "11", value: "2000" },
  { label: "12", value: "2001" },
  { label: "13", value: "2002" },
];

const useStyles = makeStyles((theme) => ({
  stepContainer: {
    marginTop: 40,
  },
  dateContaner: {
    display: "flex",
    justifyContent: "space-between",
    "@media screen and (max-width: 568px)": {
      display: "block",
    },
  },
  formControl: {
    width: "100%",
    "&:not(:first-child)": {
      marginTop: 24,
    },
  },
  title: {
    "&.MuiTypography-root": {
      fontSize: 18,
      lineHeight: "26px",
      color: "#212B36",
      fontWeight: 600,
      marginBottom: 16,
    },
  },
  desc: {
    "&.MuiTypography-root": {
      fontSize: 16,
      lineHeight: "24px",
      color: "#B2B3B5",
      fontWeight: 400,
      marginBottom: 16,
    },
  },
  inputOption: {
    "& .MuiInputBase-root": {
      borderRadius: 16,
    },
    "&:first-child": {
      width: "100%",
      maxWidth: 133,
      "@media screen and (max-width: 568px)": {
        maxWidth: "100%",
        marginBottom: 16,
      },
    },
    "&:nth-child(2)": {
      width: "100%",
      maxWidth: 193,
      "@media screen and (max-width: 568px)": {
        maxWidth: "100%",
        marginBottom: 16,
      },
    },
    "&:nth-child(3)": {
      width: "100%",
      maxWidth: 156,
      "@media screen and (max-width: 568px)": {
        maxWidth: "100%",
      },
    },
    "& fieldset": {
      borderColor: "#F76448",
    },
    "& .MuiSelect-select fieldset.MuiOutlinedInput-notchedOutline": {
        borderColor: "#F76448",
    },
    "&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
      borderColor: "#F76448",
    },
    "& .MuiOutlinedInput-input": {
        borderColor: "#F76448",
    },
    "&:hover fieldset.MuiOutlinedInput-notchedOutline": {
      borderColor: "#F76448",
    },
    "& .Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
      borderColor: "#F76448",
    },
  },
  success: {
    "&.MuiButtonBase-root": {
      "&.Mui-disabled": {
        background: "rgba(111,111,111, .5)",
      },
      background: "#F76448",
      color: "white",
      borderRadius: 16,
      fontSize: 18,
      lineHeight: "26px",
      fontWeight: 500,
      width: "100%",
      marginBottom: 5,
      marginTop: 24,
      padding: "11px 0",
      textTransform: "capitalize",
      "&:hover": {
        background: "#F76448",
        color: "white",
      },
    },
  },
  backBtn: {
    "&.MuiButtonBase-root": {
      background: "#fff",
      color: "#212B36",
      borderRadius: 16,
      fontSize: 18,
      lineHeight: "26px",
      fontWeight: 500,
      width: "100%",
      padding: "11px 0",
      textTransform: "capitalize",
      "&:hover": {
        background: "#F76448",
        color: "white",
      },
    },
  },
}));

const SelectLookingFor = ({
  formData,
  updateFormData,
  handleNext,
  activeStep,
  steps,
  setActiveStep,
}) => {
  const classes = useStyles();

  const { day, month, year } = formData;

  const nextBtn = classNames(
    activeStep !== steps.length - 1 ? "" : classes.none,
    classes.success
  );

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.stepContainer}>
      <Typography className={classes.title} variant="h3">
        Your age
      </Typography>
      <Typography className={classes.desc} variant="body2">
        You must be at least 18 years old to use Intim Flort
      </Typography>
      <div className={classes.dateContaner}>     
  
        <FormControl className={classes.inputOption}>
            <Select value={day} onChange={(e) => {
                formData.day = e.target.value;
                const { name, value } = e.target;
                updateFormData({ ...formData, [name]: value })}}
                displayEmpty
                renderValue={(value) => {
                    if (value.length === 0) {
                        return "Day";
                    }

                    return value;
                }}
            >
                {Array.from({ length: 31 }, (_, index) => (
                    <MenuItem key={index + 1} value={index + 1}>{index + 1}</MenuItem>
                ))}
            </Select>
        </FormControl>    

        <FormControl className={classes.inputOption}>
            <Select
            value={month}
            displayEmpty
            renderValue={(value) => {
                if (value.length === 0) {
                    return "Month";
                }

                return value;
            }}
            onChange={(e) => {
                formData.month = e.target.value;
                const { name, value } = e.target;
                updateFormData({ ...formData, [name]: value })}}
            >
            {optionsMonth.map((item, idx) => (
                <MenuItem key={idx} value={item.value}>
                    {item.value}
                </MenuItem>
            ))}
            </Select>
        </FormControl>

        <FormControl className={classes.inputOption}>
            <Select
                value={year}
                displayEmpty
                renderValue={(value) => {
                    if (value.length === 0) {
                        return "Year";
                    }

                    return value;
                }}
                onChange={(e) => {
                    formData.year = e.target.value;
                    const { name, value } = e.target;
                    updateFormData({ ...formData, [name]: value })}}
            >
                {optionsYear.map((item, idx) => (
                    <MenuItem key={idx} value={item.value}>
                    {item.value}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
      </div>
      <Box>
        <MyButtons
          onClick={handleNext}
          className={nextBtn}
          disabled={day === '' || month === '' || year === ''}
        >
          {activeStep !== steps.length - 1 && "Next"}
        </MyButtons>
        <MyButtons
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.backBtn}
        >
          Back
        </MyButtons>
      </Box>
    </div>
  );
};

export default SelectLookingFor;
