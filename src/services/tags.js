import {http} from './config';

export default  {
    store:(id, tag)=>{
        return http.post(`tags/create/${id}`, tag);
    },
    delete:(id)=>{
        return http.delete(`tags/delete/${id}`);
    }

}