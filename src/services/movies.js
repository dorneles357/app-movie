import {http} from './config'

export default  {
    index:()=>{
        return http.get('movies/index');
    },
    orderbyASC:()=>{
        return http.get('movies/index/orderby/asc');
    },
    orderbyDESC:()=>{
        return http.get('movies/index/orderby/desc');
    },
    show:(id)=>{
        return http.get(`movies/${id}`);
    }, 
    store:(movie)=>{
        return http.post('movies/create', movie);
    },
    update:(id, movie)=>{
        return http.put(`movies/update/${id}`, movie);
    },
    delete:(id)=>{
        return http.delete(`movies/delete/${id}`);
    },

}