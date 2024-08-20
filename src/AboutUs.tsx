import './App.css';
import { Box, Heading, Img, Text } from "@chakra-ui/react";
import H1 from "./assets/H1.jpeg";
import H2 from "./assets/g1.jpg";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate("/login");
        }
    }, [navigate]); // Added 'navigate' to dependency array

    return (
        <>
            <Box 
                as="main" 
                padding="20px" 
                className="content-wrapper2 text-and-image" 
                textAlign="left" // Align text to the left
                maxWidth="800px" // Optional: Set a max width for better readability
                pt="100px"
            >
                <Heading color="black" mb={4} textAlign="left">
                    WHAT IS OUR MISSION?
                </Heading>

                    <Text color="white" mb={2} textAlign="left" >
                        At Cat Research, we’re here to give you the knowledge you need to give your cat the best life possible.<br />
                        From in-depth cat product reviews. If you are a cat owner or considering becoming one,<br />
                        you will love Cat Research. Cat Research is the place where you can get all kinds of information about cats.<br />
                        Learn how to adopt a cat and explore the cat breeds page to find the cat that’s just right for you.<br />
                        You will also get to know all the fun facts about cats and valuable advice from other cat owners<br />
                        who have shared their experiences with their cats.
                    </Text>     
             
                
                <Box mt="6" display="flex" gap="20px">
                    <Img src={H1} maxW="200px" borderRadius="30px" margin="10px 0" />
                    <Img src={H2} maxW="200px" borderRadius="30px" margin="10px 0" />
                </Box>
               
            </Box>

            <Box as="footer" className="content-wrapper text-content" padding="20px" textAlign="center">
                <Box as="span" color="white">© Copyright, Made by: Hong Huynh</Box>
            </Box>
        </>
    );
}

export default App;