import "./App.css"
import {Box, Flex, Heading} from "@chakra-ui/react";

import { useState} from "react";
export default function Advice(){

    const [form, setForm] = useState({
        first: "",
        last: "",
        email: "",
        comment: ""
    })
    const changeHandler = (e: any)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = async (e: any)=>{
        e.preventDefault();

        const response = await fetch("http://localhost:3001/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first: e.target.first.value,
                last: e.target.last.value,
                email: e.target.email.value,
                comment: e.target.comment.value,

            }),

        });
        const data = await response.json();
        console.log(data)
        setForm({
            first: "",
            last: "",
            email: "",
            comment: "",
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
                     id="Add-book-form-section" className="p-3">
                    <Heading textAlign={"center"}
                    fontSize={"30px"}>Contact Us</Heading>
                    <form 
                         onSubmit={submitHandler}
                         id="book-submit-form" asp-action="Contacts" className="d-flex flex-column gap-2"
                         
                    >
                    {/* <form id="contactForm" action="mailto:bookswaphsh@gmail.com" 
                          className="d-flex flex-column gap-2" encType="text/plain"  method="post" > */}
                        <fieldset>
                            <label htmlFor="">First Name: </label>
                            <input
                                 onChange={changeHandler}
                                value={form.first}
                                name="first" type="text" placeholder=""/>
                        </fieldset>

                        <fieldset>
                            <label htmlFor=""> Last Name: </label>
                            <input  name="last" type="text"
                                onChange={changeHandler}
                                   value={form.last}
                                   placeholder=""/>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="">Email: </label>
                            <input name="email" type="text"
                                onChange={changeHandler}
                                   value={form.email}
                                   placeholder=""/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="">Comment: </label>
                            <textarea style={{color: "black"}}
                                    onChange={changeHandler}
                                   value={form.comment} name="comment"/>
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