import { useEffect } from "react";
import Movies from "./movies";
import axios from "axios";
const Read = () => {
    const data = [ ];
    const [moives, setMoives] = useState([]);

    useEffect(

()=>{
axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
.then((responce)=>{
console.log(responce.data);
setMoives(responce.data.moives);
})
  .catch(()=>{ 
    console.log(error);
  });

}, []

    );


    return (
        <div>
            <h3>Hello from read component!</h3>
            <Movies myMovies={movies}/>
        </div>
    );
}

export default Read;