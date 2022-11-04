import ReactDom from 'react-dom'
import App from './App'

function Subtitle() {
    
    return <h2>React learning</h2>
    
}

const rootNode = document.getElementById('root');

ReactDom.render(<App />, rootNode );