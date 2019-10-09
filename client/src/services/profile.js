import axios from "axios";
const profileApi = axios.create({
  baseURL: "/upload"
});

export const upload = file => {
  console.log(file);
  return new Promise((resolve, reject) => {
    profileApi
      .post("/image", file)
      .then(response => {
        resolve(response.data.data.user);
        console.log("UPLOAD", response.data.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};

// export const saveFile = uploadedUser => {
//   return new Promise((resolve, reject) => {
//     profileApi
//       .post("/things/create", uploadedUser)
//       .then(response => {
//         resolve(response.data.data);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };
