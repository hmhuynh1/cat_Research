import { Box } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box
            as="footer"
            className="content-wrapper text-content"
            padding="15px"
        >
            <Box as="span" color="white">
                © Copyright, Made by: Hong Huynh
            </Box>
        </Box>
    );
}
