import axios from 'axios';
import { toast } from 'react-toastify';

let API = axios.create({
    baseURL: 'https://gorest.co.in/public/v2/',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
    },
    responseType: 'json'
})

API.interceptors.response.use(
    response => {
        if (response.status === 201) {
            toast.success('User successfully created') // done add user
        } else if (response.status === 204) {
            toast.success('Successfully deleted') // done delete user
        }
        return response
    },
    error => {
        let errorMessage = error.response.data
        let statusCode = error.response.status

        if (statusCode === 304) {
            toast.warn(errorMessage)
        } else if (statusCode === 400) {
            toast.error(errorMessage)
        } else if (statusCode === 401) {
            toast.error(errorMessage.message); // done authentication failed
        } else if (statusCode === 403) {
            toast.warn(errorMessage)
        } else if (statusCode === 404) {
            toast.error('errorMessage')
        } else if (statusCode === 405) {
            toast.warn(errorMessage)
        } else if (statusCode === 415) {
            toast.info(errorMessage)
        } else if (statusCode === 422) {
            // (errorMessage || []).map((err) => toast.error(err.field + ' ' + err.message)) // done validation
        } else if (statusCode === 429) {
            toast.warn(errorMessage)
        } else if (statusCode === 500) {
            toast.error(errorMessage)
            // } else { // done url not valid
            //     toast.error(error.message)
        }
        return error
    }
)

API.interceptors.request.use((req) => {
    return req;
});

export default API;