
import "./App.css"
import {Box, Flex, Heading} from "@chakra-ui/react";

import { useState} from "react";
export default function Advice(){

    const [form, setForm] = useState({
        name: "",
        breed: "",
        food: "",
        toy: "",
        advice: ""
    })


    const changeHandler = (e: any)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = async (e: any)=>{
        e.preventDefault();

        const response = await fetch("http://localhost:3001/cat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: e.target.name.value,
                breed: e.target.breed.value,
                food: e.target.food.value,
                toy: e.target.toy.value,
                advice: e.target.advice.value
            }),

        });
        const data = await response.json();
        console.log(data)
        setForm({
            name: "",
            breed: "",
            food: "",
            toy: "",
            advice: ""
        })
    }


    return <Flex>

        <main className="flex-columnav bg-secondary">


            <Flex flexDirection={["column", "column", "row"]}
            gap={"20px"}
                  padding={"20px"}
            >
                <Box as={"section"}
                     fontWeight={500}
                     padding={"20px"}
                     id="advice-form" className="p-3">
                    <Heading textAlign={"center"}
                    fontSize={"30px"} color="#22CE83">Cat Advice Submits</Heading>
                    <form method="post"
                         onSubmit={submitHandler}
                         id="book-submit-form" asp-action="Advice" className="d-flex flex-column gap-2"
                    >
                        <fieldset>
                            <label htmlFor="">Cat Name: </label>
                            <input
                                onChange={changeHandler}
                                value={form.name}
                                name="name" type="text" placeholder=""/>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="">Cat Breed</label>
                            <input onChange={changeHandler}  name="breed" type="text"
                                   value={form.breed}
                                   placeholder=""/>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="">Food Brand</label>
                            <input onChange={changeHandler} name="food" type="text"
                                   value={form.food}
                                   placeholder=""/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="">Toy Brand</label>
                            <input onChange={changeHandler}
                                   value={form.toy} name="toy" type="text" placeholder=""/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="">Advice</label>
                            <input
                                value={form.advice}
                                onChange={changeHandler} name="advice" type="text" placeholder=""/>
                        </fieldset>

                        <fieldset>
                            <input className="text-light" type="submit" value="SUBMIT"/>
                        </fieldset>


                    </form>
                </Box>


            </Flex>
        </main>

    </Flex>
}