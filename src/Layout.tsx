import { useEffect, useState } from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { Box, Button, useBreakpointValue, Image } from "@chakra-ui/react";
import logo from "./assets/cat-3d.png"; // Import the logo
import Footer from "./Footer";

const getUserFromLocalStorage = () => {
    const lsUserJson = localStorage.getItem("user") || "null";
    return JSON.parse(lsUserJson);
};

export default function Layout() {
    const navigate = useNavigate();
    const [user, setUser] = useState(getUserFromLocalStorage);
    const [showMobileNav, setShowMobileNav] = useState(false);

    const isMobile = useBreakpointValue({ base: true, md: false });

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    return (
        <Box as="main" backgroundColor="rgb(black)">
            <Box
                as="nav"
                display="flex"
                alignItems="center"
                backgroundColor="#5dbab1"
                padding="20px 0px"
                boxShadow="0 2px 2px rgba(52, 172, 145, 0.8)"
                gap="10px"
                position="relative" // For positioning the logo
            >
                {/* Logo */}
                <Box position="absolute" left="20px" top="50%" transform="translateY(-50%)">
                    <Image src={logo} alt="Logo" boxSize="110px" objectFit="contain" borderRadius="50px"/>
                </Box>

                {/* DESKTOP NAV BAR */}
                <Box
                    display="flex"
                    flex="1"
                    justifyContent="center"
                    gap="40px"
                    marginLeft="70px" // To avoid overlap with the logo
                >
                    {!isMobile && (
                        <>
                            <NavLink to="/" style={({ isActive }) => ({
                                fontWeight: isActive ? 'bold' : 'normal',
                                fontSize: "20px",
                                color: "#413d3c"
                            })}>
                                Home
                            </NavLink>
                            <NavLink to="/gallery" style={({ isActive }) => ({
                                fontWeight: isActive ? 'bold' : 'normal',
                                fontSize: "20px",
                                color: "#413d3c"
                            })}>
                                Cat Breeds
                            </NavLink>
                            <NavLink to="/advice" style={({ isActive }) => ({
                                fontWeight: isActive ? 'bold' : 'normal',
                                fontSize: "20px",
                                color: "#413d3c"
                            })}>
                                Submit Advice
                            </NavLink>
                            <NavLink to="/favorites" style={({ isActive }) => ({
                                fontWeight: isActive ? 'bold' : 'normal',
                                fontSize: "20px",
                                color: "#413d3c"
                            })}>
                                Helpful Advice
                            </NavLink>
                            <NavLink to="/contacts" style={({ isActive }) => ({
                                fontWeight: isActive ? 'bold' : 'normal',
                                fontSize: "20px",
                                color: "#413d3c"
                            })}>
                                Contacts
                            </NavLink>
                            <NavLink to="/about" style={({ isActive }) => ({
                                fontWeight: isActive ? 'bold' : 'normal',
                                fontSize: "20px",
                                color: "#413d3c"
                            })}>
                                About Us
                            </NavLink>
                            {user && (
                                <Button onClick={handleLogout}>
                                    Logout
                                </Button>
                            )}
                        </>
                    )}
                </Box>

                {/* MOBILE NAV BAR */}
                {isMobile && (
                    <Box width="95%" display="flex" justifyContent="flex-end">
                        <Button onClick={() => setShowMobileNav(!showMobileNav)}>
                            Menu
                        </Button>
                    </Box>
                )}
            </Box>

            <Outlet context={[user, setUser]} />
            <Footer />

            {/* DISPLAY MOBILE NAV */}
            {isMobile && showMobileNav && (
                <Box
                    position="fixed"
                    zIndex={10}
                    display="flex"
                    flexDirection="column"
                    gap="1rem"
                    right={0}
                    top={0}
                    height="100vh"
                    width="250px"
                    backgroundColor="#5dbab1"
                    boxShadow="2px 0 5px rgba(0,0,0,0.5)"
                    padding="1rem"
                >
                    <Button onClick={() => setShowMobileNav(false)}>Close</Button>
                    <NavLink to="/" style={{ fontWeight: 600, fontSize: "16px", color: "#413d3c" }}>
                        Home
                    </NavLink>
                    <NavLink to="/gallery" style={{ fontWeight: 600, fontSize: "16px", color: "#413d3c" }}>
                        Cat Breeds
                    </NavLink>
                    <NavLink to="/advice" style={{ fontWeight: 600, fontSize: "16px", color: "#413d3c" }}>
                        Submit Advice
                    </NavLink>
                    <NavLink to="/favorites" style={{ fontWeight: 600, fontSize: "16px", color: "#413d3c" }}>
                        Helpful Advice
                    </NavLink>
                    <NavLink to="/contacts" style={{ fontWeight: 600, fontSize: "16px", color: "#413d3c" }}>
                        Contacts
                    </NavLink>
                    <NavLink to="/about" style={{ fontWeight: 600, fontSize: "16px", color: "#413d3c" }}>
                        About Us
                    </NavLink>
                    {user && (
                        <Button width="100%" onClick={handleLogout}>
                            Log Out
                        </Button>
                    )}
                </Box>
            )}
        </Box>
    );
}