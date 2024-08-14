
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import catBG from "./assets/catPattern.png"
import "./App.css"
import { ChangeEvent, useState } from "react";


//New CODE *************** on line 62

export default function SignUp() {
    const [error, setError] = useState("")
    const navigate = useNavigate();


    const submitHandler = async (e: any) => {
        e.preventDefault();

        console.log(e.target.email.value, e.target.password.value)
        if (e.target.email.value === "" || e.target.password.value === "") {
            setError("Please enter email and password")
            return
        }

        if (e.target.email.value.endsWith(".com") || e.target.email.value.endsWith(".edu") || e.target.email.value.endsWith(".org")) {
            setError("")
        }
        else {
            setError("Please use: .com, .edu. or .org")
            return
        }




        const response = await fetch(import.meta.env.VITE_SERVER_URL  +"signup", {
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


    //New CODE ***************
    function emailHandler(e: ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)/**/
        console.log("validation")/**/
        if (e.target.value.endsWith(".com") || e.target.value.endsWith(".edu") || e.target.value.endsWith(".org")) {
            setError("")
        }
        else {
            setError("Please use: .com, .edu. or .org")
            return
        }

    }


    return <Box backgroundImage={catBG} >
        <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
            <Box maxW={"900px"} minW={"400px"} padding={"20px"} borderRadius={"20px"} backgroundColor={"#5dbab1"} margin={"auto"}>

                <Heading>Sign Up</Heading><br></br>
                <form onSubmit={submitHandler} method="POST">

                    <FormControl style={{ paddingTop: "10px" }}>
                        <FormLabel>Email address</FormLabel>
                        <Input name="email" type='email' onChange={emailHandler} />


                    </FormControl>
                    <FormControl style={{ paddingBottom: "10px" }}>
                        <FormLabel>Password</FormLabel>
                        <Input name="password" type='password' />
                    </FormControl>


                    <FormLabel color="Red">{error}</FormLabel>
                    <FormControl style={{ textAlign: "center" }}>
                        <Input className={"glow"} type="submit" value="Join Us" />
                    </FormControl>
                    <FormControl style={{ textAlign: "center" }}>
                        <Button className={"glow"} onClick={() => navigate('/login')}>Login</Button>
                    </FormControl>
                </form>
            </Box>
        </Flex>
    </Box>
}

