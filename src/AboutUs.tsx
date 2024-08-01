import './App.css'
import {Box, Heading, Img, Text} from "@chakra-ui/react";
import H1 from "./assets/H1.jpeg"
import { useNavigate } from 'react-router-dom';
import  { useEffect } from 'react';
function App() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate("/login");
        }
        
    }, []);

  return (
      <>
          
            <Box as={"main"} padding={"20px"} className="content-wrapper2 text-and-image">
                <Heading color={"white"}>
                    About Us
                </Heading>
                <Img src={H1} maxW={"200px"} borderRadius={"30px"}
                margin={"10px 0px 10px 0px"}/>
                <div className="text-content">
                <Text color={"white"}>
                    

        We love pets, and we believe loving pets makes us better people. That’s one of the many reasons we created this website. We want to offer cat owner a plate to find out more about cat and give their they a happy life. From how to take care the cat, to find out what to expect for the first time to adopt a cat, to finding the perfect treats and toys, we created a place that cat owner can share their experience and feedback.and to create more ways for pets to be a part of our everyday lives. You also will find the link that where to buy foods or toys that are from the favorites page the cat owner submitted to us.
Qr code

Please connet me on LinkedIn

                </Text>

                    <Text color={"white"} mt={"20px"}>
                    On ous website you will find out more about cats information and advice for cats foods,cats toys.
                    </Text>

            </div>

            </Box>

            <Box as="footer" className="content-wrapper text-content" padding={"20px"}>
                <Box as={"span"} color={"white"} >© copy rights, Made by: Hong Huynh</Box>
            </Box>
      </>

  )
}

export default App
