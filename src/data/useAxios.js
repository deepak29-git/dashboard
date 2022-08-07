import axios from "axios"
import { useEffect, useState } from "react"

export const useAxios=(url)=>{
    const [loading,setLoading]=useState(false)
    const [data,setData]=useState([]);
    const [error,setError]=useState("")
    useEffect(()=>{
        (async()=>{
            setLoading(true)
            try{
                const {data}=await axios.get(url);
                setData(data)
                setLoading(false)

            }catch(error){
                setError(error.message);
                setLoading(false)
            }
        })()
    },[url])
    return{loading,data,error}
}