import { useState } from "react";
import PostForm from "../components/PostForm"; 
import Feed from "../components/Feed";

export default function Home() {
    const [post, setPost] = useState([]);


    function handleSubmit({history, userName}) {
        
       
         setPost([...post, {
             id : Math.random(),
             content : history,
             userName, //Como o nome do state e da chave do objeto são os mesmo posso  simplificar deixando apenas 1
             publishedAt : new Date(),
         }])
         
       
    }
    
    return( 
        <>

    <PostForm onSubmit={handleSubmit} />
        
       
        <main>
        <Feed post={post} 
        title = "Seu feed"
        subtitle ="Acompanhe o que seus amigos estão pensando em tempo real"/>
        </main>
        </>
    )
}