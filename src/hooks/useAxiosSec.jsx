import axios from "axios";
import { useEffect } from "react";
// import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";


const axiosSecure = axios.create({
    baseURL:'https://hotel-booking-management-server.vercel.app',
    withCredentials:true,
})

const useAxiosSec = () => {
    const {logOut}=useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{
     
        axiosSecure.interceptors.response.use(res=>{
            return res
        }, error =>{
            console.log('error tracked in the interceptor',error.response)
            if(error.response.status === 401 || error.response.status === 403){
                console.log('logout the user')
                logOut()
                .then(()=>{
                    navigate('/login')
                })
                .catch(error=>console.log(error))
            }
        })
    },[])

    return axiosSecure
  
};

export default useAxiosSec;