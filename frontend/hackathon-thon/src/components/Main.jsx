import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Proficiency from './proficiency'
import Proficiency2 from './proficiency2'
import Matches from './Matches'
import Demographics from './Demographics'

export default function Main(props) {
    return (
        <div>
            <Routes>
                <Route path = '/' element = {<Home/>} />
                <Route path = '/proficiency' element = {<Proficiency/>} />
                <Route path = '/proficiency2' element = {<Proficiency2/>} />
                <Route path='/matches' element={<Matches />} />
                <Route path = '/demographics' element = {<Demographics/>} />
            </Routes>
        </div>
    )
}