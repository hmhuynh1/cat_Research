
import {Box, Button, Flex, FormControl, FormLabel, Heading, Input} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

import catBG from "./assets/catPattern.png"
import "./App.css"
export default function SignUp(){
    const navigate = useNavigate();


    const submitHandler = async (e: any)=>{
        e.preventDefault();

        console.log( e.target.email.value, e.target.password.value)

        const response = await fetch("http://localhost:3001/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
             }),
         
          });
        const data = await response.json();
          console.log(data)
            navigate("/login");
    }

    const buttonStyle = {
        backgroundColor: "white",
        border: "10px",
        borderRadius: "18px",
        padding: "10px",
        fontSize: "16px",
        fontWeight: 400,
        mt:"30px"
    }

    


    return <Box backgroundImage={catBG} >
        <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
                <Box maxW={"900px"} minW={"400px"} padding={"20px"} borderRadius={"20px"} backgroundColor={"#5dbab1"}margin={"auto"}>
                    
                    <Heading>Sign Up</Heading>
                        <form onSubmit={submitHandler} method="POST">

                            <FormControl style={{paddingTop: "10px"}}>
                                <FormLabel>Email address</FormLabel>
                                <Input name="email" type='email' />
                            </FormControl>
                            <FormControl style={{paddingBottom: "10px"}}>
                                <FormLabel>Password</FormLabel>
                                <Input name="password" type='password' />
                            </FormControl>



                            <FormControl style={{textAlign: "center"}}>
                                <Input className={"glow"} type="submit" value="signup"/>
                            </FormControl>
                            <FormControl style={{textAlign: "center"}}>
                                <Button className={"glow"} mt={"10px"} onClick={()=>navigate('/login')}>Login</Button>
                            </FormControl>
                        </form>
                </Box>
        </Flex>
    </Box>
}