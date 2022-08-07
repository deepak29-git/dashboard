import { useAxios } from '../../data/useAxios';
import '../Upcomming/Upcomming.css'
export const Upcomming=()=>{
    const {loading,data,error}=useAxios("https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818");
    return (
        <div className='overview-container'>
            <h3 className='heading'>Upcomming Sessions</h3>
                {loading&&<h2>Loading...</h2>}
            {error&&<h2>{error}</h2>}
            {data?.upcoming_sessions?.map(({mentor_name,timings,date,session_type})=>(
                <div key={mentor_name} className='user-info'>
                <div className='user-info'>
                <img src="" alt="img" />
                <div>
                <p>{mentor_name}</p>
                <small>Flutter</small>
                </div>
                </div>
                <div>
                <p>{timings}</p>
                <small>{date}</small>
                </div>
                <div>
                    <p>{session_type}</p>
                </div>
                <div>
                    <img src="" alt="arrow" />
                </div>
            </div>
            ))}   
        </div>
    )
}