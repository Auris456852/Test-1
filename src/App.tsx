import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChuckNorris from './pages/ChuckNorris'
import List from './pages/List'
import Home from './pages/Home'

function App() {
    return (
        <BrowserRouter>
             <Routes>
                <Route path={`/`} element={<Home />} />
                <Route path={`/list`} element={<List />} />
                <Route path={`/chucknorris`} element={<ChuckNorris />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
