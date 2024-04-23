import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Register from './components/Register.jsx'
import ParentComp from './components/ParentComp.jsx'
import EmailVerification from './components/EmailVerification.jsx'
import CheckVerifiedUser from './components/CheckVerifiedUser.jsx'
import ChangeEmail from './components/ChangeEmail.jsx'

const routes = createBrowserRouter(createRoutesFromElements(
  <>
     <Route path="/" element={<App />}/>
     <Route path="/sign-up" element={<Register/>}/>
     <Route path="/change-email" element={<ChangeEmail/>}/>
     <Route path='/get-started'element={<ParentComp/>}/>
     <Route path="/verify" element={ <EmailVerification/>}/>
     <Route path="/verify/user/:userId/:uniqueString" element={<CheckVerifiedUser/>}/>
     
  </>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
    </RouterProvider>
  </React.StrictMode>,
)
