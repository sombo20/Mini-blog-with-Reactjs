import {Link} from 'react-router-dom'

export default function Errorpage(){
  return(
    <>
    <h1>PAGE NOT FOUND</h1>
    <ul>
      <li><Link to="/">Ir para home</Link></li>
    </ul>
    </>
  )
}