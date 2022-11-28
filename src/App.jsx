import Home from "./pages/Home"
import Errorpage from './pages/Errorpage'
import Shownews from './pages/Shownews'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
         <Route path="*" element={<Errorpage/>}/>
         <Route path="/show/:id" element={<Shownews/>}/>
        </Routes>
      </BrowserRouter>
    );
}
export default App
