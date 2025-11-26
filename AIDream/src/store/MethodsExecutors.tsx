import axios from "axios";

export const PostMethodExecutorWithToken = (url: any, data: any, token: any) => {
    return axios.post(url, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
};