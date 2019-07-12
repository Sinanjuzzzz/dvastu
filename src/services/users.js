import request from '../utils/request'


export function queryUsersList(params){
    const { page, size } = params
    return request(`/api/users?_page=${page}&_limit=${size}`);
}

export function queryUserbyId(params){
    const { id } = params
    return request(`/api/users?id=${id}`);
}