import { config } from "../config";
import axios from "axios";
const api_key = config.PICKWISH_API_KEY;
const Base_url = config.BASE_URL;
const MAXIMUM_RETRIES=config.MAXIMUM_RETRIES;

export const enhancedImageApi = async (file) => {
  // code to xall api
  try {
    const taskId = await uploadImage(file);
    console.log("image uploaded and task id is", taskId);

    // We have to use polling effect here. Polling effect means we are calling an API until we are getting the result

    const enhancedImageData = await PollForEnhancedImage(taskId);
    console.log("enhanced image data", enhancedImageData);
    return enhancedImageData;

  } catch (error) {
    console.log(error.message);
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);
  const { data } = await axios.post(
    `${Base_url}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": api_key,
      },
    }
  );
  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image! Task id not found");
  }
  console.log(data.data)
  return data.data.task_id;
}

const PollForEnhancedImage = async (taskId, retries = 0) => {
  // so we will continuously call the api until we get the result
  const result = await fetchEnhancedImage(taskId);
  if (result.state === 4) {
    console.log(`Processing...(${retries}/${MAXIMUM_RETRIES})`);

    if (retries >= MAXIMUM_RETRIES) {
      throw new Error("Max tries reached , Please try again later");
    }
    // wait for 2 seconds before retrying
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return PollForEnhancedImage(taskId, retries + 1);
  }
  console.log("Enhanced Image URL", result);
  return result;
  //this function will call fetch until we get our result
};
const fetchEnhancedImage = async (taskId) => {
  const { data } = await axios.get(
    `${Base_url}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": api_key,
      },
    }
  );
  if (!data?.data) {
    throw new Error("Failed to fetch enhanced image");
  }
  return data.data;
};



