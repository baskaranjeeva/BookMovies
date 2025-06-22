import { axiosInstance } from ".";

//Registration function
export const RegisterUser = async (values) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:8082/api/users/register",
      values
    );
    console.log("User Registered");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Login function
export const LoginUser = async (values) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:8082/api/users/login",
      values
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
