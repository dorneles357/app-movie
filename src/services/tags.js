import {http} from './config';

export default  {
    show:(id)=>{
        return http.get(`tags/${id}`);
    },
    store:(id, tag)=>{
        return http.post(`tags/create/${id}`, tag);
    },
    delete:(id)=>{
        return http.delete(`tags/delete/${id}`);
    }

}