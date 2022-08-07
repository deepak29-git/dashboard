
import { useAuth } from '../../context'
import '../Welcome/Welcome.css'
import {useNavigate} from 'react-router-dom';

export const Welcome=()=>{
    const navigate =useNavigate()
const {googleSignIn} = useAuth();
    const signInWithGoogle=async()=>{
        try{
            await googleSignIn();
            navigate('/home')
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className='welcome-container'>
            <div>
            <p className='welcome-text'>Welcome Back to Skrate</p>
            <button className="sign-in-btn" onClick={signInWithGoogle}>Sign In With Google</button>
            </div>
            <div className='graphic-container'>
            <img className='graphic' src="https://www.skrate.co/images/Graphic.svg" alt="Graphic" />
            </div>
        </div>
    )
}