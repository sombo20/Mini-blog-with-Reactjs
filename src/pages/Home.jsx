import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../css/home.css'
import Listnews from '../pages/Listnews'

export default function Home(){
  const [data,setData] = useState([]);
  
  useEffect(() => {
    async function news(){
      try{
        console.log("A processar...")
      const url = "http://localhost:5173/src/database/dados.json"
      const response = await fetch(url);
      const datar = await response.json()
        
        setData(datar) 
      }catch(error){
        console.log(error)
      }finally{
        console.log("finalizou...")
      }
    }
    news()
  },[])

  return (
    <>
     <ul>
      <li><Link to="/">Home</Link></li>
     </ul>
     <Listnews item={data}/>
     </>
  );
}