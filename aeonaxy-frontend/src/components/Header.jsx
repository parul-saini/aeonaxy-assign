import { useState } from "react"
import logo from "../assets/logo.png"
import { useEffect } from "react";
import axios from "axios";
import { profileRouter } from "../utils/apiRoutes";
function Header() {
    const [toggleHeader, setToggleHeader] = useState(false);
    const [image, setImage] = useState("");
    useEffect(()=>{
        
        const fetchImage = async()=>{
            const user= localStorage.getItem("userData");
            const userId= JSON.parse(user)._id;
            await axios.get(`${profileRouter}/${userId}`).then((res)=>{
                const image = res.data.data.profile.profileImage;
                setImage(image)
            })
        }
        fetchImage();
    },[])
  return (
    <header>
    <nav className=" border-b-2  ">
        <div className="flex flex-wrap  justify-between items-center mx-auto ">
            <a href="#" className="flex items-center sm:ps-4">
                <img src={logo}  className="mr-3 h-14" alt="Dribble Logo" />
            </a>
            <div className="flex items-center lg:order-2 ">
                
            <form >   
                <label htmlFor="default-search" className="mb-2 text-xs lg:text-sm font-medium text-gray-900 sr-only ">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-28 sm:w-32 py-2 ps-10 text-xs sm:text-sm text-gray-900  rounded-lg bg-gray-100  focus:border-none " placeholder="Search "  />
                </div>
            </form>

                <img src={image} className="sm:mx-4 mx-2 sm:w-8 sm:h-8 w-6 h-6 rounded-full " alt="avatar"/>
                <a href="#" className=" bg-pink-500  hover:bg-pink-600 font-medium rounded-lg sm:text-sm px-2 sm:px-4 lg:px-5 py-2  mr-2   text-white text-xs">Upload</a>
                <button onClick={()=>setToggleHeader(state=>!state)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center sm:p-2  text-sm text-gray-500 rounded-lg lg:hidden  sm:me-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className={`${toggleHeader===false ? "hidden" : "absolute top-14 z-10 bg-white lg:relative lg:top-0"}  transition duration-500 ease-in-out justify-between items-center w-full lg:flex lg:w-auto lg:order-1 text-center`}id="mobile-menu-2">
                <ul className=" mx-10 flex flex-col mt-4 font-semibold transition-all sm:text-sm lg:flex-row lg:space-x-8 lg:mt-0 text-xs ">
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-500  border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  ">Inspiration</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-500  border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">Find Work</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-500  border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Learn Design</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-500  border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Go Pro</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-500  border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Hire Designers</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header


