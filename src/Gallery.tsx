import './App.css'
import {Box, Heading, Img, Flex, Text, Divider} from "@chakra-ui/react";
import g1 from "./assets/homeCat.jpg"
import g2 from "./assets/g2.jpg"
import g3 from "./assets/g3.jpg"
function Gallery() {


    return (
        <>
            <Box as={"main"} padding={"20px"} className="content-wrapper text-and-image">
                <Heading color={"yellowgreen"}>
                    Cat Gallery
                </Heading>
                <Text color={"white"}>
                    Welcome to our Cat Gallery! Here you can find some cute photos of cats shared by our cat owner.
                </Text>


            </Box>
            <Flex gap={"20px"} padding={"20px"} color={"white"}>
                <Box flex={"1 1 32%"}
                     border={"solid 1px white"}
                     padding={"20px"}
                >
                    <Img src={g1}
                         height={"500px"}
                         objectFit={"contain"}
                    />
                    <Divider mt={"20px"}/>
                    <Heading color={"yellowgreen"}>My name is Kenzy</Heading>
                    <Text>
                        I am a Mackerel Tabby, I love tuna, play toy and try new foods.
                    </Text>
                </Box>
                <Box flex={"1 1 32%"}
                     border={"solid 1px white"}
                     padding={"20px"}
                >
                    <Img src={g2}
                         height={"400px"}
                         objectFit={"contain"}
                    />
                    <Divider mt={"20px"}/>
                    <Heading color={"yellowgreen"}>My name is Ambrosia</Heading>
                    <Text>
                        I am a American short hairs, I riding on my ower shoulder, and knocking stuff over.
                    </Text>
                </Box>
                <Box flex={"1 1 32%"}
                     border={"solid 1px white"}
                     padding={"20px"}
                     flexDirection={"column"}
                >

                    <Img src={g3}
                         height={"400px"}
                         objectFit={"contain"}
                    />

                    <Divider mt={"20px"}/>
                    <Heading color={"yellowgreen"}>My name is Waldorf</Heading>
                    <Text>
                        I am a American short hairs, I likes napping with my sister.
                    </Text>

                </Box>
            </Flex>


        </>

    );
}

export default Gallery
