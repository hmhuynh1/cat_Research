import { Box, Heading, Text } from "@chakra-ui/react";
import catB from "./assets/h1.jpg"; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Box
            position="relative"
            minHeight="90vh"
            display="flex"
        >
            <Box
                width={isMobile ? "100%" : "40%"}
                padding="15px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                bg="rgba(230, 240, 237, 20)"
                minHeight="60vh"
                position="relative"
                zIndex="100"
                
            >
                <Heading
                    color="black"
                    mb={7} // Updated margin-bottom
                    textAlign="left"
                    fontSize={{ base: "200%" }}
                >
                    WELCOME TO CATS RESEARCH  
                </Heading>

                <Text color="black" mb={4} textAlign="left">
                    If you are a cat owner or considering becoming one, you will love cat research. Cat research is the place where you can get all kinds of information about cats. 
                    The latest cat news. Learn how to adopt a cat and explore the cat breeds page to find the cat that’s just right for you.
                    Find out about the best brands of cat foods and toys that will work for your cat, and enjoy all the fun facts about cats. 
                    At cat research, you also gain valuable advice from other cat owners who have shared their experiences with their cats.

                </Text>

                <br></br><Heading
                    color="black"
                    mb={7} // Updated margin-bottom
                    textAlign="left"
                    fontSize={{ base: "120%" }}
                >
                    WHERE TO ADOPT A CAT IN DES MOINES, IOWA: 
                </Heading>

                <Heading
                    color="red"
                    mb={7} // Updated margin-bottom
                    textAlign="left"
                    fontSize={{ base: "100%" }}
                >
                    <p><a href="https://www.arl-iowa.org/adopt/find-a-pet/pet-list/cat/
                ">CLICK HERE!! </a></p>
                
                </Heading>

                <Heading
                    color="black"
                    mb={7} // Updated margin-bottom
                    textAlign="left"
                    fontSize={{ base: "130%" }}
                >
                    Adoption Process & Fees:
 
                </Heading>

                <Heading
                    color="red"
                    mb={7} // Updated margin-bottom
                    textAlign="left"
                    fontSize={{ base: "100%" }}
                >
                    <p><a href="https://www.arl-iowa.org/adopt/adoption-process/
                ">CLICK HERE!! </a></p>
                
                </Heading>
                
                
                
                <Heading
                    color="black"
                    mb={7} // Updated margin-bottom
                    textAlign="left"
                    fontSize={{ base: "130%" }}
                >
                    Volunteer: Choose to give some love to homeless pets:
 
                </Heading>

                <Heading
                    color="red"
                    mb={7} // Updated margin-bottom
                    textAlign="left"
                    fontSize={{ base: "100%" }}
                >
                    <p><a href="https://www.arl-iowa.org/get-involved/volunteer/
                ">CLICK HERE!! </a></p>
                
                </Heading>








                
                
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
                zIndex="0"
            />
        </Box>
    );
}

export default App;