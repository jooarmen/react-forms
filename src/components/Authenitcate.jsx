import { useState } from "react";



export default function Authenitcate({token}){
    const[successMessage, setSuccessMessage]=useState(null)
    const [error, setError]= useState(null)
    async function handleClick(){
        try {
          const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',{
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}` ,
              "Content-Type": "application/json"
            }
          });
    
            const result = await response.json()
            setSuccessMessage(result.message)

        } catch (error) {
            setError(error.message)
        }
      };
    

    return(
        <>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick} >Authenticate Token</button>


        </>

    )
}