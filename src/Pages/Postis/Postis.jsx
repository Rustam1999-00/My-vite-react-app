import axios from "axios"
import { useEffect, useState } from "react"


export const Postis =()=>{

    const [post,setPost]=useState([])



useEffect(()=>{

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((data)=>setPost(data.data))
    .catch((err)=>console.log(err))
},[])


    return(

        <div>
<button onClick={()=>localStorage.removeItem('token')} className='bg-danger'>Log out</button>


        <h2 className="text-center ">
            Postis
        </h2>
            {
                post?.length ? (
                    <ul className="list-group">
                        {
                            post.map((post)=>(<li className="list-group-item w-50 mx-auto" key={post.id}> 
                              {  post.title}
                            </li>))
                        }
                    </ul>
                ):('')
            }
        </div>

    )
}