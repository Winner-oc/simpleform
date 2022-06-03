import React from "react"

   
export default function Form (){
    const [formDetails, setFormDetails] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        join: true
    })
    
    console.log(formDetails)

    function handleChange(event){
        const {name,value,type,checked} = event.target
         setFormDetails(prevState => ({
             ...prevState,
             [name]: type === "checkbox" ? checked : value
         }))
    }

    

    function handleSubmit(){
        if(formDetails.password === formDetails.confirmPassword){
            console.log("succefull")
        }else{
            console.log("wrong password")   
        }  
    }
    return(
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                   className="form--input"
                   placeholder="Email"
                   type="email"
                   name="email"
                   value={formDetails.email}
                   onChange={handleChange}
                />
                <input 
                   className="form--input"
                   placeholder="Password"
                   type="password"
                   name="password"
                   value={formDetails.password}
                   onChange={handleChange}
                />
                <input 
                   className="form--input"
                   placeholder="Confirm Password"
                   type="password" 
                   name="confirmPassword"
                   value={formDetails.confirmPassword}
                   onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                      type="checkbox"
                      name="join"
                      checked={formDetails.join}
                      onChange={handleChange}  
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}