import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Demographics from './Demographics'

export default function Main(props) {
    return (
        <div>
            <Routes>
                <Route path = '/' element = {<Home/>} />
                <Route path = '/demographics' element = {<Demographics/>} />
            </Routes>
        </div>
    )
}