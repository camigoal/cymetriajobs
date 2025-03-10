import axios from "axios";

export const getOffersJobs = async () => {
    const response = await axios.get("https://s9vqq5bl-3001.use2.devtunnels.ms/api/v1/vacantes/vacantes");
    return response.data;
} 
