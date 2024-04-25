import axios from 'axios';
import { ReviewFormDataType, ReviewType, VendorType, TokenType, UserFormDataType, UserBuyerType } from '../types';


const baseURL:string = 'https://marketanon.onrender.com'
const userEndpoint:string = '/users'
const reviewEndpoint:string = '/reviews'
const tokenEndpoint:string = '/token'
const vendorEndpoint:string = '/vendors'


const apiClientNoAuth = () => axios.create({
    baseURL: baseURL
})


const apiClientBasicAuth = (username:string, password:string) => axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: 'Basic ' + btoa(username + ':' + password)
    }
})

const apiClientTokenAuth = (token:string) => axios.create({
    baseURL: baseURL,
    headers: {
        Authorizatoin: 'Bearer ' + token
    }
})

type APIResponse<T> = {
    data?: T,
    error?: string
}

// takes in new user data 
async function register(newUserData:UserFormDataType): Promise<APIResponse<UserBuyerType>> {
    let data;
    let error;
    try{
        const response = await apiClientNoAuth().post(userEndpoint, newUserData);
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return { data, error }
}

async function login(username:string, password:string): Promise<APIResponse<TokenType>> {
    let data;
    let error;
    try{
        const response = await apiClientBasicAuth(username, password).get(tokenEndpoint)
            data = response.data
    } catch(err)
{
    if(axios.isAxiosError(err)){
        error = err.response?.data.error
    } else {
        error = 'Something went wrong'
    }
}
    return { data, error }
}

async function getMe(token:string): Promise<APIResponse<UserBuyerType>> {
    let data;
    let error;
    try {
        const response = await apiClientTokenAuth(token).get(userEndpoint + '/me')
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return { data, error }
}


async function getAllVendors(): Promise<APIResponse<VendorType[]>> {
    let data;
    let error;
    try{
        const response = await apiClientNoAuth().get(vendorEndpoint);
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.message
        } else {
            error = 'Something went wrong'
        }
    }
    return { data, error }
}


async function getAllReviews(): Promise<APIResponse<ReviewType[]>> {
    let data;
    let error;
    try{
        const response = await apiClientNoAuth().get(reviewEndpoint);
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.message
        } else {
            error = 'Something went wrong'
        }
    }
    return { data, error }
}

async function createPost(token:string, postData:ReviewFormDataType): Promise<APIResponse<ReviewType>> {
    let data;
    let error;
    try {
        const response = await apiClientTokenAuth(token).post(reviewEndpoint, postData)
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return { data, error }
}


async function getPostById(postID:string|number): Promise<APIResponse<ReviewType>> {
    let data;
    let error;
    try{
        const response = await apiClientNoAuth().get(reviewEndpoint + '/' + postID)
        data= response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return { data, error }
}

async function editPostById(postId:string|number, token:string, editedPostData:ReviewFormDataType): Promise<APIResponse<ReviewType>> {
    let data;
    let error;
    try{
        const response = await apiClientTokenAuth(token).put(reviewEndpoint + '/' + postId, editedPostData)
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.response?.data?.error || `Post with ID ${postId} does not exist`
        } else {
            error = 'Something went wrong'
        }
    }
    return { data, error }
}



export {
    register,
    getAllVendors,
    getAllReviews,
    login,
    getMe,
    createPost,
    getPostById,
    editPostById
}