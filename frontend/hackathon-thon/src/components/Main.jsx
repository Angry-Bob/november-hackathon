import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Proficiency from './proficiency'


export default function Main(props) {
    return (
        <div>
            <Routes>
                <Route path = '/' element = {<Home/>} />
                <Route path = '/proficiency' element = {<Proficiency/>} />
            </Routes>
        </div>
    )
}