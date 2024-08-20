import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Button, Link } from "@chakra-ui/react";

export default function Layout() {
    const navigate = useNavigate()
    const [user, setUser] = useState({});
    const [showMobileNav, setShowMobileNav] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        let parseUser = localStorage.getItem("user") || "";
        parseUser = JSON.parse(parseUser);
        console.log("parse user", parseUser)
        if (parseUser != "") {
            setUser(parseUser)
        } else {
            navigate("/login")
        }

        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < 768);
        });
    }, []);

    
    const buttonStyle = {
        backgroundColor: "",
        border: "5px",
        borderRadius: "20px",
        padding: "20px",
        fontWeight: 800,
        fontSize: 20,
        color: " #413d3c "
        
    }

    const mobileButtonStyle = {
        //backgroundColor: "", 
        padding: "10px",
        fontWeight: 600, 
    }

    return (
        <Box as={"main"} backgroundColor={"rgb(108, 117, 125)"}>
            <Box as={"nav"} display={"flex"} justifyContent={"center"} alignItems={"center"}
                backgroundColor={"#5dbab1"}
                padding={"12px 0px"}
                boxShadow={"0 2px 2px rgb(52 172 145 / 80%)"}
                gap={"20px"}
            >
                {/* DESKTOP NAV BAR */}
                {isMobile != true &&
                
                <Box display={"flex"} gap={"40px"}>
                    <Link {...buttonStyle} href="/">Home</Link>
                    <Link {...buttonStyle} href="/#/gallery">Cat Breeds</Link>
                    <Link {...buttonStyle} href="/#/advice">Submit Advices</Link>
                    <Link {...buttonStyle} href="/#/favorites">Helpful Advices</Link>
                    <Link {...buttonStyle} href="/#/contacts">Contacts</Link>
                    <Link {...buttonStyle} href="/#/about">About Us</Link>
                    <Button className="g-button" onClick={() => {
                        localStorage.removeItem("user");
                        navigate('/login')
                    }}>Logout</Button>
                </Box>
                }

                {/* Mobile Nav Bar */}
                {isMobile &&
                    <Box width="95%" display={"flex"}  justifyContent={"flex-end"}>
                        <Button onClick={()=> {
                            if (showMobileNav)
                                setShowMobileNav(false);
                            else
                                setShowMobileNav(true);
                            console.log("showMobileNav", showMobileNav)
                        }}>Menu</Button>
                    </Box>
                }
                

            </Box>
            <Outlet context={[user, setUser]} />

            {/* <Box display={'flex'} flexDir={'row'} gap={10}>
                <span>BuildTime: {import.meta.env.VITE_BUILD_TIME ?? 'DEV_HOT_RELOAD'}</span>
                <span>BuildID: {import.meta.env.VITE_BUILD_ID ?? 'DEV_HOT_RELOAD'}</span>
            </Box> */}

          
        {/* DISPLAY MOBILE NAV */}
        {isMobile && showMobileNav && 
            <Box 
            
                position={"fixed"} 
                zIndex={10} 
                display={"flex"} 
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
               <Button onClick={()=> {
                        setShowMobileNav(false);
                        console.log("showMobileNav", showMobileNav)
                    }}>Close</Button>

                
                <Link {...mobileButtonStyle} href="/">Home</Link>
                <Link {...mobileButtonStyle} href="/#/gallery">Cat Breeds</Link>
                <Link {...mobileButtonStyle} href="/#/advice">Submit Advices</Link>
                <Link {...mobileButtonStyle} href="/#/favorites">Helpful Advices</Link>
                <Link {...mobileButtonStyle} href="/#/contacts">Contacts</Link>
                <Link {...mobileButtonStyle} href="/#/about">About Us</Link>
                <Button className="g-button" width={"24"} margin={0} onClick={() => {
                    localStorage.removeItem("user");
                    navigate('/login')
                }}>Log Out</Button>
            </Box>
        }
           
        </Box>
    );
}
