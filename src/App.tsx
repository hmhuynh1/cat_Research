import { Box, Heading, Text } from "@chakra-ui/react";
import catB from "./assets/h1.jpg"; // Ensure this path is correct
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
            minHeight="90vh"
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
                <Heading
                    color="black"
                    mb={1}
                    textAlign="left"
                    fontSize={{ base: "160%" }} // Responsive font sizes
                >
                    WELCOME TO CATS RESEARCH  
                </Heading>

                <Text color="black" mb={4} textAlign="left">
                    If you are a cat owner or considering becoming one, you will love cat research. Cat research is the place where you can get all kinds of information about cats. 
                    The latest cat news. Learn how to adopt a cat and explore the cat breeds page to find the cat that’s just right for you.
                    Find out about the best brands of cat foods and toys that will work for your cat, and enjoy all the fun facts about cats. 
                    At cat research, you also gain valuable advice from other cat owners who have shared their experiences with their cats.
        
                
                </Text>



                
            </Box>
            
            
            <Box
                position="absolute" //cat background side
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