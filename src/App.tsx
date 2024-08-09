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
        <>
            <Box
                backgroundImage={`url(${catB})`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                minHeight="100vh"
                display="flex"
                flexDirection="column"
            >
                <Box
                    as="main"
                    padding="20px"
                    flex="1"
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start" // Aligns content to the top
                    alignItems="flex-start" // Aligns content to the left
                    pt="80px" // Adjust this value to move content up
                >
                    <div className="text-content" style={{ textAlign: 'lelt' }}>
                        <Heading color="black" mb={4}>
                            Welcome to Cats Research
                        </Heading>
                        <Text color="black" mb={4}>
                            If you are a cat owner or being a cat owner, you will love cat research.<b></b> 
                            Cat research is the place where you can get all kinds of information about cats.<b></b> 
                            Like how to adopt a cat, what is the cat breed like in the cat breeds page that you will love. <b></b> 
                            What to be prepared for your new cat, what are the good brands of cat foods and toys that will work for your cat,
                            and all the fun facts about cats. 
                            In cat research, you also get all the helpful advice that all the other cat owners have experienced with their cats.
                        </Text>
                       
                    </div>
                </Box>
                


                <Box as="footer" padding="20px" textAlign="center">
                    <Box as="span" color="white">© copyright, Made by: Hong Huynh</Box>
                </Box>
            </Box>
        </>
    );
}

export default App;