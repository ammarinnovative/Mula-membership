import { extendTheme, ChakraProvider, Avatar, Center, WrapItem, Checkbox, ButtonGroup, CheckboxGroup, Circle, HStack, Box, Square, Flex, Text, Image, Button } from '@chakra-ui/react'
import Sidebar from "../../Components/Sidebar/Sidebar";
import { SmallAddIcon } from '@chakra-ui/icons'




export const Tiers = () => {
    return (
        <Sidebar>
            <Flex justifyContent={"space-between"} gap="20px" flexDirection={{base:"column",md:"row"}} flexWrap={"wrap"} alignItems={"center"}>
                <Text fontSize={"25px"}  fontWeight={"600"}>Current Tiers Plan</Text>
                <Button leftIcon={<SmallAddIcon boxSize={7} />} border={"1px solid black"}>Cretae New Tiers</Button>
            </Flex>
            <Box marginTop={"20px"} display={"flex"} role={"group"}  flexWrap={"wrap"} justifyContent={"center"} margin={"20px 5px 20px 5px"}>
                <Box backgroundColor={"#1e2598"} margin={"20px 5px 20px 5px"} rounded={"md"} color={"white"} padding={"10px"}  width={{base:"100%",md:"47%",lg:"40%",xl:"32%"}} >
                    <Box display={"flex"} alignItems={"center"} width={"100%"} justifyContent={"space-between"}>
                        <Text>Bronze Membership</Text>
                        <Button border={"1px solid #1e2598"} px={"30px"} color={"#1e2598"}>Edit</Button>
                    </Box>
                    <Flex marginTop={"15"} alignItems={"center"}>
                        <Flex  fontSize={"40px"} fontWeight={"bold"}>$10.00</Flex>
                        <Text marginTop={"18px"} marginLeft={"5px"}>per Month</Text>
                    </Flex>
                    <Box marginTop={"10px"} borderBottom={"1px solid #fff"}>
                    </Box>
                    <Flex color={"white"}  padding={"20px 2px 30px 20px"}  flexDirection={"column"}>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut? Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut? Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut?</li>
                            </ul>
                        </Flex>
                </Box>
                <Box backgroundColor={"#1e2598"} margin={"20px 5px 20px 5px"} marginBottom={"20px"} rounded={"md"} color={"white"} padding={"10px"}  width={{base:"100%",md:"47%",lg:"40%",xl:"32%"}} >
                    <Box display={"flex"} alignItems={"center"} width={"100%"} justifyContent={"space-between"}>
                        <Text>Bronze Membership</Text>
                        <Button border={"1px solid #1e2598"} px={"30px"} color={"#1e2598"}>Edit</Button>
                    </Box>
                    <Flex marginTop={"15"} alignItems={"center"}>
                        <Flex  fontSize={"40px"} fontWeight={"bold"}>$10.00</Flex>
                        <Text marginTop={"18px"} marginLeft={"5px"}>per Month</Text>
                    </Flex>
                    <Box marginTop={"10px"} borderBottom={"1px solid #fff"}>
                    </Box>
                    <Flex color={"white"}  padding={"20px 2px 30px 20px"}  flexDirection={"column"}>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut? Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut? Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut?</li>
                            </ul>
                        </Flex>
                </Box>
                <Box backgroundColor={"#1e2598"} margin={"20px 5px 20px 5px"} marginBottom={"20px"} rounded={"md"} color={"white"} padding={"10px"}  width={{base:"100%",md:"47%",lg:"40%",xl:"32%"}} >
                    <Box display={"flex"} alignItems={"center"} width={"100%"} justifyContent={"space-between"}>
                        <Text>Bronze Membership</Text>
                        <Button border={"1px solid #1e2598"} px={"30px"} color={"#1e2598"}>Edit</Button>
                    </Box>
                    <Flex marginTop={"15"} alignItems={"center"}>
                        <Flex  fontSize={"40px"} fontWeight={"bold"}>$10.00</Flex>
                        <Text marginTop={"18px"} marginLeft={"5px"}>per Month</Text>
                    </Flex>
                    <Box marginTop={"10px"} borderBottom={"1px solid #fff"}>
                    </Box>
                    <Flex color={"white"}  padding={"20px 2px 30px 20px"}  flexDirection={"column"}>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut? Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut? Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut?</li>
                            </ul>
                        </Flex>
                </Box>
                <Box backgroundColor={"#1e2598"} margin={"20px 5px 20px 5px"} marginBottom={"20px"} rounded={"md"} color={"white"} padding={"10px"}  width={{base:"100%",md:"47%",lg:"40%",xl:"32%"}} >
                    <Box display={"flex"} alignItems={"center"} width={"100%"} justifyContent={"space-between"}>
                        <Text>Bronze Membership</Text>
                        <Button border={"1px solid #1e2598"} px={"30px"} color={"#1e2598"}>Edit</Button>
                    </Box>
                    <Flex marginTop={"15"} alignItems={"center"}>
                        <Flex  fontSize={"40px"} fontWeight={"bold"}>$10.00</Flex>
                        <Text marginTop={"18px"} marginLeft={"5px"}>per Month</Text>
                    </Flex>
                    <Box marginTop={"10px"} borderBottom={"1px solid #fff"}>
                    </Box>
                    <Flex color={"white"}  padding={"20px 2px 30px 20px"}  flexDirection={"column"}>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut? Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut? Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aut?</li>
                            </ul>
                        </Flex>
                </Box>

            </Box>
        </Sidebar>
    )
}