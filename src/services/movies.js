import {http} from './config'

export default  {
    index:()=>{
        return http.get('movies/index')
    }
}