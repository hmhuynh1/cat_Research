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
import H9 from "./assets/MaineCoon.jpg"
import H10 from "./assets/Norwegian_forest.jpg"
import H11 from "./assets/Persian.jpg"
import H12 from "./assets/Siamese.jpg"
import H13 from "./assets/Siberian.jpg"


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
          <Img src={H1} maxW="200px" borderRadius="20px" margin="10px 0" />
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

        <Box className="breed-info">
          <Text color="#22CE83">Maine Coon</Text>
          <Img src={H9} maxW="310px" borderRadius="20px" margin="10px 0" />
          <Text color="white">
          Known as gentle giants, the Maine coon cat can weigh up to 20 pounds, making them the largest of pedigreed cats, 
          Maine coon cats are friendly, great with kids and known for their incredible intelligence. 
          They often like to play, especially in the water, Their coats only require occasional grooming to keep them silky smooth.
          
          </Text>
        </Box>
       
        <Box className="breed-info">
          <Text color="#22CE83">Norwegian Forest</Text>
          <Img src={H10} maxW="310px" borderRadius="20px" margin="10px 0" />
          <Text color="white">
          The large, semi-long-haired Norwegian forest cat has a waterproof double coat. 
          Their coats can come in any color but often feature a tabby brown-and-white fur. They have large, 
          almond-shaped eyes and a triangle-shaped head. This breed is active and requires scratching posts 
          and toys to keep their attention. They are also adaptable and social when they want to be. 
          Although they are a gentle, calm breed, they are not considered “lap cats.”
          </Text>
        </Box> 

        <Box className="breed-info">
          <Text color="#22CE83">Persian</Text>
          <Img src={H11} maxW="310px" borderRadius="20px" margin="10px 0" />
          <Text color="white">
          Many people consider Persian cats “the epitome of feline beauty.” 
          and they are beautiful to behold. Like the exotic shorthair, Persian cats are quiet and charming.
          These cats have long coats that require daily brushing and occasional baths to prevent mats and tangles. 
          Persian cats have luxurious coats in white, black, blue, cream, chocolate and red. 
          Persian cats will also need daily exercise to stay happy and healthy.
        
          </Text>
        </Box>

        <Box className="breed-info">
          <Text color="#22CE83">Siamese</Text>
          <Img src={H12} maxW="310px" borderRadius="20px" margin="10px 0" />
          <Text color="white">
          The Siamese is one of the most easily recognizable cat breeds known for their light, 
          silky coats with dark legs, tail, and facial area. They have deep blue, 
          almond-shaped eyes and prominent ears. The Siamese have intelligent, 
          curious personalities and are social cats known for talking with a distinct voice. 
          This is a cat that will enjoy being with you at all times. 
          </Text>
        </Box>

        <Box className="breed-info">
          <Text color="#22CE83">Siberian</Text>
          <Img src={H13} maxW="310px" borderRadius="20px" margin="10px 0" />
          <Text color="white">
          Siberian cats are considered a “national treasure” in Russia, according to the CFA, 
          and have been in the U.S. since 1990. This cat is strong and alert with a dense triple coat and bushy tail. 
          Their coats can come in all color and pattern combinations, with only minimal brushing required to keep tangles at bay. 
          They are an affectionate, playful breed that loves spending time with people.
          
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
