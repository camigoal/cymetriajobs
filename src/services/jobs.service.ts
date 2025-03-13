import axios from "axios";

export const getOffersJobs = async (search="", page=1, limit=10) => {
    const response = await axios.get("https://api.jobs.cymetria.com/api/v1/vacantes/vacantes",{
        params: {
            search,
            page,
            limit
        }
    });
    return response.data;
} 
