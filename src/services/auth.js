import {http} from './config'

export default  {
    register:(user)=>{
        return http.post('auth/register', user);
    },
    login:(user)=>{
        return http.post('auth/login', user);
    },
    logout:(token)=>{
        return http.post('auth/login', token);
    }
}