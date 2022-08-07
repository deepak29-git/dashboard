import { Newjobs } from "../../Components/Newjobs/Newjobs";
import { Overview } from "../../Components/Overview/Overview";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Upcomming } from "../../Components/Upcomming/Upcomming";
import '../DashBoard/DashBoard.css'

export const DashBoard=()=>{
    return (
        <div className="flex">
            <Sidebar/>
            <div className="flex center-box">
                <div>
            <Overview/>
            <Upcomming/>
                </div>
            <Newjobs/>
            </div>
        </div>
    )
}