import { Box, Flex, Text, Heading, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CA from "./assets/C-ADVICE.jpg";

export default function Favorites() {
  const [data, setData] = useState([]);

  const getCat = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_SERVER_URI + "cat");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const d = await response.json();
      console.log("check", d);
      setData(d);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    getCat();
  }, []);

  return (
    <Box
      minHeight="105vh"
      backgroundImage={`url(${CA})`}
      backgroundSize="cover"
      backgroundPosition="center"
      padding={"20px"}
      color="black" // Ensure text is visible over background
    >
      <Heading mb="4">Helpful Advices</Heading>
      <section>
        <div id="center">
          <section id="search-form-section" className="d-flex flex-column gap-4">
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
          </section>
        </div>

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
                <Text color="yellowgreen">
                  <Link href={x.link}>{x.link}</Link>
                </Text>
                <Text>{x.food}</Text>
                <Text>{x.toy}</Text>
                <Text>{x.advice}</Text>
              </Box>
            ))}
          </Flex>
        </section>
      </section>
    </Box>
  );
}