import axios from "axios";
const donationsApi = axios.create({
  baseURL: "/donation"
});
export const create = donation => {
  return new Promise((resolve, reject) => {
    donationsApi
      .post("/create", donation)
      .then(response => {
        resolve(response.data.data.post);
      })
      .catch(error => {
        reject(error);
      });
  });
};
// export const list = () => {
//   return new Promise((resolve, reject) => {
//     donationsApi
//       .get("/")
//       .then(response => {
//         resolve(response.data.data.post);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };
// export const load = id => {
//   return new Promise((resolve, reject) => {
//     donationsApi
//       .get(`/${id}`)
//       .then(response => {
//         resolve(response.data.data.post);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };
// export const edit = (id, updatedDonation) => {
//   return new Promise((resolve, reject) => {
//     donationsApi
//       .patch(`/${id}/edit`, updatedDonation)
//       .then(response => {
//         resolve(response.data.data.post);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };
// export const remove = id => {
//   return new Promise((resolve, reject) => {
//     donationsApi
//       .delete(`/${id}/delete`)
//       .then(() => {
//         resolve();
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };
