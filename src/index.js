import ReactDom from 'react-dom'

function Subtitle() {
    
    return <h2>React learning</h2>
    
}


function App() {

     return <h1><Subtitle /></h1>
     
     
}

const rootNode = document.getElementById('root');

ReactDom.render(<App />, rootNode );