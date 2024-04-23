import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
import EmailVerification from "./components/EmailVerification";
import Header from "./components/Header";
import Footer from "./components/Footer";
import home from "./assets/home.png";

function App() {
  const navigate = useNavigate();

  useEffect(()=>{
    const userData = localStorage.getItem("userData");
    if(!userData || userData?.verified === false  )
      navigate("/sign-up");
  },[navigate]);

  return (
    <>   
      <Header/> 
       <img src={home} alt="home" />
      <Footer/>
    </>
  )
}

export default App
