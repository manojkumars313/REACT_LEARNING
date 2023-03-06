// importaxios from axios";
import axois from "axios";

export const ApiCaller = ({ url, data, method = "GET" }) => {
  return new Promise((resolve, reject) => {
    const payload = { url, method };
    if (data) {
      payload.data = data;
    }
    axois(payload)
      .then((res) => {
        console.log("API resolved Successfully", res);
        resolve(res);
      })
      .catch((err) => {
        console.log("API failed", err);
        reject(err);
      });
  });
};

// import axois from "axios";

// function ApiCaller({ url, data, method = "GET" }) {
//   return new Promise((resolve, reject) => {
//     const payload = { url, method };
//     if (data) {
//       payload.data = data;
//     }
//     axois({ payload })
//       .then((res) => {
//         console.log("Api resolved Successfully", res);
//         resolve(res);
//       })
//       .catch((err) => {
//         console.log("Api rejected", err);
//         reject(err);
//       });
//   });
// }

// export default ApiCaller;
