import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {verifiedRouter} from "../utils/apiRoutes.js";
import {  useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; 
import verfication from "../assets/verification.png"
import unverified from "../assets/unverified.png"

function CheckVerifiedUser (){
    const [verified, setVerified] = useState(null);
    const{userId,uniqueString} = useParams();
    const [toggle, setToggle] = useState(false);
    // console.log(userId, uniqueString);

    const navigate = useNavigate();

    // CSS of toast 
   const toastCSS = {
    position:"top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme:"light"
    }

  function updateUserDataInLocalStorage(){
    const userString = localStorage.getItem("userData");
    const userData= userString ? JSON.parse(userString ):{};
    userData.verified = true;
    localStorage.setItem("userData",JSON.stringify(userData));
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  useEffect(() => {
    if(toggle){ 
    async function verifiedCheck() {
        try {
          const res = await axios.get(`${verifiedRouter}/${userId}/${uniqueString}`);
          //console.log(res);
          if (res.data.success === true) {
            setVerified(true);
            toast.success(res.data.message);
            updateUserDataInLocalStorage();
          } else {
            setVerified(false);
            toast.error(res.data.message);
          }
        } catch (error) {
         // console.error('Error checking verification:', error);
          setVerified(false);
          toast.error('Failed to check verification. Please try again.');
        }
      }
    verifiedCheck();
    setToggle(false);
  }
  }, [toggle]); 
  
  useEffect(() => {
    // To stop the api from calling two times 
    setToggle(true);
  }, []);

  return( 
    <>
    {
        verified ? 
        <div className='flex items-center justify-items-center flex-col my-20'>
            <img src={verfication} className='h-60 md:h-80' alt="verified"  />
            <div className='font-bold md:text-2xl mb-3'>Verification Successful </div>
            <div className='font-semibold text-sm'>You are all set!</div>
            
        </div> 
        :
        <div className='flex items-center justify-items-center flex-col my-20'>
            <img src={unverified} className='h-56 md:h-80'  alt="unverified"  />
            <div className='font-bold md:text-2xl mb-3'>Verification Failed</div>
            <div className='text-gray-500 md:text-sm'>Please resend the email and try again</div>
            <button className=' bg-pink-500  hover:bg-pink-600 font-medium rounded-lg sm:text-sm px-2 sm:px-4 lg:px-5 py-2  mr-2   text-white text-xs mt-6'><a href='/verify'>Go Back to verify</a></button>
        </div> 
    }
    <ToastContainer />
    </>
  )
}

export  default CheckVerifiedUser;