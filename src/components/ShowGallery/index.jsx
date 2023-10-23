import { useEffect,useState } from 'react'
import {Link} from "react-router-dom"
import GalleryImage from '../GalleryImage';


export default function ShowGallery() {
    let url = "https://api.tvmaze.com/shows"
    const [shows, setShows] = useState([]);
  
    useEffect(() => {
        async function displayShows() {
           try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setShows(data);
           }catch(err){
            console.log(err)
           }
            
          }
          displayShows()
    },[])

    
  return (
    <div className='shows'>  
    {shows.map(show => <Link to={`${show.id}`}  key={show.id} > <GalleryImage show={show}/> </Link> )}
    </div>
  )
}
