/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Divider, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import catBG from "./assets/grassCat.png"
import { useState } from "react";
import Footer from "./Footer";

export default function SignUp() {
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const submitHandler = async (e:any) => {
        e.preventDefault();

        console.log(e.target.email.value, e.target?.password.value)

        console.log(import.meta.env)
        const response = await fetch(import.meta.env.VITE_SERVER_URI + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: e.target?.email.value,
                password: e.target?.password.value
            }),

        });
        const data = await response.json();
        console.log("login", data)
        if (data.message === "login successful") {
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/");
        } else {
            setError("Invalid email or passward")
        }

        console.log(data)

    }


    const bgStyle = {
        backgroundSize: 'cover'
    }

    return <Box
        backgroundImage={catBG}
        style={bgStyle}

    >
        <Box height={"100vh"} padding={"50px"}>
            <Box maxW={"400px"} padding={"20px"} borderRadius={"20px"} backgroundColor={"#5dbab1"}>
                <Heading>Login</Heading><br></br>
                <form onSubmit={submitHandler} method="POST">
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input name="email" type='email' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input name="password" type='password' />
                    </FormControl><br></br>
                    <FormLabel color="Red">{error}</FormLabel>
                    <FormControl>
                        <Input className="glow" type="submit" value="Login" />
                    </FormControl>
                    <Button className="glow" onClick={() => navigate('/signup')}>Join Us</Button>
                    {/* <Button className="glow" onClick={() => navigate('/forgot')}>Forgot Password</Button> */}
                </form>
                <Divider />
                <Footer />
            </Box>
        </Box>
    </Box>
}