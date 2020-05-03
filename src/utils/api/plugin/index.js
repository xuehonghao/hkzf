import api from "../../axios";

const uploadHouseImgs = (file) => {
  return api.post("/houses/image", file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export { uploadHouseImgs };
