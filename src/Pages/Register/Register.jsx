import { logDOM } from "@testing-library/react"
import axios from "axios"
import { useRef } from "react"


export const Register =()=>{

    const emileRef = useRef()
    const passwordRef = useRef()

const hendleSubmit = (evt)=>{
evt.preventDefault()

axios.post("https://reqres.in/api/login",{
       email: emileRef.current.value,
       password:passwordRef.current.value

})
.then((data)=>{
    if(data.status === 200){
localStorage.setItem('token',data.data.token)
    }
})
.catch((err)=>console.log(err))

}

    return(
       <div className="w-50 offset-3 shadow p-5 my-5 bg-light shadow rounded">
        <h2 className="h1 text-center my-3">Register</h2>
        <form onSubmit={hendleSubmit}>
            <input className="form-control mb-3" type="text" placeholder="Fres Name"/>
            <input className="form-control mb-3" type="text" placeholder="Last Name"/>
            <input defaultValue="eve.holt@reqres.in" ref={emileRef} className="form-control mb-3" type='email' placeholder="Email"/>
            <input ref={passwordRef} className="form-control mb-3" type='password' placeholder="Password"/>
            <button className="btn btn-primary">SEND</button>
        </form>
       </div>
    )
}