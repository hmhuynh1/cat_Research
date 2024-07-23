import {Box, Heading, Img, Text} from "@chakra-ui/react";
import homeCat from "./assets/g1.jpg"
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
          
            <Box as={"main"} padding={"20px"} className="content-wrapper text-and-image">
                <Heading color={"white"}>
                    Welcome to About Cats
                </Heading>
                <Img src={homeCat} maxW={"250px"} borderRadius={"10px"}
                margin={"10px 0px 10px 0px"}/>
                <div className="text-content">
                <Text color={"white"}>
                    From ancient Egyptians to today’s cat is always mean something to the cat owner. People have always loved their cats.
                    In the U.S. alone, cats reign over about 45.3 million households. There are at least 45 domestic breeds, which differ widely in features such as coat color, tail length, hair texture, and temperament, according to the Cat Fancier’s Association.
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
