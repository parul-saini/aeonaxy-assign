import {useNavigate} from "react-router-dom"
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form";
import axios from "axios";
import { registerRouter } from '../utils/apiRoutes';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; 

function Register() {
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
    
      const {name, userName, password, email}= data;
      
      const res = await axios.post(registerRouter,{
        name,
        userName,
        password,
        email,
      }); 
      // console.log(res);
      
   
      if(res.data.success === false )
      toast.error(res.data.message, toastCSS);

      if(res.data.success === true )
      {  
        const user = res.data.data.user;
        localStorage.setItem('userData', JSON.stringify(user));
        navigate('/get-started');
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
              <div className="font-bold text-2xl mb-6">Sign up to Dribble</div>
              <div className=" text-red-600 mb-6 text-sm  ">
                {errors.userName && <div>• {errors.userName.message}</div>}
                {errors.password && <div>• {errors.password.message}</div>}
                {errors.name && <div>• {errors.name.message}</div>}
                {errors.email && <div>• {errors.email.message}</div>}
                {errors.tnc && <div>• {errors.tnc.message}</div>}
              </div>
              {/* <div className="invisible text-red-600 mb-6 text-sm  ">• Username has already been taken</div> */}
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-6 mb-6 md:grid-cols-2 text-sm">
                      <div>
                          <label htmlFor="name" className="block mb-2 text-sm font-bold"><FontAwesomeIcon icon={faTriangleExclamation} className={`text-red-600 px-1 ${!errors.name &&"hidden"}`}/>Name</label>
                          <input type="text" name="name" {...register("name",{required:"Name is required."})} className={`bg-gray-200 focus:outline-none border-none block w-full p-2.5 rounded-lg text-sm ${errors.name &&"bg-red-100"}`} placeholder="John"   />
                          {/* <input type="text" id="name" name="name" value={formValues.name} onChange={onChange} className="bg-gray-200 focus:outline-none border-none block w-full p-2.5 rounded-lg text-sm" placeholder="John" required /> */}
                      </div>
                      <div>
                          <label htmlFor="username" className="block mb-2 text-sm font-bold"><FontAwesomeIcon icon={faTriangleExclamation} className={`text-red-600 px-1 ${!errors.userName &&"hidden"}`}/>Username</label>
                          <input type="text" name="username" {...register("userName",{required:"Username is required."})} className={`bg-gray-200 focus:outline-none border-none block w-full p-2.5 rounded-lg 
                          ${errors.userName &&"bg-red-100"}`} placeholder="John123"/>
                      </div>
                  </div>
                      <div className="mb-6">
                          <label htmlFor="email" className="block mb-2 text-sm font-bold"><FontAwesomeIcon icon={faTriangleExclamation} className={`text-red-600 px-1 ${!errors.email &&"hidden"}`}/>Email</label>
                          <input type="email" name="email" {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })} className={`bg-gray-200 focus:outline-none border-none block w-full p-2.5 rounded-lg text-sm
                  ${errors.email &&"bg-red-100"}`} placeholder="sample@email.com"   />
                      </div> 
                      <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-bold"><FontAwesomeIcon icon={faTriangleExclamation} className={`text-red-600 px-1 ${!errors.password &&"hidden"}`}/>Password</label>
                          <input type="password" name="password" {...register("password",{required:"Password is required.",// minLength: {value: 6,message: "Password must be of 6+ characters"}
            })} className={`bg-gray-200 focus:outline-none border-none block w-full p-2.5 rounded-lg text-sm ${errors.password &&"bg-red-100"}`} placeholder="6+ characters"  />
                      </div> 
                      <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                          <input id="remember" type="checkbox" value="" {...register("tnc",{required:"You must agree to Terms of Service"})} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"  />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-500">Creating an account means you&apos;re okay with our <a href="#" className="text-blue-600 hover:underline dark:text-blue-800">Terms of Service, Privacy Policy,</a> and our default <a className="text-blue-600 hover:underline dark:text-blue-800"> Notification Settings. </a></label>
                      </div>
                      <button type="submit" className={`text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2 text-center `} >Create Account</button>
                      <div className="my-6  text-xs text-gray-900 dark:text-gray-400">This site is protected by reCaptcha and the Google <a className="text-blue-600 hover:underline dark:text-blue-800">Privacy Policy</a>and  <a className="text-blue-600 hover:underline dark:text-blue-800">Terms of service</a> apply.</div>
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

export default Register
