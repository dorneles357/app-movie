import Cookies from 'js-cookie';
import {http} from './config'


const USER_TOKEN = Cookies.get('token')
const AuthStr = 'Bearer '.concat(USER_TOKEN)


export default  {
    index: async()=>{
        const res = await http.get('movies/index', { headers: { Authorization: AuthStr} });
         return res;
    },
    orderbyASC:async()=>{
        const res = await http.get('movies/index/orderby/asc', { headers: { Authorization: AuthStr} });
        return res;
    },
    orderbyDESC:async()=>{
        const res = await http.get('movies/index/orderby/desc',  { headers: { Authorization: AuthStr} });
        return res;
    },
    show:async(id)=>{
        const res = await http.get(`movies/${id}`, { headers: { Authorization: AuthStr} });
        return res;
    }, 
    store:async(movie)=>{
       const res = await http.post('movies/create',movie, {headers:{'Content-Type':'multipart/form-data', Authorization: AuthStr}});
       return res;
    },
    update:async (id, movie)=>{
        const res  = await http.put(`movies/update/${id}`, movie, { headers: { Authorization: AuthStr} });
        return res;
    },
    delete:async(id)=>{
        const res = await http.delete(`movies/delete/${id}`, { headers: { Authorization: AuthStr} });
        return res;
    },

}