import axios, { AxiosError } from "axios"

export const fetchApi = async (formData) => {
    try {
        const { data } = await axios.post('/api/create', formData);
        console.log('baby data', data);
        return data;
    }catch(err){
        if(err instanceof AxiosError)
            throw new Error(err.response?.data?.message || 'API request failed');
        throw err
    }
}