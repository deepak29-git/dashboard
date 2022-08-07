import { useAxios } from '../../data/useAxios';
import '../Newjobs/Newjobs.css';

export const Newjobs=()=>{
    const {loading,data,error}=useAxios("https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818");

    return (
        <div className='new-jobs-section'>
            <h3 className='heading'>New Jobs</h3>
            {loading&&<h2>Loading...</h2>}
            {error&&<h2>{error}</h2>}
            {data?.job_postings?.map(({role,organization_name,location,date_posted})=>(
                <div key={role} className='job-details-container'>
                <div className='flex-center'>
                <img src="" alt="img" />
                </div>
                <div>
                <h4>{role}</h4>
                <p>{organization_name}</p>
                <small>{location}</small>
                </div>

                <div className='flex-center'>

                <div>
                    <p>{date_posted}</p>
                </div>
                <div>
                    <img src="" alt="arrow" />
                </div>
                </div>
            </div>
            ))} 
        </div>
    )
}