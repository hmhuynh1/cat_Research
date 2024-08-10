import { Box, Heading, Text } from "@chakra-ui/react";
import catB from "./assets/h1.jpg"; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <Box
            position="relative"
            minHeight="100vh"
            display="flex"
        >
            <Box
                width="30%" // Takes up half of the screen width
                padding="20px"
                display="flex"
                flexDirection="column"
                justifyContent="center" // Center content vertically if needed
                alignItems="flex-start" // Align content to the left
                bg="rgba(255, 255, 255, 0.8)" // Optional: Add background color to improve text readability
                minHeight="100vh"
                position="relative" // Ensure text container is positioned correctly
                zIndex="1" // Ensure text is above the background image
            >
                <Heading color="black" mb={4} textAlign="left">
                    Welcome to Cats Research
                </Heading>
                <Text color="black" mb={4} textAlign="left">
                    If you are a cat owner or considering becoming one, you will love cat research. Cat research is the place where you can get all kinds of information about cats. 
                    Learn how to adopt a cat, explore the cat breeds on the cat breeds page, and discover what to prepare for your new cat. 
                    Find out about the best brands of cat foods and toys that will work for your cat, and enjoy all the fun facts about cats. 
                    At cat research, you also gain valuable advice from other cat owners who have shared their experiences with their cats.<br></br><br></br><br></br><br></br>
                
                    <br></br><br></br><Box as="footer" padding="20px" textAlign="center" bg="black" color="white" position="relative" zIndex="2">
                <Box as="span">© copyright, Made by: Hong Huynh</Box>
                </Box>
                
                </Text>
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