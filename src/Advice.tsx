import { Box, Flex, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import React, { FormEvent, useState } from "react";
import catBG from "./assets/advice.png"; // Ensure this path is correct

export default function Advice() {
    const [form, setForm] = useState<{
        picture: File | null;
        breed: string;
        link: string;
        food: string;
        toy: string;
        advice: string;
    }>({
        picture: null, // Add state for the file
        breed: "",
        link: "",
        food: "",
        toy: "",
        advice: ""
    });

    // Handler for input changes
    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setForm((formData) => ({
                ...formData,
                picture: e.target.files![0] // Update state with the selected file
            }));
        }
    };
    
    // Form submission handler
    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("breed", form.breed);
        formData.append("link", form.link);
        formData.append("food", form.food);
        formData.append("toy", form.toy);
        formData.append("advice", form.advice);
        if (form.picture) {
            formData.append("picture", form.picture);
        }

        try {
            const response = await fetch(import.meta.env.VITE_SERVER_URI + `upload-magic`, {
                method: "POST",
                body: new FormData(e.target)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);

            setForm({
                picture: null,
                breed: "",
                link: "",
                food: "",
                toy: "",
                advice: ""
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Box
            backgroundImage={`url(${catBG})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            padding="40px"
            minHeight="80vh"
        >
            <Flex
                direction={["column", "column", "row"]}
                gap="30px"
                padding="5px"
                justify="flex-start"
                align="center"
            >
                <Box
                    as="section"
                    fontWeight={50}
                    padding="30px"
                    bg="rgba(0, 0, 0, 0.8)"
                    borderRadius="md"
                    maxWidth="450px"
                    width="100%"
                >
                    <Heading textAlign="center" fontSize="30px" color="white" mb={2}>
                        Submit Advice
                    </Heading>
                    <form onSubmit={submitHandler}>
                        <FormControl id="picture" mb={1} isRequired>
                            <FormLabel color="white">Upload Picture:</FormLabel>
                            <Input
                                type="file"
                                name="uploaded_file"
                                accept="image/*"
                                onChange={fileChangeHandler}
                                bg="white"
                                color="black"
                            />
                        </FormControl>

                        <FormControl id="breed" mb={1} isRequired>
                            <FormLabel color="white">Cat Breed:</FormLabel>
                            <Input
                                name="breed"
                                type="text"
                                value={form.breed}
                                onChange={changeHandler}
                                placeholder="Your cat breed"
                                bg="white"
                                color="black"
                            />
                        </FormControl>

                        

                        <FormControl id="food" mb={1} isRequired>
                            <FormLabel color="white">Food Brand:</FormLabel>
                            <Input
                                name="food"
                                type="text"
                                value={form.food}
                                onChange={changeHandler}
                                placeholder="Food brand"
                                bg="white"
                                color="black"
                            />
                        </FormControl>

                        <FormControl id="link" mb={1} isRequired>
                            <FormLabel color="white">Where to buy:</FormLabel>
                            <Input
                                name="link"
                                type="text"
                                value={form.link}
                                onChange={changeHandler}
                                placeholder="URL website link"
                                bg="white"
                                color="black"
                            />
                        </FormControl>

                        <FormControl id="toy" mb={1} isRequired>
                            <FormLabel color="white">Toy Brand:</FormLabel>
                            <Input
                                name="toy"
                                type="text"
                                value={form.toy}
                                onChange={changeHandler}
                                placeholder="Toy brand"
                                bg="white"
                                color="black"
                            />
                        </FormControl>


                        <FormControl id="advice" mb={1} isRequired>
                            <FormLabel color="white">Advice:</FormLabel>
                            <Textarea
                                name="advice"
                                value={form.advice}
                                onChange={changeHandler}
                                placeholder="Advice about this item"
                                resize="vertical"
                                bg="white"
                                color="black"
                            />
                        </FormControl>

                        <Button
                            type="submit"
                            colorScheme="teal"
                            width="full"
                            mt={4}
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Flex>
        </Box>
    );
}