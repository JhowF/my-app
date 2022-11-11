import userIcon from './images/user.svg'
import paperPlaneIcon from './images/paper-plane.svg'
import cloackIcon from  './images/clock.svg'
import './styles/global.css'
import './styles/App.css'
import './styles/PostForm.css'
import './styles/Feed.css'

export default function App() {

    const post = [
        {
            id : Math.random(),
            content : 'React faz com que a criação de UIs interativas',

            userName : 'Jonathan',
            publishedAt : new Date(),
        },
        {
            id : Math.random(),
            content : 'Conteúdo do Post 2',
            userName : 'Paloma',
            publishedAt : new Date(),
        },
        {
            id : Math.random(),
            content : 'Conteúdo do Post 3',
            userName : 'Carlos',
            publishedAt : new Date(),
        }
    ];

    return (
     <div className='wrapper' >
        {}
        <form className='post-form' onSubmit={() => alert('Formulario submetido')}>

            <input placeholder='Escreva uma nova história...'/>

            <div>
                
                <img src={userIcon} alt='User' />

                <input placeholder='Digite seu nome...'/>

                <button type='submit'>
                <img src={paperPlaneIcon} alt='Paper plane'/>
                Publicar
                </button>


            </div>
        </form>
        <main>
            <header>
                <h1>Seu Feed</h1>
                <h2>Acompanhe o que seus amigos estão pensando em tempo real</h2>
            </header>

            <section className='feed'>
                {post.map((posts) => (

                


                <article>
                    <p>{posts.content}</p>
                
                <footer>
                    <div className='user-details'>
                        <img src={userIcon} alt="User"/>
                        <strong>{posts.userName}</strong>

                    </div>      
                    <div className='time'>
                        <img src={cloackIcon} alt="Clock" />
                        <span>Publicado em {posts.publishedAt.toLocaleDateString('pt-br')}</span>
                    </div>

                </footer>
                </article>
                ))}

            </section>
        </main>
     </div>   
    )

    
    
}

