import './styles/global.css'
import './styles/App.css'
import './styles/PostForm.css'
import './styles/Feed.css'
import {BrowserRouter, Link} from 'react-router-dom';
import AppRoutes from './Routes'



export default function App() {

   


   


    //const post = [];

    return (
     <div className='wrapper' >

        <BrowserRouter>

        <nav>
            
            <Link to="/">Meu feed</Link> {/*Só funciona dentro do BrowserRouter */}

            <Link to="/most-viewed">Mais Vistos</Link>

        </nav>


        <AppRoutes/>

        </BrowserRouter>

     </div>   
    )

    
    
}

