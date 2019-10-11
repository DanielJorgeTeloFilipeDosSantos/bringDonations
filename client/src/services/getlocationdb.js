import axios from "axios";
const localApi = axios.create({
  baseURL: "/api/getlocation"
});

export const load2 = id => {
  console.log("getlocationservice", id);
  return new Promise((resolve, reject) => {
    localApi
      .get(`/${id}`)
      .then(response => {
        console.log("data,data", response.data.data[0]);
        resolve(response.data.data[0]);
      })
      .catch(error => {
        reject(error);
      });
  });
};
