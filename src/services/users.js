import request from '../utils/request'


export function queryUsersList(params){
    const { page, size } = params
    return request(`/api/users?_page=${page}&_limit=${size}`);
}

export function queryUser(params){
    const { queryMode, queryValue } = params
    return request(`/api/users?${queryMode}=${queryValue}`);
}