import {Box, Flex, Text, Heading, Link} from "@chakra-ui/react";
import {useEffect, useState} from "react";

export default function Favorites(){

    const [data, setData] = useState([])
    const getCat = async ()=> {
        const response = await fetch('http://localhost:3001/cat');
        const d = await response.json();
        console.log("check",d)
        setData(d);

    }

    useEffect(() => {
        getCat()
    }, []);

    return <Box padding={"20px"}>
        <Heading>Helpful Advices</Heading>
        <section>

            <div id="center">
                <section id="search-form-section d-flex flex-column gap-4">

                    <form asp-action="Advice" method="get" className="d-flex flex-column gap-4">

                        <input type="search" className="w-full p-2" name="query"
                               placeholder="Type cat advice..." id="search-box"/>

                        <div className="flex-row justify-content-center">
                            <button type="submit" id="search-btn">
                                Search
                            </button>
                            <button  id="clear-btn" name="clear">
                                clear
                            </button>

                        </div>
                    </form>


                </section>
            </div>
            <section  className="mt-4">
                  <Flex gap={"20px"}>
                    {
                        data.map((x:any, i) => {
                            return <Box key={i} flex={"1 1 32%"} color={"white"} border={"solid 1px white"}
padding={"20px"}
                            >
                                <h4 color={"yellowgreen"}><Link href={x.link}>{x.link}</Link></h4>
                                <Link href='https://chakra-ui.com' isExternal></Link>
                                <Text>{x.breed}</Text>
                                <Text>{x.food}</Text>
                                <Text>{x.toy}</Text>
                                <Text>{x.advice}</Text>
                            </Box>
                        })
                    }

                  </Flex>
            </section>

        </section>


    </Box>
}