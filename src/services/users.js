import request from '../utils/request'


export function queryUsers(params){
    const { page, size } = params
    return request(`/api/users?_page=${page}&_limit=${size}`);
}