import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField, Typography  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  stepContainer: {
    marginTop: 40,
  },
  formControl: {
    width: '100%',
    '&:not(:first-child)': {
      marginTop: 24,
    }
  },
  title: {
    '&.MuiTypography-root': {
      fontSize: 18,
      lineHeight: '26px',
      color: '#212B36',
      fontWeight: 600,
      marginBottom: 16,
    }
  },
  desc: {
    '&.MuiTypography-root': {
      fontSize: 16,
      lineHeight: '24px',
      color: '#B2B3B5',
      fontWeight: 400,
      marginBottom: 16,
    }
  },
  inputOption: {
    '& .MuiInputBase-root': {
      borderRadius: 16,
      padding: '0 !important',
    },
    
    '& fieldset': {
      borderColor: '#F76448',
    },
    '&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
      borderColor: '#F76448',
    },
    '&:hover fieldset.MuiOutlinedInput-notchedOutline': {
      borderColor: '#F76448',
    },
    '& .Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
      borderColor: '#F76448',
    },
  },
  relative: {
    position: 'relative'
  },
  toMove: {
    top: 2,
    position: 'absolute',
    right: 2,
    width: 55,
    background: '#fff',
    borderRadius: 16,
    height: 43,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  red: {
    '&.MuiButtonBase-root': {
      color: '#F76448',
      borderColor: '#F76448'
    },
    '&.MuiSvgIcon-root': {
      color: '#F76448',
      borderColor: '#F76448'
    }
  }
}));

const ThirdStep = ({formData, updateFormData}) => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchCities = async () => {
      try {
        const response = await axios.get(
          'https://countriesnow.space/api/v0.1/countries/population/cities'
        );
        const cities = response.data.data;
        setSearchResults(cities);
      } catch (error) {
        console.error(error);
      }
    };

    searchCities();
  }, []);

  // useEffect(() => {
  //   const searchCities = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://iconnect247.net/api/v2/registration/locations'
  //       );
  //       const cities = response.data.data;
  //       console.log('response', response)
  //       setSearchResults(cities);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   searchCities();
  // }, []);

  const handleSearch = (event, value) => {
    setSearchTerm(value);
  };

  const filteredCities = searchResults
    ? searchResults.filter((city) =>
        city.city.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

    const handleChange = (e) => {
      updateFormData({ [e.target.name]: e.target.value });
    };

  return (
    <div className={classes.stepContainer}>
      <Typography className={classes.title} variant="h3">Your location</Typography>
      <Typography className={classes.desc} variant="body2">Search location by city, country or zip code</Typography>

      <div className={classes.relative}>
          <Autocomplete
            className={classes.inputOption}
            options={filteredCities.map((city) => city.city)}
            value={searchTerm}
            onChange={handleSearch}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder='Location'
                variant="outlined"
                name='location'
                onChange={handleChange}
                // onChange={(e) => setSearchTerm(e.target.value)}
                // todo in this option select search not working
                // InputProps={{
                //   endAdornment: (
                //     <IconButton >
                //       <SearchIcon className={classes.red} />
                //     </IconButton>
                //   ),
                // }}
              />
            )}
          />
          <span className={classes.toMove}>
          <SearchIcon className={classes.red} />
          </span>
      </div>
    </div>
  );
};

export default ThirdStep;

