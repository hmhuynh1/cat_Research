
import { Box, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import catBG from "./assets/grassCat.png"



export default function Forgot() {
    const navigate = useNavigate()
    const [error, setError] = useState<string | null>(null)

    const submitHandler = async (e: any) => {
        e.preventDefault();

        console.log(e.target.email.value, e.target.password.value)

        console.log(import.meta.env)
        const response = await fetch(import.meta.env.VITE_SERVER_URI + "login", {
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
        console.log("login", data)
        if (data.message === "login successful") {
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/");
        } else {
            setError("Invalid email or passward")
        }

        console.log(data)

    }

    if (error) {
        return <div>{error}</div>
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
                        <Input className="glow" type="submit" value="Forgot Paswword" />
                    </FormControl>
                </form>
            </Box>
        </Box>
    </Box>


};