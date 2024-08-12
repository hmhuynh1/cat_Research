import { Box, Flex, Heading, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import React, { FormEvent, useState } from 'react';
import catBG from './assets/catHi.jpg'; // Ensure this path is correct

export default function Advice() {
	const [form, setForm] = useState({
		first: '',
		last: '',
		email: '',
		comment: '',
	});

	// Handler for input changes
	const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	// Form submission handler
	const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await fetch(import.meta.env.SERVER_URL + '/contacts', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(form),
			});

			// Check if response is ok
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const data = await response.json();
			console.log(data);

			// Clear form on successful submission
			setForm({
				first: '',
				last: '',
				email: '',
				comment: '',
			});
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	};

	return (
		<Box backgroundImage={`url(${catBG})`} backgroundSize='cover' backgroundPosition='center' backgroundRepeat='no-repeat' padding='40px' minHeight='100vh'>
			<Flex
				direction={['column', 'column', 'row']}
				gap='20px'
				padding='20px'
				justify='flex-start' // Align items to the left
				align='center'
				marginLeft='0' // Adjust this to move the content to the left
			>
				<Box
					as='section'
					fontWeight={400}
					padding='20px'
					bg='rgba(0, 0, 0, 0.6)' // Slightly darker for better readability
					borderRadius='md'
					maxWidth='500px'
					width='100%'
					marginLeft='0' // Ensure there's no additional left margin
				>
					<Heading textAlign='center' fontSize='30px' color='white' mb={6}>
						Contact Us
					</Heading>
					<form
						onSubmit={(e) => {
							submitHandler(e);
						}}
					>
						<FormControl id='first-name' mb={4} isRequired>
							<FormLabel color='white'>First Name</FormLabel>
							<Input name='first' type='text' value={form.first} onChange={changeHandler} placeholder='Enter your first name' bg='white' color='black' />
						</FormControl>

						<FormControl id='last-name' mb={4} isRequired>
							<FormLabel color='white'>Last Name</FormLabel>
							<Input name='last' type='text' value={form.last} onChange={changeHandler} placeholder='Enter your last name' bg='white' color='black' />
						</FormControl>

						<FormControl id='email' mb={4} isRequired>
							<FormLabel color='white'>Email</FormLabel>
							<Input name='email' type='email' value={form.email} onChange={changeHandler} placeholder='Enter your email' bg='white' color='black' />
						</FormControl>

						<FormControl id='comment' mb={4} isRequired>
							<FormLabel color='white'>Comment</FormLabel>
							<Textarea
								name='comment'
								value={form.comment}
								onChange={changeHandler}
								placeholder='Enter your comment'
								resize='vertical'
								bg='white'
								color='black'
							/>
						</FormControl>

						<Button
							type='submit'
							colorScheme='teal'
							width='full'
							mt={4} // Margin-top for better spacing
						>
							Submit
						</Button>
					</form>
				</Box>
			</Flex>
		</Box>
	);
}
