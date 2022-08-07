import { useAxios } from '../../data/useAxios';
import '../Overview/Overview.css'

export const Overview=()=>{

    const {loading,data,error}=useAxios("https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818");

    return(
        <div className="overview-container">
            {loading&&<h2>Loading...</h2>}
            {error&&<h2>{error}</h2>}
            <h3>Overview</h3>
            <div className="inner-section">
                <div>
                <div className='profile'>
                    <p>Profile views <span>{data?.dashboard_stats?.profile_views}</span></p>
                </div>
                <div className='mentor'>
                    <p>Job Applied <span>{data?.dashboard_stats?.jobs_applied}</span></p>
                </div>
                </div>
                <div>
                <div className='job'>
                    <p>Mentorship Sessions <span>{data?.dashboard_stats?.mentorship_sessions}</span></p>
                </div>
                <div className='skill'>
                    <p>Skill Varified <span>{data?.dashboard_stats?.skills_verified}</span></p>
                </div>
                </div>
            </div>
        </div>
    )
}