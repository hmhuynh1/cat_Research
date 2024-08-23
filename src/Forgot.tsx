/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import catBG from "./assets/grassCat.png";
import ResetPassword from "./ResetPassword";

export default function Forgot() {
  const params = new URLSearchParams(window.location.href.split('?').at(-1));

  const token = params.get("token");

    const [result, setResult] = useState("");

console.log({token})
    const submitHandler = async (e: any) => {
        e.preventDefault();

        console.log(e.target.email.value);

        console.log(import.meta.env);
        const response = await fetch(
            import.meta.env.VITE_SERVER_URI + "forgot-password",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: e.target.email.value
                })
            }
        );

        setResult((await response.json()).message as string);

    };

   

    const bgStyle = {
        backgroundSize: "cover"
    };

    return (
        <Box
            backgroundImage={catBG}
            style={bgStyle}
            height={"100vh"}
            padding={"50px"}
        >
            {
                token? <ResetPassword />:

            <Box
                maxW={"400px"}
                padding={"20px"}
                borderRadius={"20px"}
                backgroundColor={"#5dbab1"}
            >
                <Heading paddingBottom={"50px"}>Login</Heading>

                <form onSubmit={submitHandler} method="POST">
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input name="email" type="email" />
                    </FormControl>
                    <FormControl>
                        <Input
                            className="glow"
                            type="submit"
                            value="Forgot Paswword"
                        />
                    </FormControl>

                    <Box>{ result }</Box>
                </form>
            </Box>
            }
        </Box>
    );
}
