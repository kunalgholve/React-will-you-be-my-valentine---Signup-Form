import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  let ename,letters;
  const myHandler=(e)=>{
    e.preventDefault();
    //alert("hey hey Not Refresh gotcha");

  }
  const errorHandler=()=>{

      if(name===""||email===""||pnumber===""||password==="")
      {
        setError("All fields are mandatory");
        return;
      }

    
     /* let letters = /^[0-9a-zA-Z]+$/; 
      if(name.value.match(letters))
      {
        setError("Name is not alphanumeric")
        return;
      }*/ 

      let atposition=email.indexOf("@"); 
      if(atposition<1)
      {
        setError("Email must contain @");
        return;
      } 
      if(isNaN(pnumber))
      {
        setError("Phone Number must contain only numbers")
        return;
      }
      if(password.length<6)
      {
        setError("Password must contain atleast 6 letters")
        return;
      }
        
        ename=email.split("@")[0];
        console.log("yess",ename,error);

       // setError("");
  }

  return (
    <>
        <div id="main">
        <form onSubmit={myHandler}>
        
          Name:<input type='text' data-testid = 'name' onChange={(e)=>setName(e.target.value)}/><br/>
          Email:<input type='text' data-testid = 'email'onChange={(e)=>setEmail(e.target.value)}/><br/>
          Gender:<select onChange={(e)=>e.target.value}>
            <option value="gender">Mail</option>
            <option value="gender">Femail</option>
            <option value="gender">Other</option>
            </select><br/>
          phone Number:<input type='number' data-testid = 'phoneNumber' onChange={(e)=>setPnumber(e.target.value)}/><br/>
          Password: <input type='password' data-testid = 'password' onChange={(e)=>setPassword(e.target.value)}/><br/>
          submit:<input type='submit' data-testid = 'submit' onClick={errorHandler}/><br/>
         
          </ form>
        
        <div>
            {error===""&&email!=="" ? <p>Hello {ename} </p> :error}
        </div>
        </div>
    </>
  )
}


export default App;
