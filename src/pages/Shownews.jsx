import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'

export default function Shownews(){
   const {id} = useParams()
   const [data,setData] = useState([]);
  
  useEffect(() => {
    async function news(id){
      
      try{
        console.log("A processar...")
      const url = "http://localhost:5173/src/database/dados.json"
      const response = await fetch(url);
      const datar = await response.json()
           datar.forEach(function(a){
              if(a.id == id){
                setData(a)
              }
           })
        
      }catch(error){
        console.log(error)
      }finally{
        console.log("finalizou...")
      }
    }
    news(id)
  },[])

  return(
    <>
     <img src={data.img} height="150px" width="250px"/>
     <h1>{data.title}</h1>
     <p>{data.description}</p>
     <h1>Autor:{data.author}</h1>
     </>
    )
}