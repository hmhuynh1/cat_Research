import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text,
    useToast
} from "@chakra-ui/react";

const ResetPassword = () => {
    const params = new URLSearchParams(window.location.href.split("?").at(-1));
    const token = params.get("token");
    const navigate = useNavigate();
    const toast = useToast();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Check if token is present
        if (!token) {
            toast({
                title: "Invalid Token",
                description: "No reset token found in the URL.",
                status: "error",
                duration: 5000,
                isClosable: true
            });
            history.push("/"); // Redirect if token is missing
        }
    }, [token, navigate, toast]);

    const handleSubmit = async e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast({
                title: "Password Mismatch",
                description: "Passwords do not match.",
                status: "error",
                duration: 5000,
                isClosable: true
            });
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                `${import.meta.env.VITE_SERVER_URI}reset-password`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ token, newPassword: password })
                }
            );

            if (!response.ok) {
                throw new Error("Password reset failed");
            }

            toast({
                title: "Success",
                description: "Password has been reset successfully.",
                status: "success",
                duration: 5000,
                isClosable: true
            });

            navigate("/login"); // Redirect to login page after success
        } catch (error) {
            toast({
                title: "Error",
                description:
                    error?.message ||
                    "An error occurred while resetting the password.",
                status: "error",
                duration: 5000,
                isClosable: true
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
            <Stack spacing={4}>
                <Text fontSize="2xl" textAlign="center">
                    Reset Password
                </Text>
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel htmlFor="password">New Password</FormLabel>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter new password"
                        />
                    </FormControl>
                    <FormControl isRequired mt={4}>
                        <FormLabel htmlFor="confirmPassword">
                            Confirm Password
                        </FormLabel>
                        <Input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            placeholder="Confirm new password"
                        />
                    </FormControl>
                    <Button
                        mt={4}
                        colorScheme="blue"
                        type="submit"
                        isLoading={loading}
                        loadingText="Resetting..."
                    >
                        Reset Password
                    </Button>
                </form>
            </Stack>
        </Box>
    );
};

export default ResetPassword;
