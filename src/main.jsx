import { createRoot } from 'react-dom/client'
import './style/style.scss'
import {App} from './components/app/app'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
