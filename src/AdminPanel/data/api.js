import axios from "axios";
import Url from "../../config";
const apiUrl = `${Url}/product`;
const config = {
  headers: { "content-type": "multipart/form-data" },
};

export const multipleFilesUpload = async (formData) => {
  try {
    await axios.post(apiUrl, formData, config);
    window.location.reload(false);
  } catch (error) {
    throw error;
  }
};
