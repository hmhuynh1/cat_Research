import { Box, Heading, Img, Text } from "@chakra-ui/react";
import catB from "./assets/aboutus.png"; 
import H1 from "./assets/H1.jpeg";
import H2 from "./assets/g1.jpg";

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);/** */

    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {/** */
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < 768);
        });
    })

    return (
        <Box
            position="relative"
            minHeight="100vh"
            display="flex"
        >
            <Box
                width={isMobile ? "100%" : "30%"} // Takes up half of the screen width
                padding="20px"
                display="flex"
                flexDirection="column"
                justifyContent="center" // Center content vertically if needed
                alignItems="flex-start" // Align content to the left
                bg="rgba(255, 255, 255, 0.8)" // Optional: Add background color to improve text readability
                minHeight="60vh"
                position="relative" // Ensure text container is positioned correctly
                zIndex="1" // Ensure text is above the background image
            >
                <Heading color="pick" mb={2} textAlign="left">
                         WHAT IS OUR MISSION?
 
                </Heading>
                <Text color="black" mb={2} textAlign="left">
                        At Cat Research, we’re here to give you the knowledge you need to give your cat the best life possible.<br />
                        From in-depth cat product reviews. If you are a cat owner or considering becoming one,<br />
                        you will love Cat Research. Cat Research is the place where you can get all kinds of information about cats.<br />
                        Learn how to adopt a cat and explore the cat breeds page to find the cat that’s just right for you.<br />
                        You will also get to know all the fun facts about cats and valuable advice from other cat owners<br />
                        who have shared their experiences with their cats.

                
                
                </Text><br></br><br></br><br></br><br></br>

                <Box mt="6" display="flex" gap="20px">
                    <Img src={H1} maxW="200px" borderRadius="30px" margin="10px 0" />
                    <Img src={H2} maxW="200px" borderRadius="30px" margin="10px 0" />
                </Box>
               
            




                <Box as="footer" padding="20px" textAlign="center" bg="black" color="white" position="relative" zIndex="2">
                <Box as="span">© copyright, Made by: Hong Huynh</Box>
                </Box>
            </Box>
            
            
            <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                backgroundImage={`url(${catB})`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                zIndex="0" // Ensure background image is below the text container
            />

           
        </Box>
    );
}

export default App;