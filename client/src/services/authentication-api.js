import axios from "axios";

const authenticationApi = axios.create({
  baseURL: "/api/authentication"
});

export const signUp = ({ email, name, password, role, imageUrl }) => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .post("/sign-up", { email, name, password, role, imageUrl })
      .then(response => {
        console.log(response);
        resolve(response.data.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const signIn = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .post("/sign-in", { email, password })
      .then(response => {
        resolve(response.data.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const signOut = () => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .post("/sign-out")
      .then(response => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const verify = () => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .get("/verify")
      .then(response => {
        resolve(response.data.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};
