import axios from "axios";
const profileApi = axios.create({
  baseURL: "/donationpic"
});

export const donationPic = file => {
  console.log("DONATION PIC SERVICE", file);
  return new Promise((resolve, reject) => {
    profileApi
      .post("/pic", file)
      .then(response => {
        resolve(response.data.data.user);
        console.log("UPLOAD", response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
