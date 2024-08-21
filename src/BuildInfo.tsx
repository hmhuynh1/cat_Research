import { Box } from "@chakra-ui/react";

export default function BuildInfo() {
    return (<Box display={'flex'} flexDir={'row'} gap={10}>
        <span>BuildTime: {import.meta.env.VITE_BUILD_TIME ?? 'DEV_HOT_RELOAD'}</span>
        <span>BuildID: {import.meta.env.VITE_BUILD_ID ?? 'DEV_HOT_RELOAD'}</span>
    </Box>);
}