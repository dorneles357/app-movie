import {http} from './config'

export default  {
    register:(user)=>{
        return http.post('auth/register', user);
    }
}