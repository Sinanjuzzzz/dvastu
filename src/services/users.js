import request from '../utils/request'


function queryUsers(params){
    const { page, size } = params
    return request(`/api/users?_page=${page}&_limit=${size}`);
}

export { queryUsers } 