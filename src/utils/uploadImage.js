import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
    const formData =  new FormData();
    //Append Image File to Form Data
    formData.append('image', imageFile);
    
    try {
            const response = await axiosInstance.post(
                API_PATHS.IMAGE.UPLOAD_IMAGE,
                formData,
                { headers: { 'Content-Type': undefined } }
            );

            const data = response && response.data ? response.data : {};

            // Debug: log raw upload response for troubleshooting
            console.debug('[uploadImage] response data:', data);

            const imageUrl =
                data.imageUrl || data.image_url || data.url ||
                (data.data && (data.data.imageUrl || data.data.image_url || data.data.url)) ||
                "";

            return { imageUrl, raw: data };
    } catch(error) {
        console.error("Error uploading the image:", error);
        throw error; //rethrow error for handling
    }
};

export default uploadImage;