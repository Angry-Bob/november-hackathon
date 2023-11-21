import { Link } from 'react-router-dom'
import Header from './Header'

const Home = () => {
    return (
        <div>
            <Header/>
            <div id = "signup">
                <h2>Sign Up</h2>
            </div>
            <div>
                <h3>Email</h3>
                <input type = "email" className= 'homeinput'id = "email"></input>
                <h3>Password</h3>
                <input type = "password" className= 'homeinput' id = "password"></input>
                <Link to = {`/Demographics`}><button id = "submit">Save</button></Link> 
            </div>
        </div>
    )
}

export default Home
