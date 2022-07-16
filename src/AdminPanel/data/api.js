import axios from "axios";
import Url from "../../config";
const apiUrl = `${Url}/product/addProduct`;

export const multipleFilesUpload = async (data, options) => {
  try {
    console.log(options);
    await axios.post(apiUrl, data, options);
    window.location.reload(false);
  } catch (error) {
    throw error;
  }
};
