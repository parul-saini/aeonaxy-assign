import {useNavigate} from "react-router-dom"
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form";
import axios from "axios";
import { changeEmailRouter } from '../utils/apiRoutes';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; 

function ChangeEmail() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
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

    const onSubmit = async(data) => {
      const {email}= data;
  
      const user= localStorage.getItem("userData");
      const userId= JSON.parse(user)._id;
      const res = await axios.patch(`${changeEmailRouter}/${userId}`,{
        email,
      }); 
   
    
      if(res.data.success === false )
      toast.error(res.data.message, toastCSS);

      if(res.data.success === true )
      { toast.success("Email Id change successfully", toastCSS);
       navigate("/verify");  
      }

    }

  return (
    <>
    <div>
      <div className="flex h-screen">
        <div className="w-1/2 hidden md:block" style={{backgroundColor:"rgb(241 209 135)"}}>
          <div className="font-bold text-2xl m-8 ps-5 text-yellow-800 ">
            <img src={logo} alt="" height={80}  width={80}/> 
            <div >Discover the world&apos;s top </div>
            <div >Designers & Creatives. </div>
          </div>
          <img src="https://cdn.dribbble.com/users/76454/screenshots/6592185/001_4x.png"  className="" alt="" />
        </div>
        <div className="w-full  p-8">
            <div className="text-right mb-6 text-xs font-semibold">Already a member?<a className="text-blue-600 hover:underline dark:text-blue-800"> Sign In</a></div>
          <div className="container  md:w-96 m-auto">
            <div className="container align-align-items-center justify-content-center ">
              <div className="font-bold text-2xl mb-10">Change Your Email Address</div>
              <div className={`text-red-600 mb-6 text-sm ${!errors.email && "invisible"}`}>
                {errors.email && <div >• {errors.email.message}</div>}
              </div>
              {/* <div className="invisible text-red-600 mb-6 text-sm  ">• Username has already been taken</div> */}
               <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-6">
                          <label htmlFor="email" className="block mb-2 text-sm font-bold"><FontAwesomeIcon icon={faTriangleExclamation} className={`text-red-600 px-1 ${!errors.email &&"hidden"}`}/>Email</label>
                          <input type="text" name="email" {...register("email", {
                            required: "Email is required.",
                            pattern: {
                              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                              message: "Please enter a valid email address",
                            },
                  })} className={`bg-gray-200 focus:outline-none border-none block w-full p-2.5 rounded-lg text-sm
                  ${errors.email &&"bg-red-100"}`} placeholder="sample@email.com"   />
                      </div> 
                    <button type="submit" className={`text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2 text-center `} >Change </button>
              </form> 

            </div>
          </div>
        </div>
      </div>
    </div>
      <ToastContainer />
    </>
  )
}

export default ChangeEmail