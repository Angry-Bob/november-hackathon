import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Matches from './Matches'

export default function Main(props) {
    return (
        <div>
            <Routes>
                <Route path = '/' element = {<Home/>} />
                <Route path='/matches' element={<Matches />} />
            </Routes>
        </div>
    )
}