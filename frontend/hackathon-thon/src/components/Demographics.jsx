import { Link } from 'react-router-dom'
import '../srh.css'
// import GA from '../assets/GA.png';

const Demographics = () => {
    return (
        <div>
            <div id='top'>
                {/* <div id = "logoImage"> */}
                    {/* <img src={GA} className='DemoGAlogo' alt="" />
                </div> */}
                <h2 id='heading'>Tell us about yourself!</h2>
                <h5 id = "prompt">We need a little information to help you connect with other people.</h5>
            </div>
            <div>
                <h5 className='field'>Name</h5>
                <input type = "text" className= 'demoInput'id = "name"></input>
                <h5 className='field'>Birthday</h5>
                <input type = "date" className= 'demoInput' id = "birthday"></input>
                <h5 className='field'>My pronouns are...</h5>
                <button id= "demobutton">He/Him</button>
                <button id= "demobutton">She/Her</button>
                <h5 className='field'>I'm interested in being a...</h5>
                <button id= "demobutton">Mentor</button>
                <button id= "demobutton">Mentee</button>
                <h5 className='field'>I'm currently a...</h5>
                <button id= "demobutton">Student</button>
                <button id= "demobutton">Professional</button>

                <Link to = {`/proficiency`}><button id = "demosubmit">Confirm my profile</button></Link>
            </div>
        </div>
    )
}

export default Demographics