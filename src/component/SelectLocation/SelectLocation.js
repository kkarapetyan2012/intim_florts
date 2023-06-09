import React, { useEffect, useState } from "react";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import MyButtons from "../../UI/Buttons/Button";
import classNames from "classnames";
import { useMemo } from "react";

const useStyles = makeStyles((theme) => ({
  stepContainer: {
    marginTop: 40,
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
      padding: "0 !important",
    },

    "& fieldset": {
      borderColor: "#F76448",
    },
    "&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
      borderColor: "#F76448",
    },
    "&:hover fieldset.MuiOutlinedInput-notchedOutline": {
      borderColor: "#F76448",
    },
    "& .Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
      borderColor: "#F76448",
    },
  },
  relative: {
    position: "relative",
  },
  toMove: {
    top: 2,
    position: "absolute",
    right: 2,
    width: 55,
    background: "#fff",
    borderRadius: 16,
    height: 43,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  red: {
    "&.MuiButtonBase-root": {
      color: "#F76448",
      borderColor: "#F76448",
    },
    "&.MuiSvgIcon-root": {
      color: "#F76448",
      borderColor: "#F76448",
    },
  },
}));

const SelectLocation = ({
  formData,
  handleNext,
  activeStep,
  steps,
  setActiveStep,
}) => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const nextBtn = classNames(
    activeStep !== steps.length - 1 ? "" : classes.none,
    classes.success
  );

  useEffect(() => {
    const searchCities = async () => {
      try {
        const response = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/population/cities"
        );
        const cities = response.data.data;
        setSearchResults(cities);
      } catch (error) {
        console.error(error);
      }
    };

    searchCities();
  }, []);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const filteredCities = useMemo(() =>
    (searchResults || []).filter?.((city) =>
      city.city.toLowerCase().includes(searchTerm?.toLowerCase())
    ),
    [searchResults, searchTerm]
  );

  const handleOptionSelect = (event, newValue) => {
    setSearchTerm(newValue);
    formData.location = newValue;
  };

  return (
    <div className={classes.stepContainer}>
      <Typography className={classes.title} variant="h3">
        Your location
      </Typography>
      <Typography className={classes.desc} variant="body2">
        Search location by city, country or zip code
      </Typography>

      <div className={classes.relative}>
        <Autocomplete
          className={classes.inputOption}
          value={searchTerm}
          onChange={handleOptionSelect}
          options={filteredCities.map((city) => city.city)}
          renderInput={params => (
            <TextField {...params} placeholder="Location" variant="outlined" />
          )}
        />
        <span className={classes.toMove}>
          <SearchIcon className={classes.red} />
        </span>
      </div>
      <Box>
        <MyButtons
          onClick={handleNext}
          className={nextBtn}
          disabled={formData.location === ""}
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

export default SelectLocation;
