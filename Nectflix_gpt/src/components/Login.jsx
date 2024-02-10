import { Button, Card, Form } from "react-bootstrap";
import { Netflix_Background_Image_Url } from "../util/Url";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Login() {
    const[isSignInFrom,setIsSignForm]=useState(true)
    const handleToggalForm=(event)=>{
       setIsSignForm(!isSignInFrom)
    }
  return (
    <div>
     <Card style={{backgroundColor:'black', color:'white',marginLeft:'32rem',marginTop:'11rem', width: "25rem" ,height:'25rem',position: "absolute",alignItems:'center',opacity:'.7'}}>
          <Card.Body>
            <Card.Title style={{fontSize:'25px'}}>{isSignInFrom?"Sign In":"Sign Up"}</Card.Title>
            <Card.Text>
              <Form>
              {!isSignInFrom&&<input type="text" placeholder="Enter The User Name" style={{width:'100%',margin:'10px',padding:'5px',borderRadius:'5px',color:'white'}}></input>}
                <input type="text" placeholder="Enter the Email" style={{width:'100%',margin:'10px',padding:'5px',borderRadius:'5px',color:'white'}}></input>
                <input type="password" placeholder="Enter the Password" style={{width:'100%',margin:'10px',padding:'5px',borderRadius:'5px'}}></input>
                {!isSignInFrom&&<input type="password" placeholder="Enter the Confirm Password" style={{ width:'100%',margin:'10px',padding:'5px',borderRadius:'5px', color:'white'}}></input>}
              </Form>
            </Card.Text>
            <Button style={{marginLeft:'10px',backgroundColor:'red',width:'100%'}} variant="primary">{isSignInFrom?"Sign In":"Sign Up"}</Button>
            <p style={{marginTop:'20px', marginLeft:'10px',cursor:'pointer'}} onClick={handleToggalForm}>{isSignInFrom?"Are you new to Netflix? Signup Now":"Already Register Sign In Now"}</p>
          </Card.Body>
        </Card>
      <Header></Header>
      <div>
      
        <img src={Netflix_Background_Image_Url} width="100%" alt="Logo"></img>
      </div>
    </div>
  );
}

export default Login;
