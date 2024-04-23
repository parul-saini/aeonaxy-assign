import Header from "./Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Footer from "./Footer"
import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { verifyRouter,getUserRouter,changeEmailRouter } from "../utils/apiRoutes";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; 

function EmailVerification() {
  const [userInfo, setUserInfo]= useState(null);
  const [toggle, setToggle] = useState(false);
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

  const verifyEmail = async()=>{
    if(!userInfo) return ;

    const userId= userInfo._id;
    const res = await axios.post(`${verifyRouter}/${userId}`,{
      userInfo
    });
    const emailInfo = res.data;
    //console.log(emailInfo);
    if(emailInfo.success === false) 
    toast.error(emailInfo.data.error.error.message);

    if(emailInfo.success === true) 
    toast.info(emailInfo.message);
  }  
  
  
  useEffect(()=>{
      if (toggle) {
      async function getuserDetails(){
      const user= localStorage.getItem("userData");
      const userId= JSON.parse(user)._id;
      const res = await axios.get(`${getUserRouter}/${userId}`);
      const userInfor = res.data;
  
      if(userInfor.success === false) 
      toast.error("something went wrong refresh the page");

      if(userInfor.success === true) 
      {  
        setUserInfo(userInfor.data.user);
      }
     
      }
      getuserDetails();
      setToggle(false); 
    }
  },[toggle]);

  useEffect(() => {
    // To stop the api from calling two times 
    setToggle(true);
  }, []);

  useEffect(()=>{ 
    // if(!userInfo){
    //   navigate('/sign-up');
    //   return;
    // }
    if(userInfo?.verified===true)  {
      navigate("/");
      return;
    }
    if(userInfo)
    verifyEmail();   
  },[userInfo]);

  const sendEmailAgain = async()=>{
    await verifyEmail();
  }
  
  const ChangeEmailId = async()=>{
      navigate("/change-email");
  }

  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center mb-20 px-10">
    <div className="pt-16 font-bold text-xl sm:text-2xl">
      Please verify your email...
    </div>
    <div  className="relative">
      <FontAwesomeIcon icon={faEnvelope} className="sm:h-20 h-10 p-5 text-gray-400" />
      <svg xmlns="http://www.w3.org/2000/svg" className=" fill-pink-500 stroke-white absolute top-4 sm:right-1 right-3 sm:h-8 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <path d="M9 12l2 2l4 -4" />
      </svg> 
    </div>
    <div className="text-center text-gray-500 font-medium text-xs sm:text-sm">
      <div className=" mb-2">Please verify your email address. We&apos;ve sent a confirmation email to:</div>
      <div className="font-bold text-center mb-2  text-black">{userInfo ? userInfo.email : ""}</div>
      <div className=" mb-2">Click the confirmatin link in that email to begin using Dribble.</div>
      <div className=" mb-2 w-2/3 m-auto">Didn&apos;t receive the email? Check your Spam folder, it may have been caught by a filter. If you still don&apos;t see it, you can <span className="text-pink-500"><button onClick={sendEmailAgain}>resend the confirmation email.</button></span></div>
      <div className="mb-2">Wrong email address? <span className="text-pink-500"><button onClick={ChangeEmailId}>Change it.</button></span></div>

    </div>
    </div>
    <Footer/>
    <ToastContainer />
    </>
  )
}

export default EmailVerification