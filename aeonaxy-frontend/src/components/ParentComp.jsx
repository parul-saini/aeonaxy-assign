import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import designer from "../assets/designer.png"
import insight from "../assets/insight.png"
import recruiter from "../assets/recruiter2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form"
import {  useNavigate } from "react-router-dom";
import  axios  from "axios";
import { profileRouter } from "../utils/apiRoutes";

function ParentComp() {
    const [isDesignerChecked, setIsDesignerChecked] = useState(false);
    const [isRecruiterChecked, setIsRecruiterChecked] = useState(false);
    const [isInsightsChecked, setIsInsightsChecked] = useState(false);
    const [formStep, setFormStep] = useState(0); 
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    useEffect(()=>{
      const userData = localStorage.getItem("userData");
      if(!userData)
        navigate("/sign-up");
    },[]);


    const {
        register,
        handleSubmit, 
        formState: { errors, isValid,  },
      } = useForm({mode:"all"})
  
      const handleChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(URL.createObjectURL(selectedImage));
      };
    
      const onSubmit = async(data) => {
        const formData = new FormData();

        formData.append("location", data.location);
        if(data.recruiter)formData.append("recruiter", data.recruiter);
        if(data.designer)formData.append("designer", data.designer);
        if(data.insights)formData.append("insights", data.insights);
        formData.append("profileImage", data.image[0]);
        
        const userinfo= localStorage.getItem("userData");
        const userId= JSON.parse(userinfo)._id;
        const res = await axios.post(`${profileRouter}/${userId}`,
          formData
        ,{
          headers: { "Content-Type": "multipart/form-data" },
        });
        navigate("/verify")
      }
    const nextFormStep = ()=>{
        setFormStep(curr=>curr+1);
    }
    const prevFormStep = ()=>{
        setFormStep(curr=>curr-1);
    }
    
  // const revalidateForm = () => {
  //   trigger(); // Revalidate the form
  // };
    return (
        <div className="p-6">
      {/* <img src={logo} alt="" height={80} width={80} /> */}
      <div className="flex">
        <img src={logo} alt="" height={80} width={80} /> <FontAwesomeIcon className=
        {`self-center mx-4  py-2 px-3 text-gray-500 cursor-pointer bg-gray-200 rounded-md ${formStep===0&& "invisible"}  `}icon={faAngleLeft} onClick={formStep!==0 ? prevFormStep:undefined}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center ">
     {formStep===0 ? 
     <div className="">
        <div>
          <h1 className="font-extrabold text-2xl md:text-3xl mb-3">
            Welcome! Let&apos;s create your profile
          </h1>
          <div className="mb-10 text-gray-500 text-sm font-medium">
            Let others get to know you better! You can do these later
          </div>
        </div>
        <div className="font-bold mb-3">Add an avatar</div>
          <div className="flex mb-10 items-center">
            {/* <label> */}
          <div className={`w-28 h-28 sm:w-32 sm:h-32 border-dashed border-2 ${image && "border-none"} border-gray-300 rounded-full flex justify-center items-center me-8 sm:me-10 overflow-hidden`}>
                {image!==null ? (
                <img src={image} alt="Uploaded" className="w-full h-full object-cover " />
                ) : (
                    <div className="w-5 m-auto top-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 125"
                        enableBackground="new 0 0 100 100"
                      >
                        <path
                          d="M81.916,22.583H68.165l-4.793-8.5H36.628l-4.793,8.5H18.084c-6.341,0-11.5,5.159-11.5,11.5v40.334c0,6.341,5.159,11.5,11.5,11.5h63.832c6.341,0,11.5-5.159,11.5-11.5V34.083C93.416,27.742,88.257,22.583,81.916,22.583z M50,76.999c-11.901,0-21.583-9.683-21.583-21.583c0-11.899,9.682-21.582,21.583-21.582s21.583,9.683,21.583,21.582C71.583,67.316,61.901,76.999,50,76.999z M53.5,40.834h-7v11h-11v7h11v11h7v-11h11v-7h-11V40.834z"
                          fill="#808080"
                        />
                      </svg>
                    {/* <input id="upload1" type="file" className="hidden " name="image" accept="image/jpeg, image/png, image/jpg"  {...register("image",{onChange:handleChange,required:"Required"})}   /> */}
                  </div>
                )}
            </div>
            {/* </label> */}
        <div className="rounded-md border p-2 text-sm h-10 my-3">
        <label
          htmlFor="upload1"
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="font-semibold">Choose image</span>
        </label>
        <input
          id="upload1"
          type="file"
          className="hidden"
          accept="image/jpeg, image/png, image/jpg"
          {...register("image",{onChange:handleChange,required:"Required"})} 
        />
      </div>
          </div>
        <label htmlFor="location " className="block text-sm font-bold mb-3">Add your location</label>
        <input type="text" id="location" className="bg-white  focus:outline-none border-b-2 block w-full py-2.5 text-sm font-semibold mb-8 sm:mb-14 md:mb-16 focus:bg-white" placeholder="Enter a location" {...register("location",{required:"Location is required"})} />
        <div className="w-52">
            <button type="submit" className={`text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm  px-8 py-2 text-center w-full ${ (!image &&!isValid) && "cursor-not-allowed"}`} onClick={nextFormStep}  disabled={!image && !isValid}
            >Next</button>
        </div>
      </div>:
    <div // className="m-auto " style={{ width: "50rem" }}
    >
        <h1 className="font-extrabold text-2xl md:text-3xl mb-3 text-center">
          What brings you to Dribble?
        </h1>
        <div className="text-gray-500 text-xs md:text-sm font-medium text-center">
          Select the option that best describes you. Don&apos;t worry, you can
          explore other options later.
        </div>
        <div className="grid sm:grid-cols-3 mt-16 mb-6 gap-14 sm:gap-5 md:gap-7 justify-items-center ">
              <label className="cursor-pointer w-60 sm:w-48 md:w-56 ">
                {/* <input type="checkbox" className="peer sr-only"  name="size-choice"/> */}
                <div className={`rounded-lg ring-1 ring-gray-300  transition-all active:scale-95 ${isDesignerChecked && "ring-pink-500 ring-2 relative"} `}>
                    <img src={designer} alt="designer" className={`h-32 m-auto mb-2 ${isDesignerChecked &&"absolute -top-16 left-11"}`} />
                    <div className={`text-center p-3 ${isDesignerChecked&&"pt-16"}`}>
                      <div className="font-extrabold">I&apos;m Designer looking to share my work</div>
                      <div className={`${!isDesignerChecked&&"hidden"} text-xs font-medium text-gray-500`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt aspernatur voluptatibus itaque dignissimos explicabo necessitatibu</div>
                      <input type="checkbox" className="peer sr-only" checked={isDesignerChecked} {...register("designer",{onChange:() => setIsDesignerChecked(!isDesignerChecked)})}
                        />
                      <span className="ring-black flex justify-center opacity-0  transition-all peer-checked:opacity-100 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-pink-500 stroke-white" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="12" r="9" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                      </span>
                      {/* <span className="w-4 h-4 border"></span> */}
                    </div>
                    {/* <div > <span className="w-4 h-4 border"></span></div> */}
                </div>
              </label>
              <label className="cursor-pointer w-60 sm:w-48 md:w-56 ">
                {/* <input type="checkbox" className="peer sr-only"  name="size-choice"/> */}
                <div className={`rounded-lg ring-1 ring-gray-300  transition-all active:scale-95 ${isRecruiterChecked && "ring-pink-500 ring-2 relative"} `}>
                    <img src={recruiter} alt="designer" className={`h-32 m-auto mb-2 ${isRecruiterChecked &&"absolute -top-16 left-11"}`} />
                    <div className={`text-center p-3 ${isRecruiterChecked&&"pt-16"}`}>
                      <div className="font-extrabold">I&apos;m looking to hire a designer</div>
                      <div className={`${!isRecruiterChecked&&"hidden"} text-xs font-medium text-gray-500`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt aspernatur voluptatibus itaque dignissimos explicabo necessitatibu</div>
                      <input type="checkbox" className="peer sr-only" {...register("recruiter",{onChange:()=>setIsRecruiterChecked(!isRecruiterChecked)})} checked={isRecruiterChecked}/>
                      <span className="ring-black flex justify-center opacity-0  transition-all peer-checked:opacity-100 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-pink-500 stroke-white" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="12" r="9" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                      </span>
                    </div>
                </div>
              </label>
              <label className="cursor-pointer w-60 sm:w-48 md:w-56 ">
                <div className={`rounded-lg ring-1 ring-gray-300  transition-all active:scale-95 ${isInsightsChecked && "ring-pink-500 ring-2 relative"} `}>
                    <img src={insight} alt="designer" className={`h-32 m-auto mb-2 ${isInsightsChecked &&"absolute -top-16 left-11"}`} />
                    <div className={`text-center p-3 ${isInsightsChecked&&"pt-16"}`}>
                      <div className="font-extrabold">I&apos;m looking for design inspiration</div>
                      <div className={`${!isInsightsChecked&&"hidden"} text-xs font-medium text-gray-500`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt aspernatur voluptatibus itaque dignissimos explicabo necessitatibu</div>
                      <input type="checkbox" className="peer sr-only" checked={isInsightsChecked}  {...register("insights",{onChange:() => setIsInsightsChecked(!isInsightsChecked)})}
                        />
                      <span className="ring-black flex justify-center opacity-0  transition-all peer-checked:opacity-100 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-pink-500 stroke-white" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="12" r="9" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                      </span>
                    </div>
                </div>
              </label>

      </div> 
        <div className="flex flex-col items-center">
          <div className={`mb-3 font-bold ${isDesignerChecked || isInsightsChecked ||isRecruiterChecked ?'visible':'invisible'} text-sm`}>Anything else? You can select multiple </div>
          {/* <Link to="/"> */}
            <button
            type="submit"
            className={`text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-8 py-2 w-52 ${!(isDesignerChecked || isInsightsChecked ||isRecruiterChecked) && "cursor-not-allowed"}`}
            disabled={!(isDesignerChecked || isInsightsChecked ||isRecruiterChecked)}
          >
            Finish
          </button>
          {/* </Link> */}
          <div className="text-xs text-gray-400 font-bold w-full m-2 text-center">
            or Press RETURN
          </div>
        </div>
      </div>
      // </div>
      }
      </form> 
    </div>
    )
}

export default ParentComp