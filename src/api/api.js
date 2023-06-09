import axios from "axios";

const base_url = "https://iconnect247.net/api/v2/";
const endpoint_path = "registration/start";


export const registerUser = async (formData) => {
    try {
  
      const response = await axios.post(`${base_url}${endpoint_path}`,  {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            selectedGender: formData.selectedGender,
            selectedSearch: formData.selectedSearch,
            day: formData.day,
            month: formData.month,
            year: formData.year,
            location: formData.location,
            userName: formData.userName,
            password: formData.password,
            userId: formData.user_id
        }),
        params: {
          site_key: 'no01'
        }
      });
  
      const data = response.data;
      console.log(data);
  
    } catch (error) {
      console.error('Error registering user:', error.response.data);
    }
  }