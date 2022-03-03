import Cookies from 'js-cookie';
import {http} from './config'


const USER_TOKEN = Cookies.get('token')
const AuthStr = 'Bearer '.concat(USER_TOKEN)


export default  {
    store:async(id, tag)=>{
        const res = await http.post(`tags/create/${id}`, tag, { headers: { Authorization: AuthStr} });
        return res;
    },
    delete:async(id)=>{
        const res = await http.delete(`tags/delete/${id}`, { headers: { Authorization: AuthStr} });
        return res;
    }

}