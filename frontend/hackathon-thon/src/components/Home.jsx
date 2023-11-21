import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div>
                <h2>Sign Up</h2>
            </div>
            <div>
                <h3>Email</h3>
                <input type = "email" id = "email"></input>
                <h3>Password</h3>
                <input type = "password" id = "password"></input>
                <button id = "submit">Save</button>
            </div>
        </div>
    )
}

export default Home
