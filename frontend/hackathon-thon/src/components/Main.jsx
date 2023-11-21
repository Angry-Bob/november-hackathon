import { Route, Routes } from 'react-router-dom'
import Home from './Home'

export default function Main(props) {
    return (
        <div>
            <Routes>
                <Route path = '/' element = {<Home/>} />
            </Routes>
        </div>
    )
}