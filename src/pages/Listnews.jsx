import "../css/listnews.css"
import {Link} from 'react-router-dom'

export default function Listnews({item}){
			  
  return (
     <div className="container">
        {item.map(e=>
        <div className="item">
          <div className="img">
            <img src={e.img} width="100px"/>
          </div>
          <div className="dados">
            <span><h4>{e.title}</h4></span>
            <span><i>{e.view}</i></span>
            <p>
             Author:{e.author}
            </p>
          </div>
         <div className="more">
				    <Link key={e.id} to={`/show/${e.id}`}>Read more</Link>
			   </div>
			   </div>
        )}
      </div>
   );
}
