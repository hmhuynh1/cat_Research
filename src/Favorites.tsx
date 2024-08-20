import { Box, Flex, Text, Heading, Link, Img } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CA from "./assets/C-ADVICE.jpg";

export default function Favorites() {
  const [data, setData] = useState([]);

  const getCat = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_SERVER_URI + "cat-feed");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const d = await response.json();
      console.log("check", d);
      setData(d.data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    getCat();
  }, []);


  console.log("data", data)
  return (
    <Box
      minHeight="105vh"
      backgroundImage={`url(${CA})`}
      backgroundSize="cover"
      backgroundPosition="center"
      padding={"20px"}
      color="white" // Ensure text is visible over background
    >
      <Heading  color="black" mb="4" >Helpful Advices</Heading>
      <section>
        <Box  id="center" display={["none", "block"]}>
          {/* <section id="search-form-section" className="d-flex flex-column gap-2">
            <form method="get" className="d-flex flex-column gap-4">
              <input
                type="search"
                className="w-full p-2"
                name="query"
                placeholder="Type cat advice..."
                id="search-box"
              />
              <div className="flex-row justify-content-center">
                <button type="submit" id="search-btn">
                  Search
                </button>
                <button type="button" id="clear-btn">
                  Clear
                </button>
              </div>
            </form>
          </section> */}
        </Box>

        <section className="mt-4">
          <Flex gap={"20px"} wrap="wrap">
            {data.map((x: any, i) => (
              <Box
                key={i}
                flex={"1 1 20%"}
                border={"solid 1px white"}
                padding={"20px"}
                bg="rgba(0, 0, 0, 0.5)" // Optional: semi-transparent background for readability
              >
                <Img src={import.meta.env.VITE_SERVER_URI + "uploads/collection/" + x.picture} maxW="250px" />
                <Text color="yellowgreen">
                <Text as="strong" fontWeight={"bold"} color="black"> 
                  URL Link: 
                  </Text>
                  
                  
                  
                  
                  <Link href={x.link}>{x.link}</Link>
                </Text>
                <Text>
                  <Text as="strong" fontWeight={"bold"} color="black">Cat Breed:</Text> {x.breed}</Text>
                
                <Text>
                <Text as="strong"  fontWeight={"bold"} color="black">
                  Food or Toy: </Text>{x.foodtoy}</Text>
                <Text>
                <Text as="strong" fontWeight={"bold"} color="black">
                  Advices:
                  </Text> {x.advice}</Text>
              </Box>
            ))}
          </Flex>
        </section>
      </section>
    </Box>
  );
}