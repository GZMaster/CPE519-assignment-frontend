/* eslint-disable no-undef */
const backendURL =
  process.env === "production"
    ? process.env.REACT_APP_BACKEND_URL
    : process.env.REACT_APP_DEV_API;

// console.log(backendURL);

export default backendURL;
