import { Box, Heading, Text } from "@chakra-ui/react";

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
               
                backgroundSize="80% 50%" // Image size is 50% of the container's width and height
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                padding="40px"
                minHeight="90vh"
            >
                <Box as="main" padding="20px" className="content-wrapper2 text-and-image">
                    <div className="text-content">
                        <Heading color="white">Welcome to Cats Research</Heading>
                        <Text color="white" mt={4}>
                            If you are a cat owner or being a cat owner, you will love cat research. 
                            Cat research is the place where you can get all kinds of information about cats. 
                            Like how to adopt a cat, what is the cat breed like in the cat breeds page that you will love. 
                            What to be prepared for your new cat, what are the good brands of cat foods and toys that will work for your cat,
                            and all the fun facts about cats. 
                            In cat research, you also get all the helpful advice that all the other cat owners have experienced with their cats.
                        </Text>
                        <Heading color="#4ad326" mt={4}>
                            Let the fun begin and never end being a cat lover!!!
                        </Heading>
                    </div>
                </Box>

                <Box as="footer" className="content-wrapper text-content" padding="20px">
                    <Box as="span" color="white">© copyright, Made by: Hong Huynh</Box>
                </Box>
            </Box>
        </>
    );
}

export default App;