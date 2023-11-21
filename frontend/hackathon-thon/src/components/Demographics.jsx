import { Link } from 'react-router-dom'

const Demographics = () => {
    return (
        <div>
            <div>
                <h2>Tell us about yourself!</h2>
                <h5>We need a little information to help you connect with other people.</h5>
            </div>
            <div>
                <h4>Name</h4>
                <input type = "text" id = "name"></input>
                <h4>Birthday</h4>
                <input type = "date" id = "birthday"></input>
                <h4>My pronouns are...</h4>
                <button id= "demobutton">He/Him</button>
                <button id= "demobutton">She/Her</button>
                <h4>I'm interested in being a...</h4>
                <button id= "demobutton">Mentor</button>
                <button id= "demobutton">Mentee</button>
                <h4>I'm currently a...</h4>
                <button id= "demobutton">Student</button>
                <button id= "demobutton">Professional</button>
                
                <button id = "submit">Confirm my profile</button>
            </div>
        </div>
    )
}

export default Demographics