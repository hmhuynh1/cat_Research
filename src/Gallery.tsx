import './App.css'
import {Box, Heading, Img, Text} from "@chakra-ui/react";
import H1 from "./assets/g1.jpg"
import H2 from "./assets/Birman.jpg"
import H3 from "./assets/RussianBlue.jpg"
import H4 from "./assets/Selkirk_rex.jpg"
import H5 from "./assets/Bengal.jpg" 
import H6 from "./assets/BritishShorthair.jpg" 
import H7 from "./assets/DevonRex.jpg"
import H8 from "./assets/ExoticShorthair.jpg"
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
      <><Box as="main" padding="20px" className="content-wrapper">
      <Heading color="white">TOP 20 CAT BREEDS</Heading>
    
      <Box className="breed-container">
        <Box className="breed-info">
        <br></br><Text color="#22CE83">Mackerel Tabby</Text>
          <Img src={H1} maxW="220px" borderRadius="20px" margin="10px 0" />
          <Text color="white">
            They're usually friendly, intelligent,
            affectionate, vocal, active, and quiet.
            Tabby owners can live happily with 
            their kitties in homes of all sizes.
          </Text>
        </Box>
    
        <Box className="breed-info">
        <br></br><Text color="#22CE83">BIRMAN</Text>
          <Img src={H2} maxW="310px" borderRadius="20px" margin="10px 0" />
          <Text color="white">
            The Birman, also called the "Sacred Cat of Burma",
            is a domestic cat breed. The Birman is a long-haired,
            colour-pointed cat distinguished by a silky coat,
            deep blue eyes, and contrasting white "gloves" on each paw.
          </Text>
        </Box>
    
        <Box className="breed-info">
        <br></br><Text color="#22CE83">RUSSIAN BLUE</Text>
          <Img src={H3} maxW="310px" borderRadius="20px" margin="10px 0" />
          <Text color="white">
            A beautiful silver-blue coat and vibrant green eyes
            make the Russian Blue,is a domestic cat breed. The Birman is a long-haired,
            colour-pointed cat distinguished by a silky coat,
            deep blue eyes, and contrasting white "gloves" on each paw.
          </Text>
        </Box>

        <Box className="breed-info">
        <br></br><Text color="#22CE83">Selkirk Rex</Text>
          <Img src={H4} maxW="310px" borderRadius="20px" margin="10px 0" />
          <Text color="white">
          Selkirk Rex is a loving, very affectionate cat that tends to require attention. 
          Although she's not overly persistent or demanding,she gets what she wants. 
          But she'll definitely snuggle up with you while you're on the couch, at your desk, 
          or anywhere you happen to sit.
          </Text>
        </Box>

        <Box className="breed-info">
          <Text color="#22CE83">Bengal</Text>
          <Img src={H5} maxW="310px" borderRadius="20px" margin="10px 0" />
          <Text color="white">
          Bengal cats are very loving, loyal and a dedicated part of the family unit 
          as they possess a good temperament with children. They are commonly very playful 
          and enjoy interaction with people on a regular basis to show off their cheeky 
          sense of humour and mischievous nature.
          </Text>
        </Box>

        <Box className="breed-info">
          <Text color="#22CE83">British Shorthair</Text>
          <Img src={H6} maxW="310px" borderRadius="20px" margin="10px 0" />
          <Text color="white">
          These cats are happy to entertain themselves or spend time with their owner 
          and are typically sedentary. As far as grooming needs go, 
          the British shorthair may require extra brushing during spring and fall shedding.
         They are calm and easygoing with other humans and animals,affectionate, and easily trained.
          
          </Text>
        </Box>
        
        <Box className="breed-info">
          <Text color="#22CE83">Devon Rex</Text>
          <Img src={H7} maxW="310px" borderRadius="20px" margin="10px 0" />
          <Text color="white">
          Devon rex cats can be crafty, and tend to do well around other people and animals, 
          Their coats are unique and soft, with either short or wavy fur, 
          and can easily be kept groomed by simply rubbing a warm washcloth through their fur. 
          They are moderately active, so make sure to have lots of toys on hand.
          
          </Text>
        </Box>

        <Box className="breed-info">
          <Text color="#22CE83">Exotic Shorthair</Text>
          <Img src={H8} maxW="310px" borderRadius="20px" margin="10px 0" />
          <Text color="white">
          Exotic Shorthair is a quiet breed, perfect for cat naps on your lap  
          Because of their short hair, you can get away with brushing them about once a week, 
          making them ideal for busy families. flat face and a coat that comes in many different colors.
          
          </Text>
        </Box>

      </Box>
    </Box><br /><br />







 
    <Box as="footer" className="content-wrapper text-content" padding="20px">
      <Box as="span" color="white">© Copyright, Made by: Hong Huynh</Box>
    </Box>
      </>

  )
}

export default App
