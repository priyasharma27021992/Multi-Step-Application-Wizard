import axios from "axios"

export const fetchApi2 = async (formData) => {
    const response = await axios.post('/api/create');
    console.log('response', response)
}