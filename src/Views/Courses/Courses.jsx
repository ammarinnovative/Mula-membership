import { extendTheme, ChakraProvider, Center, Checkbox, ButtonGroup, CheckboxGroup, Circle, HStack, Box, Square, Flex, Text, Image, Button } from '@chakra-ui/react'
import Sidebar from "../../Components/Sidebar/Sidebar"
import Img1 from "../../Assets/Images/Courses/course1.jpg"
import Img2 from "../../Assets/Images/Courses/course2.jpg"
import Img3 from "../../Assets/Images/Courses/course3.jpg"
import Img4 from "../../Assets/Images/Courses/Image4.jpg"
import Img5 from "../../Assets/Images/Courses/image5.jpg"
import Img6 from "../../Assets/Images/Courses/Image6.jpg"
import Img7 from "../../Assets/Images/Courses/Image7.jpg"


export const Courses = () => {
    return (
        <Box>
            <Sidebar>
                <Box>
                    <Box>
                        <Button backgroundColor={"#1e2598"} margin={"10px 0"} width={{base:"100%",md:"40%",lg:"25%"}} _hover={"none"} marginRight="10px" px={"40px"} color="white" >Courses</Button>
                        <Button backgroundColor={"#1E2598"} margin={"10px 0"} width={{base:"100%",md:"40%",lg:"25%"}} px={"40px"} _hover={"none"} color="white">Membership Videos</Button>
                    </Box>
                    <Flex justifyContent={"space-between"}margin={"20px 0"} flexDirection={{base:"column",md:"column",lg:"row"}} alignItems={"center"}>
                        <Text fontSize={{base:"30px",md:"22px"}} fontFamily={"AvenirLT"} fontWeight={"bold"}>3 Crypto courses</Text>
                        <Button color={"#000000"} outline={"none"} fontSize={"16px"} width={{base:"100%",md:"100%",lg:"35%"}} size="md" border={"1px solid #000000"} backgroundColor={"#ffffff"} >
                            Create New Courses
                        </Button>
                    </Flex>
                    <Flex justifyContent={{ base: "center", md: "space-between" }} flexWrap={"wrap"} width={"100%"}>
                        <Box cursor={"pointer"} width={{ base: "80%", md: "40%", lg: "30%" }}>
                            <Image src={Img1} width={"100%"} marginTop={"50px"} alt={"Image"} />
                            <Text fontWeight={"600"} fontFamily={"Poppins700"} marginTop={"5px"} fontSize={"20px"}>Crypto Explained:Security Action</Text>
                            <Box marginTop={"15px"}>
                                <Box display={"flex"} fontSize={"20px"} color={"gray.600"} fontFamily={"Poppins400"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text>Category</Text>
                                    <Text>Videos</Text>
                                </Box>
                                <Box display={"flex"} fontSize={"20px"} color={"blue"} fontFamily={"Poppins400"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text>Crypto Trading</Text>
                                    <Text>11</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box cursor={"pointer"} width={{ base: "80%", md: "40%", lg: "30%" }}>
                            <Image src={Img2} width={"100%"} marginTop={"50px"} alt={"Image"} />
                            <Text fontWeight={"600"} fontFamily={"Poppins700"} marginTop={"5px"} fontSize={"20px"}>Crypto Explained:Security Action</Text>
                            <Box marginTop={"15px"}>
                                <Box display={"flex"} fontSize={"20px"} color={"gray.600"} fontFamily={"Poppins400"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text>Category</Text>
                                    <Text>Videos</Text>
                                </Box>
                                <Box display={"flex"} fontSize={"20px"} color={"blue"} fontFamily={"Poppins400"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text>Crypto Trading</Text>
                                    <Text>11</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box cursor={"pointer"} width={{ base: "80%", md: "40%", lg: "30%" }}>
                            <Image src={Img3} width={"100%"} marginTop={"50px"} alt={"Image"} />
                            <Text fontWeight={"600"} fontFamily={"Poppins700"} marginTop={"5px"} fontSize={"20px"}>Crypto Explained:Security Action</Text>
                            <Box marginTop={"15px"}>
                                <Box display={"flex"} fontSize={"20px"} color={"gray.600"} fontFamily={"Poppins400"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text>Category</Text>
                                    <Text>Videos</Text>
                                </Box>
                                <Box display={"flex"} fontSize={"20px"} color={"blue"} fontFamily={"Poppins400"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text>Crypto Trading</Text>
                                    <Text>11</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
                <Box>
                <Flex mt={"50px"} alignItems={"center"}>
                    <Text fontSize={"22px"} fontFamily={"poppins"} marginRight={"60px"} fontWeight={"bold"}>11 Stock Market Courses courses</Text>
                    <Text cursor={"pointer"} >View All</Text>
                </Flex>
                <Flex justifyContent={{ base: "center", md: "space-between" }} flexWrap={"wrap"} width={"100%"}>
                        <Box cursor={"pointer"} margin={"0 10px"} width={{ base: "80%", md: "45%", lg: "23%" }}>
                            <Image src={Img4} width={"100%"} marginTop={"50px"} alt={"Image"} />
                            <Text fontWeight={"600"} fontFamily={"Poppins700"} marginTop={"5px"} fontSize={"20px"}>Crypto Explained:Security Action</Text>
                            <Box marginTop={"15px"}>
                                <Box display={"flex"} fontSize={"20px"} color={"gray.600"} fontFamily={"Poppins400"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text>Category</Text>
                                    <Text>Videos</Text>
                                </Box>
                                <Box display={"flex"} fontSize={"20px"} color={"blue"} fontFamily={"Poppins400"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text>Crypto Trading</Text>
                                    <Text>11</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box cursor={"pointer"} margin={"0 10px"}  width={{ base: "80%", md: "45%", lg: "23%" }}>
                            <Image src={Img5} width={"100%"} marginTop={"50px"} alt={"Image"} />
                            <Text fontWeight={"600"} fontFamily={"Poppins700"} marginTop={"5px"} fontSize={"20px"}>Crypto Explained:Security Action</Text>
                            <Box marginTop={"15px"}>
                                <Box display={"flex"} fontSize={"20px"} color={"gray.600"} fontFamily={"Poppins400"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text>Category</Text>
                                    <Text>Videos</Text>
                                </Box>
                                <Box display={"flex"} fontSize={"20px"} color={"blue"} fontFamily={"Poppins400"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text>Crypto Trading</Text>
                                    <Text>11</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box cursor={"pointer"} margin={"0 10px"}  width={{ base: "80%", md: "45%", lg: "23%" }}>
                            <Image src={Img6} width={"100%"} marginTop={"50px"} alt={"Image"} />
                            <Text fontWeight={"600"} fontFamily={"Poppins700"} marginTop={"5px"} fontSize={"20px"}>Crypto Explained:Security Action</Text>
                            <Box marginTop={"15px"}>
                                <Box display={"flex"} fontSize={"20px"} color={"gray.600"} fontFamily={"Poppins400"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text>Category</Text>
                                    <Text>Videos</Text>
                                </Box>
                                <Box display={"flex"} fontSize={"20px"} color={"blue"} fontFamily={"Poppins400"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text>Crypto Trading</Text>
                                    <Text>11</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box cursor={"pointer"} margin={"0 10px"}  width={{ base: "80%", md: "45%", lg: "23%" }}>
                            <Image src={Img7} width={"100%"} marginTop={"50px"} alt={"Image"} />
                            <Text fontWeight={"600"} fontFamily={"Poppins700"} marginTop={"5px"} fontSize={"20px"}>Crypto Explained:Security Action</Text>
                            <Box marginTop={"15px"}>
                                <Box display={"flex"} fontSize={"20px"} color={"gray.600"} fontFamily={"Poppins400"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text>Category</Text>
                                    <Text>Videos</Text>
                                </Box>
                                <Box display={"flex"} fontSize={"20px"} color={"blue"} fontFamily={"Poppins400"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Text>Crypto Trading</Text>
                                    <Text>11</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </Sidebar>
        </Box>
    )
}