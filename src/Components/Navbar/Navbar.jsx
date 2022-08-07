import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context'
import '../Navbar/Navbar.css'

export const Navbar=()=>{
    const {user,logOut} =useAuth();
    const navigate=useNavigate();

    const logoutHandler=async()=>{
        try{
            await logOut()
            navigate("/signin")

        }catch(error){
            console.log(error,"error")
        }
    }
    return(
        <nav className='nav-container'>
            <img className="logo" src="https://www.skrate.co/images/logo_light_shrunk.png" alt="skrate.png" />
            {user&&
            <div className='userdetails-container'>
            <button className='sign-in-btn' onClick={logoutHandler}>Log out</button>
            {user&&<p>{user.displayName}</p>}
            </div>
            }
        </nav>
    )
}