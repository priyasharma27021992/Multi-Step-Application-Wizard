import axios from "axios"

export const fetchApi = async (formData) => {
    const response = await axios.post('/api/create', formData);
    return response
}