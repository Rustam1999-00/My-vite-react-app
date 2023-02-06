import { Routes,Route } from "react-router-dom"
import { PublicHeader } from "../PublicHeader/PublicHeader"
import {Login} from '../../Pages/Login/Login'
import {Register} from '../../Pages/Register/Register'
import { PublicHome } from "../../Pages/PublcHome/PublcHome"

export const Public = ()=>{
    return(
        <div  style={{backgroundImage:'url(https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRDVSupU2NMP_Mgh41v0I_OQ)',height:'100vh'}}>
        <PublicHeader/>
        <div className="container">

            <Routes>
                <Route index path='/' element={<PublicHome/>}/>
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>}/>
                <Route path='*' element={<h2>NOT FOUNT</h2>}/>
            </Routes>
        </div>
    </div>
    )
}