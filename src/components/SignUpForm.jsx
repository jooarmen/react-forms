import { useState } from "react"




export default function SignUpForm({setToken}){

    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [error, setError]=useState(null)

    async function handleSubmit(e){
        e.preventDefault()
        //console.log("it works")

        if (username.length < 8) {
            setError("Username must be greater than or equal to eight characters.");
            return;
        }

            setError(null)

        try {
          const response =  await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{

            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username,password})
        })

          const result = await response.json()
          console.log(result)
          
          setToken(result.token)
            
        } catch (error) {
            setError(error.message)
        }
    }
    
    return <>
    <h2>Sign Up</h2>
    { error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <label>
            Username <input type="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        </label>
        <label>
            Password <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </label>

        <button>Submit</button>
    </form>
    
    </>
    
}