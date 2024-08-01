import {Box, Heading, Img, Text} from "@chakra-ui/react";
import homeCat from "./assets/catParty.jpg"
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
                
                <div className="text-content">
                <Heading color={"white"}>
                    Welcome to Cats research
                </Heading><br></br>

                
                <Text color={"white"}>
                If you are a cat owner or being a cat owner. You will love cat research. 
                Cat research is the place where you can get all kinds of information about cats. 
                Like how to adopt a cat. What is the cat breed look like in the cat breeds page, that you will love. 
                What to be prepared for your new cat. What are the good brands of cat foods, and toys that will work for your cat.
                And all the fun facts about cats. 
                In cat research. You also get all the helpful advice that all the other cat owners have experienced with their cat. 
                </Text>

                
                <br></br><br></br><Heading color={" #4ad326 "}>
                Let the fun begin and never end being a cat lovers!!!
                </Heading>
                <br></br><Img src={homeCat} maxW={"900px"} maxH={300} borderRadius={"100px"}
                margin={"10px 0px 10px 0px"}/>

                

            </div>

            </Box>

            <Box as="footer" className="content-wrapper text-content" padding={"20px"}>
                <Box as={"span"} color={"white"} >© copy rights, Made by: Hong Huynh</Box>
            </Box>
      </>

  )
}

export default App
