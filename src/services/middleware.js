import Cookie from "js-cookie";
import Auth from './auth';

export default {
    auth(to, from, next){
        const token = Cookie.get('token');

        if(!token){
            next('/login');
        }else{
            next();
        }
    }
}