import { useState } from 'react'
import userIcon from './images/user.svg'
import Feed from './components/Feed'
import paperPlaneIcon from './images/paper-plane.svg'
import './styles/global.css'
import './styles/App.css'
import './styles/PostForm.css'
import './styles/Feed.css'
import PostForm from './components/PostForm'


export default function App() {

   


   const [post, setPost] = useState([]);


     function handleSubmit({history, userName}) {
         
        
          setPost([...post, {
              id : Math.random(),
              content : history,
              userName, //Como o nome do state e da chave do objeto são os mesmo posso  simplificar deixando apenas 1
              publishedAt : new Date(),
          }])
          
        
     }


    //const post = [];

    return (
     <div className='wrapper' >
        <PostForm onSubmit={handleSubmit} />
        
       
        <main>
        <Feed post={post} setPost={setPost}/>

            
        </main>
     </div>   
    )

    
    
}

