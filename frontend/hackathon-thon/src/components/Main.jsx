import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Proficiency from './proficiency'
import Matches from './Matches'
import Demographics from './Demographics'

export default function Main(props) {
    return (
        <div>
            <Routes>
                <Route path = '/' element = {<Home/>} />
                <Route path = '/proficiency' element = {<Proficiency/>} />
                <Route path='/matches' element={<Matches />} />
                <Route path = '/demographics' element = {<Demographics/>} />
            </Routes>
        </div>
    )
}